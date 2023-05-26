import BreadCrumb from "../utils/BreadCrumb";
import BookmarkModal from "../utils/BookmarkModal";
import { createMultilineEllipsisStyle } from "../../lib/MultilineEllipsis";
import UserMedia from "./components/UserMedia";
import { useState } from "react";
import { EllipsisHorizontalIcon } from "@heroicons/react/24/solid";
import CardTags from "./components/CardTags";
import TitleAndBookmark from "./components/TitleAndBookmark";

const data = {
  title: "Title placeholder",
  description:
    "description placeholder cal order,Here are the biggest enterprise technology acquisitions of 2021 so far, in reverse chronological order,Here are the biggest enterprise technology acquisitions of 2021 so far, in reverse chronological order,Here are the biggest enterprise technology acquisitions of 2021 so far, in reverse chronological order,Here are the biggest enterprise technology acquisitions of 2021 so far, in reverse chronological order,Here are the biggest enterprise technology acquisitions of 2021 so far, in reverse chronological ordecal order,Here are the biggest enterprise technology acquisitions of 2021 so far, in reverse chronological order,Here are the biggest enterprise technology acquisitions of 2021 so far, in reverse chronological order,Here are the biggest enterprise technology acquisitions of 2021 so far, in reverse chronological order,Here are the biggest enterprise technology acquisitions of 2021 so far, in reverse chronological order,Here are the biggest enterprise technology acquisitions of 2021 so far, in reverse chronological ordecal order,Here are the biggest enterprise technology acquisitions of 2021 so far, in reverse chronological order,Here are the biggest enterprise technology acquisitions of 2021 so far, in reverse chronological order,Here are the biggest enterprise technology acquisitions of 2021 so far, in reverse chronological order,Here are the biggest enterprise technology acquisitions of 2021 so far, in reverse chronological order,Here are the biggest enterprise technology acquisitions of 2021 so far, in reverse chronological orde",
  file: ["./public/temp/image.png"],
  fileType: "audio",
  tags: [
    { id: "valorant", text: "valorant" },
    { id: "dog", text: "dog" },
    { id: "dog", text: "dog" },
    { id: "dog", text: "dog" },
  ],
  category: ["main category", "category"],
  user: {
    name: "Roel Aufderehar",
    date: "Mar 16, 2020",

    donate: 0,
    view: 0,
  },
  preview: false,
};

function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}
export default function TextCard({ cardData = data }) {
  return (
    <div
      className={classNames(
        cardData.preview
          ? "sm:min-w-[288px] sm:min-h-[450px] lg:min-w-[895px] lg:min-h-[256px]"
          : "",
        "relative isolate flex flex-col gap-8  lg:flex-row"
      )}
    >
      <div className="grow flex flex-col">
        <div className=" flex justify-between">
          <CardTags tags={cardData.tags} />
        </div>

        <BreadCrumb categories={cardData.category} />
        <div className="group relative grow">
          <TitleAndBookmark title={cardData.title} />

          <p
            className="mt-5 text-sm leading-6 text-gray-600 dark:text-gray-400"
            style={createMultilineEllipsisStyle(11)}
          >
            {cardData.description && cardData.description}
          </p>
        </div>
        <UserMedia user={cardData.user} />
      </div>
    </div>
  );
}
