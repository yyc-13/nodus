export default function Textarea({ title, register, errors }) {
  return (
    <div className="sm:grid sm:grid-cols-3 sm:items-start sm:gap-4 sm:border-t sm:border-gray-200 sm:pt-5">
      <label
        htmlFor={title}
        className="block text-sm font-medium leading-6 text-gray-900 sm:pt-1.5"
      >
        description
      </label>
      <div className="mt-2 sm:col-span-2 sm:mt-0">
        <textarea
          {...register(title)}
          id={title}
          name={title}
          rows={5}
          className="block w-full max-w-lg rounded-md border-0 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:py-1.5 sm:text-sm sm:leading-6"
          defaultValue={""}
        />
      </div>
      {errors[title]?.message && (
        <p className="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded relative ">
          {errors[title]?.message}
        </p>
      )}
    </div>
  );
}
