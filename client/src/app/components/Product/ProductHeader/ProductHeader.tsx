"use client";
import NavBar from "@/components/ui/NavBar/NavBar";
import { ProductDto } from "@/utils/api/dto/productDto";
import clsx from "clsx";
import Image from "next/image";
import { ImUnlocked } from "react-icons/im";
import { ProductListsDto } from "@/utils/api/dto/productListsDto";
import { calculateAverageRating } from "@/utils/utils";
import GetRatings from "@/utils/getRating";
import { API_URL } from "@/utils/urls";

export default function ProductHeader({ product, productLists }: { product: ProductDto; productLists: ProductListsDto }) {
  const { cover, name, price, subtitle, reviews, shortDescription, categories, url, dataUid } = product.attributes;
  const { lists } = productLists.attributes;

  const averageRating = calculateAverageRating(reviews.data);

  return (
    <header className="bg-image border-b">
      <div className="container font-darker">
        <NavBar />
        <div
          className={clsx(
            "flex flex-col space-y-6 py-10",
            "lg:flex-row lg:items-start lg:justify-between lg:space-x-10 lg:space-y-0 lg:py-20",
            "xl:w-full xl:space-x-20"
          )}>
          <div className="w-full lg:sticky lg:top-7">
            <Image
              src={`${product.attributes ? `${API_URL}${cover.data.attributes.formats.large.url}` : ""}`}
              alt={cover.data.attributes ? cover.data.attributes.alternativeText : "Images of the theme"}
              className="rounded-xl bg-cover shadow-xl"
              width={cover.data.attributes.formats.large.width}
              height={cover.data.attributes.formats.large.height}
            />
          </div>
          <div className={clsx("h-auto", "lg:w-[600px]", "xl:w-[750px]")}>
            <div className={clsx("space-y-4", "lg:space-y-6")}>
              <div className={clsx("space-y-2")}>
                <div className="flex items-center justify-between">
                  <h3 className={clsx("font-sego text-3xl font-bold uppercase", "sm:text-4xl", "lg:text-4xl", "2xl:text-5xl")}>{name}</h3>
                  <div className="flex items-center gap-2">
                    <h2 className={clsx("text-3xl font-bold", "lg:text-4xl", "2xl:text-5xl")}>{price} €</h2>
                  </div>
                </div>
                <h3 className={clsx("text-md font-light uppercase", "lg:text-xl", "2xl:text-2xl")}>{subtitle}</h3>
                <div className="flex items-center gap-1 pt-3">
                  <GetRatings value={averageRating} className="text-xl lg:text-2xl" />
                  <p className={clsx("text-md ml-2", "2xl:text-xl")}>{reviews.data.length} Reviews</p>
                </div>
              </div>
              <p className={clsx("border-y py-4 text-lg", "sm:text-xl", "lg:text-[22px]", "2xl:text-2xl")}>{shortDescription}</p>
              <ul className={clsx("list-inside list-disc py-2", "lg:space-y-1")}>
                {lists &&
                  lists.map((list) => (
                    <li key={list.id} className={clsx("text-lg", "sm:text-xl", "lg:text-[22px]", "2xl:text-2xl")}>
                      {list.content}
                    </li>
                  ))}
              </ul>
              {categories.data[0].attributes.name === "shopify" && (
                <div className={clsx("flex items-center justify-between border-y py-4 text-lg", "sm:text-xl", "lg:text-[22px]", "2xl:text-2xl")}>
                  <div className={clsx("flex items-center first-letter:space-x-3")}>
                    <ImUnlocked />
                    <p>Password :</p>
                  </div>
                  <h3>beolika</h3>
                </div>
              )}
              <div className={clsx("space-y-4 pt-2", "lg:flex lg:space-x-4 lg:space-y-0")}>
                <button
                  className={clsx("w-full border py-3 text-center text-lg font-bold uppercase transition-all delay-75 hover:scale-105")}
                  onClick={() => window.open(url, "_ blank")}>
                  View Live Demo
                </button>
                <button
                  className="snipcart-add-item w-full bg-white py-3 text-center text-lg font-bold uppercase text-[var(--color-primary)] transition-all delay-75 hover:scale-105"
                  data-item-id={product.id}
                  data-item-name={name}
                  data-item-price={price}
                  data-item-image={`${API_URL}${cover.data.attributes.formats.thumbnail.url}`}
                  data-item-url={`/themes/${name}`}
                  data-item-file-guid={dataUid}>
                  Add to card
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}
