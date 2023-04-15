import { useState } from "react";
import { EnvelopeIcon, PhoneIcon } from "@heroicons/react/20/solid";
import { Disclosure, RadioGroup, Tab } from "@headlessui/react";
import { StarIcon, ChevronRightIcon } from "@heroicons/react/20/solid";
import {
  HeartIcon,
  MinusIcon,
  PlusIcon,
  CalendarIcon,
  CommandLineIcon,
  MegaphoneIcon,
  ArrowDownTrayIcon,
} from "@heroicons/react/24/outline";

const faqs = [
  {
    question: "How do you make holy water?",
    answer:
      "You boil the hell out of it. Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas cupiditate laboriosam fugiat.",
  },
  // More questions...
];

const reviews = {
  average: 4,
  totalCount: 1624,
  counts: [
    { rating: 5, count: 1019 },
    { rating: 4, count: 162 },
    { rating: 3, count: 97 },
    { rating: 2, count: 199 },
    { rating: 1, count: 147 },
  ],
  featured: [
    {
      id: 1,
      rating: 5,
      content: `
        <p>This is the bag of my dreams. I took it on my last vacation and was able to fit an absurd amount of snacks for the many long and hungry flights.</p>
      `,
      author: "Emily Selman",
      avatarSrc:
        "https://images.unsplash.com/photo-1502685104226-ee32379fefbe?ixlib=rb-=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=8&w=256&h=256&q=80",
    },
    // More reviews...
  ],
};

const items = [
  {
    name: "Marketing Campaign",
    description: "I think the kids call these memes these days.",
    href: "#",
    iconColor: "bg-pink-500",
    icon: ArrowDownTrayIcon,
  },
  {
    name: "Engineering Project",
    description:
      "Something really expensive that will ultimately get cancelled.",
    href: "#",
    iconColor: "bg-purple-500",
    icon: ArrowDownTrayIcon,
  },
  {
    name: "Event",
    description: "Like a conference all about you that no one will care about.",
    href: "#",
    iconColor: "bg-yellow-500",
    icon: ArrowDownTrayIcon,
  },
];

const people = [
  {
    name: "Jane Cooper",
    title: "Regional Paradigm Technician",
    role: "Admin",
    email: "janecooper@example.com",
    telephone: "+1-202-555-0170",
    imageUrl:
      "https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=4&w=256&h=256&q=60",
  },
  // More people...
];
const product = {
  name: "Zip Tote Basket",
  price: "$140",
  rating: 4,
  images: [
    {
      id: 1,
      name: "Angled view",
      src: "https://tailwindui.com/img/ecommerce-images/product-page-03-product-01.jpg",
      alt: "Angled front view with bag zipped and handles upright.",
    },
    // More images...
  ],

  description: `
    <p>The Zip Tote Basket is the perfect midpoint between shopping tote and comfy backpack. With convertible straps, you can hand carry, should sling, or backpack this convenient and spacious bag. The zip top and durable canvas construction keeps your goods protected for all-day use.</p>
  `,
  details: [
    {
      name: "Features",
      items: [
        "Multiple strap configurations",
        "Spacious interior with top zip",
        "Leather handle and tabs",
        "Interior dividers",
        "Stainless strap loops",
        "Double stitched construction",
        "Water-resistant",
      ],
    },
    // More sections...
  ],
};

function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}

