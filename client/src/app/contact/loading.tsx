import SkeletonFooter from "@/components/SkeletonFooter";
import SkeletonNavBar from "@/components/SkeletonNavBar";
import clsx from "clsx";

export default function Loading() {
  return (
    <div className="animate-pulse">
      <div className="container">
        <SkeletonNavBar />
        <div className="py-10">
          <div className={clsx("mx-auto min-h-[320px] space-y-14 py-32", "md:w-[500px]", "xl:w-[800px]")}>
            <div className="flex justify-center flex-col items-center space-y-4">
              <div className={clsx("w-32 h-3.5 rounded-full bg-gray-200", "lg:w-56")} />
              <div className="flex flex-col items-center space-y-6 py-10 w-full">
                <div className={clsx("w-[70%] h-2.5 rounded-full bg-gray-200")} />
                <div className={clsx("w-[60%] h-2.5 rounded-full bg-gray-200", "lg:hidden")} />
              </div>
              <div className={clsx("w-[80%] h-2 rounded-full bg-gray-200")} />
              <div className={clsx("w-[90%] h-2 rounded-full bg-gray-200")} />
              <div className={clsx("w-[75%] h-2 rounded-full bg-gray-200")} />
              <div className={clsx("w-[60%] h-2 rounded-full bg-gray-200")} />
              <div className={clsx("w-[90%] h-2 rounded-full bg-gray-200")} />
              <div className={clsx("w-[75%] h-2 rounded-full bg-gray-200")} />
              <div className={clsx("w-[90%] h-2 rounded-full bg-gray-200")} />
            </div>
            <div
              className={clsx("w-full h-12 bg-white py-3 text-center text-lg font-bold uppercase text-primary transition-all delay-75 hover:scale-105", "lg:w-72 lg:mx-auto")}
            />
          </div>
        </div>
      </div>
      <SkeletonFooter />
    </div>
  );
}
  