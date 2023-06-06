import { FileType, PrismaClient } from "@prisma/client";

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
