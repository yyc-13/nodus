import { Fragment, useRef, useState } from "react";
import { Dialog, Transition } from "@headlessui/react";
import { ArchiveBoxIcon } from "@heroicons/react/24/outline";
import { PhotoIcon, UserCircleIcon } from "@heroicons/react/24/solid";
import { useSession } from "next-auth/react";
import * as yup from "yup";
import { useForm, Controller } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import storeFiles from "@/lib/form/storeFiles";
import { collectionSchema } from "@/lib/utils/yupSchema";
import FilePond from "@/lib/filePondSetup";
import { XMarkIcon } from "@heroicons/react/20/solid";

type formData = yup.InferType<typeof collectionSchema>;

export default function CollectionModal({ open, setOpen }) {
  const [coverPhoto, setCoverPhoto] = useState();
  const [noCoverPhoto, setNoCoverPhoto] = useState(false);
  const { data: session } = useSession();
  const {
    register,
    handleSubmit,

    control,
    formState: { errors },
    watch,
    setValue,
  } = useForm<formData>({
    resolver: yupResolver(collectionSchema),
  });
  const filePondRef = useRef();

  const onUpdateCoverPhoto = (fileObjs) => {
    setCoverPhoto(fileObjs.map((fileObj) => fileObj.file));
  };

  const triggerFilePondSelect = () => {
    if (filePondRef.current) {
      filePondRef.current.browse();
    }
  };

  const onSubmit = async (data) => {
    try {
      if (coverPhoto && coverPhoto.length == 0) {
        setNoCoverPhoto(true);
        return;
      }
      const coverPhotoIdentifiers = await storeFiles(
        coverPhoto,
        "Collection Cover",
        "image"
      );
      data = { ...data, coverPhoto: coverPhotoIdentifiers[0] };

      const res = await fetch("/api/collection", {
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

      setOpen(false);
    } catch (err) {
      console.error(err);
    }
  };

  return (
    <Transition.Root show={open} as={Fragment}>
      <Dialog as="div" className="relative z-10" onClose={setOpen}>
        <Transition.Child
          as={Fragment}
          enter="ease-out duration-300"
          enterFrom="opacity-0"
          enterTo="opacity-100"
          leave="ease-in duration-200"
          leaveFrom="opacity-100"
          leaveTo="opacity-0"
        >
          <div className="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity" />
        </Transition.Child>

        <div className="fixed inset-0 z-10 overflow-y-auto">
          <div className="flex min-h-full items-end justify-center p-4 text-center sm:items-center sm:p-0">
            <Transition.Child
              as={Fragment}
              enter="ease-out duration-300"
              enterFrom="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
              enterTo="opacity-100 translate-y-0 sm:scale-100"
              leave="ease-in duration-200"
              leaveFrom="opacity-100 translate-y-0 sm:scale-100"
              leaveTo="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
            >
              <Dialog.Panel className="relative transform overflow-hidden rounded-lg bg-white px-4 pb-4 pt-5 text-left shadow-xl transition-all sm:my-8 sm:w-full sm:max-w-sm sm:p-6">
                <div>
                  <div className="mx-auto flex h-12 w-12 items-center justify-center rounded-full bg-green-100">
                    <ArchiveBoxIcon
                      className="h-6 w-6 text-green-600"
                      aria-hidden="true"
                    />
                  </div>
                  <div className="mt-3 text-center sm:mt-5">
                    <Dialog.Title
                      as="h3"
                      className="text-base font-semibold leading-6 text-gray-900"
                    >
                      Add a collection
                    </Dialog.Title>

                    {/* form */}
                  </div>
                  <div>
                    <form onSubmit={handleSubmit(onSubmit)}>
                      <div className="space-y-12">
                        <div className="border-b border-gray-900/10 pb-12">
                          <div className="mt-10 grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6">
                            <div className="sm:col-span-4">
                              <label
                                htmlFor="username"
                                className="block text-sm font-medium leading-6 text-gray-900"
                              >
                                Collection Name
                              </label>
                              <div className="mt-2">
                                <div className="flex rounded-md shadow-sm ring-1 ring-inset ring-gray-300 focus-within:ring-2 focus-within:ring-inset focus-within:ring-indigo-600 sm:max-w-md">
                                  <input
                                    {...register("collectionName")}
                                    type="text"
                                    name="collectionName"
                                    id="collectionName"
                                    className="block flex-1 border-0 bg-transparent py-1.5 pl-1 text-gray-900 placeholder:text-gray-400 focus:ring-0 sm:text-sm sm:leading-6"
                                    title="collectionName"
                                  />
                                </div>
                              </div>
                              {errors.collectionName?.message && (
                                <p className="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded relative ">
                                  {errors.collectionName?.message}
                                </p>
                              )}
                            </div>

                            <div className="col-span-full">
                              <label
                                htmlFor="about"
                                className="block text-sm font-medium leading-6 text-gray-900"
                              >
                                About
                              </label>
                              <div className="mt-2">
                                <textarea
                                  {...register("collectionDescription")}
                                  id="collectionDescription"
                                  name="collectionDescription"
                                  rows={3}
                                  className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                                  defaultValue={""}
                                />
                              </div>
                              {errors.collectionDescription?.message && (
                                <p className="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded relative ">
                                  {errors.collectionDescription?.message}
                                </p>
                              )}
                            </div>
                            <div className="relative flex gap-x-3 col-span-full">
                              <div className="flex h-6 items-center">
                                <input
                                  {...register("private")}
                                  id="private"
                                  name="private"
                                  type="checkbox"
                                  className="h-4 w-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-600"
                                />
                              </div>
                              <div className="text-sm leading-6">
                                <label
                                  htmlFor="private"
                                  className="font-medium text-gray-900"
                                >
                                  Private
                                </label>
                                <p className="text-gray-500">
                                  Setting your collection to private keeps it
                                  visible only to you. If left unchecked, your
                                  collection will be publicly accessible to all
                                  users.
                                </p>
                                {errors.private?.message && (
                                  <p className="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded relative ">
                                    {errors.private?.message}
                                  </p>
                                )}
                              </div>
                            </div>
                            <div className="col-span-full ">
                              <label
                                htmlFor="cover-photo"
                                className="flex text-sm font-medium leading-6 text-gray-900"
                              >
                                Cover photo
                                {coverPhoto && coverPhoto.length > 0 && (
                                  <button
                                    title="remove cover photo"
                                    type="button"
                                    onClick={() => {
                                      setCoverPhoto([]);
                                    }}
                                    className="ml-auto w-6 h-6 flex items-center justify-center"
                                  >
                                    <XMarkIcon />
                                  </button>
                                )}
                              </label>

                              <div className="mt-2 flex justify-center rounded-lg border border-dashed border-gray-900/25 px-6 py-10">
                                {coverPhoto && coverPhoto.length > 0 ? (
                                  <img
                                    alt="uploaded image"
                                    className="w-full h-64 object-contain"
                                    src={URL.createObjectURL(coverPhoto[0])}
                                  />
                                ) : (
                                  <>
                                    <div className="text-center">
                                      <PhotoIcon
                                        className="mx-auto h-12 w-12 text-gray-300"
                                        aria-hidden="true"
                                      />
                                      <div className="mt-4 flex text-sm leading-6 text-gray-600">
                                        <label
                                          htmlFor="file-upload"
                                          className="relative cursor-pointer rounded-md bg-white font-semibold text-indigo-600 focus-within:outline-none focus-within:ring-2 focus-within:ring-indigo-600 focus-within:ring-offset-2 hover:text-indigo-500"
                                        >
                                          <span>Upload a file</span>
                                          <button
                                            id="file-upload"
                                            name="file-upload"
                                            title="upload cover photo"
                                            className="sr-only"
                                            type="button"
                                            onClick={triggerFilePondSelect}
                                          />
                                        </label>
                                      </div>
                                      <p className="text-xs leading-5 text-gray-600">
                                        PNG, JPG up to 10MB
                                      </p>
                                    </div>
                                    {noCoverPhoto && (
                                      <p className="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded relative ">
                                        please select a file.
                                      </p>
                                    )}
                                  </>
                                )}

                                <FilePond
                                  files={coverPhoto}
                                  onupdatefiles={onUpdateCoverPhoto}
                                  ref={filePondRef}
                                  style={{ display: "none" }}
                                  allowMultiple={false}
                                  maxFileSize="10MB"
                                  acceptedFileTypes={[
                                    "image/jpeg",
                                    "image/png",
                                  ]}
                                  labelFileTypeNotAllowed="File of invalid type"
                                  fileValidateTypeLabelExpectedTypes="Expects: {allTypes}"
                                />
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>

                      <div className="mt-6 flex items-center justify-end gap-x-6">
                        <button
                          type="button"
                          className="text-sm font-semibold leading-6 text-gray-900"
                          onClick={() => setOpen(false)}
                        >
                          Cancel
                        </button>
                        <button
                          type="submit"
                          className="rounded-md bg-indigo-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                        >
                          Save
                        </button>
                      </div>
                    </form>
                  </div>
                </div>
              </Dialog.Panel>
            </Transition.Child>
          </div>
        </div>
      </Dialog>
    </Transition.Root>
  );
}
