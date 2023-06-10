import { HomeIcon } from "@heroicons/react/20/solid";

const data = ["category", "category"];

export default function Breadcrumb({ categories = data }) {
  return (
    <div className="flex items-center gap-x-4 col-span-2">
      {categories && (
        <nav className="flex" aria-label="Breadcrumb">
          <ol className="flex items-center ">
            {categories
              .filter((item) => item !== null)
              .map((item, index) => (
                <li key={"category" + index}>
                  <div className="flex items-center">
                    {index !== 0 && (
                      <svg
                        className="h-5 w-5 flex-shrink-0 text-gray-300"
                        fill="currentColor"
                        viewBox="0 0 20 20"
                        aria-hidden="true"
                      >
                        <path d="M5.555 17.776l8-16 .894.448-8 16-.894-.448z" />
                      </svg>
                    )}
                    <a
                      href="#"
                      className=" text-sm font-medium text-gray-500 hover:text-gray-700"
                    >
                      {item}
                    </a>
                  </div>
                </li>
              ))}
          </ol>
        </nav>
      )}
    </div>
  );
}
