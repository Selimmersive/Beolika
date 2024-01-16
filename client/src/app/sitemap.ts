import { getAllLegals, getAllProducts } from "@/app/utils/api/api";
import { ProductDto } from "@/app/utils/api/dto/productDto";
import { errorResponse } from "./utils/utils";
import { HOME_URL } from "./utils/urls";

export default async function sitemap() {
  try {
    const products: ProductDto[] = await getAllProducts();
    const legals: ProductDto[] = await getAllLegals();

    const themesUrl = products.map((theme) => ({
      url: `${HOME_URL}/themes/${theme.attributes.slug}`,
      lastModified: new Date(),
    }));

    const legalsUrls = legals.map((legal) => ({
      url: `${HOME_URL}/legal/${legal.attributes.slug}`,
      lastModified: new Date(),
    }));

    return [
      {
        url: HOME_URL,
        lastModified: new Date(),
      },
      {
        url: `${HOME_URL}/themes`,
        lastModified: new Date(),
      },
      ...themesUrl,
      {
        url: `${HOME_URL}/faq`,
        lastModified: new Date(),
      },
      {
        url: `${HOME_URL}/contact`,
        lastModified: new Date(),
      },
      ...legalsUrls,
    ];
  } catch (error) {
    errorResponse(error);
    return [];
  }
}
