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

// const product = {
//   name: "Zip Tote Basket",
//   price: "$140",
//   rating: 4,
//   images: [
//     {
//       id: 1,
//       name: "Angled view",
//       src: "https://tailwindui.com/img/ecommerce-images/product-page-03-product-01.jpg",
//       alt: "Angled front view with bag zipped and handles upright.",
//     },
//     // More images...
//   ],

//   description: `
//     <p>The Zip Tote Basket is the perfect midpoint between shopping tote and comfy backpack. With convertible straps, you can hand carry, should sling, or backpack this convenient and spacious bag. The zip top and durable canvas construction keeps your goods protected for all-day use.</p>
//   `,
//   details: [
//     {
//       name: "Features",
//       items: [
//         "Multiple strap configurations",
//         "Spacious interior with top zip",
//         "Leather handle and tabs",
//         "Interior dividers",
//         "Stainless strap loops",
//         "Double stitched construction",
//         "Water-resistant",
//       ],
//     },
//     // More sections...
//   ],
// };

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

function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}

export default function ProductInfo({ product }) {
  const seller = product.seller;
  return (
    <div className="lg:grid lg:grid-cols-2 lg:items-start lg:gap-x-8">
      {/* Files */}
      <div className={`flex items-center `}>
        <div className="mx-auto max-w-lg">
          <h1 className="text-3xl font-bold tracking-tight text-gray-900 my-3">
            {product.title}
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
            {product.previewUrls.map((previewUrl) => (
              <li key={previewUrl.id}>
                <div className="group relative flex items-start space-x-3 py-4">
                  <div className="flex-shrink-0">
                    <span
                      className={classNames(
                        " bg-yellow-500 inline-flex h-10 w-10 items-center justify-center rounded-lg"
                      )}
                    >
                      <ArrowDownTrayIcon
                        className="h-6 w-6 text-white "
                        aria-hidden="true"
                      />
                    </span>
                  </div>
                  <div className="min-w-0 flex-1">
                    <div className="text-sm font-medium text-gray-900">
                      <a href={previewUrl.url}>
                        <span className="absolute inset-0" aria-hidden="true" />
                        {previewUrl.title}
                      </a>
                    </div>
                    <p className="text-sm text-gray-500">
                      {previewUrl.description}
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
          <h2 className="mt-4 text-base font-semibold leading-6 text-gray-900">
            Paid Files
          </h2>
          <p className="mt-1 text-sm text-gray-500"></p>
          <ul
            role="list"
            className="mt-6 divide-y divide-gray-200 border-b border-t border-gray-200"
          >
            {product.prodUrls.map((prodUrl) => (
              <li key={prodUrl.id}>
                <div className="group relative flex items-start space-x-3 py-4">
                  <div className="flex-shrink-0">
                    <span
                      className={classNames(
                        " bg-yellow-500 inline-flex h-10 w-10 items-center justify-center rounded-lg"
                      )}
                    >
                      <ArrowDownTrayIcon
                        className="h-6 w-6 text-white "
                        aria-hidden="true"
                      />
                    </span>
                  </div>
                  <div className="min-w-0 flex-1">
                    <div className="text-sm font-medium text-gray-900">
                      <a href={prodUrl.url}>
                        <span className="absolute inset-0" aria-hidden="true" />
                        {prodUrl.title}
                      </a>
                    </div>
                    <p className="text-sm text-gray-500">
                      {prodUrl.description}
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
        </div>
      </div>

      {/* Product info */}
      <div className="mt-10 px-4 sm:mt-16 sm:px-0 lg:mt-0">
        <h1 className="text-3xl font-bold tracking-tight text-gray-900">
          {product.title}
        </h1>

        <div className="mt-3">
          <h2 className="sr-only">Product information</h2>
          <p className="text-3xl tracking-tight text-gray-900">
            ${product.price}
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
            <div className="ml-2">
              {Math.round(product.rating * 100) / 100} out of 5
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

          <div
            key={seller.id}
            className="col-span-1 divide-y divide-gray-200 rounded-lg bg-white shadow"
          >
            <div className="flex w-full items-center justify-between space-x-6 p-6">
              <div className="flex-1 truncate">
                <div className="flex items-center space-x-3">
                  <h3 className="truncate text-sm font-medium text-gray-900">
                    {seller.userInfo.nickname}
                  </h3>
                  <span className="inline-block flex-shrink-0 rounded-full bg-green-100 px-2 py-0.5 text-xs font-medium text-green-800">
                    {"person.role or tag"}
                  </span>
                </div>
                <p className="mt-1 truncate text-sm text-gray-500">
                  {seller.userInfo.introduction}
                </p>
              </div>
              <img
                className="h-10 w-10 flex-shrink-0 rounded-full bg-gray-300"
                src={seller.image}
                alt=""
              />
            </div>
            <div>
              <div className="-mt-px flex divide-x divide-gray-200">
                <div className="flex w-0 flex-1">
                  <a
                    href={`#`}
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
                    href={`#`}
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
          </div>

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
              <HeartIcon className="h-6 w-6 flex-shrink-0" aria-hidden="true" />
              <span className="sr-only">Add to favorites</span>
            </button>
          </div>
        </form>

        <section aria-labelledby="details-heading" className="mt-12">
          <h2 id="details-heading" className="sr-only">
            Additional details
          </h2>

          {/* <div className="divide-y divide-gray-200 border-t">
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
                    <Disclosure.Panel as="div" className="prose prose-sm pb-6">
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
          </div> */}
        </section>
      </div>
    </div>
  );
}
