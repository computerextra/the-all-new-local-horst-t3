import { api } from "@/utils/api";
import { NextUIProvider } from "@nextui-org/react";
import { GeistSans } from "geist/font/sans";
import { type Session } from "next-auth";
import { SessionProvider } from "next-auth/react";
import { type AppType } from "next/app";

import "@/styles/globals.css";

const MyApp: AppType<{ session: Session | null }> = ({
  Component,
  pageProps: { session, ...pageProps },
}) => {
  return (
    <SessionProvider session={session}>
      <div className={GeistSans.className}>
        <NextUIProvider>
          <Component {...pageProps} />
        </NextUIProvider>
      </div>
    </SessionProvider>
  );
};

export default api.withTRPC(MyApp);
