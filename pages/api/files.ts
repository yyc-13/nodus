// pages/api/upload.js
import formidable from "formidable";
import { NextApiRequest, NextApiResponse } from "next";
import fs from "fs-extra";
import path from "path";
import supabase from "../../lib/supabaseClient";
import { v4 as uuidv4 } from "uuid";
import { getSession } from "next-auth/react";

// formidable will do the parser
export const config = {
  api: {
    bodyParser: false,
  },
};

const uploadFiles = async ({ files, title, fileType }) => {
  try {
    let uploadedFiles: string[] = [];

    for (const file of Object.values(files)) {
      const readStream = fs.createReadStream(file.filepath);

      const { error: uploadError, data: uploadedFile } = await supabase.storage
        .from(`${title}/${fileType.toLowerCase()}`)
        .upload(file.newFilename, readStream);
      if (uploadError) {
        console.error(uploadError);
        throw uploadError;
      }

      uploadedFiles.push(uploadedFile.path);
    }

    return uploadedFiles;
  } catch (err) {
    console.error(err);
    throw err;
  }
};

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  const { method } = req;
  switch (method) {
    case "GET":
      res.status(405).send("GET requests are not supported at this endpoint.");
      break;

    case "POST":
      try {
        const session = await getSession({ req });
        console.log("session", session);
        console.log("post 0");
        if (!session) {
          res.status(401).send("Unauthorized");
          return;
        }
        const form = new formidable.IncomingForm();
        console.log("post 1");
        // chagne file name to uuid
        form.on("fileBegin", (name, file) => {
          const uniqueFileName = uuidv4();
          const fileExtension = path.extname(file.originalFilename);

          file.newFilename = `${uniqueFileName}${fileExtension}`;
        });
        console.log("post 2");
        form.parse(req, async (err, fields, files) => {
          if (err) {
            res.status(500).json({ error: "Error parsing form data." });
            return;
          }
          const { title, fileType } = fields;
          const fileUrls = await uploadFiles({ files, title, fileType });
          console.log("post 3");
          res.status(200).json({ fileUrls: fileUrls });
        });
        console.log("post 4");
      } catch (err) {
        console.error(err);
        res.status(500).json({ error: "Error uploading file" });
      }

      break;
    default:
      res.setHeader("Allow", ["GET", "POST"]);
      res.status(405).end(`Method ${method} Not Allowed`);
  }
}
