import BookmarkModal from "../../utils/BookmarkModal";
import { EllipsisHorizontalIcon } from "@heroicons/react/24/solid";
import { useState } from "react";
const data = "Noteworthy technology acquisitions 2021";
export default function TitleAndBookmark({ title = data }) {
  const [showModal, setShowModal] = useState(false);
  const openModal = () => setShowModal(true);
  const closeModal = () => setShowModal(false);
  return (
    <>
      <div className="flex items-center   justify-between  pr-2">
        <a href="#">
          <h3 className=" mt-3 text-lg font-semibold leading-6 text-gray-900 group-hover:text-gray-600">
            {title}
          </h3>
        </a>

        <button onClick={openModal} className="" title="bookmark">
          <EllipsisHorizontalIcon className="h-6 w-6  flex-shrink-0 text-gray-900 dark:text-white " />
        </button>
      </div>
      <BookmarkModal show={showModal} onClose={closeModal} />
    </>
  );
}
