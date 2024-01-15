"use client";
import { useEffect, useState, useRef } from "react";
import NavBar from "@/app/components/NavBar";
import clsx from "clsx";

export default function Header() {
  const [width, setWidth] = useState(0);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleResize = () => {
      if (ref?.current) {
        setWidth(ref.current.clientWidth);
      }
    };

    handleResize(); // Initial measurement
    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <header className="text-white" ref={ref}>
      <div className="container">
        <NavBar />
        <div
          className={clsx(
            "h-80 space-y-4",
            "sm:space-y-6",
            "md:h-[450px]",
            "lg:flex lg:h-[500px] lg:flex-col lg:justify-center",
            "xl:h-[550px]"
          )}>
          <div className={clsx("flex flex-col h-full", "lg:flex-row-reverse lg:items-center lg:justify-between")}>
            <div className={clsx("relative flex items-center justify-center")}>
              {/* <div
                className={clsx(
                  "absolute z-0 mx-auto mr-7 mt-10 h-[377px] w-[255px] rounded-full border-2 border-white",
                  "lg:mr-14 lg:h-[500px] lg:w-[300px]",
                  "xl:h-[600px] xl:w-[400px]"
                )}
              />
              <div className={clsx("z-10 mx-auto mt-10 h-[377px] w-[255px] rounded-full", "lg:h-[500px] lg:w-[300px]", "xl:h-[600px] xl:w-[400px]")}>
                <Image alt="women at work" src={Woman} className={clsx("h-full w-full rounded-full")} />
              </div> */}
            </div>
            <div className={clsx("space-y-6 h-full flex flex-col justify-end pb-5", "sm:space-y-6", "lg:w-full lg:flex-row lg:justify-between lg:items-end lg:pb-20")}>
              <div className={clsx("-space-y-2", "md:-space-y-4", "xl:-space-y-6")}>
                <h3
                  className={clsx("pt-14 font-glacialBold")} style={{ fontSize: width < 900 ? width / 10.3 + "px" : width > 2500 ? width / 30 : width / 20 }}>
                Start your business
                </h3>
                <h4 className={clsx("font-glacialRegular")} style={{ fontSize: width < 900 ? width / 12 + "px" : width > 2500 ? width / 32 : width / 21 }}>Quickly & Easily</h4>
              </div>
              <p className={clsx("text-xl font-light text-gray-200", "md:text-xl md:w-[450px]", "lg:pt-2 lg:w-80", "xl:w-[450px] xl:text-2xl")}>
                Our exclusive selection of high-converting themes designed to save you precious design time.
              </p>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}