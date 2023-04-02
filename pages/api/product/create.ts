import formidable from "formidable";
import prisma from "@/lib/prismaClient";
import { createProduct, getUser } from "@/lib/prismaClient";
import type { NextApiRequest, NextApiResponse } from "next";

export const config = {
  api: {
    bodyParser: false,
  },
};

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
  if (req.method === "POST") {
    const form = new formidable.IncomingForm();

    form.parse(req, async (err, fields, files) => {
      if (err) {
        res.status(500).json({ error: "Error on parsing incoming form" });
        console.error(err);
        return;
      }
      console.log("fields", fields);

      const {
        type,
        title,
        description,
        prodUrls: unprocessedProdUrls,
        price,
        previewUrls: unprocessedPreviewUrls,
        email,
      } = fields;

      const prodUrls = unprocessedProdUrls.split(",");
      const previewUrls = unprocessedPreviewUrls.split(",");
      const user = await getUser(email);
      console.log("user", user);
      const sellerId = user!.id;
      const product = await createProduct(
        title,
        prodUrls,
        previewUrls,
        description,
        parseInt(price),
        type,
        sellerId
      );
      console.log("product", product);
      res.status(200).json(product);
    });
  } else {
    res.status(405).json({ error: "Method not allowed." });
  }
  // const { title, urls, preview, description, price, type,email } =
  //   req.body as Product;
  //   console.log(email)
  //   await prisma.
  // const newProduct = await prisma.product.create({
  //   data: {
  //     title,
  //     urls,
  //     preview,
  //     description,
  //     price,
  //     type,
  //   },
  // });
  // res.status(201).json(newProduct);
}
