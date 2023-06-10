import prisma, {
  createComment,
  deleteComment,
  getCommentsByContentId,
  getUser,
  updateComment,
} from "@/lib/prismaClient";
import { NextApiRequest, NextApiResponse } from "next";
import { getSession } from "next-auth/react";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  const { method } = req;
  const { contentId } = req.query;

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
        console.log("in comment GET");
        const comments = await getCommentsByContentId(contentId);
        res.status(200).json(comments);
      } catch (err) {
        res.status(500).json({ error: err.message });
      }
      break;
    case "POST":
      try {
        const { text } = req.body;
        const userId = await userAuth();
        const newComment = await createComment(contentId, text, userId);
        res.status(201).json(newComment);
      } catch (err) {
        res.status(500).json({ error: err.message });
      }
      break;
    case "DELETE":
      try {
        const { commentId } = req.query;
        const userId = await userAuth();
        const comment = await prisma.comment.findUnique({
          where: { id: commentId },
        });

        // If the comment doesn't exist, return a 404
        if (!comment) {
          res.status(404).json({ error: "Comment not found" });
          return;
        }

        // Check if the user is the creator of the comment
        if (comment.creatorId !== userId) {
          res
            .status(403)
            .json({ error: "User not authorized to delete this comment" });
          return;
        }
        await deleteComment(commentId);
        res.status(204).end();
      } catch (err) {
        res.status(500).json({ error: err.message });
      }
      break;
    case "PUT":
      try {
        const { commentId } = req.query;
        const { text } = req.body;
        const comment = await prisma.comment.findUnique({
          where: { id: commentId },
        });

        // If the comment doesn't exist, return a 404
        if (!comment) {
          res.status(404).json({ error: "Comment not found" });
          return;
        }

        // Check if the user is the creator of the comment
        if (comment.creatorId !== userId) {
          res
            .status(403)
            .json({ error: "User not authorized to delete this comment" });
          return;
        }
        const updatedComment = await updateComment(commentId, text);
        res.status(200).json(updatedComment);
      } catch (err) {
        res.status(500).json({ error: err.message });
      }
      break;

    default:
      res.setHeader("Allow", ["GET", "POST", "PUT", "DELETE"]);
      res.status(405).end(`Method ${method} Not Allowed`);
  }
}
