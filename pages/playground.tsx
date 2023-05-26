import { useState } from "react";
export default function DropDown() {
  const [fileType, setFileType] = useState("");
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
          title="fileType"
          id="test"
          name="test"
          defaultValue=""
          // autoComplete="type-name"
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
          <option value="doc">doc(.pdf, .word, .page)</option>
          <option value="video">video(.mp4, .webm)</option>
          <option value="image">image(.png, .jpeg, .webp)</option>
        </select>
      </div>
    </div>
  );
}
