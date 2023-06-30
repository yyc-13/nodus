import { useEffect } from "react";
import Select from "react-select";

function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}

export default function PriceInput({
  free,
  setFree,

  price,
  setPrice,
  register,
  errors,
  watch,
  setValue,
  Controller,
  control,
}) {
  const watchPrice = watch("price");
  const watchMemberships = watch("memberships");

  useEffect(() => {
    if ((watchMemberships && watchMemberships.length > 0) || watchPrice > 0) {
      setFree(false);
      setValue("free", false);
    }
  }, [watchMemberships, watchPrice, setValue]);

  return (
    <div className="mt-4 sm:grid sm:grid-cols-2 sm:items-start sm:gap-4 sm:gap-y-8 sm:border-t sm:border-gray-200 sm:py-5 flex flex-col gap-y-8">
      <div className="relative flex gap-x-3 h-6 items-center">
        <div className="flex h-6 items-center">
          <input
            {...register("free")}
            id="free"
            name="free"
            type="checkbox"
            className="disabled:opacity-75 h-4 w-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-600  "
            checked={free}
            onChange={(e) => {
              setFree(e.target.checked);
            }}
            disabled={
              (watchMemberships && watchMemberships.length > 0) || price > 0
            }
          />
        </div>
        {errors.free?.message && (
          <p className="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded relative ">
            {errors.free?.message}
          </p>
        )}
        <div className="text-sm leading-6">
          <label
            htmlFor="free"
            className={classNames(
              (watchMemberships && watchMemberships.length > 0) || price > 0
                ? "text-gray-400"
                : "text-gray-900",
              "text-sm font-medium leading-6  sm:pt-1.5"
            )}
          >
            Free
          </label>
        </div>
      </div>

      <div className="relative flex gap-x-3 h-6 items-center">
        <div className="flex items-center gap-x-2">
          <label
            htmlFor="price"
            className={classNames(
              free ? "text-gray-400" : "text-gray-900",
              "text-sm font-medium leading-6 "
            )}
          >
            Price
          </label>
          <div className="mt-2 sm:col-span-2 sm:mt-0">
            <div className="flex max-w-lg rounded-md shadow-sm">
              <input
                {...register("price")}
                type="number"
                name="price"
                id="price"
                value={free ? 0 : price}
                onChange={(e) => setPrice(e.target.value)}
                className="disabled:opacity-75 block w-full min-w-0 flex-1 rounded-md border-0 py-1.5 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                disabled={free}
              ></input>
            </div>
          </div>
          {errors.price?.message && (
            <p className="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded relative ">
              {errors.price?.message}
            </p>
          )}
        </div>
      </div>
      <div className="relative flex gap-x-3 items-center">
        <div className="flex h-6 items-center">
          <div className="text-sm leading-6">
            <label
              htmlFor="memberships"
              className={classNames(
                free ? "text-gray-400" : "text-gray-900",
                "text-sm font-medium leading-6  sm:pt-1.5"
              )}
            >
              memberships
            </label>
          </div>
        </div>
        <Controller
          name="memberships"
          control={control}
          render={({ field }) => (
            <Select
              {...field}
              options={[
                { value: "membership1", label: "Membership 1" },
                { value: "membership2", label: "Membership 2" },
                { value: "membership3", label: "Membership 3" },
              ]}
              isMulti
              className="basic-multi-select"
              classNamePrefix="select"
              isDisabled={free}
              instanceId={"memberships"}
            />
          )}
        />
        {errors.memberships?.message && (
          <p className="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded relative ">
            {errors.memberships?.message}
          </p>
        )}
      </div>
    </div>
  );
}
