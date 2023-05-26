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
// export async function createTest(
//   title: string,
//   urls: string[],
//   description: string,
//   price: number,
//   type: string,
//   previewUrls: string[],
//   sellerId: string
// ) {
//   const product = await prisma.product.create({
//     data: {
//       title,
//       urls: { set: urls },
//       preview: { set: previewUrls },
//       description,
//       price,
//       type,
//       seller: { connect: { id: sellerId } },
//     },
//   });
//   return product;
// }

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

// export async function createProduct({
//   title,
//   description,
//   price,
//   type,
//   sellerId,
//   prodFileInfos,
//   previewFileInfos,
// }) {
//   const product = await prisma.product.create({
//     data: {
//       title: title,
//       description: description,
//       price: price,
//       type: type,
//       sellerId: sellerId,
//       prodUrls: {
//         create: prodFileInfos,
//       },
//       previewUrls: { create: previewFileInfos },
//     },
//   });
//   return product;
// }

export async function storeContent({
  title,
  description,
  free,
  sub,
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
      sub: sub,
      price: price,
      fileType: enumFileType,
      files: files,
      tags: tags,
      mainCategory: mainCategory,
      secondCategory: secondCategory,
      freeSample: freeSample,

      creatorId: creatorId,
    },
  });
  console.log("content", content);
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
      fileType: enumFileType,
      description: cardDescription,
      title: title,
      file: cardFile,
      contentId: contentId,
    },
  });
  console.log("card", card);
  return card;
}

export async function storeSample({
  sampleFileType,
  sampleDescription,
  title,
  sampleFile,
  contentId,
}) {
  const enumFileType = fileTypeMapping[sampleFileType.toLowerCase()];
  const sample = await prisma.sample.create({
    data: {
      fileType: enumFileType,
      description: sampleDescription,
      title: title,
      file: sampleFile,
      contentId: contentId,
    },
  });
  console.log("sample", sample);
  return sample;
}
