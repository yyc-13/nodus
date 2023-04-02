import { GetServerSideProps } from "next";
import Form from "../components/form";
import { getServerSession } from "next-auth/next";
import { authOptions } from "../pages/api/auth/[...nextauth]";
export default function Upload() {
  return (
    <>
      <Form></Form>
    </>
  );
}

export async function getServerSideProps(context: any) {
  console.log("This log message will be printed to the server console.");
  const session = await getServerSession(context.req, context.res, authOptions);
  console.log(session);

  if (!session) {
    return {
      redirect: {
        destination: "/",
        permanent: false,
      },
    };
  }

  return {
    props: {},
  };
}
