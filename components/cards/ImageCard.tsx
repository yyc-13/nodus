import BreadCrumb from "../utils/BreadCrumb";
import BookmarkModal from "../utils/BookmarkModal";
import UserMedia from "./components/UserMedia";
import { useState } from "react";
import { EllipsisHorizontalIcon } from "@heroicons/react/24/solid";
import { createMultilineEllipsisStyle } from "../../lib/MultilineEllipsis";
import CardTags from "./components/CardTags";
import TitleAndBookmark from "./components/TitleAndBookmark";

const data = {
  title: "Title placeholder",
  description:
    "description placeholder cal order,Here are the biggest enterprise technology acquisitions of 2021 so far, in reverse chronological order,Here are the biggest enterprise technology acquisitions of 2021 so far, in reverse chronological order,Here are the biggest enterprise technology acquisitions of 2021 so far, in reverse chronological order,Here are the biggest enterprise technology acquisitions of 2021 so far, in reverse chronological order,Here are the biggest enterprise technology acquisitions of 2021 so far, in reverse chronological ordecal order,Here are the biggest enterprise technology acquisitions of 2021 so far, in reverse chronological order,Here are the biggest enterprise technology acquisitions of 2021 so far, in reverse chronological order,Here are the biggest enterprise technology acquisitions of 2021 so far, in reverse chronological order,Here are the biggest enterprise technology acquisitions of 2021 so far, in reverse chronological order,Here are the biggest enterprise technology acquisitions of 2021 so far, in reverse chronological ordecal order,Here are the biggest enterprise technology acquisitions of 2021 so far, in reverse chronological order,Here are the biggest enterprise technology acquisitions of 2021 so far, in reverse chronological order,Here are the biggest enterprise technology acquisitions of 2021 so far, in reverse chronological order,Here are the biggest enterprise technology acquisitions of 2021 so far, in reverse chronological order,Here are the biggest enterprise technology acquisitions of 2021 so far, in reverse chronological orde",
  file: "./temp/image.png",
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
export default function ImageCard({ cardData = data }) {
  const src =
    cardData.title == "Title placeholder"
      ? cardData.file[0]
      : URL.createObjectURL(cardData.file[0]);
  return (
    <div
      className={classNames(
        cardData.preview
          ? "sm:min-w-[288px] sm:min-h-[450px] lg:min-w-[895px] lg:min-h-[256px]"
          : "",
        "relative isolate flex flex-col gap-8  lg:flex-row"
      )}
    >
      <div className="relative aspect-[16/9] sm:aspect-[2/1] lg:aspect-square lg:w-64 lg:shrink-0">
        <img
          className="absolute inset-0 h-full w-full rounded-2xl bg-gray-50 object-cover"
          src={src}
          alt=""
        />
        <div className="absolute inset-0 rounded-2xl ring-1 ring-inset ring-gray-900/10"></div>
      </div>

      <div className="grow flex flex-col">
        <CardTags overlap={true} tags={cardData.tags} />
        <BreadCrumb categories={cardData.category} />
        <TitleAndBookmark title={cardData.title} />
        <p
          className="mt-5 text-sm leading-6 text-gray-600 grow"
          style={createMultilineEllipsisStyle(4)}
        >
          {data.description}
        </p>
        <UserMedia user={cardData.user} />
      </div>
    </div>
  );
}
