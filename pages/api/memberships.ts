import {
  getUser,
  createCollection,
  getCollectionsByUserId,
  createMembership,
  getMembershipsByUserId,
} from "@/lib/prismaClient";

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
        const { userId } = req.query;

        const memberships = await getMembershipsByUserId(userId);

        res.status(200).json(memberships);
      } catch (err) {
        res.status(500).json({ error: err.message });
      }
      break;
    case "POST":
      try {
        const userId = await userAuth();

        const { about, contents, name, price } = req.body;
        console.log("req.body", req.body);
        const newMembership = await createMembership(
          about,
          contents,
          name,
          price,
          userId
        );

        res.status(201).json(newMembership);
      } catch (err) {
        res.status(500).json({ error: err });
      }
      break;
    default:
      res.setHeader("Allow", ["GET", "POST"]);
      res.status(405).end(`Method ${method} Not Allowed`);
  }
}
