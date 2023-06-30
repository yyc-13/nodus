import { Tab } from "@headlessui/react";

import ImageCard from "../ImageCard";
import VideoCard from "../VideoCard";
import AudioCard from "../AudioCard";
import TextCard from "../TextCard";

import { useRouter } from "next/router";
import useSWR from "swr";

import AudioMain from "../AudioMain";
import VideoMain from "../VideoMain";
import DocMain from "../DocMain";

import NoAceess from "./NoAccess";

const fileTypeCard = (fileType, basicContent) => {
  switch (fileType) {
    case "IMAGE":
      return (
        <div className="mx-auto max-w-7xl px-6 lg:px-8 py-6 lg:py-8">
          <div className="mx-auto  grid max-w-2xl grid-cols-1 gap-x-8 gap-y-20 lg:mx-0 lg:max-w-none ">
            <ImageCard basicContent={basicContent} />
          </div>
        </div>
      );
    case "VIDEO":
      return (
        <div className="mx-auto max-w-7xl px-6 lg:px-8 py-6 lg:py-8">
          <div className="mx-auto  grid max-w-2xl grid-cols-1 gap-x-8 gap-y-20 lg:mx-0 lg:max-w-none ">
            <VideoCard basicContent={basicContent} />
          </div>
        </div>
      );
    case "AUDIO":
      return (
        <div className="mx-auto max-w-7xl px-6 lg:px-8 py-6 lg:py-8">
          <div className="mx-auto  grid max-w-2xl grid-cols-1 gap-x-8 gap-y-20 lg:mx-0 lg:max-w-none ">
            <AudioCard basicContent={basicContent} />
          </div>
        </div>
      );
    case "TEXT":
      return (
        <div className="mx-auto max-w-7xl px-6 lg:px-8 py-6 lg:py-8">
          <div className="mx-auto  grid max-w-2xl grid-cols-1 gap-x-8 gap-y-20 lg:mx-0 lg:max-w-none ">
            <TextCard basicContent={basicContent} />
          </div>
        </div>
      );
  }
};

const fileTypeContent = (fileType, basicContent, mainContent, sampleOrMain) => {
  switch (fileType) {
    case "VIDEO":
      return (
        <VideoMain
          basicContent={basicContent}
          mainContent={mainContent}
          sampleOrMain={sampleOrMain}
        />
      );
    case "AUDIO":
      return (
        <AudioMain
          basicContent={basicContent}
          mainContent={mainContent}
          sampleOrMain={sampleOrMain}
        />
      );
    case "DOC":
      return (
        <DocMain
          basicContent={basicContent}
          mainContent={mainContent}
          sampleOrMain={sampleOrMain}
        />
      );
  }
};

const fetcher = (url) => fetch(url).then((res) => res.json());

function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}

export default function ContentTabs({ basicContent }) {
  const router = useRouter();
  const { contentId } = router.query;
  const { data: mainContent, error } = useSWR(
    contentId ? `/api/content/${contentId}/mainFile` : null,
    fetcher
  );

  if (error) {
    return <div>Error: {error.message}</div>;
  }
  console.log(
    "basicContent and mainContent",
    basicContent,
    mainContent,
    contentId
  );
  if (!mainContent) {
    return <div>Loading...</div>;
  }

  const noAccess = error?.response?.status === 403;

  const {
    card,
    createdAt,
    creator,
    creatorId,
    fileType,
    free,
    freeSample,
    memberships,
    price,
    questions,
    reviews,
    tags,
    title,
    updatedAt,
    sample,
  } = basicContent;

  let tabs = [];
  let panels = [];
  if (free && freeSample) {
    tabs.push(
      { name: "sample", href: "#", current: true },
      { name: "main", href: "#", current: false },
      { name: "card", href: "#", current: false }
    );
    const samplePanel = fileTypeContent(
      sample.fileType,
      basicContent,
      mainContent,
      "sample"
    );
    const mainPanel = fileTypeContent(
      fileType,
      basicContent,
      mainContent,
      "main"
    );
    const cardPanel = fileTypeCard(card.fileType, basicContent);
    panels.push(samplePanel, mainPanel, cardPanel);
  } else if (free) {
    tabs.push(
      { name: "main", href: "#", current: true },
      { name: "card", href: "#", current: false }
    );
    const mainPanel = fileTypeContent(
      fileType,
      basicContent,
      mainContent,
      "main"
    );
    const cardPanel = fileTypeCard(card.fileType, basicContent);
    panels.push(mainPanel, cardPanel);
  } else if ((price > 0 || memberships.length > 0) && freeSample) {
    tabs.push(
      { name: "sample", href: "#", current: true },
      { name: "main", href: "#", current: false },
      { name: "card", href: "#", current: false }
    );
    const samplePanel = fileTypeContent(
      sample.fileType,
      basicContent,
      mainContent,
      "sample"
    );
    const mainPanel = fileTypeContent(
      fileType,
      basicContent,
      mainContent,
      "main"
    );
    const cardPanel = noAccess ? (
      <NoAceess />
    ) : (
      fileTypeCard(card.fileType, basicContent)
    );
    panels.push(samplePanel, mainPanel, cardPanel);
  } else if (price > 0 || memberships.length > 0) {
    tabs.push(
      { name: "main", href: "#", current: false },
      { name: "card", href: "#", current: true }
    );
    const mainPanel = fileTypeContent(
      fileType,
      basicContent,
      mainContent,
      "main"
    );
    const cardPanel = noAccess ? (
      <NoAceess />
    ) : (
      fileTypeCard(card.fileType, basicContent)
    );
    panels.push(mainPanel, cardPanel);
  }

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
            {/* when Panel is ready */}
            {panels.map((panel, index) => (
              <Tab.Panel key={index}>{panel}</Tab.Panel>
            ))}
          </Tab.Panels>
        </Tab.Group>
      </div>
    </>
  );
}
