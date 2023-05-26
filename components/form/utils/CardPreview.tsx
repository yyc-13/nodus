import { Fragment, useState } from "react";
import { Dialog, Transition } from "@headlessui/react";
import { CheckIcon } from "@heroicons/react/24/outline";
import TextCard from "../../cards/TextCard";
import ImageCard from "@/components/cards/ImageCard";
import VideoCard from "@/components/cards/VideoCard";
import AudioCard from "@/components/cards/AudioCard";
import toast, { Toaster } from "react-hot-toast";
import _ from "lodash";

export default function CardPreview({ cardData }) {
  const [open, setOpen] = useState(false);
  cardData.preview = open;
  const handleClick = (e) => {
    let missingData = [];
    if (cardData.tags.length == 0) {
      missingData.push("tags");
    }
    if (cardData.title == "") {
      missingData.push("title");
    }
    if (cardData.description == "") {
      missingData.push("description");
    }
    if (cardData.category.length == 0) {
      missingData.push("category");
    }
    if (cardData.file == undefined) {
      missingData.push("card's file");
    }
    if (cardData.fileType == "") {
      missingData.push("card's file type");
    }
    if (_.isEmpty(cardData.user)) {
      missingData.push("user");
    }

    if (missingData.length > 0) {
      toast(`please fill in ${missingData} first `, {
        duration: 3000,
        position: "top-center",

        // Styling
        style: {},
        className: "",

        // Custom Icon
        icon: "🔨",

        // Change colors of success/error/loading icon
        iconTheme: {
          primary: "#000",
          secondary: "#fff",
        },

        // Aria
        ariaProps: {
          role: "status",
          "aria-live": "polite",
        },
      });
      return;
    }

    if (missingData.length == 0) {
      setOpen(true);
    }

    return;
  };
  return (
    <>
      <div className=" sm:grid sm:grid-cols-3 sm:items-start sm:gap-4 sm:border-gray-200 sm:pt-5">
        <h2 className="block text-sm font-medium leading-6 text-gray-900 sm:pt-1.5">
          preview
        </h2>
        <button
          title="Add a category"
          type="button"
          onClick={handleClick}
          className="rounded-full bg-indigo-600 p-1.5 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
        >
          Open
        </button>
      </div>
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
                <Dialog.Panel className="relative transform overflow-hidden rounded-lg bg-white px-4 pb-4 pt-5 text-left shadow-xl transition-all sm:my-8 sm:w-full sm:max-w-sm md:max-w-3xl lg:max-w-5xl sm:p-6">
                  <div>
                    <div className="my-10 mx-auto flex flex-col items-center max-w-sm gap-y-16">
                      {(() => {
                        switch (cardData.fileType) {
                          case "doc":
                            return <TextCard cardData={cardData} />;
                          case "image":
                            return <ImageCard cardData={cardData} />;
                          case "audio":
                            return <AudioCard cardData={cardData} />;
                          case "video":
                            return <VideoCard cardData={cardData} />;
                          default:
                            return <p>Please fill in the content first.</p>;
                        }
                      })()}
                    </div>
                  </div>
                  <div className="mt-5 sm:mt-6">
                    <button
                      type="button"
                      className="inline-flex w-full justify-center rounded-md bg-indigo-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                      onClick={() => setOpen(false)}
                    >
                      Go back to dashboard
                    </button>
                  </div>
                </Dialog.Panel>
              </Transition.Child>
            </div>
          </div>
        </Dialog>
      </Transition.Root>
    </>
  );
}
