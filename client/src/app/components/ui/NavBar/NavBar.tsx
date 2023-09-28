"use client";
import { HiOutlineMenuAlt4 , HiOutlineShoppingBag } from "react-icons/hi";
import Image from "next/image";
import clsx from "clsx";
import Links from "../Links";
import Link from "next/link";
import { useEffect, useState } from "react";
import Modal from "../Modal";

export default function NavBar() {
  const [isModal, setIsModal] = useState(false);

  useEffect(() => {
    if (isModal) {
      document.body.classList.add("no-scroll");
    } else {
      document.body.classList.remove("no-scroll");
    }

    return () => {
      document.body.classList.remove("no-scroll");
    };
  }, [isModal]);

  return (
    <nav>
      <div className={clsx("flex w-full items-center justify-between", "lg:hidden")}>
        <HiOutlineMenuAlt4 className={clsx("text-2xl", "md:text-3xl", "lg:text-4xl")} onClick={() => setIsModal(true)}/>
        <Link href="/">
          <Image alt="Logo Beolika" src="/images/Beolika-Logo.png" width={80} height={80} />
        </Link>
        <div className="flex gap-2">
          <HiOutlineShoppingBag
            className={clsx("header__summary snipcart-checkout snipcart-summary cursor-pointer text-2xl", "md:text-3xl", "lg:text-4xl")}
            href="#"
          />
          <span className="text-white snipcart-items-count">0</span>
        </div>
      </div>
      <div className={clsx("hidden", "lg:flex lg:w-full lg:items-center lg:justify-between")}>
        <div className="flex items-center space-x-14">
          <Link href="/" className="flex items-center">
            <Image alt="" src="/images/Beolika-Logo.png" width={70} height={70} />
            <h1 className="font-bold md:-ml-1 md:text-2xl md:tracking-[5px]">EOLIKA</h1>
          </Link>
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
          <span className="text-white snipcart-items-count text-xl">0</span>
        </div>
      </div>
      {isModal && <Modal handleClose={() => setIsModal(false)} />}
    </nav>
  );
}
