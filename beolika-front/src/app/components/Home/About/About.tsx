"use client";
import clsx from "clsx";
import Image from "next/image";
import AboutCover from "@/images/about.png";

export default function About() {
  return (
    <div className="container">
      <div className={clsx("h-[760px]", "md:h-screen", "lg:flex lg:h-[700px] lg:flex-col lg:justify-center", "xl:h-[800px]")}>
        <div className={clsx("flex flex-col space-y-10", "lg:flex-row lg:items-center lg:justify-between")}>
          <div className={clsx("relative flex items-center justify-center")}>
            <div
              className={clsx(
                "absolute z-0 mx-auto ml-7 mt-10 h-[377px] w-[255px] rounded-full border-2 border-white",
                "lg:ml-14 lg:h-[500px] lg:w-[300px]",
                "xl:h-[600px] xl:w-[400px]"
              )}
            />
            <div className={clsx("z-10 mx-auto mt-10 h-[377px] w-[255px] rounded-full", "lg:h-[500px] lg:w-[300px]", "xl:h-[600px] xl:w-[400px]")}>
              <Image
                alt="man drinking coffee in front of a lira that reads: Risking is better than regretting."
                src={AboutCover}
                className={clsx("h-full w-full rounded-full")}
              />
            </div>
          </div>
          <div className={clsx("space-y-8", "md:space-y-10", "lg:w-96", "xl:w-[650px]")}>
            <h2 className={clsx("font-sego text-3xl uppercase", "sm:text-4xl", "md:text-5xl", "lg:text-5xl", "xl:text-7xl")}>Welcolme !</h2>
            <p className={clsx("text-lg", "md:text-xl", "xl:text-2xl")}>
              I founded my company with a clear mission: to empower entrepreneurs to succeed online, even without advanced design or shop-building
              skills. We understand that every moment counts, and that every project is unique. That{"'"}s why we{"'"}ve created a collection of
              themes designed to meet your specific needs.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
