import SkeletonFooter from "@/components/SkeletonFooter";
import SkeletonNavBar from "@/components/SkeletonNavBar";
import clsx from "clsx";

export default function Loading() {
  return <div className="container animate-pulse">
    <SkeletonNavBar />
    <div className="py-10">
      <div className={clsx("mx-auto min-h-[320px] space-y-10 py-20 text-center", "md:w-[500px]", "lg:py-32", "xl:w-[800px]")}>
        <div className="space-y-6">
          <div className={clsx("w-36 h-3 mx-auto rounded-full bg-gray-200")} />
          <div className={clsx("w-20 h-3 mx-auto rounded-full bg-gray-200")} />
          <div className={clsx("w-36 h-3 mx-auto rounded-full bg-gray-200")} />
        </div>
        <div className={clsx("w-full h-2 mx-auto rounded-full bg-gray-200")} />
      </div>
      <div className="space-y-4 py-10">
    
        <div className={clsx("space-y-4", "lg:space-y-6")}>
          <div className={clsx("flex items-center justify-between border-t pt-4", "lg:pt-6")}>
            <div className={clsx("w-36 h-2 rounded-full bg-gray-200")} />
            <div className={clsx("w-5 h-2 rounded-full bg-gray-200")} />
          </div>
          <div className={clsx("flex items-center justify-between border-t pt-4", "lg:pt-6")}>
            <div className={clsx("w-56 h-2 rounded-full bg-gray-200")} />
            <div className={clsx("w-5 h-2 rounded-full bg-gray-200")} />
          </div>
          <div className={clsx("flex items-center justify-between border-t pt-4", "lg:pt-6")}>
            <div className={clsx("w-44 h-2 rounded-full bg-gray-200")} />
            <div className={clsx("w-5 h-2 rounded-full bg-gray-200")} />
          </div>
          <div className={clsx("flex items-center justify-between border-t pt-4", "lg:pt-6")}>
            <div className={clsx("w-36 h-2 rounded-full bg-gray-200")} />
            <div className={clsx("w-5 h-2 rounded-full bg-gray-200")} />
          </div>
          <div className={clsx("flex items-center justify-between border-t pt-4", "lg:pt-6")}>
            <div className={clsx("w-52 h-2 rounded-full bg-gray-200")} />
            <div className={clsx("w-5 h-2 rounded-full bg-gray-200")} />
          </div>
          <div className={clsx("flex items-center justify-between border-t pt-4", "lg:pt-6")}>
            <div className={clsx("w-32 h-2 rounded-full bg-gray-200")} />
            <div className={clsx("w-5 h-2 rounded-full bg-gray-200")} />
          </div>
        </div>
        
      </div>
    </div>
    <SkeletonFooter />
  </div>;
}
  