import { LegalDto } from "@/utils/api/dto/legalDto";
import clsx from "clsx";
import { ReactMarkdown } from "react-markdown/lib/react-markdown";
import NavBar from "../ui/NavBar";

export default function Legal({ legal }: { legal: LegalDto }) {
  const { legals, title } = legal.attributes;
  return (
    <div className="container">
      <NavBar />
      <div className={clsx("mx-auto min-h-[320px] space-y-10 py-20", "md:w-[500px]", "xl:w-[800px]")}>
        <h3 className={clsx("text-5xl font-bold", "lg:text-8xl")}>{title}</h3>
        {legals.map((legal) => (
          <div key={legal.id}>
            <h4 className={clsx("text-2xl font-semibold", "text-3xl")}>{legal.subtitle}</h4>
            <ReactMarkdown className={clsx("py-2 text-lg", "md:text-xl", "lg:py-4 lg:text-[22px]")}>{legal.content}</ReactMarkdown>
          </div>
        ))}
      </div>
    </div>
  );
}
