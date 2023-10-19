import Footer from "@/components/ui/Footer";
import NavBar from "@/components/ui/NavBar";
import Loading from "./loading";
import clsx from "clsx";
import { Suspense } from "react";

export default function ContactPage() {
  
  return (
    <main>
      <Suspense fallback={<Loading />}>
        <div className="container">
          <NavBar />
          <div className="py-10">
            <div className={clsx("mx-auto min-h-[320px] space-y-10 py-20 text-center", "md:w-[500px]", "xl:w-[800px]")}>
              <h3 className={clsx("text-5xl font-bold", "lg:text-8xl")}>Contact</h3>
              <h4 className={clsx("text-2xl font-semibold", "text-3xl")}>We look forward to hearing from you.</h4>
              <p className={clsx("py-2 text-lg", "md:text-xl", "lg:py-4 lg:text-[22px]")}>
              At Beolika, we are committed to providing exceptional customer service. We are here to guide you in your choice, answer your questions
              and offer personalized assistance at every stage of your shopping experience. Your satisfaction and happiness are our top priority.
              </p>
              <a
                href="mailto:hello@beolika.com"
                type="button"
                className={clsx(
                  "w-full bg-white py-3 text-center text-lg font-bold uppercase text-[var(--color-primary)] transition-all delay-75 hover:scale-105",
                  "lg:w-[250px]"
                )}>
              Contact
              </a>
            </div>
          </div>
        </div>
        <Footer />
      </Suspense>
    </main>
  );
}
