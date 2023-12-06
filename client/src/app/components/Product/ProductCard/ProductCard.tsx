import Image from "next/image";
import Link from "next/link";
import clsx from "clsx";
import GetRatings from "@/utils/getRating";

export default function ProductCard({
  name,
  category,
  price,
  imgSrc,
  imgAlt,
  imgWidth,
  imgHeight,
  href,
  ratings,
}: {
  name: string;
  category: string;
  price: string;
  imgSrc: string;
  imgAlt: string;
  imgWidth: number;
  imgHeight: number;
  href: string;
  ratings: number;
}) {
  return (
    <Link href={href} className="w-full cursor-pointer text-white transition-all delay-75 hover:scale-105">
      <div className={clsx("w-full")}>
        <Image src={imgSrc} alt={imgAlt} className="rounded-2xl bg-cover" width={imgWidth} height={imgHeight} />
      </div>
      <div className="my-4 pb-2">
        <div className="flex items-center justify-between">
          <h5 className="text-xl font-glacialRegular md:text-xl">{name}</h5>
          <p className="text-xl font-glacialRegular md:text-xl">{price}</p>
        </div>
        <div className="flex items-center justify-between pt-1">
          <p className="text-xl font-semibold uppercase md:text-xl">{category}</p>
          <GetRatings value={ratings} className="text-lg" />
        </div>
      </div>
    </Link>
  );
}
