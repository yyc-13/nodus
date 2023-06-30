import { NextApiRequest, NextApiResponse } from "next";
import {
  getUser,
  membershipPurchased,
  contentMemberships,
  isContentFree,
  getMainFile,
  didUserPurchasedContent,
  doesUserHaveCorrespondingMembership,
  isUserTheCreator,
} from "@/lib/prismaClient";
import { getSession } from "next-auth/react";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  const { method } = req;
  switch (method) {
    case "GET":
      try {
        const { contentId } = req.query;

        const session = await getSession({ req });
        if (!session || !session.user || !session.user.email) {
          res.status(401).send("Unauthorized");
          return;
        }

        const user = await getUser(session.user?.email);
        if (!user) {
          res.status(401).send("Unauthorized");
          return;
        }

        // free

        const isFree = await isContentFree({ contentId });
        if (isFree) {
          const mainFile = await getMainFile({ contentId });
          res.status(200).json({ mainFile });
          return;
        }

        // paid access
        const userPurchased = await didUserPurchasedContent(contentId, user.id);
        if (userPurchased.length > 0) {
          const mainFile = await getMainFile({ contentId });
          res.status(200).json({ mainFile });
          return;
        }

        // membership access
        const membershipsOfContent = await contentMemberships({
          contentId,
        });
        const correspondingMembership =
          await doesUserHaveCorrespondingMembership(
            user.id,
            membershipsOfContent
          );
        if (correspondingMembership.length > 0) {
          const mainFile = await getMainFile({ contentId });
          res.status(200).json({ mainFile });
          return;
        }

        // creator themself
        const creatorThemselves = await isUserTheCreator(contentId, user.id);
        if (creatorThemselves) {
          const mainFile = await getMainFile({ contentId });
          res.status(200).json({ mainFile });
          return;
        }

        // If none of the above conditions are met
        res.status(403).send("User does not have access to the main file");
      } catch (err) {
        console.error("error in /api/content/main", err);
        res.status(500).json({ error: "Error storing data" });
      }
      break;
    case "POST":
      res.status(405).send("POST requests are not supported at this endpoint.");
      break;

    default:
      res.setHeader("Allow", ["GET", "POST"]);
      res.status(405).end(`Method ${method} Not Allowed`);
  }
}
