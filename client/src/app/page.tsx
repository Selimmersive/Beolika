import { getProductsByCategory } from "@/utils/api/api";
import { errorResponse } from "@/utils/utils";
import { ProductDto } from "@/utils/api/dto/productDto";
import { Suspense } from "react";
import FeaturedCollections from "@/components/FeaturedCollections";
import Loading from "./loading";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import About from "@/components/About";

export const metadata = {
  title: "Shopithemes - Home",
  alternates: {
    canonical: `https://shopithemes.beolika.com/`,
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