import { Fragment, useState } from "react";
import { Dialog, Transition } from "@headlessui/react";
import {} from "@heroicons/react/24/outline";
import Link from "next/link";

import {
  ArrowLongUpIcon,
  DocumentTextIcon,
  MicrophoneIcon,
  PhotoIcon,
  VideoCameraIcon,
  XMarkIcon,
} from "@heroicons/react/24/outline";

const fileTypes = [
  { fileType: "audio", icon: MicrophoneIcon },
  { fileType: "doc", icon: DocumentTextIcon },
  { fileType: "image", icon: PhotoIcon },
  { fileType: "video", icon: VideoCameraIcon },
];

export default function UploadModal({ open, setOpen }) {
  return (
    <Transition.Root show={open} as={Fragment}>
      <Dialog as="div" className="relative z-10" onClose={setOpen}>
        <Transition.Child
          as={Fragment}
          enter="ease-out duration-300"
          enterFrom="opacity-0"
          enterTo="opacity-100"
          leave="ease-in duration-200"
          leaveFrom="opacity-100"
          leaveTo="opacity-0"
        >
          <div className="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity" />
        </Transition.Child>

        <div className="fixed inset-0 z-10 overflow-y-auto">
          <div className="flex min-h-full items-end justify-center p-4 text-center sm:items-center sm:p-0">
            <Transition.Child
              as={Fragment}
              enter="ease-out duration-300"
              enterFrom="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
              enterTo="opacity-100 translate-y-0 sm:scale-100"
              leave="ease-in duration-200"
              leaveFrom="opacity-100 translate-y-0 sm:scale-100"
              leaveTo="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
            >
              <Dialog.Panel className="relative transform overflow-hidden rounded-lg bg-white px-4 pb-4 pt-5 text-left shadow-xl transition-all sm:my-8 sm:w-full sm:max-w-sm sm:p-6">
                <button
                  type="button"
                  onClick={() => setOpen(false)}
                  className="absolute top-3 right-2.5 text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm p-1.5 ml-auto inline-flex items-center dark:hover:bg-gray-800 dark:hover:text-white"
                  data-modal-hide="crypto-modal"
                >
                  <XMarkIcon aria-hidden="true" className="w-5 h-5" />
                  <span className="sr-only">Close modal</span>
                </button>

                <div className="mt-3 text-center sm:mt-5">
                  <Dialog.Title
                    as="h3"
                    className="text-base font-semibold leading-6 text-gray-900"
                  >
                    file type
                  </Dialog.Title>
                  <div className="mt-2">
                    <p className="text-sm text-gray-500">
                      What kind of files would you like to upload?
                    </p>
                  </div>
                </div>

                <div className="mt-5 sm:mt-6 grid gap-y-2 px-8 ">
                  {fileTypes.map(({ fileType, icon }, index) => {
                    const Icon = icon;
                    return (
                      <Link href={"upload/content"} key={index} className="">
                        <button
                          key={index}
                          type="button"
                          className="w-full inline-flex items-center justify-center gap-x-1.5  rounded-md bg-indigo-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                        >
                          <Icon
                            className="-mr-0.5 h-5 w-5"
                            aria-hidden="true"
                          />
                          <p>{fileType}</p>
                        </button>
                      </Link>
                    );
                  })}
                </div>
              </Dialog.Panel>
            </Transition.Child>
          </div>
        </div>
      </Dialog>
    </Transition.Root>
  );
}
