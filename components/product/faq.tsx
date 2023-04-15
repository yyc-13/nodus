import { Disclosure } from "@headlessui/react";
import { MinusSmallIcon, PlusSmallIcon } from "@heroicons/react/24/outline";
import { useState } from "react";
import useSWR from "swr";

async function fetcher(url) {
  const res = await fetch(url);
  return res.json();
}

export default function ProductFAQ({ productId, faqStatic }) {
  const [currentPage, setCurrentPage] = useState(1);
  const faqsPerPage = 5;
  const { data: faqs, error } = useSWR(
    `/api/product/faq?productId=${productId}&page=${currentPage}&limit=${faqsPerPage}`,
    fetcher
  );

  console.log("faqs", faqs);

  const totalPages = Math.ceil(faqStatic.faqCount / faqsPerPage);
  function handlePageChange(newPage) {
    setCurrentPage(newPage);
  }

  return (
    <div className="bg-white">
      <div className="mx-auto max-w-7xl px-6 py-24 sm:py-32 lg:px-8 lg:py-40">
        <div className="mx-auto max-w-4xl divide-y divide-gray-900/10">
          <h2 className="text-2xl font-bold leading-10 tracking-tight text-gray-900">
            Frequently asked questions
          </h2>
          <dl className="mt-10 space-y-6 divide-y divide-gray-900/10">
            {faqs &&
              faqs.map((faq) => (
                <Disclosure as="div" key={faq.content} className="pt-6">
                  {({ open }) => (
                    <>
                      <dt>
                        <Disclosure.Button className="flex w-full items-start justify-between text-left text-gray-900">
                          <span className="text-base font-semibold leading-7">
                            {faq.content}
                          </span>
                          <span className="ml-6 flex h-7 items-center">
                            {open ? (
                              <MinusSmallIcon
                                className="h-6 w-6"
                                aria-hidden="true"
                              />
                            ) : (
                              <PlusSmallIcon
                                className="h-6 w-6"
                                aria-hidden="true"
                              />
                            )}
                          </span>
                        </Disclosure.Button>
                      </dt>
                      <Disclosure.Panel as="dd" className="mt-2 pr-12">
                        {faq.answers.map((answer) => {
                          return (
                            <p
                              key={answer.id}
                              className="text-base leading-7 text-gray-600"
                            >
                              {answer.content}
                            </p>
                          );
                        })}
                        <p className="text-base leading-7 text-gray-600">
                          {faq.answer}
                        </p>
                      </Disclosure.Panel>
                    </>
                  )}
                </Disclosure>
              ))}
          </dl>
        </div>
        <nav
          className="flex items-center justify-between border-t border-gray-200 bg-white px-4 py-3 sm:px-6"
          aria-label="Pagination"
        >
          <div className="hidden sm:block">
            <p className="text-sm text-gray-700">
              Showing{" "}
              <span className="font-medium">
                {(currentPage - 1) * faqsPerPage + 1}
              </span>{" "}
              to{" "}
              <span className="font-medium">
                {faqs && (currentPage - 1) * faqsPerPage + faqs.length}
              </span>{" "}
              of{" "}
              <span className="font-medium">
                {faqStatic.reviewCount}
                {" faqs"}
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
    </div>
  );
}
