import React, { Suspense } from "react";
import { getProductBySlug, getProductDetails, getProductFaqs, getProductLists, getProductsByCategory } from "../../utils/api/api";
import { getRandomProducts } from "../../utils/utils";
import { ProductDetailsDto } from "../../utils/api/dto/productDetailsDto";
import { ProductListsDto } from "../../utils/api/dto/productListsDto";
import { ProductDto } from "../../utils/api/dto/productDto";
import { FaqDto } from "../../utils/api/dto/faqDto";
import ProductDetails from "@/app/components/ProductDetails";
import ProductHeader from "@/app/components/ProductHeader";
import Suggestion from "@/app/components/Suggestion";
import Footer from "@/app/components/Footer";
import Loading from "./loading";
import { Metadata } from "next";

export const generateMetadata = async ({ params }: { params: { slug: string } }): Promise<Metadata> => {
  const product: ProductDto = await getProductBySlug(params.slug);
  return {
    title: `${product.attributes.name} ${product.attributes.subtitle ?? ""}`,
    description: product.attributes.shortDescription,
    alternates: {
      canonical: `/themes/${params.slug}`
    }
  };
};

export default async function ProductPage({ params }: { params: { slug: string } }) {
  const product: ProductDto = await getProductBySlug(params.slug);
  const categoryName = product.attributes.categories.data[0].attributes.name;
  const productLists: ProductListsDto = await getProductLists(product ? categoryName : "");
  const productDetails: ProductDetailsDto = await getProductDetails(product ? categoryName : "");
  const productFaqs: FaqDto = await getProductFaqs(product ? categoryName : "");
  const productByCategory: ProductDto[] = await getProductsByCategory(product ? categoryName : "");

  /* const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'Product',
    name: product.attributes.name,F
    image: process.env.NODE_ENV === "development"
      ? `${API_URL}${product.attributes.cover.data.attributes.formats.large.url}`
      : `${product.attributes.cover.data.attributes.formats.large.url}`,
    description: product.attributes.shortDescription
  }; */

  const suggestedProducts = getRandomProducts(productByCategory, params.slug).slice(0, 3);

  return (
    <main>
      <Suspense fallback={<Loading />} >
        <ProductHeader product={product} productLists={productLists} />
        <ProductDetails product={product} productDetails={productDetails} productFaqs={productFaqs} />
        {productByCategory.length > 2 && <Suggestion productSuggest={suggestedProducts} />}
        <Footer />
      </Suspense>
    </main>
  );
}
