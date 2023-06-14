import BreadCrumb from "../utils/BreadCrumb";

import UserMedia from "./components/UserMedia";
import CardTags from "./components/CardTags";
import { createMultilineEllipsisStyle } from "../../lib/MultilineEllipsis";
import TitleAndBookmark from "./components/TitleAndBookmark";

function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}

export default function AudioCard({ basicContent }) {
  if (!basicContent) {
    return <div>Loading...</div>;
  }

  return (
    <div className={"relative isolate flex flex-col gap-8  lg:flex-row"}>
      <div className="grow flex flex-col">
        <div className=" flex justify-between">
          <CardTags tags={basicContent.tags} />
        </div>

        <BreadCrumb categories={basicContent.mainCategory} />
        <audio
          className="w-full p-2 mt-2"
          src={basicContent.card.file}
          controls
          preload="metadata"
        />
        <div className="group relative grow">
          <TitleAndBookmark title={basicContent.title} />

          <p
            className="mt-5 text-sm leading-6 text-gray-600 dark:text-gray-400"
            style={createMultilineEllipsisStyle(11)}
          >
            {basicContent.card.description && basicContent.card.description}
          </p>
        </div>
        <UserMedia user={basicContent.user} />
      </div>
    </div>
  );
}
