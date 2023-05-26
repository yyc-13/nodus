import formidable from "formidable";
import { NextApiRequest, NextApiResponse } from "next";
import {
  storeContent,
  getUser,
  storeSample,
  storeCard,
} from "@/lib/prismaClient";
import { getSession } from "next-auth/react";
import { FileType } from "@prisma/client";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  const { method } = req;
  switch (method) {
    case "GET":
      res.status(405).send("GET requests are not supported at this endpoint.");
      break;
    case "POST":
      try {
        const data = req.body;
        console.log("in /api/content", data);
        const {
          category2: secondCategory,
          category1: mainCategory,
          title,
          productFileType: fileType,
          productDescription: description,
          free,
          sample: freeSample,
          price,
          subscriber: sub,
          prodFileUrls: files,
          cardFileUrls: cardFiles,
          sampleFileUrls: sampleFiles,
          sampleDescription,
          sampleFileType,
          tags: unprocessedTags,
          cardDescription,
          cardFileType,
        } = data;

        const session = await getSession({ req });
        if (!session || !session.user || !session.user.email) {
          res.status(401).send("Unauthorized");
          return;
        }
        const user = await getUser(session.user?.email);
        const creatorId = user?.id;

        const tags = unprocessedTags.map((tag) => tag.text);
        const cardFile = cardFiles[0];
        const sampleFile = sampleFiles[0];
        const { id: contentId } = await storeContent({
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
        });
        await storeCard({
          title,
          cardDescription,
          cardFileType,
          cardFile,
          contentId,
        });
        if (freeSample) {
          await storeSample({
            title,
            sampleDescription,
            sampleFileType,
            sampleFile,
            contentId,
          });
        }

        res.status(200).json({ message: "Data stored!" });
      } catch (err) {
        console.error(err);
        res.status(500).json({ error: "Error storing data" });
      }
      break;

    default:
      res.setHeader("Allow", ["GET", "POST"]);
      res.status(405).end(`Method ${method} Not Allowed`);
  }
}
