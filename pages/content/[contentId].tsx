import { useRouter } from "next/router";
import { GetStaticProps, GetStaticPaths } from "next";
import prisma, { getContentByContentId } from "@/lib/prismaClient";
import useSWR from "swr";

import {
  ArchiveBoxIcon,
  ArrowUpCircleIcon,
  BanknotesIcon,
  BookmarkIcon,
  ShareIcon,
} from "@heroicons/react/24/outline";
import BreadCrumb from "@/components/utils/BreadCrumb";
import TagsBlock from "@/components/content-page/components/TagsBlock";
import ArticleCard from "@/components/cards/TextCard";
import CommentBlock from "@/components/content-page/components/comment/CommentBlock";
import RelatedArticles from "@/components/utils/RelatedArticles";
import ContentTabs from "@/components/content-page/components/ContentTabs";

import Review from "@/components/content-page/components/Review";

import dateFormatter from "@/lib/dateFormatter";
import ContentRecommands from "@/components/ContentRecommands";

export const getStaticPaths: GetStaticPaths = async () => {
  // Fetch all content IDs

  const data = await prisma.content.findMany({
    select: {
      id: true,
    },
  });
  const contentIDs = data.map((content) => {
    return content.id;
  });

  // Map content IDs to paths

  const paths = contentIDs.map((id) => ({
    params: { contentId: id },
  }));

  return { paths, fallback: false };
};

export const getStaticProps: GetStaticProps = async ({ params }) => {
  // Fetch content data by ID

  let content = await getContentByContentId(params.contentId);
  // If the content doesn't exist, return notFound: true to indicate a 404 status

  if (!content) {
    return { notFound: true };
  }

  content = JSON.parse(JSON.stringify(content));
  return {
    props: {
      content,
    },
    // ISR revalidate every 5 minutes
    revalidate: 60 * 5,
  };
};

export default function ContentPage({ content }) {
  console.log("content in /content/[id].tsx", content);
  return (
    <div className="mx-auto   max-w-2xl px-4 sm:px-6 lg:max-w-7xl lg:px-8">
      <div className="lg:grid lg:auto-rows-min lg:grid-cols-12 lg:gap-x-8">
        <div className="lg:col-span-8 ">
          <div className="flex pt-6 flex-col md:flex-row md:justify-between md:pt-10  space-y-2 ">
            <BreadCrumb categories={content.mainCategory} />
            <BreadCrumb categories={content.secondCategory} />
          </div>

          <ContentTabs basicContent={content} />
          {/* buttons */}
          <div className="flex flex-wrap justify-start  gap-x-4 gap-y-2 mx-auto max-w-7xl px-6 lg:px-8 ">
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

          {/* <FAQ /> */}

          <CommentBlock contentId={content.id} />
          {/* {!content.free && <Review />} */}
        </div>
        <div className="lg:col-span-4 flex flex-col gap-y-4 pt-6 md:pt-10">
          {/* related contents */}
          <div className="border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700 p-6   overflow-hidden">
            <div className="mt-4 space-y-10 lg:mt-8 lg:space-y-20"></div>
          </div>
        </div>
      </div>

      {/* <RelatedArticles /> */}
      <ContentRecommands />
    </div>
  );
}
