import { doesUserExist } from "@/lib/prismaClient";
import { NextApiResponse, NextApiRequest } from "next";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  const { method } = req;
  switch (method) {
    case "GET":
      try {
        const { userID } = req.query;
        const users = await doesUserExist(userID);
        if (users.length > 0) {
          res.status(200).json({ userExists: true });
        } else {
          res.status(200).json({ userExists: false });
        }
      } catch (err) {
        console.error(err);
        res.status(500).json({ error: "Error querying user ID" });
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
