import {
  CircleStackIcon,
  CursorArrowRaysIcon,
} from "@heroicons/react/24/solid";
import Link from "next/link";

export default function UserMedia({ user }) {
  user.donate = 0;
  user.view = 0;
  user.date = new Date().toLocaleDateString("en-US", {
    month: "short",
    day: "2-digit",
    year: "numeric",
  });

  return (
    <div className="mt-3 flex justify-between items-center  border-t border-gray-900/5 pt-">
      <div className="relative flex items-center gap-x-4">
        <Link href={`/user/${user.userId}`}>
          <span className="sr-only">{user.name}</span>
          <img className="h-10 w-10 rounded-full" src={user.image} alt="" />
        </Link>
        <div className="text-sm leading-6">
          <p className="font-semibold text-gray-900">
            <Link href={`/user/${user.userId}`}>
              <span className="absolute inset-0"></span>
              {user.name}
            </Link>
          </p>
          <p className="text-gray-600">{user.userId}</p>
          <div className="flex space-x-1 text-sm text-gray-700 dark:text-gray-400">
            <time dateTime="2020-03-16">{user.date}</time>
            <span aria-hidden="true">·</span>
          </div>
        </div>
      </div>
      <div className="ml-auto">
        <div className="flex gap-x-1 items-center ">
          <p className="text-gray-700 dark:text-white">{user.donate}</p>
          <CircleStackIcon
            className={
              "h-5 w-5 flex-shrink-0 text-gray-700 dark:text-gray-300 "
            }
            aria-hidden="true"
          />
        </div>
        <div className="flex gap-x-1 items-center">
          <p className="text-gray-700 dark:text-white">{user.view}</p>
          <CursorArrowRaysIcon
            className={
              "h-5 w-5 flex-shrink-0 text-gray-700 dark:text-gray-300 1"
            }
            aria-hidden="true"
          />
        </div>
      </div>
    </div>
  );
}
