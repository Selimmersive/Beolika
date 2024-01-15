import SkeletonFooter from "@/components/SkeletonFooter";
import SkeletonNavBar from "@/components/SkeletonNavBar";
import clsx from "clsx";
import { BsFillImageFill } from "react-icons/bs";

export default function Loading() {
  return (
    <div className="container animate-pulse">
      <SkeletonNavBar />
      <div
        className={clsx(
          "h-80 space-y-4",
          "sm:space-y-6",
          "md:h-[450px]",
          "lg:flex lg:h-[500px] lg:flex-col lg:justify-center",
          "xl:h-[550px]"
        )}>
        <div className={clsx("flex flex-col h-full", "lg:flex-row-reverse lg:items-center lg:justify-between")}>
          <div />
          <div className={clsx("space-y-4 h-full flex flex-col justify-end pb-5", "sm:space-y-6", "lg:w-full lg:flex-row lg:justify-between lg:items-end lg:pb-20")}>
            <div className="mb-4 space-y-4">
              <div className={clsx("w-[95%] h-3 rounded-full bg-gray-200", "lg:w-96")} />
              <div className={clsx("w-[75%] h-2 rounded-full bg-gray-200", "lg:w-80")} />
            </div>
            <div className={clsx("lg:flex lg:flex-col lg:space-y-4")}>
              <div className={clsx("w-[95%] h-1.5 rounded-full bg-gray-200", "lg:w-44")} />
              <div className={clsx("w-[90%] h-1.5 rounded-full bg-gray-200", "lg:w-44")} />
              <div className={clsx("w-[35%] h-1.5 rounded-full bg-gray-200", "lg:w-32")} />
            </div>
          </div>
        </div>
      </div>
      <section className="w-full bg-primary">
        <div className="space-y-4 py-10">
          <div className={clsx("md:flex md:justify-between md:items-center md:w-full")}>
            <div className={clsx("w-[35%] h-1.5 rounded-full bg-gray-200 hidden", "md:block md:w-24")} />
            <div className={clsx("w-[35%] h-1.5 rounded-full bg-gray-200", "md:w-24")} />
          </div>
          <div className="flex w-full flex-col items-center justify-center gap-4 md:grid md:grid-cols-2 md:gap-8 lg:grid-cols-3 lg:justify-items-center">
            <div className={clsx("rounded-xl shadow-xl flex items-center justify-center w-full h-64 bg-gray-300", "xs:h-72", "sm:h-80", "lg:h-[250px]", "xl:h-[350px]", "2xl:h-[400px]")}>
              <BsFillImageFill className={clsx("text-4xl text-gray-400")} />
            </div>
            <div className={clsx("rounded-xl shadow-xl flex items-center justify-center w-full h-64 bg-gray-300", "xs:h-72", "sm:h-80", "lg:h-[250px]", "xl:h-[350px]", "2xl:h-[400px]")}>
              <BsFillImageFill className={clsx("text-4xl text-gray-400")} />
            </div>
            <div className={clsx("rounded-xl shadow-xl flex items-center justify-center w-full h-64 bg-gray-300", "xs:h-72", "sm:h-80", "lg:h-[250px]", "xl:h-[350px]", "2xl:h-[400px]")}>
              <BsFillImageFill className={clsx("text-4xl text-gray-400")} />
            </div>
          </div>
          <div className={clsx("w-[35%] h-1.5 rounded-full bg-gray-200", "md:hidden")} />
        </div>
      </section>
      <div className={clsx("space-y-4 py-14", "xl:py-24")}>
        <div className={clsx("w-[95%] h-1.5 rounded-full bg-gray-200")} />
        <div className={clsx("w-[90%] h-1.5 rounded-full bg-gray-200")} />
        <div className={clsx("w-[35%] h-1.5 rounded-full bg-gray-200")} />
      </div>
      <SkeletonFooter />
    </div>
  );
}
  