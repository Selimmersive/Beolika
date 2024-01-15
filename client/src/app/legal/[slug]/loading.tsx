import SkeletonFooter from "@/app/components/SkeletonFooter";
import SkeletonNavBar from "@/app/components/SkeletonNavBar";
import clsx from "clsx";

export default function Loading() {
  return (
    <div className="container animate-pulse">
      <SkeletonNavBar />
      <div className={clsx("mx-auto min-h-[320px] space-y-10 py-20", "md:w-[500px]", "lg:py-36", "xl:w-[800px]")}>
        <div className={clsx("w-44 h-4 rounded-full bg-gray-200", "md:w-80")} />
        <div className={clsx("space-y-4", "lg:space-y-6")}>
          <div className={clsx("w-[80%] h-2 rounded-full bg-gray-200")} />
          <div className={clsx("w-full h-2 rounded-full bg-gray-200")} />
          <div className={clsx("w-full h-2 rounded-full bg-gray-200")} />
          <div className={clsx("w-[70%] h-2 rounded-full bg-gray-200")} />
          <div className={clsx("w-[70%] h-2 rounded-full bg-gray-200")} />
          <div className={clsx("w-full h-2 rounded-full bg-gray-200")} />
        </div>
        <div className={clsx("w-32 h-2.5 rounded-full bg-gray-200", "md:w-80")} />
        <div className={clsx("space-y-4", "lg:space-y-6")}>
          <div className={clsx("w-[80%] h-2 rounded-full bg-gray-200")} />
          <div className={clsx("w-full h-2 rounded-full bg-gray-200")} />
          <div className={clsx("w-full h-2 rounded-full bg-gray-200")} />
          <div className={clsx("w-[70%] h-2 rounded-full bg-gray-200")} />
          <div className={clsx("w-[70%] h-2 rounded-full bg-gray-200")} />
          <div className={clsx("w-full h-2 rounded-full bg-gray-200")} />
        </div>
        <div className={clsx("w-32 h-2.5 rounded-full bg-gray-200", "md:w-64")} />
        <div className={clsx("space-y-4", "lg:space-y-6")}>
          <div className={clsx("w-[80%] h-2 rounded-full bg-gray-200")} />
          <div className={clsx("w-full h-2 rounded-full bg-gray-200")} />
          <div className={clsx("w-full h-2 rounded-full bg-gray-200")} />
          <div className={clsx("w-[70%] h-2 rounded-full bg-gray-200")} />
          <div className={clsx("w-[70%] h-2 rounded-full bg-gray-200")} />
          <div className={clsx("w-full h-2 rounded-full bg-gray-200")} />
        </div>
        <div className={clsx("w-32 h-2.5 rounded-full bg-gray-200", "md:w-72")} />
        <div className={clsx("space-y-4", "lg:space-y-6")}>
          <div className={clsx("w-[80%] h-2 rounded-full bg-gray-200")} />
          <div className={clsx("w-full h-2 rounded-full bg-gray-200")} />
          <div className={clsx("w-full h-2 rounded-full bg-gray-200")} />
          <div className={clsx("w-[70%] h-2 rounded-full bg-gray-200")} />
          <div className={clsx("w-[70%] h-2 rounded-full bg-gray-200")} />
          <div className={clsx("w-full h-2 rounded-full bg-gray-200")} />
        </div>
      </div>
      <SkeletonFooter />
    </div>
  );
}
  