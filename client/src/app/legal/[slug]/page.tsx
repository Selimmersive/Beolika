import React, { Suspense } from "react";
import Footer from "@/components/ui/Footer";
import Loading from "./loading";
import { LegalDto } from "@/utils/api/dto/legalDto";
import { getLegalPageBySlug } from "@/utils/api/api";
import Legal from "@/components/Legal/Legal";
import { errorResponse } from "@/utils/utils";
import { Metadata } from "next";

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
