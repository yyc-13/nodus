import { errors } from "formidable";

export default function T2() {
  return (
    <>
      {/* test zone */}
      <div className="p-10 bg-theme-100">
        <form className="space-y-8 divide-y divide-theme-200">
          <div className="space-y-8 divide-y divide-theme-200 sm:space-y-5">
            <div className="space-y-6 sm:space-y-5">
              <div>
                <h3 className="text-base font-semibold leading-6 text-theme-800">
                  Upload you digital work.
                </h3>
              </div>

              <div className="space-y-6 sm:space-y-5">
                <div className="sm:grid sm:grid-cols-3 sm:items-start sm:gap-4 sm:border-t sm:border-theme-200 sm:pt-5">
                  <label
                    htmlFor="type"
                    className="block text-sm font-medium leading-6 text-theme-800 sm:pt-1.5"
                  >
                    What kind of file(s) would you like to upload today?
                  </label>
                  <div className="mt-2 sm:col-span-2 sm:mt-0">
                    <select
                      id="type"
                      name="type"
                      defaultValue=""
                      autoComplete="type-name"
                      className="block w-full max-w-lg rounded-md border-0 py-1.5 text-theme-800 shadow-sm ring-1 ring-inset ring-theme-300 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:max-w-xs sm:text-sm sm:leading-6"
                    >
                      <option disabled value="">
                        {" "}
                        -- select an option --{" "}
                      </option>
                      <option value="audio">Audio</option>
                      <option value="text">Text</option>
                      <option value="video">Video</option>
                      <option value="image">Image</option>
                    </select>
                  </div>
                  {/* {errors.type?.message && (
                    <p className="bg-theme-50 border border-theme-400 text-theme-800 px-4 py-3 rounded relative ">
                      {errors.type?.message}
                    </p>
                  )} */}
                </div>
                <div className="sm:grid sm:grid-cols-3 sm:items-start sm:gap-4 sm:border-t sm:border-theme-200 sm:pt-5">
                  <label
                    htmlFor="title"
                    className="block text-sm font-medium leading-6 text-theme-800 sm:pt-1.5"
                  >
                    Title
                  </label>
                  <div className="mt-2 sm:col-span-2 sm:mt-0">
                    <div className="flex max-w-lg rounded-md shadow-sm">
                      <input
                        type="text"
                        name="title"
                        id="title"
                        className="block w-full min-w-0 flex-1 rounded-none rounded-r-md border-0 py-1.5 text-theme-800 ring-1 ring-inset ring-theme-300 placeholder:text-theme-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                      />
                    </div>
                    {/* {errors.title?.message && (
                      <p className="bg-theme-50 border border-theme-400 text-theme-800 px-4 py-3 rounded relative ">
                        {errors.title?.message}
                      </p>
                    )} */}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </form>
      </div>
    </>
  );
}
