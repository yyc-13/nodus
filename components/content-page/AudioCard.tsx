import UserMedia from "./components/UserMedia";
import Link from "next/link";
import { useSession } from "next-auth/react";
import ContentControls from "./components/contentControls";

function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}

export default function AudioCard({ basicContent }) {
  const { data } = useSession();
  const viewer = data?.user;
  const isCreator =
    viewer?.userId == basicContent.creator.userId ? true : false;
  if (!basicContent) {
    return <div>Loading...</div>;
  }

  console.log("basicContent in content-page audiocard", basicContent);
  return (
    <article
      key={basicContent.id}
      className="flex flex-col items-start justify-between"
    >
      <div className="relative w-full">
        <audio
          className="w-full p-2 mt-2"
          src={basicContent.card.file}
          controls
          preload="metadata"
        />
      </div>
      <div className="max-w-xl">
        <div className="mt-8 flex items-center gap-x-4 text-xs">
          <time dateTime={basicContent.createdAt} className="text-gray-500">
            {basicContent.createdAt}
          </time>

          {basicContent.tags.length > 0 &&
            basicContent.tags.map((tag, index) => (
              <a
                key={`tag-${index}`}
                href="#"
                className="relative z-10 rounded-full bg-gray-50 px-3 py-1.5 font-medium text-gray-600 hover:bg-gray-100"
              >
                {tag}
              </a>
            ))}
        </div>
      </div>
      <div className="group relative">
        <h3 className="mt-3 text-lg font-semibold leading-6 text-gray-900 group-hover:text-gray-600">
          <Link href={`/content/${basicContent.id}`}>
            <span className="absolute inset-0" />
            {basicContent.title}
          </Link>
        </h3>
        <p className="mt-5 line-clamp-3 text-sm leading-6 text-gray-600">
          {basicContent.card.description}
        </p>
      </div>
      {/* user media */}
      <UserMedia user={basicContent.creator} />
      <ContentControls isCreator={isCreator} contentId={basicContent.id} />
    </article>
  );
}
