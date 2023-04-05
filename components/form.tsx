import { useForm, SubmitHandler } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import Filepond from "./filepond";
import { useState } from "react";
import { useSession } from "next-auth/react";

const uploadFiles = async (files) => {
  const formData = new FormData();
  files.forEach((file, index) => {
    formData.append(`files_${index}`, file);
  });
  formData.append("fileType", "data.type");

  const res = await fetch("/api/files-upload", {
    method: "POST",
    body: formData,
  });
  return res.json();
};

const schema = yup
  .object({
    type: yup.string().required(),
    title: yup.string().required(),
    // preview: yup.array().of(yup.string()).required(),
    description: yup.string().required(),
    // tags: yup.array().of(yup.string()),
    price: yup
      .number()
      .integer("Price must be an integer")
      .min(0, "Price must be a positive integer or 0")
      .required(),
  })
  .required();

type formData = yup.InferType<typeof schema>;

export default function Form() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<formData>({ resolver: yupResolver(schema) });

  const [prodFiles, setProdFiles] = useState([]);
  const [previewFiles, setPreviewFiles] = useState([]);
  // const [prodFileInfos, setProdFileInfos] = useState([]);
  // const [previewFileInfos, setPreviewFileInfos] = useState([]);
  const { data: session } = useSession();

  const onSubmit = async (data: any) => {
    try {
      const { fileUrls: prodUrls } = await uploadFiles(prodFiles);
      const { fileUrls: previewUrls } = await uploadFiles(previewFiles);
      console.log("fileUrls", prodUrls);
      console.log("previewUrls", previewUrls);

      const prodFileInfos = prodFiles.map((file, index) => {
        const description =
          document.getElementById(`prod-file-description-` + index)?.value ||
          "";
        const name =
          document.getElementById(`prod-file-name-` + index)?.value || "";
        return { title: name, description: description, url: prodUrls[index] };
      });

      console.log("prodFileInfos,", prodFileInfos);

      const previewFileInfos = previewFiles.map((file, index) => {
        const description = document.getElementById(
          `preview-file-description-` + index
        )?.value;
        const name = document.getElementById(
          `preview-file-name-` + index
        )?.value;
        return {
          title: name,
          description: description,
          url: previewUrls[index],
        };
      });
      console.log("previewFileInfos,", previewFileInfos);

      data.prodFileInfos = prodFileInfos;
      data.previewFileInfos = previewFileInfos;
      data.prodUrls = prodUrls;
      data.previewUrls = previewUrls;
      data.email = session?.user?.email;

      const formData = new FormData();
      // { formData.append }
      for (const key in data) {
        if (Array.isArray(data[key])) {
          data[key].forEach((value: string) => {
            console.log("value", value, "key", key);
            formData.append(key, value);
          });
        }
        formData.append(key, data[key]);
      }
      prodFileInfos.forEach((fileInfo, index) => {
        formData.append(`prodFileInfo[${index}]`, JSON.stringify(fileInfo));
      });
      previewFileInfos.forEach((fileInfo, index) => {
        formData.append(`previewFileInfo[${index}]`, JSON.stringify(fileInfo));
      });

      await fetch("/api/product/create", {
        method: "POST",
        body: formData,
      });
    } catch (err) {
      console.error(err);
    }
  };

  return (
    <div className="p-10">
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="space-y-8 divide-y divide-gray-200"
      >
        <div className="space-y-8 divide-y  divide-gray-200 sm:space-y-5">
          <div className="space-y-6 sm:space-y-5">
            <div>
              <h3 className="text-base font-semibold leading-6 text-gray-900">
                Upload you content.
              </h3>
            </div>

            <div className="space-y-6 sm:space-y-5">
              <div className="sm:grid sm:grid-cols-3 sm:items-start sm:gap-4 sm:border-t sm:border-gray-200 sm:pt-5">
                <label
                  htmlFor="type"
                  className="block text-sm font-medium leading-6 text-gray-900 sm:pt-1.5"
                >
                  What kind of file(s) would you like to upload today?
                </label>
                <div className="mt-2 sm:col-span-2 sm:mt-0">
                  <select
                    {...register("type")}
                    id="type"
                    name="type"
                    defaultValue=""
                    autoComplete="type-name"
                    className="block w-full max-w-lg rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:max-w-xs sm:text-sm sm:leading-6"
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
                {errors.type?.message && (
                  <p className="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded relative ">
                    {errors.type?.message}
                  </p>
                )}
              </div>
              <div className="sm:grid sm:grid-cols-3 sm:items-start sm:gap-4 sm:border-t sm:border-gray-200 sm:pt-5">
                <label
                  htmlFor="title"
                  className="block text-sm font-medium leading-6 text-gray-900 sm:pt-1.5"
                >
                  Title
                </label>
                <div className="mt-2 sm:col-span-2 sm:mt-0">
                  <div className="flex max-w-lg rounded-md shadow-sm">
                    <input
                      {...register("title")}
                      type="text"
                      name="title"
                      id="title"
                      className="block w-full min-w-0 flex-1 rounded-none rounded-r-md border-0 py-1.5 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                    />
                  </div>
                  {errors.title?.message && (
                    <p className="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded relative ">
                      {errors.title?.message}
                    </p>
                  )}
                </div>
              </div>

              <div className="sm:grid sm:grid-cols-3 sm:items-start sm:gap-4 sm:border-t sm:border-gray-200 sm:pt-5">
                <label
                  htmlFor="description"
                  className="block text-sm font-medium leading-6 text-gray-900 sm:pt-1.5"
                >
                  Description
                </label>
                <div className="mt-2 sm:col-span-2 sm:mt-0">
                  <textarea
                    {...register("description")}
                    id="description"
                    name="description"
                    rows={5}
                    className="block w-full max-w-lg rounded-md border-0 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:py-1.5 sm:text-sm sm:leading-6"
                    defaultValue={""}
                  />
                  <p className="mt-2 text-sm text-gray-500">
                    Tell us more about this work you would like to sell.
                  </p>
                </div>
                {errors.description?.message && (
                  <p className="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded relative ">
                    {errors.description?.message}
                  </p>
                )}
              </div>

              <label
                htmlFor="prodFiles"
                className="block text-sm font-medium leading-6 text-gray-900 sm:pt-1.5"
              >
                Upload file(s)
              </label>
              <Filepond
                id="prodFiles"
                fileState={[prodFiles, setProdFiles]}
                type="prod"
              ></Filepond>

              <label
                htmlFor="previewFiles"
                className="block text-sm font-medium leading-6 text-gray-900 sm:pt-1.5"
              >
                Upload file(s) for preview
              </label>
              <Filepond
                id="previewFiles"
                fileState={[previewFiles, setPreviewFiles]}
                type="preview"
              ></Filepond>
              <div className="sm:grid sm:grid-cols-3 sm:items-start sm:gap-4 sm:border-t sm:border-gray-200 sm:pt-5">
                <label
                  htmlFor="price"
                  className="block text-sm font-medium leading-6 text-gray-900 sm:pt-1.5"
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
            </div>
          </div>

          <div className="pt-5">
            <div className="flex justify-end gap-x-3">
              <button
                type="button"
                className="rounded-md bg-white py-2 px-3 text-sm font-semibold text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-50"
              >
                Cancel
              </button>
              <button
                type="submit"
                className="inline-flex justify-center rounded-md bg-indigo-600 py-2 px-3 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
              >
                Save
              </button>
            </div>
          </div>
        </div>
      </form>
    </div>
  );
}
