import VideoCard from "../cards/VideoCard";
import AudioCard from "../cards/AudioCard";
import TextCard from "../cards/TextCard";
import ImageCard from "../cards/ImageCard";
import { ChevronDownIcon } from "@heroicons/react/24/solid";
import { useState } from "react";
import React from "react";
import ExpandMoreBtn from "./ExpandMoreBtn";

export default function RelatedArticles() {
  const [showMore, setShowMore] = useState(1);
  const expand = () => {
    setShowMore(showMore + 1);
  };
  const cards = [];
  for (let i = 0; i < showMore; i++) {
    cards.push(
      <React.Fragment key={i}>
        <VideoCard />
        <AudioCard basicContent={undefined} />
        <ImageCard />
      </React.Fragment>
    );
  }

  return (
    <div className="mx-auto max-w-2xl lg:max-w-4xl">
      <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl py-8">
        for you
      </h2>
      <div className="mt-4 space-y-6 lg:mt-20 lg:space-y-20 grid grid-cols-1 gap-x-6 gap-y-12  2xl:grid-cols-1 ">
        {cards}

        <ExpandMoreBtn expand={expand} />
      </div>
    </div>
  );
}
