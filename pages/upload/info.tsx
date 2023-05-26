import { useState } from "react";
import { useForm } from "react-hook-form";
import { useRouter } from "next/router";

const categories = [
  "horror",
  "finance",
  "technology",
  "software",
  "hardware",
  "business",
  "social media",
  "food",
  "politics",
  "sports",
  "NBA",
  "FIFA",
  "baseball",
  "travel",
  "video games",
  "regligion",
  "fashion",
  "home",
  "pets",
  "dogs",
  "cats",
  "photography",
  "culture",
  "law",
  "personal finance",
  "history",
  "cannabis",
  "manga",
  "anime",
  "valorant",
];

export default function Info() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const [fileType, setFiletype] = useState("");
  const [category, setCategory] = useState([]);
  const [free, setFree] = useState(false);
  const [sub, setSub] = useState(false);
  const [paid, setPaid] = useState(false);
  const [price, setPrice] = useState("");
  const router = useRouter();

  const onSubmit = async (data: any) => {
    console.log("data in form", data);
    router.push({
      pathname: "/upload/main",
      query: { type: fileType },
    });
    try {
      await fetch("");
    } catch (err) {
      console.error(err);
    }
  };
  return (
    <div className="">
      <form onSubmit={handleSubmit(onSubmit)}>
        {/* file type */}
        <div>
          <label
            htmlFor="countries"
            className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
          >
            Select the file type you want to upload
          </label>
          <select
            id="countries"
            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            value={fileType}
            onChange={(e) => setFiletype(e.target.value)}
          >
            <option selected>Choose a file type</option>
            <option value="US">Video</option>
            <option value="CA">Doc</option>
            <option value="FR">Audio</option>
          </select>
        </div>
        {/* category */}
        <div>Select categories for this content (up to 3.)</div>
        {/* price */}
        <fieldset>
          <div className="mt-6 space-y-6">
            <div className="relative flex gap-x-3">
              <div className="flex h-6 items-center">
                <input
                  id="comments"
                  name="comments"
                  type="checkbox"
                  className="h-4 w-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-600"
                  checked={free}
                  onChange={() => {
                    setFree((prev) => !prev);
                  }}
                  disabled={price || sub}
                />
              </div>
              <div className="text-sm leading-6">
                <label htmlFor="comments" className="font-medium text-gray-900">
                  Free
                </label>
                <p className="text-gray-500">This content will be free.</p>
              </div>
            </div>
            <div className="relative flex gap-x-3">
              <div className="flex h-6 items-center">
                <input
                  id="candidates"
                  name="candidates"
                  type="checkbox"
                  className="h-4 w-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-600"
                  checked={sub}
                  onChange={() => {
                    setSub((prev) => !prev);
                  }}
                  disabled={free}
                />
              </div>
              <div className="text-sm leading-6">
                <label
                  htmlFor="candidates"
                  className="font-medium text-gray-900"
                >
                  Open to Subscriber
                </label>
                <p className="text-gray-500">
                  Subscriber can browse this content freely
                </p>
              </div>
            </div>
            <div className="relative flex gap-x-3">
              <div className="flex h-6 items-center">
                <input
                  id="offers"
                  name="offers"
                  type="checkbox"
                  className="h-4 w-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-600"
                  checked={paid}
                  onChange={() => {
                    setPaid((prev) => !prev);
                  }}
                  disabled={free}
                />
              </div>
              <div className="text-sm leading-6">
                <label htmlFor="offers" className="font-medium text-gray-900">
                  Price
                </label>
                <p className="text-gray-500">
                  Set a price for this content. (If it's open to subscriber,
                  subscribers can still browse this content freely.)
                </p>
                <label
                  htmlFor="price"
                  className=" text-sm font-medium leading-6 text-gray-900 sm:pt-1.5"
                >
                  Price
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
                      value={price}
                      onChange={(e) => setPrice(e.target.value)}
                      className="block w-full min-w-0 flex-1 rounded-none rounded-r-md border-0 py-1.5 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                    ></input>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </fieldset>
      </form>
    </div>
  );
}
