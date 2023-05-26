import { Tab } from "@headlessui/react";
import {
  BookmarkIcon,
  ShareIcon,
  ArrowUpCircleIcon,
  BanknotesIcon,
} from "@heroicons/react/20/solid";
import ImageCard from "../../cards/ImageCard";

const data = [
  { name: "free", href: "#", current: true },
  { name: "premium", href: "#", current: false },
  { name: "card", href: "#", current: false },
];

function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}
export default function Tabs({ tabs = data }) {
  return (
    <>
      <div className="block">
        <Tab.Group>
          <Tab.List className="block border-b border-gray-200">
            <nav className="-mb-px flex space-x-8" aria-label="Tabs">
              {tabs.map((tab) => (
                <Tab
                  key={tab.name}
                  className="ui-selected:border-indigo-500 ui-selected:text-indigo-600
                  ui-not-selected:border-transparent ui-not-selected:text-gray-500 ui-not-selected:hover:border-gray-300 hover:text-gray-700  whitespace-nowrap border-b-2 py-4 px-1 text-sm font-medium focus:outline-none"
                >
                  {tab.name}
                </Tab>
              ))}
            </nav>
          </Tab.List>
          <Tab.Panels>
            <Tab.Panel>
              <img
                src="https://dummyimage.com/600x400/000/333"
                alt="test"
                className="mt-4
            rounded-lg "
              />
              <div className="text-xl font-medium text-gray-900 my-4 lg:my-6">
                Lorem ipsum dolor sit amet consectetur
              </div>
              <div className="lg:grid lg:grid-cols-8">
                <div className="prose prose-sm mt-4 text-gray-500 lg:col-span-5">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Animi
                  in quos, eum, quae est distinctio accusantium debitis harum
                  dignissimos expedita aut quibusdam exercitationem ipsam
                  corrupti tenetur ratione hic minima. Numquam?
                </div>
                <div className="lg:col-span-3 my-2  ">
                  <div className="grid grid-cols-2  justify-start items-center  gap-x-4 gap-y-2 py-2">
                    <button
                      type="button"
                      className="  rounded-md shadow-sm relative inline-flex items-center gap-x-1.5 rounded-l-md bg-white px-3 py-2 text-sm font-semibold text-gray-900 ring-1 ring-inset ring-gray-300 hover:bg-gray-50 focus:z-10"
                    >
                      <BookmarkIcon className="-ml-0.5 h-5 w-5 text-gray-400" />
                      Bookmark
                    </button>
                    <button
                      type="button"
                      className="  rounded-md shadow-sm relative inline-flex items-center gap-x-1.5 rounded-l-md bg-white px-3 py-2 text-sm font-semibold text-gray-900 ring-1 ring-inset ring-gray-300 hover:bg-gray-50 focus:z-10"
                    >
                      <ShareIcon className="-ml-0.5 h-5 w-5 text-gray-400" />
                      Share
                    </button>
                    <span className="    isolate inline-flex rounded-md shadow-sm">
                      <button
                        type="button"
                        className="  relative inline-flex items-center gap-x-1.5 rounded-l-md bg-white px-3 py-2 text-sm font-semibold text-gray-900 ring-1 ring-inset ring-gray-300 hover:bg-gray-50 focus:z-10"
                        title="upvote"
                      >
                        <ArrowUpCircleIcon
                          className="-ml-0.5 h-5 w-5 text-gray-400"
                          aria-hidden="true"
                        />
                      </button>
                      <button
                        type="button"
                        className="grow relative  inline-flex items-center rounded-r-md bg-white px-3 py-2 text-sm font-semibold text-gray-900 ring-1 ring-inset ring-gray-300 hover:bg-gray-50 focus:z-10"
                      >
                        12k
                      </button>
                    </span>
                    <button
                      type="button"
                      className=" rounded-md shadow-sm relative inline-flex items-center gap-x-1.5 rounded-l-md bg-white px-3 py-2 text-sm font-semibold text-gray-900 ring-1 ring-inset ring-gray-300 hover:bg-gray-50 focus:z-10"
                    >
                      <BanknotesIcon className="-ml-0.5 h-5 w-5 text-gray-400" />
                      Tip
                    </button>
                  </div>
                </div>
              </div>
            </Tab.Panel>
            <Tab.Panel>
              <img
                src="https://dummyimage.com/600x400/000/333"
                alt="test"
                className="mt-4
            rounded-lg "
              />
              <div className="text-xl font-medium text-gray-900 my-4 lg:my-6">
                Lorem ipsum dolor sit amet consectetur
              </div>
              <div className="lg:grid lg:grid-cols-8">
                <div className="prose prose-sm mt-4 text-gray-500 lg:col-span-5">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Animi
                  in quos, eum, quae est distinctio accusantium debitis harum
                  dignissimos expedita aut quibusdam exercitationem ipsam
                  corrupti tenetur ratione hic minima. Numquam?
                </div>
                <div className="lg:col-span-3   ">
                  <div className="flex flex-wrap justify-start  gap-x-4 gap-y-2">
                    <button
                      type="button"
                      className=" col-span-6 rounded-md shadow-sm relative inline-flex items-center gap-x-1.5 rounded-l-md bg-white px-3 py-2 text-sm font-semibold text-gray-900 ring-1 ring-inset ring-gray-300 hover:bg-gray-50 focus:z-10"
                    >
                      <BookmarkIcon className="-ml-0.5 h-5 w-5 text-gray-400" />
                      Bookmark
                    </button>
                    <button
                      type="button"
                      className=" col-span-6 rounded-md shadow-sm relative inline-flex items-center gap-x-1.5 rounded-l-md bg-white px-3 py-2 text-sm font-semibold text-gray-900 ring-1 ring-inset ring-gray-300 hover:bg-gray-50 focus:z-10"
                    >
                      <ShareIcon className="-ml-0.5 h-5 w-5 text-gray-400" />
                      Share
                    </button>
                    <span className=" col-span-4   isolate inline-flex rounded-md shadow-sm">
                      <button
                        type="button"
                        className="  relative inline-flex items-center gap-x-1.5 rounded-l-md bg-white px-3 py-2 text-sm font-semibold text-gray-900 ring-1 ring-inset ring-gray-300 hover:bg-gray-50 focus:z-10"
                        title="upvote"
                      >
                        <ArrowUpCircleIcon
                          className="-ml-0.5 h-5 w-5 text-gray-400"
                          aria-hidden="true"
                        />
                      </button>
                      <button
                        type="button"
                        className="relative -ml-px inline-flex items-center rounded-r-md bg-white px-3 py-2 text-sm font-semibold text-gray-900 ring-1 ring-inset ring-gray-300 hover:bg-gray-50 focus:z-10"
                      >
                        12k
                      </button>
                    </span>

                    <button
                      type="button"
                      className="col-span-4 rounded-md shadow-sm relative inline-flex items-center gap-x-1.5 rounded-l-md bg-white px-3 py-2 text-sm font-semibold text-gray-900 ring-1 ring-inset ring-gray-300 hover:bg-gray-50 focus:z-10"
                    >
                      <BanknotesIcon className="-ml-0.5 h-5 w-5 text-gray-400" />
                      Tip
                    </button>
                  </div>
                </div>
              </div>
            </Tab.Panel>
            <Tab.Panel>
              <ImageCard />
            </Tab.Panel>
          </Tab.Panels>
        </Tab.Group>
      </div>
    </>
  );
}
