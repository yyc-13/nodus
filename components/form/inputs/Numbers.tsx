export default function NumbersInput({ title, register, errors }) {
  return (
    <div className="sm:grid sm:grid-cols-3 sm:items-start sm:gap-4 sm:border-t sm:border-gray-200 sm:pt-5">
      <label
        htmlFor="price"
        className="block text-sm font-medium leading-6 text-gray-900 sm:pt-1.5"
      >
        {title}
      </label>
      <div className="mt-2 sm:col-span-2 sm:mt-0">
        <div className="flex max-w-lg rounded-md shadow-sm">
          <input
            {...register("price")}
            type="number"
            name="price"
            min={0}
            step={1}
            id="price"
            autoComplete="price"
            className="block w-full min-w-0 flex-1 rounded-none rounded-r-md border-0 py-1.5 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
          ></input>
        </div>

        {errors.price?.message && (
          <p className="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded relative ">
            {errors.price?.message}
          </p>
        )}
        <p className="mt-2 text-sm text-gray-500">
          Set the price to 0 to make it free.
        </p>
      </div>
    </div>
  );
}
