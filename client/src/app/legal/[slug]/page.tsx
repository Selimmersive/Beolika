import React, { Suspense } from "react";
import Footer from "@/app/components/Footer";
import Loading from "./loading";
import { LegalDto } from "@/app/utils/api/dto/legalDto";
import { getLegalPageBySlug } from "@/app/utils/api/api";
import Legal from "@/app/components/Legal";
import { Metadata } from "next";
import { errorResponse } from "@/app/utils/utils";

export const generateMetadata = async ({ params }: { params: { slug: string } }): Promise<Metadata> => {
  const legal: LegalDto = await getLegalPageBySlug(params.slug).catch((err) => {
    errorResponse(err);
  });
  return {
    title: `${legal.attributes.title}`,
    description: "Library of high-conversion, attractive and trendy themes",
    alternates: {
      canonical: `/legal/${params.slug}`
    }
  };
};

export default async function LegalPage({ params }: { params: { slug: string } }) {
  const legal: LegalDto = await getLegalPageBySlug(params.slug).catch((err) => {
    errorResponse(err);
  });

  return (
    <main>
      <Suspense fallback={<Loading />}>
        <Legal legal={legal} />
        <Footer />
      </Suspense>
    </main>
  );
}
