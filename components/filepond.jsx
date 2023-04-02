import { FilePond, registerPlugin } from "react-filepond";

import "filepond/dist/filepond.min.css";

import FilePondPluginImageExifOrientation from "filepond-plugin-image-exif-orientation";
import FilePondPluginImagePreview from "filepond-plugin-image-preview";
import "filepond-plugin-image-preview/dist/filepond-plugin-image-preview.css";
import { useState } from "react";

import FilePondPluginFileValidateType from "filepond-plugin-file-validate-type";

registerPlugin(
  FilePondPluginImageExifOrientation,
  FilePondPluginImagePreview,
  FilePondPluginFileValidateType
);

export default function Filepond({ fileState, id }) {
  const [files, setFiles] = fileState;
  const handleUpdateFiles = (fileObjs) => {
    setFiles(fileObjs.map((fileObj) => fileObj.file));
  };

  return (
    <FilePond
      id={id}
      files={files}
      onupdatefiles={handleUpdateFiles}
      allowMultiple={true}
      maxFiles={3}
      // server="/api/filepond"
      // name="files"
      labelIdle='Drag & Drop your files or <span class="filepond--label-action">Browse</span>'
      // acceptedFileTypes={["image/*"]}
    />
  );
}
