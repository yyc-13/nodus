import React from "react";
import { BookmarkIcon } from "@heroicons/react/24/solid";
import {
  BookmarkIcon as BookmarkOutline,
  XMarkIcon,
} from "@heroicons/react/24/outline";
const data = [
  { title: "jazz", collected: false },
  { title: "read", collected: false },
  { title: "listen", collected: true },
];

const Modal = ({ show, onClose }) => {
  if (!show) {
    return null;
  }

  const handleClick = (e) => {
    if (e.target === e.currentTarget) {
      onClose();
    }
  };

  return (
    <>
      {/* // modal */}
      <div
        onClick={handleClick}
        tabIndex="-1"
        aria-hidden="true"
        className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black bg-opacity-50"
      >
        <div className="relative bg-white rounded-lg shadow-lg dark:bg-gray-800 w-72">
          {/* < />!-- Modal content --> */}
          <div className="relative bg-white rounded-lg shadow dark:bg-gray-700  w-">
            <button
              type="button"
              onClick={onClose}
              className="absolute top-3 right-2.5 text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm p-1.5 ml-auto inline-flex items-center dark:hover:bg-gray-800 dark:hover:text-white"
              data-modal-hide="crypto-modal"
            >
              <XMarkIcon aria-hidden="true" className="w-5 h-5" />
              <span className="sr-only">Close modal</span>
            </button>
            {/* < />!-- Modal header --> */}
            <div className="px-6 py-4 border-b rounded-t dark:border-gray-600">
              <h3 className="text-base font-semibold text-gray-900 lg:text-xl dark:text-white">
                Bookmarks
              </h3>
            </div>
            {/* < />!-- Modal body --> */}
            <div className="p-6">
              <ul className=" space-y-3">
                {data.map((el, index) => {
                  return (
                    <li key={index}>
                      <a
                        href="#"
                        className="flex items-center p-3 text-base font-bold text-gray-900 rounded-lg bg-gray-50 hover:bg-gray-100 group hover:shadow dark:bg-gray-600 dark:hover:bg-gray-500 dark:text-white"
                      >
                        {el.collected ? (
                          <BookmarkIcon className="h-6 w-6  flex-shrink-0 text-gray-900 dark:text-white " />
                        ) : (
                          <BookmarkOutline className="h-6 w-6  flex-shrink-0 text-gray-900 dark:text-white " />
                        )}
                        <span className="flex-1 ml-3 whitespace-nowrap">
                          {el.title}
                        </span>
                      </a>
                    </li>
                  );
                })}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Modal;

// export function Test() {
//   return (
//     <div className="flex flex-col bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700 relative ">
//       <a
//         href="#"
//         class="block relative h-0 overflow-hidden"
//         style="padding-top:56.25%"
//       >
//         <video
//           class="absolute inset-0 w-full h-full object-cover rounded-t-lg"
//           src="/test/t-verticle.mp4"
//           preload="metadata"
//           controls=""
//         ></video>
//         <div className="absolute  top-2 left-2 p-2">
//           <span className="inline-block mx-1 px-2 py-1 mb-1 text-xs font-semibold text-blue-800 bg-blue-100 rounded dark:text-blue-300 dark:bg-blue-900">
//             valorant
//           </span>
//           <span className="inline-block mx-1 px-2 py-1 mb-1 text-xs font-semibold text-blue-800 bg-blue-100 rounded dark:text-blue-300 dark:bg-blue-900">
//             dog
//           </span>
//           <span className="inline-block mx-1 px-2 py-1 mb-1 text-xs font-semibold text-blue-800 bg-blue-100 rounded dark:text-blue-300 dark:bg-blue-900">
//             free
//           </span>
//           <span className="inline-block mx-1 px-2 py-1 mb-1 text-xs font-semibold text-blue-800 bg-blue-100 rounded dark:text-blue-300 dark:bg-blue-900">
//             doc
//           </span>
//         </div>
//       </a>
//       <div className="p-5 flex flex-col h-full">
//         <nav className="flex" aria-label="Breadcrumb">
//           <ol role="list" className="flex items-center space-x-1 md:space-x-4">
//             <li>
//               <div>
//                 <a href="#" className="text-gray-400 hover:text-gray-500">
//                   <svg
//                     xmlns="http://www.w3.org/2000/svg"
//                     viewBox="0 0 20 20"
//                     fill="currentColor"
//                     aria-hidden="true"
//                     className="h-5 w-5 flex-shrink-0"
//                   >
//                     <path
//                       fill-rule="evenodd"
//                       d="M9.293 2.293a1 1 0 011.414 0l7 7A1 1 0 0117 11h-1v6a1 1 0 01-1 1h-2a1 1 0 01-1-1v-3a1 1 0 00-1-1H9a1 1 0 00-1 1v3a1 1 0 01-1 1H5a1 1 0 01-1-1v-6H3a1 1 0 01-.707-1.707l7-7z"
//                       clip-rule="evenodd"
//                     ></path>
//                   </svg>
//                   <span className="sr-only">Home</span>
//                 </a>
//               </div>
//             </li>
//             <li>
//               <div className="flex items-center">
//                 <svg
//                   className="h-5 w-5 flex-shrink-0 text-gray-300"
//                   fill="currentColor"
//                   viewBox="0 0 20 20"
//                   aria-hidden="true"
//                 >
//                   <path d="M5.555 17.776l8-16 .894.448-8 16-.894-.448z"></path>
//                 </svg>
//                 <a
//                   href="#"
//                   className="ml-4 text-sm font-medium text-gray-500 hover:text-gray-700"
//                 >
//                   category
//                 </a>
//               </div>
//             </li>
//             <li>
//               <div className="flex items-center">
//                 <svg
//                   className="h-5 w-5 flex-shrink-0 text-gray-300"
//                   fill="currentColor"
//                   viewBox="0 0 20 20"
//                   aria-hidden="true"
//                 >
//                   <path d="M5.555 17.776l8-16 .894.448-8 16-.894-.448z"></path>
//                 </svg>
//                 <a
//                   href="#"
//                   className="ml-4 text-sm font-medium text-gray-500 hover:text-gray-700"
//                 >
//                   category
//                 </a>
//               </div>
//             </li>
//           </ol>
//         </nav>
//         <div className="flex items-center  pr-2">
//           <a href="#">
//             <h5 className="mb-1 text-xl font-bold tracking-tight text-gray-900 dark:text-white"></h5>
//           </a>
//           <button className="" title="bookmark">
//             <svg
//               xmlns="http://www.w3.org/2000/svg"
//               viewBox="0 0 24 24"
//               fill="currentColor"
//               aria-hidden="true"
//               className="h-6 w-6  flex-shrink-0 text-gray-900 dark:text-white "
//             >
//               <path
//                 fill-rule="evenodd"
//                 d="M4.5 12a1.5 1.5 0 113 0 1.5 1.5 0 01-3 0zm6 0a1.5 1.5 0 113 0 1.5 1.5 0 01-3 0zm6 0a1.5 1.5 0 113 0 1.5 1.5 0 01-3 0z"
//                 clip-rule="evenodd"
//               ></path>
//             </svg>
//           </button>
//         </div>
//         <p
//           class="mb-2 font-normal text-gray-700 dark:text-gray-400"
//           style="overflow:hidden;display:-webkit-box;-webkit-box-orient:vertical;-webkit-line-clamp:4"
//         >
//           Here are the biggest enterprise technology acquisitions of 2021 so
//           far, in reverse chronological order.Here are the biggest enterprise
//           technology acquisitions of 2021 so far, in reverse chronological
//           order,Here are the biggest enterprise technology acquisitions of 2021
//           so far, in reverse chronological order,Here are the biggest enterprise
//           technology acquisitions of 2021 so far, in reverse chronological
//           order,Here are the biggest enterprise technology acquisitions of 2021
//           so far, in reverse chronological order,Here are the biggest enterprise
//           technology acquisitions of 2021 so far, in reverse chronological
//           order,Here are the biggest enterprise technology acquisitions of 2021
//           so far, in reverse chronological order,Here are the biggest enterprise
//           technology acquisitions of 2021 so far, in reverse chronological
//           order,Here are the biggest enterprise technology acquisitions of 2021
//           so far, in reverse chronological order Here are the biggest enterprise
//           technology acquisitions of 2021 so far, in reverse chronological
//           order,Here are the biggest enterprise technology acquisitions of 2021
//           so far, in reverse chronological order,Here are the biggest enterprise
//           technology acquisitions of 2021 so far, in reverse chronological
//           order,Here are the biggest enterprise technology acquisitions of 2021
//           so far, in reverse chronological order,Here are the biggest enterprise
//           technology acquisitions of 2021 so far, in reverse chronological
//           order,Here are the biggest enterprise technology acquisitions of 2021
//           so far, in reverse chronological order,Here are the biggest enterprise
//           technology acquisitions of 2021 so far, in reverse chronological
//           order,Here are the biggest enterprise technology acquisitions of 2021
//           so far, in reverse chronological order
//         </p>
//         <div className=" mt-auto flex items-center">
//           <div className="flex-shrink-0">
//             <a href="#">
//               <span className="sr-only">Roel Aufderehar</span>
//               <img
//                 className="h-10 w-10 rounded-full"
//                 src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&amp;ixid=eyJhcHBfaWQiOjEyMDd9&amp;auto=format&amp;fit=facearea&amp;facepad=2&amp;w=256&amp;h=256&amp;q=80"
//                 alt=""
//               />
//             </a>
//           </div>
//           <div className="ml-3">
//             <p className="text-sm font-medium text-gray-900 dark:text-white">
//               <a href="#" className="hover:underline">
//                 Roel Aufderehar
//               </a>
//             </p>
//             <div className="flex space-x-1 text-sm text-gray-700 dark:text-gray-400">
//               <time dateTime="2020-03-16">May 17, 2023</time>
//               <span aria-hidden="true">·</span>
//             </div>
//           </div>
//           <div className="ml-auto">
//             <div className="flex gap-x-1 items-center mb-1">
//               <svg
//                 xmlns="http://www.w3.org/2000/svg"
//                 viewBox="0 0 24 24"
//                 fill="currentColor"
//                 aria-hidden="true"
//                 className="h-5 w-5 flex-shrink-0 text-gray-700 dark:text-gray-300 sm:-ml-1"
//               >
//                 <path d="M21 6.375c0 2.692-4.03 4.875-9 4.875S3 9.067 3 6.375 7.03 1.5 12 1.5s9 2.183 9 4.875z"></path>
//                 <path d="M12 12.75c2.685 0 5.19-.586 7.078-1.609a8.283 8.283 0 001.897-1.384c.016.121.025.244.025.368C21 12.817 16.97 15 12 15s-9-2.183-9-4.875c0-.124.009-.247.025-.368a8.285 8.285 0 001.897 1.384C6.809 12.164 9.315 12.75 12 12.75z"></path>
//                 <path d="M12 16.5c2.685 0 5.19-.586 7.078-1.609a8.282 8.282 0 001.897-1.384c.016.121.025.244.025.368 0 2.692-4.03 4.875-9 4.875s-9-2.183-9-4.875c0-.124.009-.247.025-.368a8.284 8.284 0 001.897 1.384C6.809 15.914 9.315 16.5 12 16.5z"></path>
//                 <path d="M12 20.25c2.685 0 5.19-.586 7.078-1.609a8.282 8.282 0 001.897-1.384c.016.121.025.244.025.368 0 2.692-4.03 4.875-9 4.875s-9-2.183-9-4.875c0-.124.009-.247.025-.368a8.284 8.284 0 001.897 1.384C6.809 19.664 9.315 20.25 12 20.25z"></path>
//               </svg>
//               <p className="text-gray-700 dark:text-white">0</p>
//             </div>
//             <div className="flex gap-x-1 items-center">
//               <svg
//                 xmlns="http://www.w3.org/2000/svg"
//                 viewBox="0 0 24 24"
//                 fill="currentColor"
//                 aria-hidden="true"
//                 className="h-5 w-5 flex-shrink-0 text-gray-700 dark:text-gray-300 sm:-ml-1"
//               >
//                 <path
//                   fill-rule="evenodd"
//                   d="M12 1.5a.75.75 0 01.75.75V4.5a.75.75 0 01-1.5 0V2.25A.75.75 0 0112 1.5zM5.636 4.136a.75.75 0 011.06 0l1.592 1.591a.75.75 0 01-1.061 1.06l-1.591-1.59a.75.75 0 010-1.061zm12.728 0a.75.75 0 010 1.06l-1.591 1.592a.75.75 0 01-1.06-1.061l1.59-1.591a.75.75 0 011.061 0zm-6.816 4.496a.75.75 0 01.82.311l5.228 7.917a.75.75 0 01-.777 1.148l-2.097-.43 1.045 3.9a.75.75 0 01-1.45.388l-1.044-3.899-1.601 1.42a.75.75 0 01-1.247-.606l.569-9.47a.75.75 0 01.554-.68zM3 10.5a.75.75 0 01.75-.75H6a.75.75 0 010 1.5H3.75A.75.75 0 013 10.5zm14.25 0a.75.75 0 01.75-.75h2.25a.75.75 0 010 1.5H18a.75.75 0 01-.75-.75zm-8.962 3.712a.75.75 0 010 1.061l-1.591 1.591a.75.75 0 11-1.061-1.06l1.591-1.592a.75.75 0 011.06 0z"
//                   clip-rule="evenodd"
//                 ></path>
//               </svg>
//               <p className="text-gray-700 dark:text-white">0</p>
//             </div>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// }
