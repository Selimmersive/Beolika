"use client";
import { HiOutlineMenuAlt4 , HiOutlineShoppingBag } from "react-icons/hi";
import clsx from "clsx";
import Links from "./Links";
import Link from "next/link";
import { useEffect, useState } from "react";
import Modal from "./Modal";

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
    <nav className={clsx("py-6", "md:py-14", "lg:py-6")}>
      <div className={clsx("space-y-4", "md:space-y-6", "lg:hidden")}>
        <Link href="/">
          <h3 className={clsx("font-glacialRegular text-4xl")}>Themify</h3>
        </Link>
        <div className="border-b"></div>
        <div className={clsx("flex w-full items-center justify-between")}>
          <HiOutlineMenuAlt4 className={clsx("text-2xl", "md:text-3xl", "lg:text-4xl")} onClick={() => setIsModal(true)}/>
          <div className="flex gap-2">
            <HiOutlineShoppingBag
              className={clsx("header__summary snipcart-checkout snipcart-summary cursor-pointer text-2xl", "md:text-3xl", "lg:text-4xl")}
              href="#"
            />
            <span className="text-white snipcart-items-count">0</span>
          </div>
        </div>
      </div>
      <div className={clsx("hidden space-y-4", "lg:block")}>
        <Link href="/" className="flex items-center">
          <h3 className={clsx("font-glacialRegular text-4xl")}>Themify</h3>
        </Link>
        <div className="border-b"></div>
        <div className={clsx("lg:flex lg:w-full lg:items-center lg:justify-end lg:gap-10")}>
          <div className={clsx("flex space-x-14 text-lg font-glacialRegular", "lg:pt-2 lg:text-xl")}>
            <Links
              classActive="border-b-[3px] font-glacialBold"
              links={[
                { href: "/", className: "link", title: "Home" },
                { href: "/themes", className: "link", title: "Themes" },
                { href: "/faq", className: "link", title: "FAQ" },
                { href: "/contact", className: "link", title: "Contact" },
              ]}
            />
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
      </div>
      {isModal && <Modal handleClose={() => setIsModal(false)} />}
    </nav>
  );
}