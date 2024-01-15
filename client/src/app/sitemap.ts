import { getAllLegals, getAllProducts } from "@/utils/api/api";
import { ProductDto } from "@/utils/api/dto/productDto";

export default async function sitemap() {
  const baseUrl = "https://shopithemes.sayro.dev";

  const products: ProductDto[] = await getAllProducts();
  const legals: ProductDto[] = await getAllLegals();

  const themesUrl = 
  products.map((theme) => {
    return {
      url: `${baseUrl}/themes/${theme.attributes.slug}`,
      lastModified: new Date()
    };
  });

  const legalsUrls = 
  legals.map((theme) => {
    return {
      url: `${baseUrl}/legal/${theme.attributes.slug}`,
      lastModified: new Date()
    };
  });

  return [
    {
      url: baseUrl,
      lastModified: new Date()
    },
    {
      url: `${baseUrl}/themes`,
      lastModified: new Date()
    },
    ...themesUrl,
    {
      url: `${baseUrl}/faq`,
      lastModified: new Date()
    },
    {
      url: `${baseUrl}/contact`,
      lastModified: new Date()
    },
    ...legalsUrls
  ];
}