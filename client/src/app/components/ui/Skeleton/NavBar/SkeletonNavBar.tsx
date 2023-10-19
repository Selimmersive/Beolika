import clsx from "clsx";

export default function SkeletonNavBar() {
  return (
    <nav>
      <div className={clsx("lg:hidden")}>
        <div className={clsx("w-full h-4 mt-4 mb-2 rounded-full bg-gray-200")} />
        <div className={clsx("flex w-full items-center justify-between py-6")}>
          <div className="w-7 h-2 rounded-full bg-gray-200" />
          <div className="w-7 h-2 rounded-full bg-gray-200" />
        </div>
      </div>
      <div className={clsx("hidden", "lg:block")}>
        <div className="w-20 h-3 rounded-full bg-gray-200 my-6" />
        <div className="border" />
        <div className={clsx("py-6", "lg:flex lg:w-full lg:items-center lg:justify-end lg:gap-10")}>
          <div className="flex items-center">
            <div className="flex space-x-14">
              <div className="w-7 h-2 rounded-full bg-gray-200" />
              <div className="w-7 h-2 rounded-full bg-gray-200" />
              <div className="w-7 h-2 rounded-full bg-gray-200" />
              <div className="w-7 h-2 rounded-full bg-gray-200" />
            </div>
          </div>
          <div className="w-7 h-2 rounded-full bg-gray-200" />
        </div>

      </div>
    </nav>
  );
}