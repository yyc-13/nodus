import {
  Fragment,
  createContext,
  useContext,
  useEffect,
  useRef,
  useState,
} from "react";
import CategoryData from "../../lib/categoryData";
const SelectedCategoryContext = createContext();
const data = CategoryData;
import Masonry from "@mui/lab/Masonry";
import QuickSearch from "./QuickSearch";
import { Dialog, Transition } from "@headlessui/react";
import { XMarkIcon } from "@heroicons/react/24/outline";

export default function CategoryDictionary({
  open,
  setOpen,
  setCategory,
  setValue,
  title,
}) {
  const inputRef = useRef();
  const [searchTerm, setSearchTerm] = useState("");
  const [filteredData, setFilteredData] = useState(data);

  // short cut
  useEffect(() => {
    const handleKeyDown = (event) => {
      if (event.metaKey && event.key === "k") {
        event.preventDefault();
        inputRef.current.focus();
      } else if (event.key === "Escape") {
        inputRef.current.blur();
      }
    };

    window.addEventListener("keydown", handleKeyDown);

    // Clean up the event listener when the component unmounts
    return () => {
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, []);

  // search filter
  useEffect(() => {
    const lowerCaseSearchTerm = searchTerm.toLowerCase();

    const newFilteredData = data
      .map((category) => {
        const lowerCaseCategoryName = category.name.toLowerCase();

        const categoryMatch =
          lowerCaseCategoryName.includes(lowerCaseSearchTerm);

        let subcategoriesMatch = false;
        let filteredSubcategories = [];

        if (!categoryMatch) {
          filteredSubcategories = category.subcategories.filter(
            (subcategory) => {
              const lowerCaseSubcategoryName = subcategory.name.toLowerCase();
              if (lowerCaseSubcategoryName.includes(lowerCaseSearchTerm)) {
                subcategoriesMatch = true;
                return true;
              }
              return false;
            }
          );
        }

        if (categoryMatch || subcategoriesMatch) {
          return {
            ...category,
            subcategories: categoryMatch
              ? category.subcategories
              : filteredSubcategories,
          };
        }

        return null;
      })
      .filter(Boolean);

    setFilteredData(newFilteredData);
  }, [searchTerm]);

  const handleClick = (
    categoryName,
    subCategoryName = null,
    subSubCategoryName = null
  ) => {
    const categories = [
      categoryName,
      subCategoryName,
      subSubCategoryName,
    ].filter((item) => item != null);

    setValue(title, categories);
    setCategory(categories);
    setOpen(false);
    return;
  };

  return (
    <Transition.Root show={open} as={Fragment}>
      <Dialog as="div" className="relative z-10" onClose={setOpen}>
        <Transition.Child
          as={Fragment}
          enter="ease-out duration-300"
          enterFrom="opacity-0"
          enterTo="opacity-100"
          leave="ease-in duration-200"
          leaveFrom="opacity-100"
          leaveTo="opacity-0"
        >
          <div className="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity" />
        </Transition.Child>

        <div className="fixed inset-0 z-10 overflow-y-auto p-10">
          <div className="flex min-h-full items-end justify-center p-4 text-center sm:items-center sm:p-0">
            <Transition.Child
              as={Fragment}
              enter="ease-out duration-300"
              enterFrom="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
              enterTo="opacity-100 translate-y-0 sm:scale-100"
              leave="ease-in duration-200"
              leaveFrom="opacity-100 translate-y-0 sm:scale-100"
              leaveTo="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
            >
              <Dialog.Panel className="relative transform overflow-hidden rounded-lg bg-white px-4 pb-4 pt-5 text-left shadow-xl transition-all sm:my-8 sm:w-full  sm:p-6">
                <button
                  type="button"
                  onClick={() => setOpen(false)}
                  className="absolute top-3 right-2.5 text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm p-1.5 ml-auto inline-flex items-center dark:hover:bg-gray-800 dark:hover:text-white"
                  data-modal-hide="crypto-modal"
                >
                  <XMarkIcon aria-hidden="true" className="w-5 h-5" />
                  <span className="sr-only">Close modal</span>
                </button>

                <div className="mt-3 text-center sm:mt-5">
                  <Dialog.Title
                    as="h3"
                    className="text-base font-semibold leading-6 text-gray-900"
                  >
                    Select a category
                  </Dialog.Title>
                </div>

                <div className="w-full p-10">
                  <button className="text-2xl font-extrabold tracking-tight text-slate-900 w-full">
                    Category Dictionary
                  </button>
                  <QuickSearch inputRef={inputRef} onSearch={setSearchTerm} />
                  {/* breakpoint is from MUI:https://mui.com/material-ui/customization/breakpoints/ */}
                  <Masonry
                    columns={{ xs: 1, sm: 3, md: 3, lg: 4, xl: 5 }}
                    spacing={2}
                  >
                    {filteredData.map((category, index) => (
                      <div key={index}>
                        <button
                          className="font-bold text-lg my-2 text-indigo-600 hover:underline"
                          onClick={() => handleClick(category.name)}
                        >
                          {category.name}
                        </button>

                        <ul className="space-y-1">
                          {category.subcategories.map(
                            (subcategory, subIndex) => {
                              return (
                                <li key={subIndex}>
                                  <button
                                    className="text-indigo-600 hover:underline"
                                    onClick={() =>
                                      handleClick(
                                        category.name,
                                        subcategory.name
                                      )
                                    }
                                  >
                                    {subcategory.name}
                                  </button>
                                  {subcategory.subcategories && (
                                    <ul className="space-y-1 pl-4">
                                      {subcategory.subcategories.map(
                                        (subSubcategory, subSubIndex) => (
                                          <li key={subSubIndex}>
                                            <button
                                              className="text-indigo-600 hover:underline"
                                              onClick={() =>
                                                handleClick(
                                                  category.name,
                                                  subcategory.name,
                                                  subSubcategory.name
                                                )
                                              }
                                            >
                                              {subSubcategory.name}
                                            </button>
                                          </li>
                                        )
                                      )}
                                    </ul>
                                  )}
                                </li>
                              );
                            }
                          )}
                        </ul>
                      </div>
                    ))}
                  </Masonry>
                </div>
              </Dialog.Panel>
            </Transition.Child>
          </div>
        </div>
      </Dialog>
    </Transition.Root>
  );
}
