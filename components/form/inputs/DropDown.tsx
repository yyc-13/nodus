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
            {title == "cardFileType" ? " text" : ".pdf"}
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
