import ProductCard from "@/app/components/ProductCard";
import { ProductDto } from "@/app/utils/api/dto/productDto";
import { API_URL } from "@/app/utils/urls";
import { calculateAverageRating } from "@/app/utils/utils";
import clsx from "clsx";

export default function Suggestion({ productSuggest }: { productSuggest: ProductDto[]}) {
  return (
    <div className="border-t">
      <div className="container">
        <h5 className={clsx("py-6 text-center text-3xl font-darker font-bold", "lg:text-4xl")}>You may also like</h5>
        <div className="flex w-full flex-col items-center justify-center gap-4 pb-10 pt-14 lg:grid lg:grid-cols-3 lg:justify-items-center lg:gap-8">
          {productSuggest ? (
            productSuggest.map((theme) => (
              <ProductCard
                key={theme.id}
                name={theme.attributes.name}
                category="shopify"
                price={`${theme.attributes.price} €`}
                imgSrc={`${
                  process.env.NODE_ENV === "development"
                    ? `${API_URL}${theme.attributes.cover.data.attributes.formats.large.url}`
                    : `${theme.attributes.cover.data.attributes.formats.large.url}`
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
