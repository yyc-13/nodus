import prisma from "@/lib/prismaClient";
import type { NextApiRequest, NextApiResponse } from "next";

interface Product {
  title: string;
  urls: string[];
  preview: string[];
  description: string;
  price: number;
  type: string;
}

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  const productId = req.query.id as string;
  const { title, urls, preview, description, price, type } =
    req.body as Product;
  const updatedProduct = await prisma.product.update({
    where: { id: productId },
    data: {
      title,
      urls,
      preview,
      description,
      price,
      type,
    },
  });
  res.status(200).json(updatedProduct);
}
