"use client";
import { FaqDto } from "@/utils/api/dto/faqDto";
import { ProductDetailsDto } from "@/utils/api/dto/productDetailsDto";
import { ProductDto } from "@/utils/api/dto/productDto";
import { renderOfButtonSelected } from "@/utils/utils";
import clsx from "clsx";
import { useState } from "react";

export default function ProductDetails({
  product,
  productDetails,
  productFaqs,
}: {
  product: ProductDto;
  productDetails: ProductDetailsDto;
  productFaqs: FaqDto;
}) {
  const [selected, setSelected] = useState(0);
  const buttons = ["Description", "FAQ", `Reviews ${product.attributes.reviews ? `(${product.attributes.reviews.data.length})` : ""}`];

  return (
    <div className="bg-primary text-white">
      <div className="container font-darker">
        <div className={clsx("flex items-center justify-center space-x-10")}>
          {buttons.map((dataButtons, index) => (
            <div key={index}>
              <button
                className={clsx("py-2 text-base uppercase", "lg:text-xl", "2xl:text-2xl", {
                  "border-b-[3px] pb-[5px] font-bold": selected === index,
                  link: selected !== index,
                })}
                onClick={() => {
                  setSelected(index);
                }}>
                {dataButtons}
              </button>
            </div>
          ))}
        </div>
        {renderOfButtonSelected(selected, product, productDetails, productFaqs)}
      </div>
    </div>
  );
}
