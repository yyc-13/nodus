import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

export async function createTest(
  title: string,
  urls: string[],
  description: string,
  price: number,
  type: string
) {
  const product = await prisma.test.create({
    data: {
      title,
      urls: { set: urls },
      description,
      price,
      type,
    },
  });
  return product;
}

export default prisma;
