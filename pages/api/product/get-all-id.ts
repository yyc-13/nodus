import prisma from "@/lib/prismaClient";
import type { NextApiRequest, NextApiResponse } from "next";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  const data = await prisma.product.findMany({
    select: {
      id: true,
    },
  });
  const productIDs = data.map((product) => {
    return product.id;
  });
  res.status(200).json(productIDs);
}
