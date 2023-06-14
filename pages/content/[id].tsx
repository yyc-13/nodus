import { useRouter } from "next/router";
import { GetStaticProps, GetStaticPaths } from "next";
import prisma from "@/lib/prismaClient";
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
import { getPublicSupabaseUrl } from "@/lib/utils/SupabaseUrl";

import Review from "@/components/content-page/components/Review";

import dateFormatter from "@/lib/dateFormatter";
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
    params: { id: id },
  }));

  return { paths, fallback: false };
};

export const getStaticProps: GetStaticProps = async ({ params }) => {
  // Fetch content data by ID

  const content = await prisma.content
    .findUnique({
      where: {
        id: params.id,
      },

      select: {
        id: true,
        title: true,
        free: true,
        price: true,
        fileType: true,
        tags: true,
        mainCategory: true,
        secondCategory: true,
        freeSample: true,
        creatorId: true,
        createdAt: true,
        updatedAt: true,
        sample: true,

        card: true,
        creator: {
          select: {
            id: true,
            userName: true,
            userId: true,
            pfp: true,
            introduction: true,
          },
        },
        memberships: true,
        purchases: true,
        reviews: true,
        questions: true,
      },
    })
    .catch((err) => console.log(err));
  // If the content doesn't exist, return notFound: true to indicate a 404 status

  if (!content) {
    return { notFound: true };
  }

  content.createdAt = dateFormatter.format(new Date(content.createdAt));
  content.updatedAt = dateFormatter.format(new Date(content.updatedAt));
  if (content.card.fileType !== "TEXT") {
    content.card.file = await getPublicSupabaseUrl(
      "card",
      content.card.file,
      content.card.fileType
    );
  }

  if (content.freeSample && content.sample.files.length > 0) {
    const filePublicUrl = await getPublicSupabaseUrl(
      "sample",
      content.sample.files[0],
      content.sample.fileType
    );
    content.sample.files = [filePublicUrl];
  }

  return {
    props: {
      content,
    },
    // ISR revalidate every 5 minutes
    revalidate: 60 * 5,
  };
};

export default function ContentPage({ content }) {
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
          {/* <TagsBlock /> */}
          <div className="border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700 p-6   overflow-hidden">
            <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
              {content.creator.name}
            </h2>
            <div className="mt-4 space-y-10 lg:mt-8 lg:space-y-20">
              <ArticleCard />
              <ArticleCard />
            </div>
          </div>
        </div>
      </div>

      {/* <RelatedArticles /> */}
    </div>
  );
}
