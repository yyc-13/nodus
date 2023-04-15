import { StarIcon } from "@heroicons/react/20/solid";
import { useState } from "react";
import useSWR from "swr";

function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}

async function fetcher(url) {
  const res = await fetch(url);
  return res.json();
}

export default function ProductReview({ reviewStatic, productId }) {
  const [currentPage, setCurrentPage] = useState(1);
  const reviewsPerPage = 5;

  const { data: reviews, error } = useSWR(
    `/api/product/review?productId=${productId}&page=${currentPage}&limit=${reviewsPerPage}`,
    fetcher
  );
  console.log("reviews", reviews);
  if (error) {
    return <div>Error: {error.message}</div>;
  }
  const totalPages = Math.ceil(reviewStatic.reviewCount / reviewsPerPage);

  function handlePageChange(newPage) {
    setCurrentPage(newPage);
  }

  return (
    <div className="bg-white">
      <div className="mx-auto max-w-2xl px-4 py-16 sm:px-6 sm:py-24 lg:grid lg:max-w-7xl lg:grid-cols-12 lg:gap-x-8 lg:px-8 lg:py-32">
        <div className="lg:col-span-4">
          <h2 className="text-2xl font-bold tracking-tight text-gray-900">
            Customer Reviews
          </h2>

          <div className="mt-3 flex items-center">
            <div>
              <div className="flex items-center">
                {[0, 1, 2, 3, 4].map((star, index) => (
                  <StarIcon
                    key={index}
                    className={classNames(
                      reviewStatic.avgRating > star
                        ? "text-yellow-400"
                        : "text-gray-300",
                      "h-5 w-5 flex-shrink-0"
                    )}
                    aria-hidden="true"
                  />
                ))}
              </div>
              <p className="sr-only">{reviewStatic.avgRating} out of 5 stars</p>
            </div>
            <p className="ml-2 text-sm text-gray-900">
              Based on {reviewStatic.reviewCount} reviews
            </p>
          </div>

          <div className="mt-6">
            <h3 className="sr-only">Review data</h3>

            <dl className="space-y-3">
              {reviewStatic.ratingCounts.map((count) => (
                <div key={count.rating} className="flex items-center text-sm">
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
                          count.count > 0 ? "text-yellow-400" : "text-gray-300",
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
                              width: `calc(${count.count} / ${reviewStatic.reviewCount} * 100%)`,
                            }}
                          />
                        ) : null}
                      </div>
                    </div>
                  </dt>
                  <dd className="ml-3 w-10 text-right text-sm tabular-nums text-gray-900">
                    {Math.round((count.count / reviewStatic.reviewCount) * 100)}
                    %
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
              {reviews &&
                reviews.map((review) => (
                  <div key={review.id} className="py-12">
                    <div className="flex items-center">
                      <img
                        src={review.author.image}
                        alt={`${review.author.name}.`}
                        className="h-12 w-12 rounded-full"
                      />
                      <div className="ml-4">
                        <h4 className="text-sm font-bold text-gray-900">
                          {review.author.name}
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

      <nav
        className="flex items-center justify-between border-t border-gray-200 bg-white px-4 py-3 sm:px-6"
        aria-label="Pagination"
      >
        <div className="hidden sm:block">
          <p className="text-sm text-gray-700">
            Showing{" "}
            <span className="font-medium">
              {(currentPage - 1) * reviewsPerPage + 1}
            </span>{" "}
            to{" "}
            <span className="font-medium">
              {reviews && (currentPage - 1) * reviewsPerPage + reviews.length}
            </span>{" "}
            of{" "}
            <span className="font-medium">
              {reviewStatic.reviewCount}
              {" reviews"}
            </span>{" "}
          </p>
        </div>
        <div className="flex flex-1 justify-between sm:justify-end">
          <button
            onClick={() => handlePageChange(currentPage - 1)}
            disabled={currentPage === 1}
            className="relative inline-flex items-center rounded-md bg-white px-3 py-2 text-sm font-semibold text-gray-900 ring-1 ring-inset ring-gray-300 enabled:hover:bg-gray-50 focus-visible:outline-offset-0 disabled:opacity-40"
          >
            Previous
          </button>
          <button
            onClick={() => handlePageChange(currentPage + 1)}
            disabled={currentPage === totalPages}
            className="relative ml-3 inline-flex items-center rounded-md bg-white px-3 py-2 text-sm font-semibold text-gray-900 ring-1 ring-inset ring-gray-300 enabled:hover:bg-gray-50 disabled:opacity-40 focus-visible:outline-offset-0"
          >
            Next
          </button>
        </div>
      </nav>
    </div>
  );
}
