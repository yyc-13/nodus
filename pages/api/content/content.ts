import { fetchContentFromDb } from "@/lib/prismaClient";
import { getPublicSupabaseUrl } from "@/lib/utils/SupabaseUrl";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  const { method } = req;
  switch (method) {
    case "GET":
      try {
        const page = parseInt(req.query.page) || 1;
        // Define number of videos per page

        const pageSize = req.query.page == 1 ? 12 : 6;

        // Calculate the starting index
        const startIndex = (page - 1) * pageSize;

        // Fetch videos from the database
        const contents = await fetchContentFromDb(startIndex, pageSize);

        const updatedContents = contents.map(async (content) => {
          const fileUrl = await getPublicSupabaseUrl(
            "card",
            content.card.file,
            content.card.fileType
          );

          content.card.file = fileUrl;

          return content;
        });
        const updatedContentsResolved = await Promise.all(updatedContents);
        console.log("updatedContentsResolved", updatedContentsResolved);
        // Send videos as response
        res.json(updatedContentsResolved);
      } catch (err) {
        console.error(err);
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
