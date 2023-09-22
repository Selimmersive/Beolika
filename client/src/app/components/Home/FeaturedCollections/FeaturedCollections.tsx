"use client";
import clsx from "clsx";
import Card from "@/components/ui/Card/Card";
import { ProductDto } from "@/utils/api/dto/productDto";
import { calculateAverageRating } from "@/utils/utils";
import { API_URL } from "@/utils/urls";

export default function FeaturedCollections({ data, title }: { data: ProductDto[]; title: string }) {
  data?.sort((a, b) => Number(new Date(b.attributes.publishedAt)) - Number(new Date(a.attributes.publishedAt)));
  return (
    <section className="bg-[var(--color-primary)]">
      <div className="container">
        <div className="space-y-2 py-10 md:space-y-4">
          <h5 className={clsx("font-sego text-3xl uppercase", "sm:text-4xl", "md:text-5xl", "lg:text-5xl", "xl:text-6xl")}>{title}</h5>
          <div className="flex w-full flex-col items-center justify-center gap-4 pt-14 lg:grid lg:grid-cols-3 lg:justify-items-center lg:gap-8">
            {data && (
              data.map((theme) => (
                <Card
                  key={theme.id}
                  name={theme.attributes.name}
                  category="shopify"
                  price={`${theme.attributes.price} €`}
                  imgSrc={`${
                    theme.attributes.cover
                      ? `${API_URL}${theme.attributes.cover.data.attributes.formats.large.url}`
                      : ""
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
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
