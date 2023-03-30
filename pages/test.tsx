import { useSession } from "next-auth/react";

export default function Test() {
  const { data } = useSession();
  console.log("user data", data);
  return (
    <>
      <h1>查看 使用者資料</h1>
      <div>{data && data?.user?.name}</div>
    </>
  );
}
