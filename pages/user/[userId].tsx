import prisma, { getAllUserId, getContentsByUserId } from "@/lib/prismaClient";
import { GetStaticPaths, GetStaticProps } from "next";
import AudioCard from "@/components/content-page/AudioCard";
import ImageCard from "@/components/content-page/ImageCard";
import VideoCard from "@/components/content-page/VideoCard";
import TextCard from "@/components/content-page/TextCard";
import {
  TwitterIcon,
  InstagramIcon,
  GitHubIcon,
  LinkedInIcon,
} from "@/components/SocialIcons";
import { useRouter } from "next/router";
import { socials } from "@/lib/Socials";
import dateFormatter from "@/lib/dateFormatter";

import { useSession } from "next-auth/react";
import Link from "next/link";

export const getStaticPaths: GetStaticPaths = async () => {
  const users = await getAllUserId();
  const userIds = users.map((user) => {
    return user.userId;
  });

  const paths = userIds.map((id) => ({
    params: { userId: id },
  }));

  return { paths, fallback: false };
};

export const getStaticProps: GetStaticProps = async ({ params }) => {
  let user = await getContentsByUserId(params.userId);

  if (!user) {
    return { notFound: true };
  }

  user = JSON.parse(JSON.stringify(user));

  return {
    props: {
      user,
    },
    // ISR revalidate every 5 minutes
    revalidate: 60 * 5,
  };
};

export default function UserInfo({ user }) {
  const router = useRouter();
  const { data: userSession } = useSession();

  const { userId } = router.query;

  const isUserThemselves = userSession?.user?.userId == userId ? true : false;

  return (
    <div>
      {/* user */}
      <div>
        <div>
          <img
            className="h-32 w-full object-cover lg:h-48"
            src={user.coverPhoto}
            alt=""
          />

          <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
            <div className="-mt-12 sm:-mt-16 sm:flex sm:items-end sm:space-x-5">
              <div className="flex">
                <img
                  className="h-24 w-24 rounded-full ring-4 ring-white sm:h-32 sm:w-32 z-10"
                  src={user.pfp}
                  alt=""
                />
              </div>
              <div className="mt-6 sm:flex sm:min-w-0 sm:flex-1 sm:items-center sm:justify-end sm:space-x-6 sm:pb-1">
                <div className="mt-6 min-w-0 flex-1 sm:hidden md:block">
                  <h1 className="truncate text-2xl font-bold text-gray-900">
                    {user.userName}
                  </h1>
                  <p className="mt-1 text-sm leading-6 text-gray-700 sm:col-span-2 sm:mt-0  line-clamp-3">
                    @{user.userId}
                  </p>
                </div>

                <div className="mt-6 flex flex-col justify-stretch space-y-3 sm:flex-row sm:space-x-4 sm:space-y-0">
                  {isUserThemselves && (
                    <button
                      type="button"
                      className="inline-flex justify-center rounded-md px-3 py-2 text-sm font-semibold  shadow-sm
                   bg-indigo-600   text-white  hover:bg-indigo-500 dark:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600 dark:text-white dark:hover:bg-indigo-400 dark:focus-visible:outline-indigo-500"
                      onClick={() => router.push("/user/update-my-info")}
                    >
                      <span>edit</span>
                    </button>
                  )}
                  <button
                    type="button"
                    className="inline-flex justify-center rounded-md bg-white px-3 py-2 text-sm font-semibold text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-50"
                  >
                    <span>follow</span>
                  </button>
                </div>
              </div>
            </div>
            <div className="mt-6 hidden min-w-0 flex-1 sm:block md:hidden">
              <h1 className="truncate text-2xl font-bold text-gray-900">
                {user.userName}
              </h1>
              <p className="mt-1 text-sm leading-6 text-gray-700 sm:col-span-2 sm:mt-0">
                @{user.userId}
              </p>
            </div>
          </div>
          <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8 mt-8 flex gap-6 ">
            {user.UserSocial.map((userSocial) => {
              const socialPlatform = socials.find(
                (s) =>
                  s.name.toLowerCase() === userSocial.platform.toLowerCase()
              );
              if (!socialPlatform) {
                return null;
              }
              const Icon = socialPlatform.icon;
              return (
                <Link
                  key={userSocial.platform}
                  className="group -m-1 p-1 "
                  aria-label={`Follow on ${userSocial.platform}`}
                  href={userSocial.handle}
                  target="_blank"
                >
                  <Icon />
                </Link>
              );
            })}
          </div>
        </div>
        {user.introduction && (
          <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8 mt-2">
            <div className="px-4 py-6 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0">
              <dt className="text-sm font-medium leading-6 text-gray-900">
                About
              </dt>
              <dd className="mt-1 text-sm leading-6 text-gray-700 sm:col-span-2 sm:mt-0 line-clamp-5">
                {user.introduction}
              </dd>
            </div>
          </div>
        )}
      </div>

      {/* contents */}

      <div className="bg-white py-24 sm:py-32">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto mt-16 grid max-w-2xl grid-cols-1 gap-x-8 gap-y-20 lg:mx-0 lg:max-w-none lg:grid-cols-3">
            {user.contents.map((content, index) => {
              switch (content.card.fileType) {
                case "AUDIO":
                  // Return an audio player for audio files
                  return (
                    <AudioCard
                      basicContent={content}
                      key={`card_${index}`}
                      pfp={user.pfp}
                    />
                  );
                case "VIDEO":
                  // Return a video player for video files
                  return (
                    <VideoCard
                      basicContent={content}
                      key={`card_${index}`}
                      pfp={user.pfp}
                    />
                  );
                case "IMAGE":
                  // Return an image tag for image files
                  return (
                    <ImageCard
                      basicContent={content}
                      key={`card_${index}`}
                      pfp={user.pfp}
                    />
                  );
                case "TEXT":
                  return (
                    <TextCard
                      basicContent={content}
                      key={`card_${index}`}
                      pfp={user.pfp}
                    />
                  );
                default:
                  // If the fileType is none of the above, return null
                  return null;
              }
            })}
          </div>
        </div>
      </div>
    </div>
  );
}
