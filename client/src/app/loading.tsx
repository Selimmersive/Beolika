import SkeletonFooter from "./components/ui/Skeleton/Footer/SkeletonFooter";
import SkeletonNavBar from "./components/ui/Skeleton/NavBar/SkeletonNavBar";
import clsx from "clsx";
import { BsFillImageFill } from "react-icons/bs";

export default function Loading() {
  return (
    <div className="container animate-pulse">
      <SkeletonNavBar />
      <div
        className={clsx(
          "h-[760px] space-y-4",
          "sm:space-y-6",
          "md:h-screen",
          "lg:flex lg:h-[700px] lg:flex-col lg:justify-center",
          "xl:h-[800px]"
        )}>
        <div className={clsx("flex flex-col", "lg:flex-row-reverse lg:items-center lg:justify-between")}>
          <div className={clsx("relative flex items-center justify-center")}>
            <div
              className={clsx(
                "absolute z-0 mx-auto mr-7 mt-10 h-[377px] w-[255px] rounded-full border-2 border-white",
                "lg:mr-14 lg:h-[500px] lg:w-[300px]",
                "xl:h-[600px] xl:w-[400px]"
              )}
            />
            <div className={clsx("z-10 mx-auto mt-10 h-[377px] w-[255px] rounded-full", "lg:h-[500px] lg:w-[300px]", "xl:h-[600px] xl:w-[400px]")}>
              <div className={clsx("rounded-full shadow-xl flex items-center justify-center w-full h-[375px] bg-gray-300", "xs:h-72", "sm:h-80", "lg:h-[400px]", "xl:h-[700px]", "2xl:h-[800px]")}>
                <BsFillImageFill className={clsx("text-4xl text-gray-400")} />
              </div>
            </div>
          </div>
          <div className={clsx("space-y-6", "sm:space-y-6")}>
            <div
              className={clsx(`pt-14 font-sego uppercase leading-[30px]`, "md:leading-[60px]", "lg:pt-0 lg:leading-[45px]", "xl:leading-[70px]")}
            />
            <div className={clsx("w-full space-y-4", "sm:space-y-6")}>
              <div className={clsx("flex items-end space-x-4", "xl:space-x-8")}>
                <div
                  className={clsx(
                    "font-sego uppercase leading-[30px]",
                    "sm:leading-[35px]",
                    "md:leading-[60px]",
                    "lg:leading-[55px]",
                    "xl:leading-[70px]"
                  )}
                />
                <div className={clsx("flex h-7 w-full items-center justify-end rounded-full border-2", "sm:h-8", "md:h-12", "lg:h-10", "xl:h-14")}>
                </div>
              </div>
              <div className={clsx("flex items-end space-x-4", "xl:space-x-8")}>
                <div
                  className={clsx(
                    "flex h-7 w-28 items-center justify-center rounded-full border-2",
                    "xs:w-32",
                    "sm:h-8 sm:w-36",
                    "md:h-12 md:w-64",
                    "lg:h-10 lg:w-44",
                    "xl:h-14 xl:w-60"
                  )}>
                  <div className="flex h-[90%] w-[98%] items-center justify-center rounded-full bg-white">
                    {/* <Image alt="" src={Shape} className={clsx("h-[30px] w-[30px]", "md:h-14 md:w-14", "lg:h-[40px] lg:w-[40px]")} /> */}
                  </div>
                </div>
                <div
                  className={clsx(
                    "font-sego uppercase leading-[30px]",
                    "sm:leading-[35px]",
                    "md:leading-[60px]",
                    "lg:leading-[55px]",
                    "xl:leading-[70px]"
                  )}
                />
              </div>
            </div>
            <div className="space-y-4">
              <div className={clsx("w-[95%] h-2 rounded-full bg-gray-200")} />
              <div className={clsx("w-[95%] h-2 rounded-full bg-gray-200")} />
              <div className={clsx("w-[75%] h-2 rounded-full bg-gray-200")} />
            </div>
          </div>
        </div>
      </div>
      <SkeletonFooter />
    </div>
  );
}
  