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
        <div className="space-y-2 py-10">
          <h5 className={clsx("font-glacialRegular text-2xl pb-4", "lg:text-5xl", "xl:text-3xl")}>{title}</h5>
          <div className="flex w-full flex-col items-center justify-center gap-4 md:grid md:grid-cols-2 md:gap-8 lg:grid-cols-3 lg:justify-items-center">
            {data && (
              data.slice(0, 3).map((theme) => (
                <Card
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
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
