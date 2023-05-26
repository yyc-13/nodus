import { useEffect } from "react";

function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}

export default function PriceInput({
  free,
  setFree,
  sub,
  setSub,
  price,
  setPrice,
  register,
  errors,
  watch,
  setValue,
}) {
  const watchPrice = watch("price");
  const watchSub = watch("sub");

  useEffect(() => {
    if (watchSub || watchPrice > 0) {
      setFree(false);
      setValue("free", false);
    }
  }, [watchSub, watchPrice, setValue]);

  return (
    <div className="mt-4 sm:grid sm:grid-cols-3 sm:items-start sm:gap-4 sm:gap-y-8 sm:border-t sm:border-gray-200 sm:py-5 flex flex-col gap-y-2">
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
            disabled={sub || price > 0}
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
              sub || price > 0 ? "text-gray-400" : "text-gray-900",
              "text-sm font-medium leading-6  sm:pt-1.5"
            )}
          >
            Free
          </label>
        </div>
      </div>
      <div className="relative flex gap-x-3 ">
        <div className="flex h-6 items-center">
          <input
            {...register("subscriber")}
            id="subscribers"
            name="subscribers"
            type="checkbox"
            className="disabled:opacity-75 h-4 w-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-600"
            checked={sub}
            onChange={(e) => {
              setSub(e.target.checked);
            }}
            disabled={free}
          />
        </div>

        <div className="text-sm leading-6">
          <label
            htmlFor="subscribers"
            className={classNames(
              free ? "text-gray-400" : "text-gray-900",
              "text-sm font-medium leading-6  sm:pt-1.5"
            )}
          >
            Subscriber
          </label>
        </div>
        {errors.subscriber?.message && (
          <p className="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded relative ">
            {errors.subscriber?.message}
          </p>
        )}
      </div>
      <div className="relative flex gap-x-3">
        <div className="flex items-center gap-x-2">
          <label
            htmlFor="price"
            className={classNames(
              free ? "text-gray-400" : "text-gray-900",
              "text-sm font-medium leading-6  sm:pt-1.5"
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
                className="disabled:opacity-75 block w-full min-w-0 flex-1 rounded-none rounded-r-md border-0 py-1.5 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
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
    </div>
  );
}

// export function Teste() {
//   return (
//     <div className="gap-y-8 sm:grid  sm:items-start sm:gap-4 sm:gap-y-8 sm:border-t sm:border-gray-200 sm:py-3">
//       <div className="relative flex gap-x-3  items-center">
//         <div className="flex h-6 items-center">
//           <input
//             name="free"
//             id="free"
//             type="checkbox"
//             className="disabled:opacity-75 h-4 w-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-600  "
//           />
//         </div>
//         <div className="text-sm leading-6">
//           <label
//             htmlFor="free"
//             className="text-gray-900 text-sm font-medium leading-6  sm:pt-1.5"
//           >
//             Free
//           </label>
//         </div>
//       </div>
//       <div className="relative flex gap-x-3 ">
//         <div className="flex h-6 items-center">
//           <input
//             name="subscribers"
//             id="subscribers"
//             type="checkbox"
//             className="disabled:opacity-75 h-4 w-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-600"
//           />
//         </div>
//         <div className="text-sm leading-6">
//           <label
//             htmlFor="subscribers"
//             className="text-gray-900 text-sm font-medium leading-6  sm:pt-1.5"
//           >
//             Subscriber
//           </label>
//         </div>
//       </div>
//       <div className="relative flex gap-x-3">
//         <div className="flex items-center gap-x-2">
//           <label
//             htmlFor="price"
//             className="text-gray-900 text-sm font-medium leading-6  sm:pt-1.5"
//           >
//             Price
//           </label>
//           <div className="mt-2 sm:col-span-2 sm:mt-0">
//             <div className="flex max-w-lg rounded-md shadow-sm">
//               <input
//                 name="price"
//                 type="number"
//                 id="price"
//                 className="disabled:opacity-75 block w-full min-w-0 flex-1 rounded-none rounded-r-md border-0 py-1.5 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
//                 value="0"
//               />
//             </div>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// }
