import "./globals.css";
import { Darker_Grotesque } from "next/font/google";
import Script from "next/script";
import Head from "next/head";
import localFont from "next/font/local";
import { Toaster } from "react-hot-toast";
import React from "react";
import SnipCartCustom from "./snipcart";

export const metadata = {
  title: "Beolika",
  description: "Library of high-conversion, attractive and trendy themes",
};

const darker = Darker_Grotesque({ weight: ["400", "500", "600", "700", "800", "900"], subsets: ["latin"], variable: "--font-darker" });
const sego = localFont({
  src: [
    {
      path: "../../public/fonts/sego.ttf",
    },
  ],
  variable: "--font-sego",
});

const glacialRegular = localFont({
  src: [
    {
      path: "../../public/fonts/glacialRegular.otf",
    },
  ],
  variable: "--font-glacial-regular",
});

const glacialBold = localFont({
  src: [
    {
      path: "../../public/fonts/glacialBold.otf",
    },
  ],
  variable: "--font-glacial-bold",
});

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${darker.variable} ${sego.variable} ${glacialRegular.variable} ${glacialBold.variable}`}>
      <Head>
        <link rel="preconnect" href="https://app.snipcart.com" />
        <link rel="preconnect" href="https://cdn.snipcart.com" />
      </Head>
      <body className="min-w-screen bg-[var(--color-primary)]" suppressHydrationWarning={true}>
        <SnipCartCustom>
          {children}
        </SnipCartCustom>
        <Toaster position="bottom-center" reverseOrder={false} />
        <Script
          async
          src="https://cdn.snipcart.com/themes/v3.4.1/default/snipcart.js"
          id="snipcart"
          data-api-key="MGJmYmI5ZTQtOGE3Ni00YTM1LTgzNTEtZWI0ZWMxMmM4OGZhNjM4MTQ1MTk2OTM4NDY2NzEy"
          data-config-modal-style="side"></Script>
      </body>
    </html>
  );
}
