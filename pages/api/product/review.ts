import type { NextApiRequest, NextApiResponse } from "next";
import prisma from "@/lib/prismaClient";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  const productId = req.query.productId;
  const page = parseInt(req.query.page) || 1;
  const limit = parseInt(req.query.limit) || 5;
  const offset = (page - 1) * limit;

  try {
    const reviews = await prisma.review.findMany({
      where: {
        productId: productId,
      },
      include: {
        author: true,
      },
      skip: offset,
      take: limit,
    });

    res.status(200).json(reviews);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Failed to fetch reviews" });
  }
}
