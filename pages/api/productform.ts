import formidable from "formidable";
import { NextApiRequest, NextApiResponse } from "next";
import supabase from "@/lib/supabaseClient";
import { createTest } from "@/lib/prismaClient";

export const config = {
  api: {
    bodyParser: false,
  },
};

interface FormFields {
  type: string;
  title: string;
  urls: string[];
  preview: string[];
  description: string;
  price?: number;
}

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  if (req.method === "POST") {
    const form = new formidable.IncomingForm();

    form.parse(req, async (err, fields, files) => {
      if (err) {
        res.status(500).json({ error: "Error processing the uploaded files." });
        console.error(err);
        return;
      }

      console.log("fields", fields);
      const urls = fields.urls.split(",");
      const { type, title, description, price } = fields;
      console.log({ type, title, urls, description, price });

      const product = await createTest(
        title,
        urls,
        description,
        parseInt(price),
        type
      );

      console.log("product", product);
      res.status(200).json(product);

      // write a query that store my fields in supabase
    });
  } else {
    res.status(405).json({ error: "Method not allowed." });
  }
}
