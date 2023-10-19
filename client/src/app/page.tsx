import { getProductsByCategory } from "@/utils/api/api";
import { errorResponse } from "./utils/utils";
import { ProductDto } from "@/utils/api/dto/productDto";
import { Suspense } from "react";
import FeaturedCollections from "@/components/Home/FeaturedCollections";
import Loading from "./loading";
import Header from "@/components/Home/Header";
import Footer from "@/components/ui/Footer";

export default async function Home() {
  const shopifyThemes: ProductDto[] = await getProductsByCategory("shopify").catch((err) => {
    errorResponse(err);
  });
  return (
    <main>  
      <Header />
      <Suspense fallback={<Loading />}>
        <FeaturedCollections data={shopifyThemes} title="Products" />
        <Footer />
      </Suspense>
    </main>
  );
}