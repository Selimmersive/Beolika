import { getProductsByCategory } from "./utils/api/api";
import { errorResponse } from "./utils/utils";
import { ProductDto } from "./utils/api/dto/productDto";
import { Suspense } from "react";
import FeaturedCollections from "@/app/components/FeaturedCollections";
import Loading from "./loading";
import Header from "@/app/components/Header";
import Footer from "@/app/components/Footer";
import About from "@/app/components/About";

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