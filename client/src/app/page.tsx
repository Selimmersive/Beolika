import Header from "@/components/Home/Header";
import About from "@/components/Home/About";
import FeaturedCollections from "@/components/Home/FeaturedCollections";
import Footer from "@/components/ui/Footer";
import { Suspense } from "react";
import Loading from "./loading";
import { getProductsByCategory } from "@/utils/api/api";
import { ProductDto } from "@/utils/api/dto/productDto";

export default async function Home() {
  const shopifyThemes: ProductDto[] = await getProductsByCategory("shopify");
  return (
    <main>
      <Suspense fallback={<Loading />}>
        <Header />
        <About />
        <FeaturedCollections data={shopifyThemes} title="Shopify themes" />
        <Footer />
      </Suspense>
    </main>
  );
}