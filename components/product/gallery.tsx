import useSWRInfinite from "swr/infinite";
import { useInView } from "react-intersection-observer";
import { useState, useEffect } from "react";
import CardSm from "./card-sm";

const fetcher = (url) => fetch(url).then((res) => res.json());
const PAGE_SIZE = 6;

export default function Gallery({ type }: { type: string }) {
  const { ref, inView } = useInView({ threshold: 0 });
  const { data, mutate, size, setSize, isValidating, isLoading } =
    useSWRInfinite(
      (index, previousPageData) => {
        return `/api/product/all?page=${
          index + 1
        }&per_page=${PAGE_SIZE}&type=${type}`;
      },
      fetcher,
      { initialSize: 2 }
    );

  const products = data ? [].concat(...data) : [];
  const isEmpty = data?.[0]?.length === 0;
  const isReachingEnd =
    isEmpty || (data && data[data.length - 1]?.length < PAGE_SIZE);

  useEffect(() => {
    if (inView) {
      setSize(size + 1);
    }
  }, [inView]);

  return (
    <div className="bg-white py-4 sm:py-4 border-t border-gray-200 pt-10">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl lg:mx-0">
          <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
            {type}
          </h2>
        </div>
        <div className="overflow-x-scroll   grid-rows-2 grid-flow-col  mx-auto mt-10 grid max-w-2xl  gap-x-8 gap-y-16 border-t border-gray-200 pt-10 sm:mt-16 sm:pt-16 lg:mx-0 lg:max-w-none shrink-0">
          {products.map((product, index) => (
            <CardSm product={product} key={index} />
          ))}
          {!isReachingEnd && (
            <div ref={ref} className=" inline-block w-3">
              load more...
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
