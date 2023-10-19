import clsx from "clsx";

export default function SkeletonFooter() {
  return (
    <footer className="border-t">
      <div className="container">
        <div className={clsx("space-y-10 py-10", "lg:grid lg:grid-cols-3 lg:items-start lg:gap-20 lg:space-y-0")}>
          <section className={clsx("space-y-2", "lg:space-y-6")}>
            <div className={clsx("w-14 h-2 rounded-full bg-gray-200")} />
            <div className="py-4 space-y-4">
              <div className={clsx("w-[80%] h-2 rounded-full bg-gray-200")} />
              <div className={clsx("w-full h-2 rounded-full bg-gray-200")} />
              <div className={clsx("w-full h-2 rounded-full bg-gray-200")} />
              <div className={clsx("w-32 h-2 rounded-full bg-gray-200")} />
            </div>
            <div className={clsx("w-32 h-2 rounded-full bg-gray-200")} />
          </section>
          <section className={clsx("space-y-2 py-2", "lg:space-y-6")}>
            <div className={clsx("w-14 h-2 rounded-full bg-gray-200")} />
            <div className={clsx("flex flex-col space-y-4 py-6")}>
              <div className={clsx("w-20 h-2 rounded-full bg-gray-200")} />
              <div className={clsx("w-14 h-2 rounded-full bg-gray-200")} />
              <div className={clsx("w-24 h-2 rounded-full bg-gray-200")} />
              <div className={clsx("w-20 h-2 rounded-full bg-gray-200")} />
            </div>
          </section>
          <section className={clsx("space-y-2 py-2", "lg:space-y-6")}>
            <div className={clsx("w-14 h-2 rounded-full bg-gray-200")} />
            <div className={clsx("flex flex-col space-y-4 py-6")}>
              <div className={clsx("w-20 h-2 rounded-full bg-gray-200")} />
              <div className={clsx("w-24 h-2 rounded-full bg-gray-200")} />
              <div className={clsx("w-28 h-2 rounded-full bg-gray-200")} />
              <div className={clsx("w-20 h-2 rounded-full bg-gray-200")} />
              <div className={clsx("w-20 h-2 rounded-full bg-gray-200")} />
              <div className={clsx("w-32 h-2 rounded-full bg-gray-200")} />
            </div>
          </section>
        </div>
        <section className="pb-2">
          <div className="mt-4 border-t-2 pt-3 text-center text-sm md:text-lg">
            <div className="w-[80%] h-2 my-2 rounded-full bg-gray-200 mx-auto"/>
          </div>
        </section>
      </div>
    </footer>
  );
}