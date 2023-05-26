import { Fragment, useState, useEffect } from "react";
import DarkModeToggle from "../utils/DarkModeToggle";
import { Disclosure, Menu, Transition } from "@headlessui/react";
import { MagnifyingGlassIcon } from "@heroicons/react/20/solid";
import { Bars3Icon, BellIcon, XMarkIcon } from "@heroicons/react/24/outline";
import { signIn, signOut, useSession } from "next-auth/react";
import Link from "next/link";

function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}

export default function TopNav({ sidebar, setSidebar }) {
  const { data: session } = useSession();
  const user = session?.user;
  const loggedIn: boolean = session ? true : false;
  const [uploadModal, setUploadModal] = useState(false);

  const toggleSidebar = () => {
    setSidebar(!sidebar);
  };

  const openModal = () => {
    setUploadModal(true);
    return;
  };

  return (
    <Disclosure as="nav" className="bg-white dark:bg-gray-800 shadow">
      {({ open }) => (
        <>
          <div className="mx-auto w-full px-2 sm:px-4 lg:px-8">
            <div className="flex h-16 justify-between">
              <div className="flex px-2 lg:px-0">
                <span className="sr-only">Open main menu</span>
                {sidebar ? (
                  <button onClick={toggleSidebar}>
                    <XMarkIcon className="block h-6 w-6" aria-hidden="true" />
                  </button>
                ) : (
                  <button onClick={toggleSidebar}>
                    <Bars3Icon className="block h-6 w-6" />
                  </button>
                )}
                <Link
                  href="/"
                  className="hidden ml-4 sm:flex flex-shrink-0 items-center"
                >
                  <img
                    className="block h-8 w-auto lg:hidden"
                    src="https://tailwindui.com/img/logos/mark.svg?color=indigo&shade=600"
                    alt="Your Company"
                  />
                  <img
                    className="hidden h-8 w-auto lg:block"
                    src="https://tailwindui.com/img/logos/mark.svg?color=indigo&shade=600"
                    alt="Your Company"
                  />
                </Link>
                <div className="hidden lg:ml-6 lg:flex gap-x-4">
                  <a
                    href="#"
                    className="inline-flex items-center border-b-2 border-transparent px-1 pt-1 text-sm font-medium text-gray-900  hover:border-gray-300 
                    hover:bg-gray-50 hover:text-gray-700  dark:border-gray-500 dark:text-gray-300 dark:hover:bg-gray-700 dark:hover:text-white"
                  >
                    index
                  </a>
                  <a
                    href="#"
                    className="inline-flex items-center border-b-2 border-transparent px-1 pt-1 text-sm font-medium text-gray-900  hover:border-gray-300 
                    hover:bg-gray-50 hover:text-gray-700  dark:border-gray-500 dark:text-gray-300 dark:hover:bg-gray-700 dark:hover:text-white"
                  >
                    faq
                  </a>
                  <a
                    href="#"
                    className="inline-flex items-center border-b-2 border-transparent px-1 pt-1 text-sm font-medium text-gray-900  hover:border-gray-300 
                    hover:bg-gray-50 hover:text-gray-700  dark:border-gray-500 dark:text-gray-300 dark:hover:bg-gray-700 dark:hover:text-white"
                  >
                    about us
                  </a>
                </div>
              </div>
              <div className="hidden sm:flex flex-1 items-center justify-center px-2 lg:ml-6 lg:justify-start">
                <div className="lg:w-full max-w-lg lg:max-w-xs">
                  <label htmlFor="search" className="sr-only">
                    Search
                  </label>
                  <div className="relative">
                    <div className="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-3">
                      <MagnifyingGlassIcon
                        className="h-5 w-5 text-gray-900 dark:text-white"
                        aria-hidden="true"
                      />
                    </div>
                    <input
                      id="search"
                      name="search"
                      className="block w-full rounded-md border-0 bg-white dark:bg-gray-800 py-1.5 pl-10 pr-3 text-gray-900 dark:text-white ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                      placeholder="Search"
                      type="search"
                    />
                  </div>
                </div>
              </div>
              <button className="sm:hidden" title="search">
                <MagnifyingGlassIcon
                  className="h-5 w-5 text-gray-900 dark:text-white"
                  aria-hidden="true"
                />
              </button>

              <div className=" lg:ml-4 flex items-center">
                <Link href={"/upload/content"}>
                  <button
                    type="button"
                    className="mx-4 rounded-md bg-indigo-600 px-2.5 py-1.5 text-sm font-semibold  text-white shadow-sm hover:bg-indigo-500 dark:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600
                  dark:text-white dark:hover:bg-indigo-400 dark:focus-visible:outline-indigo-500"
                  >
                    Upload
                  </button>
                </Link>

                <button
                  type="button"
                  className="flex-shrink-0 rounded-full bg-white p-1 text-gray-900 hover:text-gray-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2
                  dark:bg-gray-800 dark:text-gray-400 dark:hover:text-white dark:focus:outline-none dark:focus:ring-2  dark:focus:ring-white dark:focus:ring-offset-2 dark:focus:ring-offset-gray-800"
                >
                  <span className="sr-only">View notifications</span>
                  <BellIcon className="h-6 w-6" aria-hidden="true" />
                </button>
                {/* Profile dropdown */}
                <Menu as="div" className="relative ml-4 flex-shrink-0">
                  <div>
                    <Menu.Button className="hidden lg:flex rounded-full bg-white text-sm  focus:ring-2 ">
                      <span className="sr-only">Open user menu</span>
                      {user?.image ? (
                        <img
                          className="h-8 w-8 rounded-full"
                          src={user.image}
                          alt=""
                        />
                      ) : (
                        <img
                          className="h-8 w-8 rounded-full"
                          src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
                          alt=""
                        />
                      )}
                    </Menu.Button>
                  </div>
                  <Transition
                    as={Fragment}
                    enter="transition ease-out duration-100"
                    enterFrom="transform opacity-0 scale-95"
                    enterTo="transform opacity-100 scale-100"
                    leave="transition ease-in duration-75"
                    leaveFrom="transform opacity-100 scale-100"
                    leaveTo="transform opacity-0 scale-95"
                  >
                    <Menu.Items className="absolute right-0 z-10 mt-2 w-48 origin-top-right rounded-md bg-white py-1 shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
                      <Menu.Item>
                        {({ active }) => (
                          <a
                            href="#"
                            className={classNames(
                              active ? "bg-gray-100" : "",
                              "block px-4 py-2 text-sm text-gray-700 "
                            )}
                          >
                            Your Profile
                          </a>
                        )}
                      </Menu.Item>
                      <Menu.Item>
                        {({ active }) => (
                          <a
                            href="#"
                            className={classNames(
                              active ? "bg-gray-100" : "",
                              "block px-4 py-2 text-sm text-gray-700"
                            )}
                          >
                            Settings
                          </a>
                        )}
                      </Menu.Item>
                      <Menu.Item>
                        {({ active }) => {
                          return (
                            <div
                              className={classNames(
                                active ? "bg-gray-100" : "",
                                "flex gap-x-2 items-center px-4 py-2 text-sm text-gray-700"
                              )}
                            >
                              <p className="">Dark Mode</p>
                            </div>
                          );
                        }}
                      </Menu.Item>
                      <Menu.Item>
                        {({ active }) => (
                          <a
                            href={
                              loggedIn
                                ? "/api/auth/signout"
                                : "/api/auth/signin"
                            }
                            className={classNames(
                              active ? "bg-gray-100" : "",
                              "block px-4 py-2 text-sm text-gray-700"
                            )}
                          >
                            {loggedIn ? "Sign Out" : "Sign In"}
                          </a>
                        )}
                      </Menu.Item>
                    </Menu.Items>
                  </Transition>
                </Menu>
                <div className="flex items-center lg:hidden">
                  {/* Mobile menu button */}
                  <Disclosure.Button className="inline-flex items-center justify-center rounded-md p-2 text-gray-900 dark:text-white hover:bg-gray-100 hover:text-gray-500 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-500">
                    <span className="sr-only">Open main menu</span>
                    {open ? (
                      <XMarkIcon className="block h-6 w-6" aria-hidden="true" />
                    ) : (
                      <Bars3Icon className="block h-6 w-6" aria-hidden="true" />
                    )}
                  </Disclosure.Button>
                </div>
              </div>
            </div>
          </div>

          <Disclosure.Panel className="lg:hidden">
            <div className="border-t border-gray-200 pb-3 pt-4">
              <div className="flex items-center px-4">
                <div className="flex-shrink-0">
                  {user?.image ? (
                    <img
                      className="h-10 w-10 rounded-full"
                      src={user?.image}
                      alt=""
                    />
                  ) : (
                    <img
                      className="h-8 w-8 rounded-full"
                      src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
                      alt=""
                    />
                  )}
                </div>
                <div className="ml-3">
                  <div className="text-base font-medium text-gray-300 dark:text-gray-800">
                    {user?.name}
                  </div>
                  <div className="text-sm font-medium text-gray-300 dark:text-gray-800">
                    {user?.email}
                  </div>
                </div>

                {/* <button
                  type="button"
                  className="ml-auto flex-shrink-0 rounded-full bg-white dark:bg-gray-800 p-1 text-gray-900 dark:text-white hover:text-gray-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
                >
                  <span className="sr-only">View notifications</span>
                  <BellIcon className="h-6 w-6" aria-hidden="true" />
                </button> */}
              </div>
              <div className="mt-3 space-y-1">
                <Disclosure.Button
                  as="a"
                  href="#"
                  className="block px-4 py-2 text-base font-medium text-gray-500 hover:border-gray-300 hover:bg-gray-50 hover:text-gray-700
                  dark:text-white dark:hover:bg-gray-700 "
                >
                  Your Profile
                </Disclosure.Button>
                <Disclosure.Button
                  as="a"
                  href="#"
                  className="block px-4 py-2 text-base font-medium text-gray-500 hover:border-gray-300 hover:bg-gray-50 hover:text-gray-700
                  dark:text-white dark:hover:bg-gray-700 "
                >
                  Settings
                </Disclosure.Button>
                <Disclosure.Button
                  as="a"
                  href={loggedIn ? "/api/auth/signout" : "/api/auth/signin"}
                  className="block px-4 py-2 text-base font-medium text-gray-500 hover:border-gray-300 hover:bg-gray-50 hover:text-gray-700
                  dark:text-white dark:hover:bg-gray-700 "
                >
                  {loggedIn ? "Sign Out" : "Sign In"}
                </Disclosure.Button>
              </div>
            </div>
            <hr className="border-t border-gray-200 dark:border-gray-700" />
            <div className="space-y-1 pb-3 pt-2">
              <Disclosure.Button
                as="a"
                href="#"
                className="block border-l-4 border-transparent py-2 pl-3 pr-4 text-base font-medium text-gray-500 hover:border-gray-300 hover:bg-gray-50 hover:text-gray-700  dark:text-white  dark:hover:bg-gray-700 "
              >
                index
              </Disclosure.Button>
              <Disclosure.Button
                as="a"
                href="#"
                className="block border-l-4 border-transparent py-2 pl-3 pr-4 text-base font-medium text-gray-500 hover:border-gray-300 hover:bg-gray-50 hover:text-gray-700  dark:text-white  dark:hover:bg-gray-700 "
              >
                faq
              </Disclosure.Button>
              <Disclosure.Button
                as="a"
                href="#"
                className="block border-l-4 border-transparent py-2 pl-3 pr-4 text-base font-medium text-gray-500 hover:border-gray-300 hover:bg-gray-50 hover:text-gray-700  dark:text-white  dark:hover:bg-gray-700 "
              >
                about us
              </Disclosure.Button>
            </div>
          </Disclosure.Panel>
        </>
      )}
    </Disclosure>
  );
}
