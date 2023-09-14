"use client";
import { ProductDetailsDto } from "@/utils/api/dto/productDetailsDto";
import clsx from "clsx";
import { ReactMarkdown } from "react-markdown/lib/react-markdown";

export default function Description({ data }: { data: ProductDetailsDto }) {
  const { descriptions } = data.attributes;
  return (
    <div className="space-y-4 py-10">
      {descriptions ? (
        descriptions.map((description) => (
          <div key={description.id} className={clsx("space-y-2", "lg:py-2")}>
            <h6 className={clsx("text-xl font-bold", "sm:text-2xl", "lg:text-3xl")}>{description.title}</h6>
            <ReactMarkdown className={clsx("text-lg", "lg:text-[22px]")}>{description.content}</ReactMarkdown>
          </div>
        ))
      ) : (
        <p>No Data</p>
      )}
    </div>
  );
}
