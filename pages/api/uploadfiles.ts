// pages/api/upload.js
import formidable from "formidable";
import { NextApiRequest, NextApiResponse } from "next";
import fs from "fs-extra";
import path from "path";
import supabase from "../../lib/supabaseClient";
import { v4 as uuidv4 } from "uuid";

export const config = {
  api: {
    bodyParser: false,
  },
};

function getFileExtension(mimetype: string): string {
  const extensionMap: { [key: string]: string } = {
    "image/jpeg": ".jpg",
    "image/png": ".png",
    "image/gif": ".gif",
    "application/pdf": ".pdf",
    "text/plain": ".txt",
    "video/mp4": ".mp4",
    "audio/mpeg": ".mp3",
    // Add more mappings as needed
  };

  return extensionMap[mimetype] || ""; // Return an empty string if the mimetype is not found in the map
}

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  if (req.method === "POST") {
    const form = new formidable.IncomingForm();

    form.on("fileBegin", (name, file) => {
      const uniqueFileName = uuidv4();
      file.newFilename = uniqueFileName;
    });

    form.parse(req, async (err, fields, files) => {
      if (err) {
        res.status(500).json({ error: "Error processing the uploaded files." });
        console.error(err);
        return;
      }
      try {
        const targetDirectory = path.resolve(process.cwd(), "public", "temp");
        await fs.ensureDir(targetDirectory);

        const fileUrls = [];

        for (const file of Object.values(files)) {
          const originalFile: any = file;

          const extension = getFileExtension(originalFile.mimetype);
          const fileName = originalFile.newFilename + extension;

          const tempPath = originalFile.filepath;
          const targetPath = path.join(targetDirectory, fileName);

          await fs.move(tempPath, targetPath);

          const { error: uploadError, data: uploadedFile } =
            await supabase.storage
              .from("images")
              .upload(fileName, fs.createReadStream(targetPath));
          if (uploadError) {
            console.error(uploadError);
            res
              .status(500)
              .json({ error: "Error uploading file to supabase." });
            return;
          }

          const { data } = supabase.storage
            .from("images")
            .getPublicUrl(uploadedFile.path);
          fileUrls.push(data.publicUrl);
          await fs.remove(targetPath);
        }
        console.log("fileUrls = " + fileUrls);
        res.status(200).json({ fileUrls });
      } catch (err) {
        console.error(err);
        res.status(500).json({ error: "Error processing the uploaded files." });
      }
    });
  } else {
    res.status(405).json({ error: "Method not allowed." });
  }
}
