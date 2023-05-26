import { FilePond, registerPlugin } from "react-filepond";

import "filepond/dist/filepond.min.css";

import FilePondPluginImageExifOrientation from "filepond-plugin-image-exif-orientation";
import FilePondPluginImagePreview from "filepond-plugin-image-preview";
import "filepond-plugin-image-preview/dist/filepond-plugin-image-preview.css";

import FilePondPluginFileValidateType from "filepond-plugin-file-validate-type";
import { useEffect } from "react";

registerPlugin(
  FilePondPluginImageExifOrientation,
  FilePondPluginImagePreview,
  FilePondPluginFileValidateType
);

const fileTypesDic = {
  audio: ["audio/mpeg", "audio/wav"],
  doc: [
    "application/pdf",
    "application/msword",
    "application/vnd.openxmlformats-officedocument.wordprocessingml.document",
    "application/vnd.apple.pages",
    "application/x-iwork-pages-sffpages",
  ],
  video: ["video/mp4", "video/webm"],
  image: ["image/jpeg", "image/png", "image/webp"],
};

export default function FilesInput({
  title,
  register,
  files,
  setFiles,
  fileType,
}) {
  const onUpdateFiles = (fileObjs) => {
    setFiles(fileObjs.map((fileObj) => fileObj.file));
  };

  useEffect(() => {
    setFiles([]);
  }, [fileType, setFiles]);

  let imageFiles = fileType == "image" ? 10 : null;

  return (
    <div className="sm:grid sm:grid-cols-3 sm:items-start sm:gap-4 sm:border-t sm:border-gray-200 sm:pt-5">
      <label
        htmlFor={`${title}-file`}
        className="block text-sm font-medium leading-6 text-gray-900 sm:pt-1.5"
      >
        Upload {title} file
      </label>
      <FilePond
        id={`${title}-file`}
        name={`${title}-file`}
        files={files}
        onupdatefiles={onUpdateFiles}
        allowMultiple={imageFiles ? true : false}
        maxFiles={imageFiles || 1}
        labelIdle='Drag & Drop your files or <span class="filepond--label-action">Browse</span>'
        acceptedFileTypes={fileTypesDic[fileType]}
      />
    </div>
  );
}
