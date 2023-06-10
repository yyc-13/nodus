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
  console.log(email);
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
      title: title,
      description: description,
      free: free,
      price: price,
      fileType: enumFileType,
      files: files,
      tags: tags,
      mainCategory: mainCategory,
      secondCategory: secondCategory,
      freeSample: freeSample,
      creator: {
        connect: {
          id: creatorId,
        },
      },
    },
  });
  console.log("store Content result", content);
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
  const card = await prisma.card.create({
    data: {
      title: title,
      description: cardDescription,
      fileType: enumFileType,
      file: cardFile,
      contentId: contentId,
    },
  });
  console.log("store card result", card);
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
      title: title,
      description: sampleDescription,
      fileType: enumFileType,
      files: sampleFileUrls,
      contentId: contentId,
    },
  });
  console.log("sample", sample);
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
  console.log(mainFile?.files[0], mainFile.fileType);

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
