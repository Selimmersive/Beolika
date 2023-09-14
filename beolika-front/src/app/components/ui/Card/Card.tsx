import Image from "next/image";
import Link from "next/link";
import clsx from "clsx";
import GetRatings from "src/utils/getRating";

export default function Card({
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
        <Image src={imgSrc} alt={imgAlt} className="rounded-t-lg bg-cover" width={imgWidth} height={imgHeight} />
      </div>
      <div className="my-4 border-y py-2">
        <div className="flex items-center justify-between">
          <h5 className="text-lg font-semibold md:text-xl">{name}</h5>
          <p className="text-lg font-semibold md:text-xl">{price}</p>
        </div>
        <div className="flex items-center justify-between">
          <p className="text-lg font-semibold uppercase md:text-xl">{category}</p>
          <GetRatings value={ratings} className="text-lg" />
        </div>
      </div>
    </Link>
  );
}
