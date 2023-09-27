import { getProductsByCategory } from "@/utils/api/api";
import { errorResponse } from "./utils/utils";
import { ProductDto } from "@/utils/api/dto/productDto";
import { Suspense } from "react";
import FeaturedCollections from "@/components/Home/FeaturedCollections";
import Loading from "./loading";
import Header from "@/components/Home/Header";
import Footer from "@/components/ui/Footer";
import About from "@/components/Home/About";

export default async function Home() {
  const shopifyThemes: ProductDto[] = await getProductsByCategory("shopify").catch((err) => {
    errorResponse(err);
  });
  return (
    <main>  
      <Header />
      <About />
      <Suspense fallback={<Loading />}>
        <FeaturedCollections data={shopifyThemes} title="Shopify themes" />
        <Footer />
      </Suspense>
    </main>
  );
}