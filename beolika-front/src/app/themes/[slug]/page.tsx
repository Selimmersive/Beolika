import React, { Suspense } from "react";
import { getProductBySlug, getProductDetails, getProductFaqs, getProductLists, getProductsByCategory } from "@/utils/api/api";
import { ProductDetailsDto } from "@/utils/api/dto/productDetailsDto";
import { ProductListsDto } from "@/utils/api/dto/productListsDto";
import { ProductDto } from "@/utils/api/dto/productDto";
import { FaqDto } from "@/utils/api/dto/faqDto";
import ProductDetails from "@/components/Product/ProductDetails";
import ProductHeader from "@/components/Product/ProductHeader";
import Suggestion from "@/components/Product/Suggestion";
import Loading from "./loading";
import Footer from "@/components/ui/Footer";

export default async function ProductPage({ params }: { params: { slug: string } }) {
  const product: ProductDto = await getProductBySlug(params.slug);
  const categoryName = product.attributes.categories.data[0].attributes.name;
  const productLists: ProductListsDto = await getProductLists(product ? categoryName : "");
  const productDetails: ProductDetailsDto = await getProductDetails(product ? categoryName : "");
  const productFaqs: FaqDto = await getProductFaqs(product ? categoryName : "");
  const productSuggest: ProductDto[] = await getProductsByCategory(product ? categoryName : "");

  return (
    <main>
      <Suspense fallback={<Loading />}>
        <ProductHeader product={product} productLists={productLists} />
        <ProductDetails product={product} productDetails={productDetails} productFaqs={productFaqs} />
        {productSuggest.length > 1 && <Suggestion productSuggest={productSuggest} />}
        <Footer />
      </Suspense>
    </main>
  );
}
