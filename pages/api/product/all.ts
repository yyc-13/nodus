import type { NextApiRequest, NextApiResponse } from "next";
import prisma from "@/lib/prismaClient";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  const { page, per_page, type } = req.query;

  const pageNumber = parseInt(page as string) || 1;
  const pageSizeNumber = parseInt(per_page as string) || 6;

  const skip = (pageNumber - 1) * pageSizeNumber;
  const take = pageSizeNumber;

  // skip how many and take how many rows
  try {
    const data = await prisma.product.findMany({
      skip,
      take,
      orderBy: {
        createdAt: "desc",
      },
      include: {
        seller: {
          select: {
            id: true,
            image: true,
            name: true,
            userInfo: {
              select: {
                nickname: true,
                introduction: true,
              },
            },
          },
        },
      },
    });

    res.status(200).json(data);
  } catch (error) {
    console.error("Error fetching data:", error);
    res.status(500).json({ error: "Error fetching data" });
  }
}
