import {
  PhotoIcon,
  UserCircleIcon,
  XMarkIcon,
} from "@heroicons/react/24/solid";
import Select from "react-select";
import toast from "react-hot-toast";
import * as yup from "yup";
import { useForm, Controller } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { useSession } from "next-auth/react";
import { membershipPlanSchema } from "@/lib/utils/yupSchema";
import FilePond from "@/lib/filePondSetup";
import { useRef, useState } from "react";
import { socials } from "@/lib/Socials";
import storeFiles from "@/lib/form/storeFiles";
import { useRouter } from "next/router";
import { getSession } from "next-auth/react";
import prisma from "@/lib/prismaClient";

type formData = yup.InferType<typeof membershipPlanSchema>;

export async function getServerSideProps(context) {
  const session = await getSession(context);
  const userId = session?.user?.userId || null;

  if (userId == null) {
    context.res.writeHead(302, {
      Location: "/api/auth/signin",
    }); // Redirect to home page
    context.res.end();
  }

  if (session?.user.registeredWallet) {
    context.res.writeHead(302, {
      Location: "/user/my-wallet",
    }); // Redirect to home page
    context.res.end();
    return { props: { showNotification: "register wallet" } };
  }

  const { id } = await prisma.user.findUnique({
    where: {
      userId: userId,
    },
    select: {
      id: true,
    },
  });

  const userContents = await prisma.content.findMany({
    where: {
      creatorId: id,
    },
    select: {
      title: true,
      id: true,
    },
  });

  return {
    props: {
      userContents,
    },
  };
}

export default function MembershipUpdate({ userContents }) {
  const contents = userContents.map((content) => {
    return {
      value: content.id,
      label: content.title,
    };
  });
  console.log("contents", contents);
  const {
    register,
    handleSubmit,

    control,
    formState: { errors },
    watch,
    setValue,
  } = useForm<formData>({
    resolver: yupResolver(membershipPlanSchema),
  });
  console.log("errors", errors);

  const router = useRouter();
  const { data: session } = useSession();

  const onSubmit = async (data) => {
    try {
      const formSubmitToast = toast.loading("Saving...");
      console.log("data in onSubmit", data);

      const membershipEditRes = await fetch(`/api/memberships`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      });
      if (!membershipEditRes.ok) {
        throw new Error(`HTTP error! status:${membershipEditRes.status}`);
      }
      console.log("membershipEditRes", membershipEditRes);
      toast.success("Saved successfully.", { id: formSubmitToast });
      setTimeout(() => {
        router.push(`/user/my-membership`);
      }, 1000);
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
              Plan
            </h2>
            <p className="mt-1 text-sm leading-6 text-gray-600">
              Tell us more about your membership plan.
            </p>

            <div className="mt-10 grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6">
              <div className="sm:col-span-4">
                <label
                  htmlFor="name"
                  className="block text-sm font-medium leading-6 text-gray-900 mt-4 "
                >
                  Name
                </label>
                <div className="mt-2">
                  <div className="flex rounded-md shadow-sm ring-1 ring-inset ring-gray-300 focus-within:ring-2 focus-within:ring-inset focus-within:ring-indigo-600 sm:max-w-md">
                    <input
                      {...register("name")}
                      type="text"
                      name="name"
                      id="name"
                      autoComplete="name"
                      className="block flex-1 border-0 bg-transparent py-1.5  text-gray-900 placeholder:text-gray-400 focus:ring-0 sm:text-sm sm:leading-6 pl-3"
                    />
                  </div>
                </div>
                {errors.name?.message && (
                  <p className="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded relative ">
                    {errors.name?.message}
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
                  Write a few sentences about this plan.
                </p>
              </div>
              <div className="col-span-2">
                <label
                  htmlFor="price"
                  className="block text-sm font-medium leading-6 text-gray-900 "
                >
                  Monthly subscription price
                </label>
                <div className="mt-2 sm:col-span-2 ">
                  <div className="flex max-w-lg rounded-md shadow-sm">
                    <input
                      {...register("price")}
                      type="number"
                      name="price"
                      id="price"
                      defaultValue={0}
                      className="disabled:opacity-75 block w-full min-w-0 flex-1 rounded-md border-0 py-1.5 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                    ></input>
                  </div>
                </div>
                <p className="mt-3 text-sm leading-6 text-gray-600">
                  1 = 0.01 USDC
                </p>
                {errors.price?.message && (
                  <p className="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded relative ">
                    {errors.price?.message}
                  </p>
                )}
              </div>
              <div className="col-span-full">
                <div className="flex h-6 items-center">
                  <div className="text-sm leading-6">
                    <label
                      htmlFor="contents"
                      className="block text-sm font-medium leading-6 text-gray-900 mb-2"
                    >
                      Contents
                    </label>
                  </div>
                  {errors.contents?.message && (
                    <p className="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded relative ">
                      {errors.contents?.message}
                    </p>
                  )}
                </div>
                {contents.length == 0 ? (
                  <>
                    <Controller
                      name="contents"
                      control={control}
                      render={({ field }) => (
                        <Select
                          {...field}
                          options={contents}
                          isMulti
                          className="basic-multi-select"
                          classNamePrefix="select"
                          instanceId={"contents"}
                          isDisabled={true}
                        />
                      )}
                    />
                    <p className="mt-3 text-sm leading-6 text-gray-600">
                      There is no content available to add to this membership.
                    </p>
                  </>
                ) : (
                  <Controller
                    name="contents"
                    control={control}
                    render={({ field }) => (
                      <Select
                        {...field}
                        options={contents}
                        isMulti
                        className="basic-multi-select"
                        classNamePrefix="select"
                        instanceId={"contents"}
                      />
                    )}
                  />
                )}
              </div>
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
