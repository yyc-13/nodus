import { useState } from "react";
import CardSm from "@/components/product/card";
const posts = [
  {
    id: 1,
    title: "Boost your conversion rate",
    href: "#",
    description:
      "Illo sint voluptas. Error voluptates culpa eligendi. Hic vel totam vitae illo. Non aliquid explicabo necessitatibus unde. Sed exercitationem placeat consectetur nulla deserunt vel. Iusto corrupti dicta.",
    date: "Mar 16, 2020",
    createdAt: "2020-03-16",
    category: { title: "Marketing", href: "#" },
    seller: {
      name: "Michael Foster",
      role: "Co-Founder / CTO",
      href: "#",
      image:
        "https://images.unsplash.com/photo-1519244703995-f4e0f30006d5?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
    },
  },
  {
    id: 2,
    title: "Boost your conversion rate",
    href: "#",
    description:
      "Illo sint voluptas. Error voluptates culpa eligendi. Hic vel totam vitae illo. Non aliquid explicabo necessitatibus unde. Sed exercitationem placeat consectetur nulla deserunt vel. Iusto corrupti dicta.",
    date: "Mar 16, 2020",
    createdAt: "2020-03-16",
    category: { title: "Marketing", href: "#" },
    seller: {
      name: "Michael Foster",
      role: "Co-Founder / CTO",
      href: "#",
      image:
        "https://images.unsplash.com/photo-1519244703995-f4e0f30006d5?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
    },
  },
  {
    id: 3,
    title: "Boost your conversion rate",
    href: "#",
    description:
      "Illo sint voluptas. Error voluptates culpa eligendi. Hic vel totam vitae illo. Non aliquid explicabo necessitatibus unde. Sed exercitationem placeat consectetur nulla deserunt vel. Iusto corrupti dicta.",
    date: "Mar 16, 2020",
    createdAt: "2020-03-16",
    category: { title: "Marketing", href: "#" },
    seller: {
      name: "Michael Foster",
      role: "Co-Founder / CTO",
      href: "#",
      image:
        "https://images.unsplash.com/photo-1519244703995-f4e0f30006d5?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
    },
  },
  {
    id: 4,
    title: "Boost your conversion rate",
    href: "#",
    description:
      "Illo sint voluptas. Error voluptates culpa eligendi. Hic vel totam vitae illo. Non aliquid explicabo necessitatibus unde. Sed exercitationem placeat consectetur nulla deserunt vel. Iusto corrupti dicta.",
    date: "Mar 16, 2020",
    createdAt: "2020-03-16",
    category: { title: "Marketing", href: "#" },
    seller: {
      name: "Michael Foster",
      role: "Co-Founder / CTO",
      href: "#",
      image:
        "https://images.unsplash.com/photo-1519244703995-f4e0f30006d5?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
    },
  },
  {
    id: 1,
    title: "Boost your conversion rate",
    href: "#",
    description:
      "Illo sint voluptas. Error voluptates culpa eligendi. Hic vel totam vitae illo. Non aliquid explicabo necessitatibus unde. Sed exercitationem placeat consectetur nulla deserunt vel. Iusto corrupti dicta.",
    date: "Mar 16, 2020",
    createdAt: "2020-03-16",
    category: { title: "Marketing", href: "#" },
    seller: {
      name: "Michael Foster",
      role: "Co-Founder / CTO",
      href: "#",
      image:
        "https://images.unsplash.com/photo-1519244703995-f4e0f30006d5?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
    },
  },
  {
    id: 2,
    title: "Boost your conversion rate",
    href: "#",
    description:
      "Illo sint voluptas. Error voluptates culpa eligendi. Hic vel totam vitae illo. Non aliquid explicabo necessitatibus unde. Sed exercitationem placeat consectetur nulla deserunt vel. Iusto corrupti dicta.",
    date: "Mar 16, 2020",
    createdAt: "2020-03-16",
    category: { title: "Marketing", href: "#" },
    seller: {
      name: "Michael Foster",
      role: "Co-Founder / CTO",
      href: "#",
      image:
        "https://images.unsplash.com/photo-1519244703995-f4e0f30006d5?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
    },
  },
  {
    id: 3,
    title: "Boost your conversion rate",
    href: "#",
    description:
      "Illo sint voluptas. Error voluptates culpa eligendi. Hic vel totam vitae illo. Non aliquid explicabo necessitatibus unde. Sed exercitationem placeat consectetur nulla deserunt vel. Iusto corrupti dicta.",
    date: "Mar 16, 2020",
    createdAt: "2020-03-16",
    category: { title: "Marketing", href: "#" },
    seller: {
      name: "Michael Foster",
      role: "Co-Founder / CTO",
      href: "#",
      image:
        "https://images.unsplash.com/photo-1519244703995-f4e0f30006d5?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
    },
  },
  {
    id: 4,
    title: "Boost your conversion rate",
    href: "#",
    description:
      "Illo sint voluptas. Error voluptates culpa eligendi. Hic vel totam vitae illo. Non aliquid explicabo necessitatibus unde. Sed exercitationem placeat consectetur nulla deserunt vel. Iusto corrupti dicta.",
    date: "Mar 16, 2020",
    createdAt: "2020-03-16",
    category: { title: "Marketing", href: "#" },
    seller: {
      name: "Michael Foster",
      role: "Co-Founder / CTO",
      href: "#",
      image:
        "https://images.unsplash.com/photo-1519244703995-f4e0f30006d5?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
    },
  },
  {
    id: 1,
    title: "Boost your conversion rate",
    href: "#",
    description:
      "Illo sint voluptas. Error voluptates culpa eligendi. Hic vel totam vitae illo. Non aliquid explicabo necessitatibus unde. Sed exercitationem placeat consectetur nulla deserunt vel. Iusto corrupti dicta.",
    date: "Mar 16, 2020",
    createdAt: "2020-03-16",
    category: { title: "Marketing", href: "#" },
    seller: {
      name: "Michael Foster",
      role: "Co-Founder / CTO",
      href: "#",
      image:
        "https://images.unsplash.com/photo-1519244703995-f4e0f30006d5?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
    },
  },
  {
    id: 2,
    title: "Boost your conversion rate",
    href: "#",
    description:
      "Illo sint voluptas. Error voluptates culpa eligendi. Hic vel totam vitae illo. Non aliquid explicabo necessitatibus unde. Sed exercitationem placeat consectetur nulla deserunt vel. Iusto corrupti dicta.",
    date: "Mar 16, 2020",
    createdAt: "2020-03-16",
    category: { title: "Marketing", href: "#" },
    seller: {
      name: "Michael Foster",
      role: "Co-Founder / CTO",
      href: "#",
      image:
        "https://images.unsplash.com/photo-1519244703995-f4e0f30006d5?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
    },
  },
  {
    id: 3,
    title: "Boost your conversion rate",
    href: "#",
    description:
      "Illo sint voluptas. Error voluptates culpa eligendi. Hic vel totam vitae illo. Non aliquid explicabo necessitatibus unde. Sed exercitationem placeat consectetur nulla deserunt vel. Iusto corrupti dicta.",
    date: "Mar 16, 2020",
    createdAt: "2020-03-16",
    category: { title: "Marketing", href: "#" },
    seller: {
      name: "Michael Foster",
      role: "Co-Founder / CTO",
      href: "#",
      image:
        "https://images.unsplash.com/photo-1519244703995-f4e0f30006d5?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
    },
  },
  {
    id: 4,
    title: "Boost your conversion rate",
    href: "#",
    description:
      "Illo sint voluptas. Error voluptates culpa eligendi. Hic vel totam vitae illo. Non aliquid explicabo necessitatibus unde. Sed exercitationem placeat consectetur nulla deserunt vel. Iusto corrupti dicta.",
    date: "Mar 16, 2020",
    createdAt: "2020-03-16",
    category: { title: "Marketing", href: "#" },
    seller: {
      name: "Michael Foster",
      role: "Co-Founder / CTO",
      href: "#",
      image:
        "https://images.unsplash.com/photo-1519244703995-f4e0f30006d5?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
    },
  },
  {
    id: 1,
    title: "Boost your conversion rate",
    href: "#",
    description:
      "Illo sint voluptas. Error voluptates culpa eligendi. Hic vel totam vitae illo. Non aliquid explicabo necessitatibus unde. Sed exercitationem placeat consectetur nulla deserunt vel. Iusto corrupti dicta.",
    date: "Mar 16, 2020",
    createdAt: "2020-03-16",
    category: { title: "Marketing", href: "#" },
    seller: {
      name: "Michael Foster",
      role: "Co-Founder / CTO",
      href: "#",
      image:
        "https://images.unsplash.com/photo-1519244703995-f4e0f30006d5?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
    },
  },
  {
    id: 2,
    title: "Boost your conversion rate",
    href: "#",
    description:
      "Illo sint voluptas. Error voluptates culpa eligendi. Hic vel totam vitae illo. Non aliquid explicabo necessitatibus unde. Sed exercitationem placeat consectetur nulla deserunt vel. Iusto corrupti dicta.",
    date: "Mar 16, 2020",
    createdAt: "2020-03-16",
    category: { title: "Marketing", href: "#" },
    seller: {
      name: "Michael Foster",
      role: "Co-Founder / CTO",
      href: "#",
      image:
        "https://images.unsplash.com/photo-1519244703995-f4e0f30006d5?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
    },
  },
  {
    id: 3,
    title: "Boost your conversion rate",
    href: "#",
    description:
      "Illo sint voluptas. Error voluptates culpa eligendi. Hic vel totam vitae illo. Non aliquid explicabo necessitatibus unde. Sed exercitationem placeat consectetur nulla deserunt vel. Iusto corrupti dicta.",
    date: "Mar 16, 2020",
    createdAt: "2020-03-16",
    category: { title: "Marketing", href: "#" },
    seller: {
      name: "Michael Foster",
      role: "Co-Founder / CTO",
      href: "#",
      image:
        "https://images.unsplash.com/photo-1519244703995-f4e0f30006d5?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
    },
  },
  {
    id: 4,
    title: "Boost your conversion rate",
    href: "#",
    description:
      "Illo sint voluptas. Error voluptates culpa eligendi. Hic vel totam vitae illo. Non aliquid explicabo necessitatibus unde. Sed exercitationem placeat consectetur nulla deserunt vel. Iusto corrupti dicta.",
    date: "Mar 16, 2020",
    createdAt: "2020-03-16",
    category: { title: "Marketing", href: "#" },
    seller: {
      name: "Michael Foster",
      role: "Co-Founder / CTO",
      href: "#",
      image:
        "https://images.unsplash.com/photo-1519244703995-f4e0f30006d5?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
    },
  },
  // More posts...
];

