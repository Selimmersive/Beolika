import { getAllLegals, getAllProducts } from "@/app/utils/api/api";
import { ProductDto } from "@/app/utils/api/dto/productDto";
import { errorResponse } from "./utils/utils";
import { HOME_URL } from "./utils/urls";

export default async function sitemap() {

  const products: ProductDto[] = await getAllProducts().catch((err) => {
    errorResponse(err);
  });
  const legals: ProductDto[] = await getAllLegals().catch((err) => {
    errorResponse(err);
  });

  const themesUrl = 
  products.map((theme) => {
    return {
      url: `${HOME_URL}/themes/${theme.attributes.slug}`,
      lastModified: new Date()
    };
  });

  const legalsUrls = 
  legals.map((theme) => {
    return {
      url: `${HOME_URL}/legal/${theme.attributes.slug}`,
      lastModified: new Date()
    };
  });

  return [
    {
      url: HOME_URL,
      lastModified: new Date()
    },
    {
      url: `${HOME_URL}/themes`,
      lastModified: new Date()
    },
    ...themesUrl,
    {
      url: `${HOME_URL}/faq`,
      lastModified: new Date()
    },
    {
      url: `${HOME_URL}/contact`,
      lastModified: new Date()
    },
    ...legalsUrls
  ];
}