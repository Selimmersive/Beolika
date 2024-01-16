import { getProductsByCategory } from "./utils/api/api";
import { ProductDto } from "./utils/api/dto/productDto";
import { Suspense } from "react";
import FeaturedCollections from "@/app/components/FeaturedCollections";
import Loading from "./loading";
import Header from "@/app/components/Header";
import Footer from "@/app/components/Footer";
import About from "@/app/components/About";
import { errorResponse } from "./utils/utils";

export const metadata = {
  title: "Themify - Home",
  alternates: {
    canonical: `https://themify.vercel.app/`,
  }
};
export default async function Home() {
  const shopifyThemes: ProductDto[] = await getProductsByCategory("shopify").catch((err) => {
    errorResponse(err);
  });
  return (
    <main>  
      <Header />
      <Suspense fallback={<Loading />}>
        <FeaturedCollections data={shopifyThemes} title="Our latest themes" />
        <About />
        <Footer />
      </Suspense>
    </main>
  );
}