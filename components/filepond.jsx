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

export default function Filepond({ fileState }) {
  const [files, setFiles] = fileState;
  const handleUPdataFiles = (fileItems) => {
    setFiles(fileItems.map((fileItem) => fileItem.file));
  };

  return (
    <FilePond
      id="filepond"
      files={files}
      onupdatefiles={handleUPdataFiles}
      allowMultiple={true}
      maxFiles={3}
      // server="/api/filepond"
      // name="files"
      labelIdle='Drag & Drop your files or <span class="filepond--label-action">Browse</span>'
      // acceptedFileTypes={["image/*"]}
    />
  );
}
