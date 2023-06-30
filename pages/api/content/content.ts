import {
  deleteContentByContentId,
  fetchContentFromDb,
  updateContentByContentId,
} from "@/lib/prismaClient";

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
import { getServerSession } from "next-auth";
import { authOptions } from "../auth/[...nextauth]";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  const { method } = req;
  switch (method) {
    case "GET":
      try {
        const page = parseInt(req.query.page) || 1;

        const pageSize = req.query.page == 1 ? 12 : 6;

        // Calculate the starting index
        const startIndex = (page - 1) * pageSize;

        const contents = await fetchContentFromDb(startIndex, pageSize);

        // Send videos as response
        res.json(contents);
      } catch (err) {
        console.error(err);
        res.status(500).json({ error: "Error storing data" });
      }
      break;
    case "POST":
      try {
        const data = req.body;
        const session = await getSession({ req });

        if (!session || !session.user || !session.user.email) {
          res.status(401).send("Unauthorized");
          return;
        }
        const user = await getUser(session.user?.email);
        const creatorId = user?.id;

        const contentData = {
          title: data.title,
          description: data.productDescription,
          free: data.free,
          price: data.price,
          fileType: data.productFileType,
          files: data.prodFileUrls,
          tags: data.tags.map((tag) => tag.text),
          mainCategory: data.category1,
          secondCategory: data.category2,
          freeSample: data.sample,
          creatorId: creatorId,
        };

        const { id: contentId } = await storeContent(contentData);
        const cardData = {
          title: data.title,
          cardDescription: data.cardDescription,
          cardFile: data.cardFileUrls[0],
          contentId: contentId,
          cardFileType: data.cardFileType,
        };
        await storeCard(cardData);

        if (data.freeSample) {
          const sampleData = {
            title: data.title,
            sampleDescription: data.sampleDescription,
            sampleFileType: data.sampleFileType,
            sampleFileUrls: data.sampleFileURls,
            contentId: contentId,
          };
          await storeSample(sampleData);
        }

        // TBD:store membership

        res.status(200).json({ id: contentId });
      } catch (err) {
        console.error(err);
        res.status(500).json({ error: "Error storing data" });
      }
      break;
    case "DELETE":
      try {
        const { contentId } = req.body;
        if (!contentId) {
          return res.status(400).send({ error: "contentId is required" });
        }

        const result = await deleteContentByContentId(contentId);
        res
          .status(200)
          .json({ message: "Content successfully deleted", result });
      } catch (err) {
        console.error(err);
        res.status(500).json({ error: "Error deleting content" });
      }
      break;
    case "PUT":
      try {
        const result = await updateContentByContentId(
          contentId,
          contentData,
          sampleData,
          cardData
        );
        res
          .status(200)
          .json({ message: "Content update successfully.", result });
      } catch (err) {
        console.error(err);
        res.status(500).json({ error: "Error updating content" });
      }
      break;
    default:
      res.setHeader("Allow", ["GET", "POST", "DELETE", "PUT"]);
      res.status(405).end(`Method ${method} Not Allowed`);
  }
}
