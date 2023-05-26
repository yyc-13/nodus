export default function TextInput({ title, register, errors }) {
  return (
    <div className="sm:grid sm:grid-cols-3 sm:items-start sm:gap-4  sm:border-gray-200 sm:pt-5">
      <label
        htmlFor={`${title}`}
        className="block text-sm font-medium leading-6 text-gray-900 sm:pt-1.5"
      >
        {title}
      </label>
      <div className="mt-2 sm:col-span-2 sm:mt-0">
        <div className="flex max-w-lg rounded-md shadow-sm">
          <input
            {...register(`${title}`)}
            type="text"
            name={title}
            id={title}
            className="block w-full min-w-0 flex-1  rounded-md border-0 py-1.5 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
          />
        </div>
        {errors[title]?.message && (
          <p className="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded relative ">
            {errors[title]?.message}
          </p>
        )}
      </div>
    </div>
  );
}
