import {
  createUserSocial,
  findExistUserSocial,
  getUser,
  updateUser,
  updateUserSocial,
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
    case "POST":
      try {
        const socialPlatforms = [
          "twitter",
          "github",
          "TikTok",
          "Facebook",
          "LinkedIn",
          "Discord",
          "Linktree",
          "Youtube",
          "Twitch",
          "Medium",
          "Behance",
          "Pinterest",
          "instagram",
          "soundcloud",
          "spotify",
        ];
        const id = await userAuth();

        const { userName, userID, about, pfp, coverPhoto } = req.body;
        const userInfo = await updateUser(
          userName,
          userID,
          about,
          pfp[0],
          coverPhoto[0],
          id
        );

        const socials = {};
        for (const key in req.body) {
          if (socialPlatforms.includes(key)) {
            socials[key] = req.body[key];
          }
        }

        for (const platform in socials) {
          const handle = socials[platform];

          // Check if a record for this platform already exists
          const existingRecord = await findExistUserSocial(id, platform);

          if (existingRecord) {
            // If a record exists, update it
            await updateUserSocial(existingRecord.id, handle);
          } else {
            // If no record exists, create a new one
            await createUserSocial(id, platform, handle);
          }
        }
        console.log("/api/user complete", userInfo);
        res.status(201).json(userInfo);
      } catch (err) {
        console.error(err);
        res.status(500).json({ error: err.message });
      }
      break;
    default:
      res.setHeader("Allow", ["POST"]);
      res.status(405).end(`Method ${method} Not Allowed`);
  }
}
