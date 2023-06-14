import { Document, Page, pdfjs } from "react-pdf";
import { ChevronLeftIcon, ChevronRightIcon } from "@heroicons/react/20/solid";
import { XMarkIcon, PhotoIcon } from "@heroicons/react/20/solid";
import {
  LegacyRef,
  MutableRefObject,
  useEffect,
  useRef,
  useState,
} from "react";
import FilePond from "@/lib/filePondSetup";
pdfjs.GlobalWorkerOptions.workerSrc = `//unpkg.com/pdfjs-dist@${pdfjs.version}/build/pdf.worker.min.js`;

const fileTypesDic = {
  audio: ["audio/mpeg", "audio/wav"],
  doc: ["application/pdf"],
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
  const mainFileRef = useRef();
  const cardFileRef = useRef();
  const sampleFileRef = useRef();
  let ref: MutableRefObject<undefined> | LegacyRef<FilePond> | undefined;
  if (title == "prod") {
    ref = mainFileRef;
  }
  if (title == "sample") {
    ref = cardFileRef;
  }
  if (title == "card") {
    ref = sampleFileRef;
  }
  // react-pdf
  const [numPages, setNumPages] = useState(null);
  const [pageNumber, setPageNumber] = useState(1);

  function onDocumentLoadSuccess({ numPages }) {
    setNumPages(numPages);
  }

  const renderFile = (fileType, files) => {
    const src = URL.createObjectURL(files[0]);

    switch (fileType) {
      case "image":
        return (
          <img
            alt="uploaded image"
            className="w-full h-64 object-contain"
            src={src}
          />
        );
      case "video":
        return (
          <video
            className=" h-64 w-full rounded-2xl bg-gray-50 object-contain"
            src={src}
            preload="metadata"
            controls
          ></video>
        );

      case "audio":
        return (
          <audio
            className="w-full p-2 mt-2"
            src={src}
            controls
            preload="metadata"
          />
        );
      case "doc":
        return (
          <div className=" overflow-auto">
            <Document
              file={src}
              onLoadSuccess={onDocumentLoadSuccess}
              options={{
                cMapUrl: `https://unpkg.com/pdfjs-dist@${pdfjs.version}/cmaps/`,
                cMapPacked: true,
              }}
            >
              <Page
                pageNumber={pageNumber}
                renderTextLayer={false}
                renderAnnotationLayer={false}
                height={256}
              />
            </Document>
            <span className="isolate inline-flex rounded-md shadow-sm">
              <button
                type="button"
                className="relative inline-flex items-center rounded-l-md bg-white px-2 py-2 text-gray-400 ring-1 ring-inset ring-gray-300 hover:bg-gray-50 focus:z-10 disabled:bg-gray-200 disabled:cursor-not-allowed"
                disabled={pageNumber <= 1}
                onClick={() =>
                  setPageNumber((prevPageNumber) => prevPageNumber - 1)
                }
              >
                <span className="sr-only">Previous</span>
                <ChevronLeftIcon className="h-5 w-5" aria-hidden="true" />
              </button>
              <button
                type="button"
                className="relative -ml-px inline-flex items-center rounded-r-md bg-white px-2 py-2 text-gray-400 ring-1 ring-inset ring-gray-300 hover:bg-gray-50 focus:z-10 disabled:bg-gray-200 disabled:cursor-not-allowed"
                disabled={numPages && pageNumber >= numPages}
                onClick={() =>
                  setPageNumber((prevPageNumber) => prevPageNumber + 1)
                }
              >
                <span className="sr-only">Next</span>
                <ChevronRightIcon className="h-5 w-5" aria-hidden="true" />
              </button>
            </span>
          </div>
        );
    }
  };

  const triggerFilePondSelect = () => {
    if (ref.current) {
      ref.current.browse();
    }
  };

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
        className="flex text-sm font-medium leading-6 text-gray-900 sm:pt-1.5"
      >
        Upload {title} file
        {files && files.length > 0 && (
          <button
            title="remove cover photo"
            type="button"
            onClick={() => {
              setFiles([]);
            }}
            className="ml-4 w-6 h-6 flex items-center justify-center "
          >
            <XMarkIcon />
          </button>
        )}
      </label>

      <div className="mt-2 flex justify-center rounded-lg border border-dashed border-gray-900/25 px-6 py-10">
        {files && files.length > 0 ? (
          renderFile(fileType, files)
        ) : (
          <div className="text-center">
            <PhotoIcon
              className="mx-auto h-12 w-12 text-gray-300"
              aria-hidden="true"
            />
            <div className="mt-4 flex text-sm leading-6 text-gray-600">
              <label
                htmlFor="file-upload"
                className="relative cursor-pointer rounded-md bg-white font-semibold text-indigo-600 focus-within:outline-none focus-within:ring-2 focus-within:ring-indigo-600 focus-within:ring-offset-2 hover:text-indigo-500"
              >
                <span>Upload a file</span>
                <button
                  id="file-upload"
                  name="file-upload"
                  title="upload cover photo"
                  className="sr-only"
                  onClick={triggerFilePondSelect}
                />
              </label>
              <p className="pl-1">or drag and drop</p>
            </div>
            <p className="text-xs leading-5 text-gray-600">
              MP3, WAV, PDF, MP4, WEBM, JPEG, PNG, WEBP up to 50MB
            </p>
          </div>
        )}
        <FilePond
          id={`${title}-file`}
          name={`${title}-file`}
          files={files}
          onupdatefiles={onUpdateFiles}
          allowMultiple={imageFiles ? true : false}
          maxFiles={1}
          labelIdle='Drag & Drop your files or <span class="filepond--label-action">Browse</span>'
          acceptedFileTypes={fileTypesDic[fileType]}
          ref={ref}
          maxFileSize="50MB"
        />
      </div>
    </div>
  );
}
