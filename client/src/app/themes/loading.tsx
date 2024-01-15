import SkeletonFooter from "@/components/SkeletonFooter";
import SkeletonNavBar from "@/components/SkeletonNavBar";
import clsx from "clsx";
import { BsFillImageFill } from "react-icons/bs";

export default function Loading() {
  return (
    <div className="animate-pulse">
      <div className="container">
        <SkeletonNavBar />
      </div>
      <section className="bg-primary">
        <div className="container">
          <div className={clsx("space-y-2 py-10", "md:space-y-4")}>
            <div
              className={clsx(
                "flex w-full flex-col items-center justify-center gap-4 pt-14",
                "md:grid md:grid-cols-2",
                "lg:grid-cols-3 lg:justify-items-center lg:gap-8"
              )}>
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
        </div>
      </section>
      <SkeletonFooter />
    </div>
  );
}
  