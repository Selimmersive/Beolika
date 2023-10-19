import clsx from "clsx";

export default function SkeletonNavBar() {
  return (
    <nav>
      <div className={clsx("flex w-full items-center justify-between py-6", "lg:hidden")}>
        <div className="w-7 h-2 rounded-full bg-gray-200" />
        <div className="w-10 h-3 rounded-full bg-gray-200" />
        <div className="w-7 h-2 rounded-full bg-gray-200" />
      </div>
      <div className={clsx("hidden py-6", "lg:flex lg:w-full lg:items-center lg:justify-between")}>
        <div className="flex items-center space-x-14">
          <div className="w-10 h-3 rounded-full bg-gray-200" />
          <div className="flex space-x-14">
            <div className="w-7 h-2 rounded-full bg-gray-200" />
            <div className="w-7 h-2 rounded-full bg-gray-200" />
            <div className="w-7 h-2 rounded-full bg-gray-200" />
            <div className="w-7 h-2 rounded-full bg-gray-200" />
            <div className="w-7 h-2 rounded-full bg-gray-200" />
          </div>
        </div>
        <div className="w-7 h-2 rounded-full bg-gray-200" />
      </div>
    </nav>
  );
}