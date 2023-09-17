import Card from "@/components/ui/Card";
import { ProductDto } from "@/utils/api/dto/productDto";
import { calculateAverageRating } from "@/utils/utils";
import clsx from "clsx";

export default function Suggestion({ productSuggest }: { productSuggest: ProductDto[] }) {
  function getRandomProducts() {
    const randomProducts: ProductDto[] = [];
    const productIndices: number[] = [];

    while (productIndices.length < 3) {
      const randomIndex = Math.floor(Math.random() * productSuggest.length);
      if (!productIndices.includes(randomIndex)) {
        productIndices.push(randomIndex);
      }
    }

    for (const index of productIndices) {
      randomProducts.push(productSuggest[index]);
    }

    return randomProducts;
  }

  return (
    <div className="border-t">
      <div className="container">
        <h5 className={clsx("py-6 text-center text-3xl font-bold", "lg:text-4xl")}>You may also like</h5>
        <div className="flex w-full flex-col items-center justify-center gap-4 pb-10 pt-14 lg:grid lg:grid-cols-3 lg:justify-items-center lg:gap-8">
          {productSuggest ? (
            getRandomProducts().map((theme) => (
              <Card
                key={theme.id}
                name={theme.attributes.name}
                category="shopify"
                price={`${theme.attributes.price} €`}
                imgSrc={`${
                  theme.attributes.cover ? `${process.env.NEXT_PUBLIC_STRAPI_API_URL}${theme.attributes.cover.data.attributes.formats.large.url}` : ""
                }`}
                imgAlt={
                  theme.attributes.cover.data.attributes.alternativeText
                    ? theme.attributes.cover.data.attributes.alternativeText
                    : "Images of the theme"
                }
                imgWidth={theme.attributes.cover.data.attributes.formats.large.width}
                imgHeight={theme.attributes.cover.data.attributes.formats.large.height}
                href={`/themes/${theme.attributes.slug}`}
                ratings={calculateAverageRating(theme.attributes.reviews.data)}
              />
            ))
          ) : (
            <p>Loading ...</p>
          )}
        </div>
      </div>
    </div>
  );
}
