import { Listbox, Transition } from "@headlessui/react";
import { ChevronUpDownIcon, CheckIcon } from "@heroicons/react/20/solid";
import { useState, Fragment } from "react";

const fileTypes = [
  { name: "audio", value: "audio(.mp3, .wav)" },
  { name: "doc", value: "doc(.pdf, .word, .page)" },
  { name: "vidoe", value: "video(.mp4, .webm)" },
  { name: "image", value: "image(.png, .jpeg, .webp)" },
];

export default function DropDown({ title, register, errors, setFileType }) {
  const fileType = title == "cardFileType" ? "text" : "doc";
  return (
    <div className="sm:grid sm:grid-cols-3 sm:items-start sm:gap-4 sm:border-t sm:border-gray-200 sm:pt-5">
      <label
        htmlFor="type"
        className="block text-sm font-medium leading-6 text-gray-900 sm:pt-1.5"
      >
        file type
        <p className="mt-1 text-sm leading-6 text-gray-600">
          (eg., audio, video, doc, image)
        </p>
      </label>
      <div className="mt-2 sm:col-span-2 sm:mt-0">
        <select
          {...register(`${title}`)}
          id={title}
          name={title}
          defaultValue=""
          autoComplete="type-name"
          className="block w-full max-w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
          onChange={(e) => {
            setFileType(e.target.value);
          }}
        >
          <option disabled value="">
            {" "}
            -- select an option --{" "}
          </option>
          <option value="audio">audio(.mp3, .wav)</option>
          <option value={fileType}>
            {title == "cardFileType" ? " text" : "doc(.pdf, .word, .page)"}
          </option>
          <option value="video">video(.mp4, .webm)</option>
          <option value="image">image(.png, .jpeg, .webp)</option>
        </select>
      </div>
      {errors[title]?.message && (
        <p className="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded relative ">
          {errors[title]?.message}
        </p>
      )}
    </div>
  );
}

// export function test() {
//   return (
//     <div className="mt-2 sm:col-span-2 sm:mt-0">
//       <select
//         name="productFileType"
//         id="productFileType"
//         autoComplete="type-name"
//         className="block w-full max-w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
//       >
//         <option disabled="" value="" selected="">
//           {" "}
//           -- select an option --{" "}
//         </option>
//         <option value="audio">audio(.mp3, .wav)</option>
//         <option value="doc">doc(.pdf, .word, .page)</option>
//         <option value="video">video(.mp4, .webm)</option>
//         <option value="image">image(.png, .jpeg, .webp)</option>
//       </select>
//     </div>
//   );
// }

// import { Fragment, useState } from "react";
// import { Listbox, Transition } from "@headlessui/react";
// import { CheckIcon, ChevronUpDownIcon } from "@heroicons/react/20/solid";

// const people = [
//   { name: "Wade Cooper" },
//   { name: "Arlene Mccoy" },
//   { name: "Devon Webb" },
//   { name: "Tom Cook" },
//   { name: "Tanya Fox" },
//   { name: "Hellen Schmidt" },
// ];

// export default function Example() {
//   const [selected, setSelected] = useState(fileTypes[0]);

//   return (
//     <Listbox value={selected} onChange={()=>{setSelected()}}>
//       <div className="relative mt-1">
//         <Listbox.Button className="relative w-full cursor-default rounded-lg bg-white py-2 pl-3 pr-10 text-left shadow-md focus:outline-none focus-visible:border-indigo-500 focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-opacity-75 focus-visible:ring-offset-2 focus-visible:ring-offset-orange-300 sm:text-sm">
//           <span className="block truncate">{selected.name}</span>
//           <span className="pointer-events-none absolute inset-y-0 right-0 flex items-center pr-2">
//             <ChevronUpDownIcon
//               className="h-5 w-5 text-gray-400"
//               aria-hidden="true"
//             />
//           </span>
//         </Listbox.Button>
//         <Transition
//           as={Fragment}
//           leave="transition ease-in duration-100"
//           leaveFrom="opacity-100"
//           leaveTo="opacity-0"
//         >
//           <Listbox.Options className="absolute mt-1 max-h-60 w-full overflow-auto rounded-md bg-white py-1 text-base shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none sm:text-sm">
//             {fileTypes.map((fileType, index) => (
//               <Listbox.Option
//                 key={index}
//                 className={({ active }) =>
//                   `relative cursor-default select-none py-2 pl-10 pr-4 ${
//                     active ? "bg-amber-100 text-amber-900" : "text-gray-900"
//                   }`
//                 }
//                 value={fileType.value}
//               >
//                 {({ selected }) => (
//                   <>
//                     <span
//                       className={`block truncate ${
//                         selected ? "font-medium" : "font-normal"
//                       }`}
//                     >
//                       {fileType.value}
//                     </span>
//                     {selected ? (
//                       <span className="absolute inset-y-0 left-0 flex items-center pl-3 text-amber-600">
//                         <CheckIcon className="h-5 w-5" aria-hidden="true" />
//                       </span>
//                     ) : null}
//                   </>
//                 )}
//               </Listbox.Option>
//             ))}
//           </Listbox.Options>
//         </Transition>
//       </div>
//     </Listbox>
//   );
// }
