import {
  PhotoIcon,
  UserCircleIcon,
  XMarkIcon,
} from "@heroicons/react/24/solid";
import toast from "react-hot-toast";
import * as yup from "yup";
import { useForm, Controller } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { useSession } from "next-auth/react";
import { userInfoSchema } from "@/lib/utils/yupSchema";
import FilePond from "@/lib/filePondSetup";
import { useRef, useState } from "react";
import { socials } from "@/lib/Socials";
import storeFiles from "@/lib/form/storeFiles";
import { useRouter } from "next/router";

type formData = yup.InferType<typeof userInfoSchema>;

export default function InfoUpdate() {
  const {
    register,
    handleSubmit,

    control,
    formState: { errors },
    watch,
    setValue,
  } = useForm<formData>({
    resolver: yupResolver(userInfoSchema),
  });
  console.log("errors", errors);

  const [pfp, setPfp] = useState();
  const [coverPhoto, setCoverPhoto] = useState();
  const [userIDExist, setUserIDExist] = useState(false);
  const router = useRouter();
  const { data: session } = useSession();
  const onUpdatePfp = (fileObjs) => {
    setPfp(fileObjs.map((fileObj) => fileObj.file));
  };
  const onUpdateCoverPhoto = (fileObjs) => {
    setCoverPhoto(fileObjs.map((fileObj) => fileObj.file));
  };

  const coverPhotoRef = useRef();
  const pfpRef = useRef();

  const triggerCoverPhotoSelect = () => {
    if (coverPhotoRef.current) {
      coverPhotoRef.current.browse();
    }
  };
  const triggerPfpSelect = () => {
    if (pfpRef.current) {
      pfpRef.current.browse();
    }
  };

  const onSubmit = async (data) => {
    try {
      const formSubmitToast = toast.loading("Saving...");
      console.log("data in onSubmit", data);
      const userCheckRes = await fetch(`/api/user/check?userID=${data.userID}`);
      const userCheck = await userCheckRes.json();
      if (userCheck.userExists) {
        setUserIDExist(true);
        toast.error(
          "This userID is already in use, please choose another one."
        );
        return;
      }

      const coverPhotoIdentifiers = await storeFiles(
        coverPhoto,
        "User Cover",
        "image"
      );
      const pfpIdentifiers = await storeFiles(pfp, "User Pfp", "image");

      const processedData = {
        ...data,
        coverPhoto: coverPhotoIdentifiers,
        pfp: pfpIdentifiers,
      };

      for (let social of socials) {
        if (data[social.name]) {
          processedData[social.name] = social.url + data[social.name];
        }
      }

      const res = await fetch("/api/user/info", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(processedData),
      });
      if (!res.ok) {
        throw new Error(`HTTP error! status:${res.status}`);
      }
      toast.dismiss(formSubmitToast);

      router.push(`/user/${session?.user.userId}`);
    } catch (err) {
      console.error(err);
      toast.error("An error occurred");
    }
  };

  return (
    <div className="mt-16">
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className="space-y-12">
          <div className="border-b border-gray-900/10 pb-12">
            <h2 className="text-base font-semibold leading-7 text-gray-900">
              Profile
            </h2>
            <p className="mt-1 text-sm leading-6 text-gray-600">
              This information will be displayed publicly so be careful what you
              share.
            </p>

            <div className="mt-10 grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6">
              <div className="sm:col-span-4">
                <label
                  htmlFor="userId"
                  className="block text-sm font-medium leading-6 text-gray-900"
                >
                  User ID
                </label>
                <div className="mt-2">
                  <div className="flex rounded-md shadow-sm ring-1 ring-inset ring-gray-300 focus-within:ring-2 focus-within:ring-inset focus-within:ring-indigo-600 sm:max-w-md">
                    <span className="flex select-none items-center pl-3 text-gray-500 sm:text-sm">
                      @
                    </span>
                    <input
                      {...register("userID")}
                      type="text"
                      name="userID"
                      id="userID"
                      autoComplete="userID"
                      className="block flex-1 border-0 bg-transparent py-1.5 pl-1 text-gray-900 placeholder:text-gray-400 focus:ring-0 sm:text-sm sm:leading-6"
                    />
                  </div>
                </div>
                {errors.userID?.message && (
                  <p className="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded relative ">
                    {errors.userID?.message}
                  </p>
                )}
                {userIDExist && (
                  <p className="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded relative ">
                    User ID already exist, please select another user ID.
                  </p>
                )}
                <label
                  htmlFor="userName"
                  className="block text-sm font-medium leading-6 text-gray-900 mt-4 "
                >
                  User Name
                </label>
                <div className="mt-2">
                  <div className="flex rounded-md shadow-sm ring-1 ring-inset ring-gray-300 focus-within:ring-2 focus-within:ring-inset focus-within:ring-indigo-600 sm:max-w-md">
                    <input
                      {...register("userName")}
                      type="text"
                      name="userName"
                      id="userName"
                      autoComplete="userName"
                      className="block flex-1 border-0 bg-transparent py-1.5  text-gray-900 placeholder:text-gray-400 focus:ring-0 sm:text-sm sm:leading-6 pl-3"
                    />
                  </div>
                </div>
                {errors.userName?.message && (
                  <p className="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded relative ">
                    {errors.userName?.message}
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
                    {...register("about")}
                    id="about"
                    name="about"
                    rows={3}
                    className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                    defaultValue={""}
                  />
                </div>
                <p className="mt-3 text-sm leading-6 text-gray-600">
                  Write a few sentences about yourself.
                </p>
                {errors.about?.message && (
                  <p className="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded relative ">
                    {errors.about?.message}
                  </p>
                )}
              </div>

              <div className="col-span-full">
                <label
                  htmlFor="photo"
                  className="block text-sm font-medium leading-6 text-gray-900"
                >
                  Photo
                </label>
                <div className="mt-2 flex items-center gap-x-3">
                  {pfp && pfp.length > 0 ? (
                    <img
                      src={URL.createObjectURL(pfp[0])}
                      className="h-12 w-12 object-cover rounded-full border-gray-300 "
                      alt="User profile"
                    />
                  ) : (
                    <UserCircleIcon
                      className="h-12 w-12 text-gray-300"
                      aria-hidden="true"
                    />
                  )}

                  <button
                    type="button"
                    className="rounded-md bg-white px-2.5 py-1.5 text-sm font-semibold text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-50"
                    onClick={triggerPfpSelect}
                  >
                    Change
                  </button>
                  <FilePond
                    files={pfp}
                    onupdatefiles={onUpdatePfp}
                    ref={pfpRef}
                    style={{ display: "none" }}
                    allowMultiple={false}
                    maxFileSize="10MB"
                    acceptedFileTypes={["image/jpeg", "image/png"]}
                    labelFileTypeNotAllowed="File of invalid type"
                    fileValidateTypeLabelExpectedTypes="Expects: {allTypes}"
                  />
                </div>
              </div>

              <div className="col-span-full">
                <div className="flex items-center gap-x-2">
                  <label
                    htmlFor="cover-photo"
                    className=" text-sm font-medium leading-6 text-gray-900 flex"
                  >
                    Cover photo
                  </label>
                  {coverPhoto && coverPhoto.length > 0 && (
                    <button
                      type="button"
                      className="rounded-md bg-white px-2.5 py-1.5 text-sm font-semibold text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-50"
                      onClick={triggerCoverPhotoSelect}
                    >
                      Change
                    </button>
                  )}
                </div>
                <div className="mt-2 flex justify-center rounded-lg border border-dashed border-gray-900/25 px-6 py-10">
                  {coverPhoto && coverPhoto.length > 0 ? (
                    <img
                      alt="cover photo"
                      src={URL.createObjectURL(coverPhoto[0])}
                      className="w-full h-64 object-cover"
                    />
                  ) : (
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
                            onClick={triggerCoverPhotoSelect}
                            type="button"
                          />
                        </label>
                        <p className="pl-1">or drag and drop</p>
                      </div>
                      <p className="text-xs leading-5 text-gray-600">
                        PNG, JPG up to 10MB
                      </p>
                    </div>
                  )}
                  <FilePond
                    files={coverPhoto}
                    onupdatefiles={onUpdateCoverPhoto}
                    ref={coverPhotoRef}
                    style={{ display: "none" }}
                    allowMultiple={false}
                    maxFileSize="10MB"
                    acceptedFileTypes={["image/jpeg", "image/png"]}
                    labelFileTypeNotAllowed="File of invalid type"
                    fileValidateTypeLabelExpectedTypes="Expects: {allTypes}"
                  />
                </div>
              </div>
            </div>
          </div>

          <div className="border-b border-gray-900/10 pb-12">
            <h2 className="text-base font-semibold leading-7 text-gray-900">
              Socials
            </h2>

            <div className="mt-10 grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6">
              {socials.map((social) => {
                return (
                  <div className="sm:col-span-4" key={social.name}>
                    <div className="flex gap-x-2 items-center">
                      <social.icon />
                      <label
                        htmlFor="userId"
                        className="block text-sm font-medium leading-6 text-gray-900"
                      >
                        {social.name}
                      </label>
                    </div>
                    <div className="mt-2">
                      <div className="flex rounded-md shadow-sm ring-1 ring-inset ring-gray-300 focus-within:ring-2 focus-within:ring-inset focus-within:ring-indigo-600 sm:max-w-md">
                        <span className="flex select-none items-center pl-3 text-gray-500 sm:text-sm">
                          {social.url}
                        </span>
                        <input
                          {...register(social.name)}
                          type="text"
                          name={social.name}
                          id={social.name}
                          autoComplete={social.name}
                          className="block flex-1 border-0 bg-transparent py-1.5 pl-1 text-gray-900 placeholder:text-gray-400 focus:ring-0 sm:text-sm sm:leading-6"
                        />
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>

        <div className="mt-6 flex items-center justify-end gap-x-6">
          <button
            type="submit"
            className="rounded-md bg-indigo-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
          >
            Save
          </button>
        </div>
      </form>
    </div>
  );
}
