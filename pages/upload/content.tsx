import { useForm, Controller } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { useRouter } from "next/router";
import * as yup from "yup";

import { useEffect, useRef, useState } from "react";
import { useSession } from "next-auth/react";
import TextInput from "@/components/form/inputs/Text";
import DropDown from "@/components/form/inputs/DropDown";
import Textarea from "@/components/form/inputs/Textarea";
import FilesInput from "@/components/form/inputs/Files";
import Price from "@/components/form/inputs/Price";
import CategoryButton from "@/components/utils/CategoryButton";
import TagsInput from "@/components/form/inputs/Tags";
import storeFiles from "@/lib/form/storeFiles";
import { contentSchema } from "../../lib/utils/yupSchema";
import toast from "react-hot-toast";

type formData = yup.InferType<typeof contentSchema>;

export default function ContentForm() {
  const router = useRouter();
  const {
    register,
    handleSubmit,

    control,
    formState: { errors },
    watch,
    setValue,
  } = useForm<formData>({
    resolver: yupResolver(contentSchema),
  });

  const { data: session } = useSession();
  const [productFileType, setProductFileType] = useState("");
  const [sampleFileType, setSampleFileType] = useState("");
  const [cardFileType, setCardFileType] = useState("");

  const [prodFiles, setProdFiles] = useState();
  const [sampleFiles, setSampleFiles] = useState();
  const [cardFiles, setCardFiles] = useState();
  const [noProductFile, setNoProductFile] = useState(false);
  const [noCardFile, setNoCardFile] = useState(false);
  const [noSampleFile, setNoSampleFile] = useState(false);

  const [free, setFree] = useState(false);

  const [price, setPrice] = useState(0);
  const [sample, setSample] = useState(false);

  const [categoryModal1, setCategoryModal1] = useState(false);
  const [categoryModal2, setCategoryModal2] = useState(false);

  const [category1, setCategory1] = useState([]);
  const [category2, setCategory2] = useState([]);

  const [tags, setTags] = useState([]);

  const onSubmit = async (data) => {
    try {
      if (prodFiles.length == 0) {
        setNoProductFile(true);
        return;
      }
      if (cardFiles && cardFiles.length == 0 && cardFileType !== "text") {
        setNoCardFile(true);
        return;
      }
      if (sample == true && sampleFiles.length == 0) {
        setNoSampleFile(true);
        return;
      }
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

      const res = await fetch("/api/content/create", {
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

      router.push(`/content/${result.id}`);
    } catch (error) {
      console.error("An error occurred during form submission:", error);
    }
  };

  // shortcut for form and category modal
  useEffect(() => {
    const handleKeyDown = (event) => {
      if (event.metaKey && event.key === "k") {
        event.preventDefault();
        if (categoryModal1) {
          categoryModalRef1.current.focus();
        }
        if (categoryModal2) {
          categoryModalRef2.current.focus();
        }
      } else if (event.key === "Escape") {
        if (categoryModal1) {
          categoryModalRef1.current.blur();
        }
        if (categoryModal2) {
          categoryModalRef2.current.blur();
        }
      }
    };

    window.addEventListener("keydown", handleKeyDown);

    // Clean up the event listener when the component unmounts
    return () => {
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [categoryModal1, categoryModal2]);

  const categoryModalRef1 = useRef();
  const categoryModalRef2 = useRef();

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
                  price={price}
                  setPrice={setPrice}
                  errors={errors}
                  watch={watch}
                  setValue={setValue}
                  Controller={Controller}
                  control={control}
                />
              </div>
            </div>

            <div className="space-y-6 sm:space-y-5">
              {/* categories */}
              <div className="border-b border-gray-900/10 pb-12 flex flex-col gap-y-4">
                <div>
                  <h2 className="text-base font-semibold leading-7 text-gray-900">
                    Form and Cateogry
                  </h2>
                </div>
                <CategoryButton
                  categoryModal={categoryModal1}
                  setCategoryModal={setCategoryModal1}
                  setCategory={setCategory1}
                  setValue={setValue}
                  category={category1}
                  title="category1"
                  useRef={categoryModalRef1}
                  setProductFileType={setProductFileType}
                  errors={errors}
                />

                <CategoryButton
                  categoryModal={categoryModal2}
                  setCategoryModal={setCategoryModal2}
                  setCategory={setCategory2}
                  category={category2}
                  setValue={setValue}
                  title="category2"
                  useRef={categoryModalRef2}
                  setProductFileType={null}
                  errors={errors}
                />

                {/* tags */}
                <TagsInput
                  control={control}
                  tags={tags}
                  setTags={setTags}
                  errors={errors}
                />
              </div>
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

                {productFileType && (
                  <>
                    <FilesInput
                      title="prod"
                      files={prodFiles}
                      setFiles={setProdFiles}
                      register={register}
                      fileType={productFileType}
                    />
                    {noProductFile && (
                      <p className="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded relative ">
                        please select a file.
                      </p>
                    )}
                  </>
                )}
                <Textarea
                  title={"productDescription"}
                  register={register}
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
                  <>
                    <FilesInput
                      title="card"
                      files={cardFiles}
                      setFiles={setCardFiles}
                      register={register}
                      fileType={cardFileType}
                    />
                    {noCardFile && (
                      <p className="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded relative ">
                        please select a file.
                      </p>
                    )}
                  </>
                )}
                <Textarea
                  title={"cardDescription"}
                  register={register}
                  errors={errors}
                />
                {/* <CardPreview cardData={cardData} /> */}
              </div>
              {/* sample */}

              <div className="border-b border-gray-900/10 pb-12 flex flex-col gap-y-4">
                <>
                  <div className="sm:grid sm:grid-cols-3 sm:items-start sm:gap-4 sm:border-gray-200 sm:pt-5">
                    <div className="text-sm leading-6">
                      <h2 className="text-base font-semibold leading-7 text-gray-900">
                        Sample
                      </h2>

                      <p className="mt-1 text-sm leading-6 text-gray-600">
                        Accessible to everyone, could be a trailer, shorter or
                        free version.
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
                          please select sample.
                        </p>
                      )}
                    </div>
                  </div>
                  {sample && (
                    <DropDown
                      title={"sampleFileType"}
                      register={register}
                      errors={errors}
                      setFileType={setSampleFileType}
                    />
                  )}
                  {sampleFileType && (
                    <>
                      <FilesInput
                        title="sample"
                        files={sampleFiles}
                        setFiles={setSampleFiles}
                        register={register}
                        fileType={sampleFileType}
                      />
                      {noSampleFile && (
                        <p className="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded relative ">
                          please select a file.
                        </p>
                      )}
                    </>
                  )}
                  {sample && (
                    <Textarea
                      title={"sampleDescription"}
                      register={register}
                      errors={errors}
                    />
                  )}
                </>
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
