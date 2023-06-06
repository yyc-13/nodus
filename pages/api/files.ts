// pages/api/upload.js
import formidable from "formidable";
import { NextApiRequest, NextApiResponse } from "next";
import fs from "fs-extra";
import path from "path";
import supabase from "../../lib/supabaseClient";
import { v4 as uuidv4 } from "uuid";
import { getSession } from "next-auth/react";
import { Console } from "console";

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
        .from(`${title}/${fileType}`)
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
        if (!session) {
          res.status(401).send("Unauthorized");
          return;
        }
        const form = new formidable.IncomingForm();

        // chagne file name to uuid
        form.on("fileBegin", (name, file) => {
          const uniqueFileName = uuidv4();
          const fileExtension = path.extname(file.originalFilename);

          file.newFilename = `${uniqueFileName}${fileExtension}`;
        });

        form.parse(req, async (err, fields, files) => {
          const { title, fileType } = fields;

          const fileUrls = await uploadFiles({ files, title, fileType });

          res.status(200).json({ fileUrls: fileUrls });
        });
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
// export default async function handler(
//   req: NextApiRequest,
//   res: NextApiResponse
// ) {
//   const { method } = req;
//   switch (method) {
//     case "GET":
//       res.status(405).send("GET requests are not supported at this endpoint.");
//       break;

//     case "POST":
//       try {
//         const form = new formidable.IncomingForm();
//         console.log(0);
//         form.on("fileBegin", (name, file) => {
//           console.log(1);
//           const uniqueFileName = uuidv4();
//           const fileExtension = path.extname(file.originalFilename);
//           file.newFilename = `${uniqueFileName}${fileExtension}`;
//         });

//         const { fields, files } = await new Promise((resolve, reject) =>
//           form.parse(req, (err, fields, files) => {
//             console.log(2);
//             if (err) {
//               reject(err);
//               return;
//             }
//             resolve({ fields, files });
//           })
//         );

//         for (const file of Object.values(files)) {
//           console.log(3);
//           const readStream = fs.createReadStream(file.filepath);
//           const { error: uploadError } = await supabase.storage
//             .from("images")
//             .upload(file.newFilename, readStream);

//           if (uploadError) {
//             console.error("Failed to upload file:", uploadError);
//             res.status(500).send("Failed to upload file.");
//             return;
//           }
//         }

//         console.log("Files uploaded successfully.");
//         res.status(200).send("Files uploaded successfully.");
//       } catch (err) {
//         console.log(err);
//         res.status(500).json({ error: "Error uploading file" });
//       }
//       break;

//     default:
//       res.setHeader("Allow", ["GET", "POST"]);
//       res.status(405).end(`Method ${method} Not Allowed`);
//   }
// }