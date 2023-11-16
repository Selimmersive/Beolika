"use client";
import ProductCard from "@/components/ui/ProductCard/ProductCard";
import { ProductDto } from "@/utils/api/dto/productDto";
import { calculateAverageRating } from "@/utils/utils";
import clsx from "clsx";

export default function Collections({ data }: { data: ProductDto[] }) {

  const productsSorted = data?.toSorted?.((a, b) => Number(new Date(b.attributes.publishedAt)) - Number(new Date(a.attributes.publishedAt)));
  
  return (
    <section className="bg-primary">
      <div className="container">
        <div className={clsx("space-y-2 py-10", "md:space-y-4")}>
          <div
            className={clsx(
              "flex w-full flex-col items-center justify-center gap-4 pt-14",
              "md:grid md:grid-cols-2",
              "lg:grid-cols-3 lg:justify-items-center lg:gap-8"
            )}>
            {productsSorted ? (
              productsSorted.map((theme: ProductDto) => (
                <ProductCard
                  key={theme.id}
                  name={theme.attributes.name}
                  category={theme.attributes.categories.data[0].attributes.name}
                  price={`${theme.attributes.price} €`}
                  imgSrc={`${
                    process.env.NODE_ENV === "development"
                      ? `http://127.0.0.1:1337${theme.attributes.cover.data.attributes.formats.large.url}`
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
    </section>
  );
}