export default function DynamicForm() {
  return (
    <>
      {/* <div className="mx-auto mt-10 grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 border-t border-gray-200 snap-center pt-10 sm:mt-16 sm:pt-16 lg:mx-0 lg:max-w-none lg:grid-cols-3  overflow-x-auto grid-rows-1">
        {posts.map((post) => (
          <CardSm post={post} />
        ))}
      </div>
      <button
        className="absolute top-0 bottom-0 right-0 z-10 py-4 px-5 bg-gray-800 text-white"
        onClick={() => {
          const container = document.getElementById("item-container");
          container!.scrollLeft += 500;
        }}
      >
        Next
      </button> */}
      <div className="overflow-x-scroll grid grid-rows-2 grid-flow-col gap-4 snap-x">
        <div className=" hover:shadow-xl transition-shadow duration-300 ease-in-out w-64 h-48 mr-4 bg-gray-200  snap-center">
          01
        </div>
        <div className=" hover:shadow-xl transition-shadow duration-300 ease-in-out w-64 h-48 mr-4 bg-gray-200 snap-center">
          01
        </div>
        <div className=" hover:shadow-xl transition-shadow duration-300 ease-in-out w-64 h-48 mr-4 bg-gray-200 snap-center">
          01
        </div>
        <div className=" hover:shadow-xl transition-shadow duration-300 ease-in-out w-64 h-48 mr-4 bg-gray-200 snap-center">
          01
        </div>
        <div className=" hover:shadow-xl transition-shadow duration-300 ease-in-out w-64 h-48 mr-4 bg-gray-200 snap-center">
          01
        </div>
        <div className=" hover:shadow-xl transition-shadow duration-300 ease-in-out w-64 h-48 mr-4 bg-gray-200 snap-center">
          01
        </div>
        <div className=" hover:shadow-xl transition-shadow duration-300 ease-in-out w-64 h-48 mr-4 bg-gray-200 snap-center">
          01
        </div>
        <div className=" hover:shadow-xl transition-shadow duration-300 ease-in-out w-64 h-48 mr-4 bg-gray-200 snap-center">
          01
        </div>
        <div className=" hover:shadow-xl transition-shadow duration-300 ease-in-out w-64 h-48 mr-4 bg-gray-200 snap-center">
          01
        </div>
        <div className=" hover:shadow-xl transition-shadow duration-300 ease-in-out w-64 h-48 mr-4 bg-gray-200 snap-center">
          01
        </div>
        <div className=" hover:shadow-xl transition-shadow duration-300 ease-in-out w-64 h-48 mr-4 bg-gray-200 snap-center">
          01
        </div>
        <div className=" hover:shadow-xl transition-shadow duration-300 ease-in-out w-64 h-48 mr-4 bg-gray-200 snap-center">
          01
        </div>
        <div className=" hover:shadow-xl transition-shadow duration-300 ease-in-out w-64 h-48 mr-4 bg-gray-200 snap-center">
          01
        </div>
      </div>
    </>
  );
}