export default function ProductA() {
  return (
    <div className="bg-white">
      <div className="mx-auto max-w-2xl px-4 py-16 sm:px-6 sm:py-24 lg:max-w-7xl lg:px-8">
        {/* product main */}
        <div className="lg:grid lg:grid-cols-2 lg:items-start lg:gap-x-8">
          {/* Files */}
          <div className={`flex items-center `}>
            <div className="mx-auto max-w-lg">
              <h1 class="text-3xl font-bold tracking-tight text-gray-900">
                Zip Tote Basket
              </h1>
              <h2 className="text-base font-semibold leading-6 text-gray-900">
                Preview Files
              </h2>
              <p className="mt-1 text-sm text-gray-500">
                Here are some files you can download to preview the product.
              </p>
              <ul
                role="list"
                className="mt-6 divide-y divide-gray-200 border-b border-t border-gray-200"
              >
                {items.map((item, itemIdx) => (
                  <li key={itemIdx}>
                    <div className="group relative flex items-start space-x-3 py-4">
                      <div className="flex-shrink-0">
                        <span
                          className={classNames(
                            item.iconColor,
                            "inline-flex h-10 w-10 items-center justify-center rounded-lg"
                          )}
                        >
                          <item.icon
                            className="h-6 w-6 text-white"
                            aria-hidden="true"
                          />
                        </span>
                      </div>
                      <div className="min-w-0 flex-1">
                        <div className="text-sm font-medium text-gray-900">
                          <a href={item.href}>
                            <span
                              className="absolute inset-0"
                              aria-hidden="true"
                            />
                            {item.name}
                          </a>
                        </div>
                        <p className="text-sm text-gray-500">
                          {item.description}
                        </p>
                      </div>
                      <div className="flex-shrink-0 self-center">
                        <ChevronRightIcon
                          className="h-5 w-5 text-gray-400 group-hover:text-gray-500"
                          aria-hidden="true"
                        />
                      </div>
                    </div>
                  </li>
                ))}
              </ul>
              <h2 className="text-base font-semibold leading-6 text-gray-900">
                Files
              </h2>
              <p className="mt-1 text-sm text-gray-500"></p>
              <ul
                role="list"
                className="mt-6 divide-y divide-gray-200 border-b border-t border-gray-200"
              >
                {items.map((item, itemIdx) => (
                  <li key={itemIdx}>
                    <div className="group relative flex items-start space-x-3 py-4">
                      <div className="flex-shrink-0">
                        <span
                          className={classNames(
                            item.iconColor,
                            "inline-flex h-10 w-10 items-center justify-center rounded-lg"
                          )}
                        >
                          <item.icon
                            className="h-6 w-6 text-white"
                            aria-hidden="true"
                          />
                        </span>
                      </div>
                      <div className="min-w-0 flex-1">
                        <div className="text-sm font-medium text-gray-900">
                          <a href={item.href}>
                            <span
                              className="absolute inset-0"
                              aria-hidden="true"
                            />
                            {item.name}
                          </a>
                        </div>
                        <p className="text-sm text-gray-500">
                          {item.description}
                        </p>
                      </div>
                      <div className="flex-shrink-0 self-center">
                        <ChevronRightIcon
                          className="h-5 w-5 text-gray-400 group-hover:text-gray-500"
                          aria-hidden="true"
                        />
                      </div>
                    </div>
                  </li>
                ))}
              </ul>
              <div className="mt-6 flex">
                <a
                  href="#"
                  className="text-sm font-medium text-indigo-600 hover:text-indigo-500"
                >
                  Or start from an empty project
                  <span aria-hidden="true"> &rarr;</span>
                </a>
              </div>
            </div>
          </div>

          {/* Product info */}
          <div className="mt-10 px-4 sm:mt-16 sm:px-0 lg:mt-0">
            <h1 className="text-3xl font-bold tracking-tight text-gray-900">
              {product.name}
            </h1>

            <div className="mt-3">
              <h2 className="sr-only">Product information</h2>
              <p className="text-3xl tracking-tight text-gray-900">
                {product.price}
              </p>
            </div>

            {/* Reviews */}
            <div className="mt-3">
              <h3 className="sr-only">Reviews</h3>
              <div className="flex items-center">
                <div className="flex items-center">
                  {[0, 1, 2, 3, 4].map((rating) => (
                    <StarIcon
                      key={rating}
                      className={classNames(
                        product.rating > rating
                          ? "text-indigo-500"
                          : "text-gray-300",
                        "h-5 w-5 flex-shrink-0"
                      )}
                      aria-hidden="true"
                    />
                  ))}
                </div>
                <p className="sr-only">{product.rating} out of 5 stars</p>
              </div>
            </div>

            <div className="mt-6">
              <h3 className="sr-only">Description</h3>

              <div
                className="space-y-6 text-base text-gray-700"
                dangerouslySetInnerHTML={{ __html: product.description }}
              />
            </div>

            <form className="mt-6">
              {/* Contact cards */}
              <ul role="list" className="grid grid-cols-1 gap-6 ">
                {people.map((person) => (
                  <li
                    key={person.email}
                    className="col-span-1 divide-y divide-gray-200 rounded-lg bg-white shadow"
                  >
                    <div className="flex w-full items-center justify-between space-x-6 p-6">
                      <div className="flex-1 truncate">
                        <div className="flex items-center space-x-3">
                          <h3 className="truncate text-sm font-medium text-gray-900">
                            {person.name}
                          </h3>
                          <span className="inline-block flex-shrink-0 rounded-full bg-green-100 px-2 py-0.5 text-xs font-medium text-green-800">
                            {person.role}
                          </span>
                        </div>
                        <p className="mt-1 truncate text-sm text-gray-500">
                          {person.title}
                        </p>
                      </div>
                      <img
                        className="h-10 w-10 flex-shrink-0 rounded-full bg-gray-300"
                        src={person.imageUrl}
                        alt=""
                      />
                    </div>
                    <div>
                      <div className="-mt-px flex divide-x divide-gray-200">
                        <div className="flex w-0 flex-1">
                          <a
                            href={`mailto:${person.email}`}
                            className="relative -mr-px inline-flex w-0 flex-1 items-center justify-center gap-x-3 rounded-bl-lg border border-transparent py-4 text-sm font-semibold text-gray-900"
                          >
                            <EnvelopeIcon
                              className="h-5 w-5 text-gray-400"
                              aria-hidden="true"
                            />
                            Email
                          </a>
                        </div>
                        <div className="-ml-px flex w-0 flex-1">
                          <a
                            href={`tel:${person.telephone}`}
                            className="relative inline-flex w-0 flex-1 items-center justify-center gap-x-3 rounded-br-lg border border-transparent py-4 text-sm font-semibold text-gray-900"
                          >
                            <PhoneIcon
                              className="h-5 w-5 text-gray-400"
                              aria-hidden="true"
                            />
                            Call
                          </a>
                        </div>
                      </div>
                    </div>
                  </li>
                ))}
              </ul>
              <div className="sm:flex-col1 mt-10 flex">
                <button
                  type="submit"
                  className="flex max-w-xs flex-1 items-center justify-center rounded-md border border-transparent bg-indigo-600 px-8 py-3 text-base font-medium text-white hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 focus:ring-offset-gray-50 sm:w-full"
                >
                  Add to bag
                </button>

                <button
                  type="button"
                  className="ml-4 flex items-center justify-center rounded-md px-3 py-3 text-gray-400 hover:bg-gray-100 hover:text-gray-500"
                >
                  <HeartIcon
                    className="h-6 w-6 flex-shrink-0"
                    aria-hidden="true"
                  />
                  <span className="sr-only">Add to favorites</span>
                </button>
              </div>
            </form>

            <section aria-labelledby="details-heading" className="mt-12">
              <h2 id="details-heading" className="sr-only">
                Additional details
              </h2>

              <div className="divide-y divide-gray-200 border-t">
                {product.details.map((detail) => (
                  <Disclosure as="div" key={detail.name}>
                    {({ open }) => (
                      <>
                        <h3>
                          <Disclosure.Button className="group relative flex w-full items-center justify-between py-6 text-left">
                            <span
                              className={classNames(
                                open ? "text-indigo-600" : "text-gray-900",
                                "text-sm font-medium"
                              )}
                            >
                              {detail.name}
                            </span>
                            <span className="ml-6 flex items-center">
                              {open ? (
                                <MinusIcon
                                  className="block h-6 w-6 text-indigo-400 group-hover:text-indigo-500"
                                  aria-hidden="true"
                                />
                              ) : (
                                <PlusIcon
                                  className="block h-6 w-6 text-gray-400 group-hover:text-gray-500"
                                  aria-hidden="true"
                                />
                              )}
                            </span>
                          </Disclosure.Button>
                        </h3>
                        <Disclosure.Panel
                          as="div"
                          className="prose prose-sm pb-6"
                        >
                          <ul role="list">
                            {detail.items.map((item) => (
                              <li key={item}>{item}</li>
                            ))}
                          </ul>
                        </Disclosure.Panel>
                      </>
                    )}
                  </Disclosure>
                ))}
              </div>
            </section>
          </div>
        </div>
        {/* FAQS */}
        <div className="bg-white">
          <div className="mx-auto max-w-7xl px-6 py-24 sm:pt-32 lg:px-8 lg:py-40">
            <div className="lg:grid lg:grid-cols-12 lg:gap-8">
              <div className="lg:col-span-5">
                <h2 className="text-2xl font-bold leading-10 tracking-tight text-gray-900">
                  Frequently asked questions
                </h2>
                <p className="mt-4 text-base leading-7 text-gray-600">
                  Can’t find the answer you’re looking for? Reach out to our{" "}
                  <a
                    href="#"
                    className="font-semibold text-indigo-600 hover:text-indigo-500"
                  >
                    customer support
                  </a>{" "}
                  team.
                </p>
              </div>
              <div className="mt-10 lg:col-span-7 lg:mt-0">
                <dl className="space-y-10">
                  {faqs.map((faq) => (
                    <div key={faq.question}>
                      <dt className="text-base font-semibold leading-7 text-gray-900">
                        {faq.question}
                      </dt>
                      <dd className="mt-2 text-base leading-7 text-gray-600">
                        {faq.answer}
                      </dd>
                    </div>
                  ))}
                </dl>
              </div>
            </div>
          </div>
        </div>
        {/* review  */}
        <div className="bg-white">
          <div className="mx-auto max-w-2xl px-4 py-16 sm:px-6 sm:py-24 lg:grid lg:max-w-7xl lg:grid-cols-12 lg:gap-x-8 lg:px-8 lg:py-32">
            <div className="lg:col-span-4">
              <h2 className="text-2xl font-bold tracking-tight text-gray-900">
                Customer Reviews
              </h2>

              <div className="mt-3 flex items-center">
                <div>
                  <div className="flex items-center">
                    {[0, 1, 2, 3, 4].map((rating) => (
                      <StarIcon
                        key={rating}
                        className={classNames(
                          reviews.average > rating
                            ? "text-yellow-400"
                            : "text-gray-300",
                          "h-5 w-5 flex-shrink-0"
                        )}
                        aria-hidden="true"
                      />
                    ))}
                  </div>
                  <p className="sr-only">{reviews.average} out of 5 stars</p>
                </div>
                <p className="ml-2 text-sm text-gray-900">
                  Based on {reviews.totalCount} reviews
                </p>
              </div>

              <div className="mt-6">
                <h3 className="sr-only">Review data</h3>

                <dl className="space-y-3">
                  {reviews.counts.map((count) => (
                    <div
                      key={count.rating}
                      className="flex items-center text-sm"
                    >
                      <dt className="flex flex-1 items-center">
                        <p className="w-3 font-medium text-gray-900">
                          {count.rating}
                          <span className="sr-only"> star reviews</span>
                        </p>
                        <div
                          aria-hidden="true"
                          className="ml-1 flex flex-1 items-center"
                        >
                          <StarIcon
                            className={classNames(
                              count.count > 0
                                ? "text-yellow-400"
                                : "text-gray-300",
                              "h-5 w-5 flex-shrink-0"
                            )}
                            aria-hidden="true"
                          />

                          <div className="relative ml-3 flex-1">
                            <div className="h-3 rounded-full border border-gray-200 bg-gray-100" />
                            {count.count > 0 ? (
                              <div
                                className="absolute inset-y-0 rounded-full border border-yellow-400 bg-yellow-400"
                                style={{
                                  width: `calc(${count.count} / ${reviews.totalCount} * 100%)`,
                                }}
                              />
                            ) : null}
                          </div>
                        </div>
                      </dt>
                      <dd className="ml-3 w-10 text-right text-sm tabular-nums text-gray-900">
                        {Math.round((count.count / reviews.totalCount) * 100)}%
                      </dd>
                    </div>
                  ))}
                </dl>
              </div>

              <div className="mt-10">
                <h3 className="text-lg font-medium text-gray-900">
                  Share your thoughts
                </h3>
                <p className="mt-1 text-sm text-gray-600">
                  If you’ve used this product, share your thoughts with other
                  customers
                </p>

                <a
                  href="#"
                  className="mt-6 inline-flex w-full items-center justify-center rounded-md border border-gray-300 bg-white px-8 py-2 text-sm font-medium text-gray-900 hover:bg-gray-50 sm:w-auto lg:w-full"
                >
                  Write a review
                </a>
              </div>
            </div>

            <div className="mt-16 lg:col-span-7 lg:col-start-6 lg:mt-0">
              <h3 className="sr-only">Recent reviews</h3>

              <div className="flow-root">
                <div className="-my-12 divide-y divide-gray-200">
                  {reviews.featured.map((review) => (
                    <div key={review.id} className="py-12">
                      <div className="flex items-center">
                        <img
                          src={review.avatarSrc}
                          alt={`${review.author}.`}
                          className="h-12 w-12 rounded-full"
                        />
                        <div className="ml-4">
                          <h4 className="text-sm font-bold text-gray-900">
                            {review.author}
                          </h4>
                          <div className="mt-1 flex items-center">
                            {[0, 1, 2, 3, 4].map((rating) => (
                              <StarIcon
                                key={rating}
                                className={classNames(
                                  review.rating > rating
                                    ? "text-yellow-400"
                                    : "text-gray-300",
                                  "h-5 w-5 flex-shrink-0"
                                )}
                                aria-hidden="true"
                              />
                            ))}
                          </div>
                          <p className="sr-only">
                            {review.rating} out of 5 stars
                          </p>
                        </div>
                      </div>

                      <div
                        className="mt-4 space-y-6 text-base italic text-gray-600"
                        dangerouslySetInnerHTML={{ __html: review.content }}
                      />
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
