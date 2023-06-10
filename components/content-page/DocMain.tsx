import UserMedia from "./components/UserMedia";
import { Document, Page, pdfjs } from "react-pdf";
import { ChevronLeftIcon, ChevronRightIcon } from "@heroicons/react/20/solid";
import { useState } from "react";

pdfjs.GlobalWorkerOptions.workerSrc = `//unpkg.com/pdfjs-dist@${pdfjs.version}/build/pdf.worker.min.js`;

export default function VideoMain({ mainContent, basicContent, sampleOrMain }) {
  const [numPages, setNumPages] = useState(null);
  const [pageNumber, setPageNumber] = useState(1);

  function onDocumentLoadSuccess({ numPages }) {
    setNumPages(numPages);
  }

  if (!mainContent || !basicContent) {
    return <div>Loading...</div>;
  }
  const src =
    sampleOrMain == "sample"
      ? basicContent.sample.files[0]
      : mainContent.mainFile.files[0];

  const description =
    sampleOrMain == "sample"
      ? basicContent.sample.description
      : mainContent.mainFile.description;

  return (
    <div className="mx-auto max-w-7xl px-6 lg:px-8 py-6 lg:py-8">
      <div className="mx-auto  grid max-w-2xl grid-cols-1 gap-x-8 gap-y-20 lg:mx-0 lg:max-w-none ">
        <article
          key={basicContent.id}
          className="flex flex-col items-start justify-between"
        >
          <div className="relative w-full">
            <div>
              <div className=" w-full h-1/6 bg-white shadow overflow-auto">
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
                  />
                </Document>
              </div>
              <div className="flex items-center justify-center">
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
            </div>
          </div>
          <div className="max-w-xl">
            <div className="mt-8 flex items-center gap-x-4 text-xs">
              <time dateTime={basicContent.createdAt} className="text-gray-500">
                {basicContent.createdAt}
              </time>

              {basicContent.tags.length > 0 &&
                basicContent.tags.map((tag, index) => (
                  <a
                    key={`tag-${index}`}
                    href="#"
                    className="relative z-10 rounded-full bg-gray-50 px-3 py-1.5 font-medium text-gray-600 hover:bg-gray-100"
                  >
                    {tag}
                  </a>
                ))}
            </div>
            <div className="group relative">
              <h3 className="mt-3 text-lg font-semibold leading-6 text-gray-900 group-hover:text-gray-600">
                <a href="#">
                  <span className="absolute inset-0" />
                  {basicContent.title}
                </a>
              </h3>
              <p className="mt-5 line-clamp-3 text-sm leading-6 text-gray-600">
                {description}
              </p>
            </div>
            {/* user media */}
            <UserMedia user={basicContent.creator} />
          </div>
        </article>
      </div>
    </div>
  );
}
