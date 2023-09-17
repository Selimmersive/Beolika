import React, { Suspense } from "react";
import { getProductFaqs } from "@/utils/api/api";
import { FaqDto } from "@/utils/api/dto/faqDto";
import Footer from "@/components/ui/Footer";
import NavBar from "@/components/ui/NavBar";
import clsx from "clsx";
import FAQ from "@/components/ui/FAQ";
import Loading from "../loading";

export default async function FaqPages() {
  const faq: FaqDto = await getProductFaqs("shopify");
  return (
    <main>
      <div className="container">
        <NavBar />
        <div className="py-10">
          <div className={clsx("mx-auto min-h-[320px] space-y-10 py-20 text-center", "md:w-[500px]", "xl:w-[800px]")}>
            <h3 className={clsx("text-5xl font-bold", "lg:text-8xl")}>Frequently Asked Questions</h3>
            <p className={clsx("py-2 text-lg", "md:text-xl", "lg:py-4 lg:text-[22px]")}>Some questions asked by our customers</p>
          </div>
          <Suspense fallback={<Loading />}>
            <FAQ data={faq} />
          </Suspense>
        </div>
      </div>
      <Footer />
    </main>
  );
}
