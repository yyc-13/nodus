import prisma from "@/lib/prismaClient";
import type { NextApiRequest, NextApiResponse } from "next";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  const productId = req.query.id as string;
  await prisma.product.delete({ where: { id: productId } });
  res.status(204).send("");
}
