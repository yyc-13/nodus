import { FilePond, registerPlugin } from "react-filepond";

import "filepond/dist/filepond.min.css";

import FilePondPluginImageExifOrientation from "filepond-plugin-image-exif-orientation";
import FilePondPluginImagePreview from "filepond-plugin-image-preview";
import "filepond-plugin-image-preview/dist/filepond-plugin-image-preview.css";

import FilePondPluginFileValidateType from "filepond-plugin-file-validate-type";

registerPlugin(
  FilePondPluginImageExifOrientation,
  FilePondPluginImagePreview,
  FilePondPluginFileValidateType
);

export default function Filepond({ fileState, id, type }) {
  const [files, setFiles] = fileState;

  const handleUpdateFiles = (fileObjs) => {
    setFiles(fileObjs.map((fileObj) => fileObj.file));
  };

  return (
    <div>
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
      {files.map((file, index) => {
        return (
          <div
            id={"file-info-" + index}
            key={"file-info-" + index}
            className="my-3"
          >
            <div className="text-md font-semibold">{file.name}</div>
            <label
              htmlFor={`${type}-file-name-` + index}
              className="block text-sm font-medium leading-6 text-gray-900"
            >
              File name
            </label>
            <div className="my-2 ">
              <input
                type="text"
                name={`${type}-file-name-` + index}
                id={`${type}-file-name-` + index}
                className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                placeholder="Enter a name for this file.(no need for file extension)"
                required
              />
            </div>

            <label
              htmlFor={`${type}-file-description-` + index}
              className="block text-sm font-medium leading-6 text-gray-900"
            >
              Description
            </label>
            <div className="mt-2">
              <input
                type="text"
                name={`${type}-file-description-` + index}
                id={`${type}-file-description-` + index}
                className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                placeholder="Enter a description for this file. This will be displayed to customers when they view the product."
              />
            </div>
          </div>
        );
      })}
    </div>
  );
}
