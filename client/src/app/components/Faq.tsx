"use client";
import { FaqDto } from "@/app/utils/api/dto/faqDto";
import clsx from "clsx";
import { useState } from "react";
import { ReactMarkdown } from "react-markdown/lib/react-markdown";
import { BsPlus } from "react-icons/bs";
import { AiOutlineMinus } from "react-icons/ai";

export default function Faq({ data }: { data: FaqDto }) {
  const { faqs } = data.attributes;
  const [faqStates, setFaqStates] = useState(data?.attributes.faqs.map(() => false));

  const handleFaqClick = (index: number) => {
    const newFaqStates = [...faqStates];
    newFaqStates[index] = !newFaqStates[index];
    setFaqStates(newFaqStates);
  };

  return (
    <div className="space-y-4 py-10">
      {faqs ? (
        faqs.map((faq, index) => (
          <div key={faq.id} className={clsx("space-y-2", "lg:space-y-4")}>
            <div onClick={() => handleFaqClick(index)} className={clsx("flex cursor-pointer items-center justify-between border-t pt-2", "lg:pt-4")}>
              <h6 className={clsx("text-xl font-semibold", "lg:text-2xl")}>{faq.question}</h6>
              <span>
                {" "}
                {faqStates[index] ? <AiOutlineMinus className="my-auto text-lg lg:text-xl" /> : <BsPlus className="my-auto text-xl lg:text-2xl" />}
              </span>
            </div>
            {faqStates[index] && <ReactMarkdown className={clsx("py-2 text-lg", "md:text-xl", "lg:py-4 lg:text-[22px]")}>{faq.answer}</ReactMarkdown>}
          </div>
        ))
      ) : (
        <p>No Data</p>
      )}
    </div>
  );
}
