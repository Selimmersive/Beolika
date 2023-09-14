"use client";
import clsx from "clsx";
import Card from "@/components/Card/Card";
import { Products } from "@/utils/dto/Products";

export default function ProductCard({ data, title }: { data: Products[]; title: string }) {
  return (
    <section className="container">
      <div className="space-y-2 py-10 md:space-y-4">
        <h5 className={clsx("font-sego text-3xl uppercase", "sm:text-4xl", "md:text-5xl", "lg:text-5xl", "xl:text-7xl")}>{title}</h5>
        <div className="flex w-full flex-col items-center justify-center gap-4 pt-14 lg:grid lg:grid-cols-3 lg:justify-items-center lg:gap-8">
          {data ? (
            data?.map((product: Products) => (
              <Card
                key={product.id}
                name={product.attributes.name}
                price={`${product.attributes.price} €`}
                imgSrc={`${
                  product.attributes.image
                    ? `${process.env.NEXT_PUBLIC_STRAPI_API_URL}${product.attributes.image.data.attributes.formats.large.url}`
                    : ""
                }`}
                imgAlt={product.attributes.alternativeText ? product.attributes.alternativeText : "Images of the theme"}
                imgWidth={`${product.attributes.image.data.attributes.formats.large.width}`}
                imgHeight={`${product.attributes.image.data.attributes.formats.large.height}`}
                href={`/products/${product.attributes.name}`}
              />
            ))
          ) : (
            <p>Loading ...</p>
          )}
        </div>
      </div>
    </section>
  );
}
