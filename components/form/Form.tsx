import { useForm, Controller } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";

import { useEffect, useState } from "react";
import { useSession } from "next-auth/react";
import TextInput from "./inputs/Text";
import DropDown from "./inputs/DropDown";
import Textarea from "./inputs/Textarea";
import FilesInput from "./inputs/Files";
import Price from "./inputs/Price";
import CategoryButton from "../utils/CategoryButton";
import { WithContext as ReactTags } from "react-tag-input";
import TagsInput from "./inputs/Tags";
import CardPreview from "./utils/CardPreview";
import storeFiles from "@/lib/utils/storeFiles";
import schema from "../../lib/utils/schema";
import toast from "react-hot-toast";

type formData = yup.InferType<typeof schema>;

export default function Form() {
  const {
    register,
    handleSubmit,

    control,
    formState: { errors },
    watch,
    setValue,
  } = useForm<formData>({
    resolver: yupResolver(schema),
  });

  console.log("errors", errors);

  const { data: session } = useSession();
  const [productFileType, setProductFileType] = useState("");
  const [sampleFileType, setSampleFileType] = useState("");
  const [cardFileType, setCardFileType] = useState("");

  const [prodFiles, setProdFiles] = useState();
  const [sampleFiles, setSampleFiles] = useState();
  const [cardFiles, setCardFiles] = useState();

  const [free, setFree] = useState(false);
  const [sub, setSub] = useState(false);

  const [price, setPrice] = useState(0);
  const [sample, setSample] = useState(false);

  const [categoryModal1, setCategoryModal1] = useState(false);
  const [categoryModal2, setCategoryModal2] = useState(false);

  const [category1, setCategory1] = useState([]);
  const [category2, setCategory2] = useState([]);

  const [tags, setTags] = useState([]);

  const titleValue = watch("title");
  const cardDescription = watch("cardDescription");

  // data used for preview
  let cardData = {
    title: titleValue,
    description: cardDescription,
    file: cardFiles,
    fileType: cardFileType,
    tags: tags,
    category: category1,
    user: session?.user,
  };

  // const onSubmit = async (data: any) => {
  //   console.log("form data", data);

  //   try {
  // Combine the promises using Promise.all

  // const upload = async (data) => {
  // console.log("data under upload", data);
  // try {
  //   const prodFileResult = await storeFile(
  //     prodFile?.[0],
  //     "prod",
  //     productFileType
  //   );
  //   console.log("prodFileResult");
  //   const cardFileResult = await storeFile(
  //     cardFile?.[0],
  //     "card",
  //     cardFileType
  //   );
  //   const sampleFileResult = await storeFile(
  //     sampleFile?.[0],
  //     "sample",
  //     sampleFileType
  //   );

  //   console.log("product", cardFileResult);

  // const results = await Promise.all([
  //   prodFileResult,
  //   cardFileResult,
  //   sampleFileResult,
  // ]);
  // console.log("results", results);

  // Destructure the results array to get the fileUrls

  // const customData = { free: free, sub: sub, price: price, results };
  // const finalData = { ...data, customData };
  // console.log("finalData", finalData);
  // const response = await fetch("/api/content", {
  //   method: "POST",
  //   headers: {
  //     "Content-Type": "application/json",
  //   },
  //   body: JSON.stringify(finalData),
  // });

  // const result = await response.json();
  // console.log(result);

  // return the result or throw an error if something went wrong
  //     return;
  //   } catch (error) {
  //     console.error(error);
  //   }
  // };

  // await upload(data);
  // Call the toast.promise function
  // toast.promise(upload(data), {
  //   loading: "Saving...",
  //   success: <b>Settings saved!</b>,
  //   error: <b>Could not save.</b>,
  // });

  // const prodFileInfos = prodFile.map((file, index) => {
  //   // const description =
  //   //   document.getElementById(`prod-file-descrpition-` + index)?.value ||
  //   //   "";
  //   // const name =
  //   //   document.getElementById(`prod-file-name-` + index)?.value || "";
  //   return { title: name, description: description, url: prodUrls[index] };
  // });

  // const sampleFileInfos = sampleFileInfos.map((file, index) => {
  //   const description = document.getElementById(
  //     `sample-file-description-` + index
  //   )?.value;
  //   const name = document.getElementById(
  //     `sample-file-name-` + index
  //   )?.value;
  //   return {
  //     title: name,
  //     description: description,
  //     url: sampleUrls[index],
  //   };
  // });

  // data.prodFileInfos = prodFileInfos;
  // data.sampleFileInfos = sampleFileInfos;
  // data.prodUrls = prodUrls;
  // data.sampleUrls = sampleUrls;
  // data.email = session?.user?.email;

  // await fetch("/api/product/create", {
  //   method: "POST",
  //   headers: {
  //     "Content-Type": "application/json",
  //   },
  //   body: JSON.stringify(data),
  // });
  //   } catch (err) {
  //     console.error(err);
  //   }
  // };

  const onSubmit = async (data) => {
    try {
      console.log("data in onSubmit", data);

      const prodFileUrls = await storeFiles(prodFiles, "prod", productFileType);

      const cardFileUrls = await storeFiles(cardFiles, "card", cardFileType);
      const sampleFileUrls = await storeFiles(
        sampleFiles,
        "sample",
        sampleFileType
      );

      const fileUrls = {
        prodFileUrls: prodFileUrls,
        cardFileUrls: cardFileUrls,
        sampleFileUrls: sampleFileUrls,
      };
      if (sample == false) {
        data.sampleDescription = "";
        data.sampleFileType = "";
      }

      data = { ...data, ...fileUrls };
      console.log("form data after customize", data);

      const res = await fetch("/api/content", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      });

      if (!res.ok) {
        throw new Error(`HTTP error! status:${res.status}`);
      }
      const result = await res.json();
      console.log("result of sending data", result);
    } catch (error) {
      console.error("An error occurred during form submission:", error);
      // Add any additional error handling logic here
    }
  };

  return (
    <div className="px-10 w-full ">
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className="space-y-8 divide-y  divide-gray-200 sm:space-y-5">
          <div className="space-y-6 sm:space-y-5 pb-10">
            <div className="border-b border-gray-900/10 pb-12">
              <div className="mt-8">
                <p className="mt-1 text-sm leading-6 text-gray-600">
                  How would you like to publish?
                </p>
                <Price
                  register={register}
                  free={free}
                  setFree={setFree}
                  sub={sub}
                  setSub={setSub}
                  price={price}
                  setPrice={setPrice}
                  errors={errors}
                  watch={watch}
                  setValue={setValue}
                />
              </div>
            </div>

            <div className="space-y-6 sm:space-y-5">
              {/* production */}
              <div className="border-b border-gray-900/10 pb-12 flex flex-col gap-y-4">
                <div>
                  <h2 className="text-base font-semibold leading-7 text-gray-900">
                    Main Content
                  </h2>

                  <p className="mt-1 text-sm leading-6 text-gray-600">
                    Tell us about your Content
                  </p>
                </div>
                <TextInput
                  title={"title"}
                  register={register}
                  errors={errors}
                />
                <DropDown
                  title={"productFileType"}
                  register={register}
                  errors={errors}
                  setFileType={setProductFileType}
                  filepond--credits
                />

                {productFileType && (
                  <FilesInput
                    title="prod"
                    files={prodFiles}
                    setFiles={setProdFiles}
                    register={register}
                    fileType={productFileType}
                  />
                )}
                <Textarea
                  title={"productDescription"}
                  register={register}
                  errors={errors}
                />
              </div>

              {/* categories */}
              <div className="border-b border-gray-900/10 pb-12 flex flex-col gap-y-4">
                <div>
                  <h2 className="text-base font-semibold leading-7 text-gray-900">
                    Cateogry
                  </h2>

                  <p className="mt-1 text-sm leading-6 text-gray-600">
                    Select categories ( max 2 ) and tags ( max 3 ).
                  </p>
                </div>
                <CategoryButton
                  categoryModal={categoryModal1}
                  setCategoryModal={setCategoryModal1}
                  setCategory={setCategory1}
                  setValue={setValue}
                  category={category1}
                  title="category1"
                />

                <CategoryButton
                  categoryModal={categoryModal2}
                  setCategoryModal={setCategoryModal2}
                  setCategory={setCategory2}
                  category={category2}
                  setValue={setValue}
                  title="category2"
                />

                {/* tags */}
                <TagsInput
                  control={control}
                  tags={tags}
                  setTags={setTags}
                  errors={errors}
                />
              </div>
              {/* card */}
              <div className="border-b border-gray-900/10 pb-12 flex flex-col gap-y-4">
                <div>
                  <h2 className="text-base font-semibold leading-7 text-gray-900">
                    card
                  </h2>
                </div>
                <DropDown
                  title={"cardFileType"}
                  register={register}
                  errors={errors}
                  setFileType={setCardFileType}
                />

                {cardFileType && cardFileType !== "text" && (
                  <FilesInput
                    title="card"
                    files={cardFiles}
                    setFiles={setCardFiles}
                    register={register}
                    fileType={cardFileType}
                  />
                )}
                <Textarea
                  title={"cardDescription"}
                  register={register}
                  errors={errors}
                />
                <CardPreview cardData={cardData} />
              </div>
              {/* sample */}
              <div className="border-b border-gray-900/10 pb-12 flex flex-col gap-y-4">
                {!free && (
                  <div className="sm:grid sm:grid-cols-3 sm:items-start sm:gap-4 sm:border-gray-200 sm:pt-5">
                    <div className="text-sm leading-6">
                      <h2 className="text-base font-semibold leading-7 text-gray-900">
                        free sample
                      </h2>

                      <p className="mt-1 text-sm leading-6 text-gray-600">
                        Free sample can be viewed by all users.
                      </p>
                    </div>
                    <div className="flex justify-center items-center h-6 self-center">
                      <input
                        {...register("sample")}
                        id="sample"
                        name="sample"
                        type="checkbox"
                        className="disabled:opacity-75 h-4 w-4 rounded border-gray-600 text-indigo-600 focus:ring-indigo-600  "
                        checked={sample}
                        onChange={(e) => {
                          setSample(e.target.checked);
                        }}
                      />
                      {errors.sample?.message && (
                        <p className="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded relative ">
                          {errors.sample?.message}
                        </p>
                      )}
                    </div>
                  </div>
                )}
                {sample && (
                  <DropDown
                    title={"sampleFileType"}
                    register={register}
                    errors={errors}
                    setFileType={setSampleFileType}
                  />
                )}
                {sampleFileType && (
                  <FilesInput
                    title="sample"
                    files={sampleFiles}
                    setFiles={setSampleFiles}
                    register={register}
                    fileType={cardFileType}
                  />
                )}
                {sample && (
                  <Textarea
                    title={"sampleDescription"}
                    register={register}
                    errors={errors}
                  />
                )}
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
            {/* buttons */}
          </div>
        </div>
      </form>
    </div>
  );
}
