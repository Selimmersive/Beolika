"use client";
import clsx from "clsx";
import ProductCard from "@/components/ui/ProductCard/ProductCard";
import { ProductDto } from "@/utils/api/dto/productDto";
import { calculateAverageRating } from "@/utils/utils";
import { API_URL } from "@/utils/urls";
import { BsArrowUpRight } from 'react-icons/bs';

export default function FeaturedCollections({ data, title }: { data: ProductDto[]; title: string }) {
  data?.sort((a, b) => Number(new Date(b.attributes.publishedAt)) - Number(new Date(a.attributes.publishedAt)));
  return (
    <section className="bg-[var(--color-primary)]">
      <div className="container">
        <div className="space-y-2 py-10">
          <div className={clsx("md:flex md:justify-between md:items-center md:w-full")}>
            <h5 className={clsx("font-glacialRegular text-2xl pb-4", "xl:text-3xl")}>{title}</h5>
            <button onClick={() => window.open("/themes","_self")} className={clsx("hidden text-xl hover:underline font-glacialRegular", "md:flex md:items-center md:gap-2")}>See More <BsArrowUpRight  /></button>
          </div>
          <div className="flex w-full flex-col items-center justify-center gap-4 md:grid md:grid-cols-2 md:gap-8 lg:grid-cols-3 lg:justify-items-center">
            {data && (
              data.slice(0, 3).map((theme) => (
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
            )}
          </div>
          <button
            className={clsx("w-full border py-3 text-center text-lg font-bold uppercase transition-all delay-75 hover:scale-105", "md:hidden")}
            onClick={() => window.open("/themes","_self")}>
                  See More
          </button>
        </div>
      </div>
    </section>
  );
}
