import {
  getUser,
  createCollection,
  getCollectionsByUserId,
} from "@/lib/prismaClient";
import supabase from "@/lib/supabaseClient";

import { NextApiRequest, NextApiResponse } from "next";
import { getSession } from "next-auth/react";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  const { method } = req;

  const userAuth = async () => {
    const session = await getSession({ req });
    if (!session || !session.user || !session.user.email) {
      res.status(401).send("Unauthorized");
      return;
    }
    const user = await getUser(session.user?.email);

    return user?.id;
  };

  switch (method) {
    case "GET":
      try {
        const userId = await userAuth();

        const collections = await getCollectionsByUserId(userId);
        const updatedCollections = collections.map(async (collection) => {
          // collection.coverPhoto = fileUrl;
          return collection;
        });

        const updatedCollectionsResolved = await Promise.all(
          updatedCollections
        );

        res.status(200).json(updatedCollectionsResolved);
      } catch (err) {
        res.status(500).json({ error: err.message });
      }
      break;
    case "POST":
      try {
        const userId = await userAuth();

        const {
          collectionName,
          collectionDescription,
          coverPhoto,
          private: collectionPrivate,
        } = req.body;
        const newCollection = await createCollection(
          collectionName,
          collectionDescription,
          userId,
          coverPhoto,
          collectionPrivate
        );

        res.status(201).json(newCollection);
      } catch (err) {
        res.status(500).json({ error: err.message });
      }
      break;
    default:
      res.setHeader("Allow", ["GET", "POST"]);
      res.status(405).end(`Method ${method} Not Allowed`);
  }
}
