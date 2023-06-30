import Link from "next/link";
import { useSession } from "next-auth/react";
export default function UserMedia({ user }) {
  console.log("user in usermedia", user);
  return (
    <div className="relative mt-8 flex items-center gap-x-4">
      <img
        src={user.pfp}
        alt=""
        className="h-10 w-10 rounded-full bg-gray-100"
      />
      <div className="text-sm leading-6">
        <div className="flex gap-x-4">
          <p className="font-semibold text-gray-900">
            <Link href={`/user/${user.userId}`}>
              <span className="absolute inset-0" />
              {user.userName}
            </Link>
          </p>
          <button
            type="button"
            className="rounded bg-indigo-600 px-2 py-1 text-xs font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
          >
            follow
          </button>
        </div>
        <p className="mt-1 line-clamp-1">@{user.userId}</p>
      </div>
    </div>
  );
}
