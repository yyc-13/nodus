import { ArchiveBoxIcon } from "@heroicons/react/24/outline";
import BreadCrumb from "../utils/BreadCrumb";
import TagsBlock from "./components/TagsBlock";
import ArticleCard from "../cards/TextCard";
import CommentBlock from "./components/CommentBlock";
import RelatedArticles from "../utils/RelatedArticles";
import ContentTabs from "./components/ContentTabs";

import Review from "./components/Review";
import FAQ from "./components/FAQ";

export default function PaidImage() {
  return (
    <div className="mx-auto   max-w-2xl px-4 sm:px-6 lg:max-w-7xl lg:px-8">
      <div className="lg:grid lg:auto-rows-min lg:grid-cols-12 lg:gap-x-8">
        <div className="lg:col-span-8 ">
          <BreadCrumb />

          <ContentTabs />

          <FAQ />

          <CommentBlock />
          <Review />
        </div>
        <div className="lg:col-span-4 flex flex-col gap-y-4">
          <div className="border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700 p-6 flex space-x-4 text-sm text-gray-900 flex-wrap">
            <div className="flex-none py-18">
              <img
                src="https://images.unsplash.com/photo-1502685104226-ee32379fefbe?ixlib=rb-=eyJhcHBfaWQiOjEyMDd9&amp;auto=format&amp;fit=facearea&amp;facepad=8&amp;w=256&amp;h=256&amp;q=80"
                alt=""
                className="h-10 w-10 rounded-full bg-gray-100"
              ></img>
            </div>
            <div className="pb-4 grow">
              <h3 className="font-medium text-gray-900">Emily Selman</h3>
              <p>
                <time dateTime={"2021-07-16"}>July 16,2021</time>
              </p>
            </div>
            <div className="inline-flex flex-row gap-x-2 items-center ">
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
            <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
              author name
            </h2>
            <div className="mt-4 space-y-10 lg:mt-8 lg:space-y-20">
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
