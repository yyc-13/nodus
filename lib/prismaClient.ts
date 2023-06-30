import { FileType, PrismaClient } from "@prisma/client";
import { subMonths } from "date-fns";
import { getMainSupabaseUrl } from "./utils/SupabaseUrl";

let prisma: PrismaClient;

if (process.env.NODE_ENV === "production") {
  prisma = new PrismaClient();
} else {
  if (!(global as any).prisma) {
    (global as any).prisma = new PrismaClient();
  }
  prisma = (global as any).prisma;
}

export default prisma;

const fileTypeMapping = {
  audio: FileType.AUDIO,
  image: FileType.IMAGE,
  doc: FileType.DOC,
  video: FileType.VIDEO,
  text: FileType.TEXT,
};

export async function getUser(email: string) {
  const user = await prisma.user.findUnique({
    where: {
      email: email,
    },
    select: {
      id: true,
    },
  });
  return user;
}

export async function storeContent({
  title,
  description,
  free,
  price,
  fileType,
  files,
  tags,
  mainCategory,
  secondCategory,
  freeSample,
  creatorId,
}) {
  const enumFileType = fileTypeMapping[fileType.toLowerCase()];
  const content = await prisma.content.create({
    data: {
      title,
      description,
      free,
      price,
      fileType: enumFileType,
      files,
      tags,
      mainCategory,
      secondCategory,
      freeSample,
      creator: {
        connect: {
          id: creatorId,
        },
      },
    },
  });

  return content;
}

export async function storeCard({
  cardFileType,
  cardDescription,
  title,
  cardFile,
  contentId,
}) {
  const enumFileType = fileTypeMapping[cardFileType.toLowerCase()];
  console.log("cardFileTYpe", cardFileType);
  if (cardFileType !== "text" && !cardFile) {
    throw new Error(`File required for file type ${cardFileType}`);
  }
  const card = await prisma.card.create({
    data: {
      title,
      description: cardDescription,
      fileType: enumFileType,
      file: cardFile,
      contentId,
    },
  });

  return card;
}

export async function storeSample({
  sampleFileType,
  sampleDescription,
  title,
  sampleFileUrls,
  contentId,
}) {
  const enumFileType = fileTypeMapping[sampleFileType.toLowerCase()];
  const sample = await prisma.sample.create({
    data: {
      title,
      description: sampleDescription,
      fileType: enumFileType,
      files: sampleFileUrls,
      contentId,
    },
  });

  return sample;
}

export async function membershipPurchased(userId) {
  // Subtract the specified number of months from the given date.
  const oneMontAgo = subMonths(new Date(), 1);
  const memberships = await prisma.purchaseMembership.findMany({
    where: {
      buyerId: userId,
      createdAt: {
        gte: oneMontAgo,
      },
    },
    include: {
      membership: true,
    },
  });
  return memberships;
}

export async function contentMemberships({ contentId }) {
  const memberships = await prisma.contentMembership.findMany({
    where: {
      contentId: contentId,
    },
    include: {
      membership: true,
    },
  });

  return memberships;
}

export async function isContentFree({ contentId }) {
  const isFree = await prisma.content.findUnique({
    where: {
      id: contentId,
    },
    select: {
      free: true,
    },
  });
  return isFree;
}

export async function getMainFile({ contentId }) {
  const mainFile = await prisma.content.findUnique({
    where: {
      id: contentId,
    },
    select: {
      files: true,
      description: true,
      free: true,
      price: true,
      memberships: true,
      fileType: true,
    },
  });

  if (!mainFile) {
    throw new Error("Can't find main file");
  }

  const mainFileUrl = await getMainSupabaseUrl(
    mainFile?.files[0],
    mainFile.fileType
  );
  mainFile.files = [mainFileUrl];

  return mainFile;
}

export async function didUserPurchasedContent(contentId, userId) {
  const userPurchasedContent = await prisma.purchaseContent.findMany({
    where: {
      contentId: contentId,
      buyerId: userId,
    },
  });
  return userPurchasedContent;
}

export async function doesUserHaveCorrespondingMembership(
  userId,
  membershipsOfContent
) {
  const oneMontAgo = subMonths(new Date(), 1);
  const memberships = await prisma.purchaseMembership.findMany({
    where: {
      buyerId: userId,
      membershipId: {
        in: membershipsOfContent,
      },
      createdAt: {
        gte: oneMontAgo,
      },
    },
    include: {
      membership: true,
    },
  });
  return memberships;
}

export async function isUserTheCreator(contentId, userId) {
  const content = await prisma.content.findUnique({
    where: {
      id: contentId,
    },
  });

  return content && content.creatorId === userId;
}

export async function fetchContentFromDb(startIndex, pageSize) {
  const contents = await prisma.content.findMany({
    skip: startIndex,
    take: pageSize,
    orderBy: {
      createdAt: "desc", // ordering by creation date, most recent first
    },
    select: {
      id: true,
      title: true,
      free: true,
      price: true,
      fileType: true,
      tags: true,
      mainCategory: true,
      secondCategory: true,
      freeSample: true,
      creatorId: true,
      createdAt: true,
      updatedAt: true,
      sample: true,

      card: true,
      creator: {
        select: {
          id: true,
          userName: true,
          userId: true,
          pfp: true,
          introduction: true,
        },
      },
      memberships: true,
      purchases: true,
      reviews: true,
      questions: true,
    },
  });

  return contents;
}

export async function getCommentsByContentId(contentId) {
  const comments = await prisma.comment.findMany({
    where: {
      contentId: contentId,
    },
    select: {
      creator: true,
      text: true,
      id: true,
    },
  });

  return comments;
}

export async function createComment(contentId, text, userId) {
  const result = await prisma.comment.create({
    data: {
      contentId: contentId,
      text: text,
      creatorId: userId,
    },
  });
  return result;
}

