import { getSession } from "next-auth/react";
import { getUser } from "./prismaClient";
import { NextApiRequest } from "next";

export default async function userAuth(req: NextApiRequest) {
  const session = await getSession({ req });

  console.log("session", session);
  if (!session || !session.user || !session.user.email) {
    throw new Error(`Unauthorized`);
  }
  const user = await getUser(session.user?.email);
  return user?.id;
}
