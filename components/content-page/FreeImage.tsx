import { ArchiveBoxIcon } from "@heroicons/react/24/outline";
import BreadCrumb from "../utils/BreadCrumb";
import TagsBlock from "./components/TagsBlock";
import ArticleCard from "../cards/TextCard";
import CommentBlock from "./components/CommentBlock";
import RelatedArticles from "../utils/RelatedArticles";
import {
  BookmarkIcon,
  ShareIcon,
  ArrowUpCircleIcon,
  BanknotesIcon,
} from "@heroicons/react/20/solid";
import CommentInput from "./components/CommentInput";

export default function FreeImage() {
  return (
    <div className="mx-auto mt-8 max-w-2xl px-4 sm:px-6 lg:max-w-7xl lg:px-8">
      <div className="lg:grid lg:auto-rows-min lg:grid-cols-12 lg:gap-x-8">
        <div className="lg:col-span-8">
          <BreadCrumb />

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
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Animi in
              quos, eum, quae est distinctio accusantium debitis harum
              dignissimos expedita aut quibusdam exercitationem ipsam corrupti
              tenetur ratione hic minima. Numquam?
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
                    title="share"
                    type="button"
                    className="  relative inline-flex items-center gap-x-1.5 rounded-l-md bg-white px-3 py-2 text-sm font-semibold text-gray-900 ring-1 ring-inset ring-gray-300 hover:bg-gray-50 focus:z-10"
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
          <h2 className="text-2xl font-bold tracking-tight text-gray-900">
            Comments
          </h2>
          <CommentInput />
          <CommentBlock />
        </div>
        <div className="lg:col-span-4">
          <div className="border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700 p-6 flex space-x-4 text-sm text-gray-900 flex-wrap">
            <div className="flex-none py-18">
              <img
                src="https://images.unsplash.com/photo-1502685104226-ee32379fefbe?ixlib=rb-=eyJhcHBfaWQiOjEyMDd9&amp;auto=format&amp;fit=facearea&amp;facepad=8&amp;w=256&amp;h=256&amp;q=80"
                alt=""
                className="h-10 w-10 rounded-full bg-gray-100"
              ></img>
            </div>
            <div className="pb-10 grow">
              <h3 className="font-medium text-gray-900">Emily Selman</h3>
              <p>
                <time dateTime={"2021-07-16"}>July 16,2021</time>
              </p>
            </div>
            <div className="inline-flex flex-col gap-y-2 ">
              <button
                type="button"
                className="rounded bg-indigo-600 px-2 py-1 text-xs font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
              >
                follow
              </button>
              <button
                type="button"
                className="rounded bg-indigo-600 px-2 py-1 text-xs font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
              >
                subscribe
              </button>
            </div>
            <div className="prose prose-sm mt-4 max-w-none text-gray-900">
              <p>
                Lorem ipsum dolor sit amet consectetur, adipisicing elit. Odit
                itaque tenetur doloremque, nostrum necessitatibus perferendis
                minus vel! Nesciunt cupiditate temporibus quae velit? In qui id
                voluptates dolorem nam doloribus unde!
              </p>
            </div>
          </div>
          <TagsBlock />
          <div className="border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700 p-6   overflow-hidden">
            <h2 className="text-2xl font-bold tracking-tight text-gray-900">
              From author
            </h2>
            <div className="flex flex-wrap gap-y-2">
              <ArticleCard />
              <ArticleCard />
            </div>
          </div>
        </div>
      </div>

      <RelatedArticles />
    </div>
  );
}
