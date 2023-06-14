import { EnvelopeIcon, PhoneIcon } from "@heroicons/react/20/solid";
import prisma, { getAllUserId, getContentsByUserId } from "@/lib/prismaClient";
import { GetStaticPaths, GetStaticProps } from "next";
import AudioCard from "@/components/content-page/AudioCard";
import ImageCard from "@/components/content-page/ImageCard";
import VideoCard from "@/components/content-page/VideoCard";
import TextCard from "@/components/content-page/TextCard";
const profile = {
  name: "Ricardo Cooper",
  email: "ricardo.cooper@example.com",
  avatar:
    "https://images.unsplash.com/photo-1463453091185-61582044d556?ixlib=rb-=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=8&w=1024&h=1024&q=80",
  backgroundImage:
    "https://images.unsplash.com/photo-1444628838545-ac4016a5418a?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80",
  fields: [
    ["Phone", "(555) 123-4567"],
    ["Email", "ricardocooper@example.com"],
    ["Title", "Senior Front-End Developer"],
    ["Team", "Product Development"],
    ["Location", "San Francisco"],
    ["Sits", "Oasis, 4th floor"],
    ["Salary", "$145,000"],
    ["Birthday", "June 8, 1990"],
  ],
};

const posts = [
  {
    id: 1,
    title: "Boost your conversion rate",
    href: "#",
    description:
      "Illo sint voluptas. Error voluptates culpa eligendi. Hic vel totam vitae illo. Non aliquid explicabo necessitatibus unde. Sed exercitationem placeat consectetur nulla deserunt vel. Iusto corrupti dicta.",
    imageUrl:
      "https://images.unsplash.com/photo-1496128858413-b36217c2ce36?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=3603&q=80",
    date: "Mar 16, 2020",
    datetime: "2020-03-16",
    category: { title: "Marketing", href: "#" },
    author: {
      name: "Michael Foster",
      role: "Co-Founder / CTO",
      href: "#",
      imageUrl:
        "https://images.unsplash.com/photo-1519244703995-f4e0f30006d5?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
    },
  },
  // More posts...
];
import dateFormatter from "@/lib/dateFormatter";

export const getStaticPaths: GetStaticPaths = async () => {
  const data = await getAllUserId();
  const userIDs = data.map((user) => {
    return user.id;
  });

  const paths = userIDs.map((id) => ({
    params: { id: id },
  }));

  return { paths, fallback: false };
};

export const getStaticProps: GetStaticProps = async ({ params }) => {
  const user = await getContentsByUserId(params.id);

  if (!user) {
    return { notFound: true };
  }

  if (user.contents) {
    user.contents = user.contents.map((content) => ({
      ...content,
      createdAt: dateFormatter.format(new Date(content.createdAt)),
    }));
  }

  return {
    props: {
      user,
    },
    // ISR revalidate every 5 minutes
    revalidate: 60 * 5,
  };
};

export default function UserInfo({ user }) {
  console.log("user in /user/[id].tsx", user);
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
        </div>
        <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
          <div className="-mt-12 sm:-mt-16 sm:flex sm:items-end sm:space-x-5">
            <div className="flex">
              <img
                className="h-24 w-24 rounded-full ring-4 ring-white sm:h-32 sm:w-32"
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
        {user.description && (
          <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8 mt-2">
            <div className="px-4 py-6 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0">
              <dt className="text-sm font-medium leading-6 text-gray-900">
                About
              </dt>
              <dd className="mt-1 text-sm leading-6 text-gray-700 sm:col-span-2 sm:mt-0 line-clamp-5">
                {user.description}
              </dd>
            </div>
          </div>
        )}
      </div>
      {/* collection */}

      {/* contents */}

      <div className="bg-white py-24 sm:py-32">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-2xl text-center">
            <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
              From the blog
            </h2>
            <p className="mt-2 text-lg leading-8 text-gray-600">
              Learn how to grow your business with our expert advice.
            </p>
          </div>
          <div className="mx-auto mt-16 grid max-w-2xl grid-cols-1 gap-x-8 gap-y-20 lg:mx-0 lg:max-w-none lg:grid-cols-3">
            {user.contents.map((content, index) => {
              switch (content.card.fileType) {
                case "AUDIO":
                  // Return an audio player for audio files
                  return (
                    <AudioCard basicContent={content} key={`card_${index}`} />
                  );
                case "VIDEO":
                  // Return a video player for video files
                  return (
                    <VideoCard basicContent={content} key={`card_${index}`} />
                  );
                case "IMAGE":
                  // Return an image tag for image files
                  return (
                    <ImageCard basicContent={content} key={`card_${index}`} />
                  );
                case "TEXT":
                  return (
                    <TextCard basicContent={content} key={`card_${index}`} />
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
