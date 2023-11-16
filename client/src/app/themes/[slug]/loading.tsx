"use client";
import SkeletonFooter from "@/components/ui/Skeleton/Footer/SkeletonFooter";
import SkeletonNavBar from "@/components/ui/Skeleton/NavBar/SkeletonNavBar";
import clsx from "clsx";
import { BsFillImageFill } from "react-icons/bs";

export default function Loading() {
  return (
    <div>
      <header className="bg-image border-b">
        <div className="container animate-pulse">
          <SkeletonNavBar />
          <div
            className={clsx(
              "flex flex-col space-y-6 py-10",
              "md:space-y-10",
              "lg:flex-row lg:items-start lg:justify-between lg:space-x-10 lg:space-y-0 lg:py-20",
              "xl:w-full xl:space-x-20"
            )}>
            <div className="w-full lg:sticky lg:top-7">
              <div className={clsx("rounded-xl shadow-xl flex items-center justify-center w-full h-64 bg-gray-300", "xs:h-72", "sm:h-80", "lg:h-[400px]", "xl:h-[700px]", "2xl:h-[800px]")}>
                <BsFillImageFill className={clsx("text-4xl text-gray-400")} />
              </div>
            </div>
            <div className={clsx("h-auto", "lg:w-[600px]", "xl:w-[750px]")}>
              <div className={clsx("space-y-6", "lg:space-y-6")}>
                <div className={clsx("space-y-4", "md:space-y-6")}>
                  <div className="flex items-center justify-between">
                    <div className={clsx("h-4 bg-gray-200 rounded-full w-28")} />
                    <div className="flex items-center gap-2">
                      <div className={clsx("h-3 bg-gray-200 rounded-full w-14")} />
                    </div>
                  </div>
                  <div className={clsx("h-3 bg-gray-200 rounded-full w-20")} />
                  <div className="flex items-center gap-4 pt-3">
                    <div className={clsx("h-3 bg-gray-200 rounded-full w-32")} />
                    <div className={clsx("h-3 bg-gray-200 rounded-full w-14")} />
                  </div>
                </div>
                <div className={clsx("border-y py-6 space-y-4")}>
                  <div className={clsx("h-2 bg-gray-200 rounded-full w-full")} />
                  <div className={clsx("h-2 bg-gray-200 rounded-full w-full")} />
                  <div className={clsx("h-2 bg-gray-200 rounded-full w-[95%]")} />
                  <div className={clsx("h-2 bg-gray-200 rounded-full w-[65%]")} />
                  <div className={clsx("h-2 bg-gray-200 rounded-full w-28")} />
                </div>
                <div className={clsx("py-2 space-y-6")}>
                  <div className={clsx("flex gap-6")}>
                    <div className="w-2 h-2 rounded-full bg-gray-200" />
                    <div className={clsx("h-2 bg-gray-200 rounded-full w-28")} />
                  </div>
                  <div className={clsx("flex gap-6")}>
                    <div className="w-2 h-2 rounded-full bg-gray-200" />
                    <div className={clsx("h-2 bg-gray-200 rounded-full w-36")} />
                  </div>
                  <div className={clsx("flex gap-6")}>
                    <div className="w-2 h-2 rounded-full bg-gray-200" />
                    <div className={clsx("h-2 bg-gray-200 rounded-full w-32")} />
                  </div>
                  <div className={clsx("flex gap-6")}>
                    <div className="w-2 h-2 rounded-full bg-gray-200" />
                    <div className={clsx("h-2 bg-gray-200 rounded-full w-28")} />
                  </div>
                  <div className={clsx("flex gap-6")}>
                    <div className="w-2 h-2 rounded-full bg-gray-200" />
                    <div className={clsx("h-2 bg-gray-200 rounded-full w-32")} />
                  </div>
                  <div className={clsx("flex gap-6")}>
                    <div className="w-2 h-2 rounded-full bg-gray-200" />
                    <div className={clsx("h-2 bg-gray-200 rounded-full w-32")} />
                  </div>
                </div>
                <div className={clsx("flex items-center justify-between border-y py-6")}>
                  <div className={clsx("flex items-center gap-4")}>
                    <BsFillImageFill className={clsx("text-xl text-gray-400")} />
                    <div className={clsx("h-2 bg-gray-200 rounded-full w-20")} />
                  </div>
                  <div className={clsx("h-2 bg-gray-200 rounded-full w-10")} />
                </div>
                <div className={clsx("space-y-4 pt-2", "lg:flex lg:space-x-4 lg:space-y-0")}>
                  <div
                    className={clsx("w-full h-12 border py-3 text-center text-lg font-bold uppercase transition-all delay-75 hover:scale-105")}
                  />
                  <div
                    className={clsx("w-full h-12 bg-white py-3 text-center text-lg font-bold uppercase text-[var(--color-primary)] transition-all delay-75 hover:scale-105")}
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </header>
      <section className="bg-primary text-white">
        <div className="container animate-pulse">
          <div className={clsx("flex items-center justify-center space-x-10 py-6")}>
            <div className={clsx("w-20 h-3 rounded-full bg-gray-200")} />
            <div className={clsx("w-20 h-3 rounded-full bg-gray-200")} />
            <div className={clsx("w-20 h-3 rounded-full bg-gray-200")} />
          </div>
          <div className="space-y-4 py-10">
            <div className={clsx("space-y-2", "lg:py-2")}>
              <div className={clsx("w-56 h-2 rounded-full bg-gray-200")} />
              <div className={clsx("w-64 h-2 rounded-full bg-gray-200")} />
              <div className={clsx("w-full h-2 rounded-full bg-gray-200")} />
              <div className={clsx("w-full h-2 rounded-full bg-gray-200")} />
              <div className={clsx("w-full h-2 rounded-full bg-gray-200")} />
              <div className={clsx("w-20 h-2 rounded-full bg-gray-200")} />
            </div>
          </div>
        </div>
      </section>
      <section className="border-t">
        <div className="container animate-pulse">
          <div className={clsx("w-20 h-3 rounded-full bg-gray-200 mx-auto mt-6")} />
          <div className="flex w-full flex-col items-center justify-center gap-4 pb-10 pt-14 lg:grid lg:grid-cols-3 lg:justify-items-center lg:gap-8">
            <div className="w-full">
              <div className={clsx("rounded-xl shadow-xl flex items-center justify-center w-full h-64 bg-gray-300", "xs:h-72", "sm:h-80", "lg:h-[250px]", "xl:h-[350px]", "2xl:h-[400px]")}>
                <BsFillImageFill className={clsx("text-4xl text-gray-400")} />
              </div>
              <div className="my-4 space-y-4 border-y py-4">
                <div className="flex items-center justify-between">
                  <div className="w-14 h-2 rounded-full bg-gray-200" />
                  <div className="w-7 h-2 rounded-full bg-gray-200" />
                </div>
                <div className="flex items-center justify-between">
                  <div className="w-20 h-2 rounded-full bg-gray-200" />
                  <div className="w-28 h-2 rounded-full bg-gray-200" />
                </div>
              </div>
            </div>
            <div className="w-full">
              <div className={clsx("rounded-xl shadow-xl flex items-center justify-center w-full h-64 bg-gray-300", "xs:h-72", "sm:h-80", "lg:h-[250px]", "xl:h-[350px]", "2xl:h-[400px]")}>
                <BsFillImageFill className={clsx("text-4xl text-gray-400")} />
              </div>
              <div className="my-4 space-y-4 border-y py-4">
                <div className="flex items-center justify-between">
                  <div className="w-14 h-2 rounded-full bg-gray-200" />
                  <div className="w-7 h-2 rounded-full bg-gray-200" />
                </div>
                <div className="flex items-center justify-between">
                  <div className="w-20 h-2 rounded-full bg-gray-200" />
                  <div className="w-28 h-2 rounded-full bg-gray-200" />
                </div>
              </div>
            </div>
            <div className="w-full">
              <div className={clsx("rounded-xl shadow-xl flex items-center justify-center w-full h-64 bg-gray-300", "xs:h-72", "sm:h-80", "lg:h-[250px]", "xl:h-[350px]", "2xl:h-[400px]")}>
                <BsFillImageFill className={clsx("text-4xl text-gray-400")} />
              </div>
              <div className="my-4 space-y-4 border-y py-4">
                <div className="flex items-center justify-between">
                  <div className="w-14 h-2 rounded-full bg-gray-200" />
                  <div className="w-7 h-2 rounded-full bg-gray-200" />
                </div>
                <div className="flex items-center justify-between">
                  <div className="w-20 h-2 rounded-full bg-gray-200" />
                  <div className="w-28 h-2 rounded-full bg-gray-200" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <SkeletonFooter />
    </div>
  );
}
  