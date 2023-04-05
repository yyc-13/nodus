import { PrismaClient } from "@prisma/client";

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

export async function createProduct(
  title: string,
  description: string,
  price: number,
  type: string,
  sellerId: string,
  prodFileInfos: any[],
  previewFileInfos: any[]
) {
  const product = await prisma.product.create({
    data: {
      title: title,
      description: description,
      price: price,
      type: type,
      sellerId: sellerId,
      prodUrls: {
        create: prodFileInfos,
      },
      previewUrls: { create: previewFileInfos },
    },
  });
  return product;
}