export async function deleteComment(commentId) {
  const result = await prisma.comment.delete({
    where: {
      id: commentId,
    },
  });
  return result;
}

export async function updateComment(commentId, text) {
  const result = await prisma.comment.update({
    where: {
      id: commentId,
    },
    data: {
      text: text,
    },
  });
  return result;
}

export async function createCollection(
  collectionName,
  collectionDescription,
  userId,
  coverPhoto,
  collectionPrivate
) {
  const result = await prisma.collection.create({
    data: {
      name: collectionName,
      description: collectionDescription,
      userId: userId,
      coverPhoto: coverPhoto,
      private: collectionPrivate,
    },
  });
  return result;
}

export async function getCollectionsByUserId(userId) {
  const collections = await prisma.collection.findMany({
    where: {
      userId: userId,
    },
    select: {
      id: true,
      name: true,
      description: true,
      coverPhoto: true,
      createdAt: true,
      updatedAt: true,
      private: true,
      user: {
        select: {
          userId: true,
          userName: true,
          pfp: true,
        },
      },
      contents: true,
    },
  });

  return collections;
}

export async function getContentsByUserId(userId) {
  const user = await prisma.user.findUnique({
    where: {
      userId: userId,
    },

    select: {
      id: true,
      userName: true,
      userId: true,
      introduction: true,
      pfp: true,
      coverPhoto: true,
      UserSocial: {
        select: {
          platform: true,
          handle: true,
        },
      },

      contents: {
        select: {
          id: true,
          title: true,
          free: true,
          price: true,
          fileType: true,
          tags: true,
          mainCategory: true,
          secondCategory: true,
          freeSample: true,
          card: true,
          sample: true,
          memberships: true,
          createdAt: true,
          creator: {
            select: {
              userName: true,
              userId: true,
              introduction: true,
              pfp: true,
              coverPhoto: true,
            },
          },

          creatorId: true,
        },
      },
      purchases: true,
      membershipsPurchased: true,
      membershipsCreated: true,
      collectionLists: true,
    },
  });
  return user;
}

export async function getAllUserId() {
  const userIds = await prisma.user.findMany({
    select: {
      userId: true,
    },
  });
  return userIds;
}

export async function doesUserExist(userID) {
  const users = await prisma.user.findMany({
    where: {
      userId: userID,
    },
  });
  return users;
}

export async function updateUser(
  userName,
  userId,
  introduction,
  pfp,
  coverPhoto,
  id
) {
  const result = await prisma.user.update({
    where: {
      id: id,
    },
    data: {
      userName: userName,
      userId: userId,
      introduction: introduction,
      pfp: pfp,
      coverPhoto: coverPhoto,
    },
  });
  return result;
}

export async function findExistUserSocial(id, platform) {
  const result = await prisma.userSocial.findUnique({
    where: {
      userId_platform: {
        userId: id,
        platform: platform,
      },
    },
  });
  return result;
}

export async function updateUserSocial(recordId, handle) {
  const result = await prisma.userSocial.update({
    where: {
      id: recordId,
    },
    data: {
      handle: handle,
    },
  });
  return result;
}

export async function createUserSocial(id, platform, handle) {
  const result = await prisma.userSocial.create({
    data: {
      user: {
        connect: {
          id: id,
        },
      },
      platform: platform,
      handle: handle,
    },
  });
  return result;
}

export async function getMembershipsByUserId(userId) {
  const result = await prisma.membership.findMany({
    where: {
      creatorId: userId,
    },
  });
  return result;
}

export async function createMembership(about, contents, name, price, userId) {
  const result = await prisma.membership.create({
    data: {
      creator: {
        connect: {
          id: userId,
        },
      },
      description: about,
      name: name,
      price: price,
      content: {
        create: contents.map((content) => ({
          contentId: content.value,
        })),
      },
    },
  });
  return result;
}

export async function getContentByContentId(contentId) {
  const content = await prisma.content.findUnique({
    where: {
      id: contentId,
    },

    select: {
      id: true,
      title: true,
      free: true,
      price: true,
      fileType: true,
      tags: true,
      mainCategory: true,
      secondCategory: true,
      freeSample: true,
      creatorId: true,
      createdAt: true,
      updatedAt: true,
      sample: true,

      card: true,
      creator: {
        select: {
          id: true,
          userName: true,
          userId: true,
          pfp: true,
          introduction: true,
        },
      },
      memberships: true,
      purchases: true,
      reviews: true,
      questions: true,
    },
  });
  return content;
}

export async function getFullContentByContentId({ contentId }) {
  const content = await prisma.content.findUnique({
    where: {
      id: contentId,
    },
  });
  return content;
}

export async function deleteContentByContentId(contentId) {
  const result = await prisma.content.delete({
    where: {
      id: contentId,
    },
  });
  return result;
}

export async function updateContentByContentId({
  contentId,
  contentData,
  sampleData,
  cardData,
}) {
  const result = await prisma.content.update({
    where: {
      id: contentId,
    },
    data: {
      ...contentData,
      sample:
        sampleData == null
          ? { delete: true }
          : { update: { data: sampleData } },
      card:
        cardData == null ? { delete: true } : { update: { data: cardData } },
    },
    include: {
      sample: true,
      card: true,
    },
  });
  return result;
}

export async function getRegisteredWalletByUserId(userId) {
  const result = await prisma.user.findUnique({
    where: {
      id: userId,
    },
    select: {
      walletAddress: true,
    },
  });
  return result;
}

export async function updateWalletAddressByUserID(userId, walletAddress) {
  const result = await prisma.user.update({
    where: { id: userId },
    data: {
      walletAddress: walletAddress,
    },
  });
  return result;
}
