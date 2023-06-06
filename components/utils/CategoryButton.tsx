// CategoryButton.tsx
import { PlusIcon, XMarkIcon } from "@heroicons/react/20/solid";
import CategoryDictionary from "./CategoryDictionary";
import FormDictionary from "./FormDictionary";

export default function CategoryButton({
  categoryModal,
  setCategoryModal,
  setCategory,
  setValue,
  title,
  category,
  useRef,
  setProductFileType,
  errors,
}) {
  const openModal = () => {
    setCategoryModal(true);
    return;
  };
  return (
    <div className=" sm:grid sm:grid-cols-3 sm:items-start sm:gap-4 sm:border-gray-200 sm:pt-5">
      <h2 className="block text-sm font-medium leading-6 text-gray-900 sm:pt-1.5">
        Select {title == "category1" ? "form" : "category"}
      </h2>
      {errors[title]?.message && (
        <p className="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded relative ">
          {errors[title]?.message}
        </p>
      )}
      {category.length == 0 && (
        <button
          title="Add a category"
          type="button"
          onClick={openModal}
          className="rounded-full bg-indigo-600 p-1.5 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
        >
          <PlusIcon className="h-5 w-5 mx-auto" />
        </button>
      )}
      {category.length > 0 && (
        <div className="flex items-center gap-x-4 col-span-2">
          <button
            title="remove category"
            type="button"
            onClick={() => {
              setCategory([]);
              setValue(title, []);
              if (title == "category1") {
                setProductFileType("");
                setValue("productFileType", "");
              }
            }}
            className="w-6 h-6 flex items-center justify-center "
          >
            <XMarkIcon />
          </button>
          {category && (
            <nav className="flex" aria-label="Breadcrumb">
              <ol className="flex items-center space-x-4">
                {category
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
                          className="ml-4 text-sm font-medium text-gray-500 hover:text-gray-700"
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
      )}
      {title == "category1" ? (
        <FormDictionary
          setValue={setValue}
          title={title}
          open={categoryModal}
          setOpen={setCategoryModal}
          setCategory={setCategory}
          isActive={true}
          useRef={useRef}
          setProductFileType={setProductFileType}
        />
      ) : (
        <CategoryDictionary
          setValue={setValue}
          title={title}
          open={categoryModal}
          setOpen={setCategoryModal}
          setCategory={setCategory}
          useRef={useRef}
        />
      )}
    </div>
  );
}
