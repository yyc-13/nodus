import "@/styles/globals.css";
import type { AppProps } from "next/app";
import { Toaster } from "react-hot-toast";
import { SessionProvider } from "next-auth/react";
import "flowbite";
import { useRouter } from "next/router";
import Layout from "@/components/layout/Layout";

export default function App({
  Component,
  pageProps: { session, ...pageProps },
}: AppProps) {
  const router = useRouter();
  return (
    <>
      <SessionProvider session={session}>
        {!router.pathname.startsWith("/flowbite") &&
          !router.pathname.startsWith("/404") && (
            <Layout>
              <Component {...pageProps} />
            </Layout>
          )}

        <Toaster />
      </SessionProvider>
    </>
  );
}
