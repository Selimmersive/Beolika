import { Darker_Grotesque } from "next/font/google";
import { Toaster } from "react-hot-toast";
import SnipCartCustom from "./snipcart";
import localFont from "next/font/local";
import Script from "next/script";
import Head from "next/head";
import React from "react";
import "./globals.css";

export const metadata = {
  metadataBase: new URL("https://themify.vercel.app"),
  title: {
    default: "Themify",
    template: `Themify - %s`,
  },
  description: "Library of high-conversion, attractive and trendy themes",
  generator: 'Next.js & Strapi',
  applicationName: 'Themify',
  referrer: 'origin-when-cross-origin',
  keywords: ['Next.js', 'Next', 'Next 13', 'React', 'Typescript', 'Tailwindcss', 'JavaScript', 'Shopify', 'Themes', 'Templates', 'Theme', 'Template', 'Library', 'High-conversion', 'Trendy'],
  authors: [{ name: 'Beolika', url: 'https://beolika.com' }],
  creator: 'Beolika',
  publisher: 'Beolika',
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
      <body className="min-w-screen bg-primary" suppressHydrationWarning={true}>
        <SnipCartCustom>
          {children}
        </SnipCartCustom>
        <Toaster position="bottom-center" reverseOrder={false} />
        <Script
          async
          src="https://cdn.snipcart.com/themes/v3.4.1/default/snipcart.js"
          id="snipcart"
          data-api-key="YzhhNzM3YmMtNDY4Ny00OGYxLTg3ZDYtNzIxMDI5ZmQwYmE5NjM4MTQ1MTk2OTM4NDY2NzEy"
          data-config-modal-style="side"></Script>
      </body>
    </html>
  );
}
