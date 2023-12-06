import clsx from "clsx";
import Links from "../Links";

export default function Footer() {
  return (
    <footer className="border-t">
      <div className="container">
        <div className={clsx("space-y-10 py-10", "lg:grid lg:grid-cols-3 lg:items-start lg:gap-20 lg:space-y-0")}>
          <div className={clsx("space-y-2", "lg:space-y-6")}>
            <h6 className={clsx("text-xl font-glacialBold", "sm:text-2xl", "lg:text-3xl")}>About</h6>
            <p className={clsx("text-xl", "lg:text-[22px]")}>
              Beolika, your online destination for exceptional and unique themes. Our name, a fusion of {"'Be'"} (to be in English) and {"'Olika'"}{" "}
              (different in Swedish), reflects our commitment to bringing you distinctive designs that will make you stand out on the web.
            </p>
            <p className={clsx("text-xl", "lg:text-[22px]")}>
              <strong>Email : </strong>
              <a href="mailto:hello@beolika.com" className="hover:underline">
                hello@beolika.com
              </a>
            </p>
          </div>
          <div className={clsx("space-y-2", "lg:space-y-6")}>
            <h6 className={clsx("text-xl font-glacialBold", "sm:text-2xl", "lg:text-3xl")}>Menu</h6>
            <div className={clsx("flex flex-col space-y-2")}>
              <Links
                classActive="text-xl lg:text-[22px] font-bold"
                links={[
                  { href: "/", className: "text-xl lg:text-[22px] hover:font-bold", title: "Home" },
                  { href: "/themes", className: "text-xl lg:text-[22px] hover:font-bold", title: "Themes" },
                  { href: "/faq", className: "text-xl lg:text-[22px] hover:font-bold", title: "FAQ" },
                  { href: "/contact", className: "text-xl lg:text-[22px] hover:font-bold", title: "Contact" },
                ]}
              />
            </div>
          </div>
          <div className={clsx("space-y-2", "lg:space-y-6")}>
            <h6 className={clsx("text-xl font-glacialBold", "sm:text-2xl", "lg:text-3xl")}>Legal pages</h6>
            <div className={clsx("flex flex-col space-y-2")}>
              <Links
                classActive="text-xl lg:text-[22px] font-bold"
                links={[
                  { href: "/legal/legal-notice", className: "text-xl lg:text-[22px] hover:font-bold", title: "Legal Notice" },
                  { href: "/legal/terms-and-conditions", className: "text-xl lg:text-[22px] hover:font-bold", title: "Terms & Conditions" },
                  { href: "/legal/privacy-policy", className: "text-xl lg:text-[22px] hover:font-bold", title: "Privacy policy" },
                  { href: "/legal/terms-of-use", className: "text-xl lg:text-[22px] hover:font-bold", title: "Terms of use" },
                  { href: "/legal/shipping-policy", className: "text-xl lg:text-[22px] hover:font-bold", title: "Shipping policy" },
                  {
                    href: "/legal/return-and-refund-policy",
                    className: "text-xl lg:text-[22px] hover:font-bold",
                    title: "Return and Refund policy",
                  },
                ]}
              />
            </div>
          </div>
        </div>
        <div className="pb-2">
          <p className="mt-10 font-semiBold border-t-2 pt-3 text-center text-lg md:text-xl">
            © 2023, Beolika made by{" "}
            <a href="mailto:hello@sayro.dev" className="hover:underline">
              Sayrodev
            </a>
          </p>
        </div>
      </div>
    </footer>
  );
}
