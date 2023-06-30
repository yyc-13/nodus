import { Dialog, Transition } from "@headlessui/react";
import { Fragment, useState } from "react";
import { useForm } from "react-hook-form";
import CollectionModal from "@/components/utils/CollectionModal";
import { PlusIcon } from "@heroicons/react/20/solid";
import useSWR, { mutate } from "swr";

const fetcher = (url) => fetch(url).then((res) => res.json());

export default function Collection() {
  const [open, setOpen] = useState(false);
  const { data: collections, error } = useSWR(`/api/collection`, fetcher);

  if (collections?.error || error) return <div>Error loading collections.</div>;
  if (!collections) return <div>Loading collections...</div>;
  console.log(collections);
  return (
    <div className="bg-white py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl lg:mx-0 flex  justify-between">
          <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
            Collections
          </h2>
          <div>
            <button
              onClick={() => setOpen(true)}
              title="add collection"
              type="button"
              className="rounded-full bg-indigo-600 p-1 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
            >
              <PlusIcon className="h-5 w-5" aria-hidden="true" />
            </button>
            <CollectionModal open={open} setOpen={setOpen} mutate={mutate} />
          </div>
        </div>
        <ul
          role="list"
          className="mx-auto mt-20 grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 sm:grid-cols-2 lg:mx-0 lg:max-w-none lg:grid-cols-3"
        >
          {collections.map((collection) => {
            console.log("collection");

            return (
              <li key={collection.id}>
                <img
                  className="aspect-[3/2] w-full rounded-2xl object-cover"
                  src={collection.coverPhoto}
                  alt=""
                />
                <h3 className="mt-6 text-lg font-semibold leading-8 tracking-tight text-gray-900">
                  {collection.name}
                </h3>
                <p className="text-base leading-7 text-gray-600">
                  {collection.description}
                </p>
              </li>
            );
          })}
        </ul>
      </div>
    </div>
  );
}
