"use client";
import { HiOutlineMenuAlt4 } from "react-icons/hi";
import { HiOutlineShoppingBag } from "react-icons/hi";
import Image from "next/image";
import clsx from "clsx";
import Links from "../Links";

export default function NavBar() {
  return (
    <nav>
      <div className={clsx("flex w-full items-center justify-between", "lg:hidden")}>
        <HiOutlineMenuAlt4 className={clsx("text-2xl", "md:text-3xl", "lg:text-4xl")} />
        <Image alt="" src="/images/Beolika-Logo.png" width={80} height={80} />
        <div className="flex gap-2">
          <HiOutlineShoppingBag
            className={clsx("header__summary snipcart-checkout snipcart-summary cursor-pointer text-2xl", "md:text-3xl", "lg:text-4xl")}
            href="#"
          />
          {/* <span className="header__price snipcart-total-price"></span> */}
        </div>
      </div>
      <div className={clsx("hidden", "lg:flex lg:w-full lg:items-center lg:justify-between")}>
        <div className="flex items-center space-x-14">
          <div className="flex items-center">
            <Image alt="" src="/images/Beolika-Logo.png" width={70} height={70} />
            <h1 className="font-bold md:-ml-1 md:text-2xl md:tracking-[5px]">EOLIKA</h1>
          </div>
          <div className={clsx("flex space-x-14 text-lg uppercase", "lg:pt-2 lg:text-xl")}>
            <Links
              classActive="border-b-[3px] font-semibold"
              links={[
                { href: "/", className: "link", title: "Home" },
                { href: "/themes", className: "link", title: "Themes" },
                { href: "/faq", className: "link", title: "FAQ" },
                { href: "/contact", className: "link", title: "Contact" },
              ]}
            />
          </div>
        </div>
        <div className="flex gap-2">
          <HiOutlineShoppingBag
            className={clsx(
              "header__summary snipcart-checkout snipcart-summary cursor-pointer text-xl transition-all delay-75 hover:scale-105",
              "md:text-2xl"
            )}
            href="#"
          />
          {/* <span className="header__price snipcart-total-price font-[helvetica!important]"></span> */}
        </div>
      </div>
    </nav>
  );
}
