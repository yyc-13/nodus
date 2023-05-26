import { ChevronDownIcon } from "@heroicons/react/24/solid";

export default function ExpandMoreBtn({ expand }) {
  return (
    <button
      type="button"
      className=" col-span-full rounded-full  p-1.5 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600 self-start flex items-center justify-center    font-bold bg-slate-500"
      title="Show more"
      onClick={expand}
    >
      <ChevronDownIcon className="h-5 w-5" aria-hidden="true" />
    </button>
  );
}
