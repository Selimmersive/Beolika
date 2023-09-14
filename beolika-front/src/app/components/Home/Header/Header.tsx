"use client";
import React, { useState, useEffect, useRef } from "react";
import NavBar from "@/components/ui/NavBar";
import clsx from "clsx";
import Woman from "@/images/woman.png";
import Shape from "@/images/shape-b.png";
import ShapeIcon from "@/images/shape-w.png";
import Image from "next/image";

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
    <header className="bg-image text-white">
      <div className="container">
        <NavBar />
        <div
          className={clsx(
            "h-[760px] space-y-4",
            "sm:space-y-6",
            "md:h-screen",
            "lg:flex lg:h-[700px] lg:flex-col lg:justify-center",
            "xl:h-[800px]"
          )}>
          <div className={clsx("flex flex-col", "lg:flex-row-reverse lg:items-center lg:justify-between")} ref={ref}>
            <div className={clsx("relative flex items-center justify-center")}>
              <div
                className={clsx(
                  "absolute z-0 mx-auto mr-7 mt-10 h-[377px] w-[255px] rounded-full border-2 border-white",
                  "lg:mr-14 lg:h-[500px] lg:w-[300px]",
                  "xl:h-[600px] xl:w-[400px]"
                )}
              />
              <div className={clsx("z-10 mx-auto mt-10 h-[377px] w-[255px] rounded-full", "lg:h-[500px] lg:w-[300px]", "xl:h-[600px] xl:w-[400px]")}>
                <Image alt="women at work" src={Woman} className={clsx("h-full w-full rounded-full")} />
              </div>
            </div>
            <div className={clsx("space-y-6", "sm:space-y-6")}>
              <h3
                className={clsx(`pt-14 font-sego uppercase leading-[30px]`, "md:leading-[60px]", "lg:pt-0 lg:leading-[45px]", "xl:leading-[70px]")}
                style={{ fontSize: width < 800 ? width / 11.6 + "px" : width / 21 }}>
                Start your business
              </h3>
              <div className={clsx("w-full space-y-4", "sm:space-y-6")}>
                <div className={clsx("flex items-end space-x-4", "xl:space-x-8")}>
                  <h3
                    className={clsx(
                      "font-sego uppercase leading-[30px]",
                      "sm:leading-[35px]",
                      "md:leading-[60px]",
                      "lg:leading-[55px]",
                      "xl:leading-[70px]"
                    )}
                    style={{ fontSize: width < 800 ? width / 11.6 + "px" : width / 21 }}>
                    Quickly
                  </h3>
                  <div className={clsx("flex h-7 w-full items-center justify-end rounded-full border-2", "sm:h-8", "md:h-12", "lg:h-10", "xl:h-14")}>
                    {/*  <input
                      type="search"
                      placeholder="Search here"
                      aria-label="Search"
                      className="h-full w-full rounded-full border-none bg-transparent pl-4 pr-2 text-white focus:border-none focus:outline-none focus:ring-0"
                    />
                    <button type="button" className={clsx("h-full w-8 rounded-full bg-white", "lg:mr-0.5 lg:h-12 lg:w-20")}></button> */}
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
                      <Image alt="" src={Shape} className={clsx("h-[30px] w-[30px]", "md:h-14 md:w-14", "lg:h-[40px] lg:w-[40px]")} />
                    </div>
                  </div>
                  <h3
                    className={clsx(
                      "font-sego uppercase leading-[30px]",
                      "sm:leading-[35px]",
                      "md:leading-[60px]",
                      "lg:leading-[55px]",
                      "xl:leading-[70px]"
                    )}
                    style={{ fontSize: width < 800 ? width / 11.6 + "px" : width / 21 }}>
                    And easily
                  </h3>
                </div>
              </div>
              <p className={clsx("text-lg font-light text-gray-200", "md:text-xl", "lg:w-[450px] lg:pt-2", "xl:w-[550px] xl:text-2xl")}>
                Discover our exclusive selection of high-converting, on-trend themes designed to save you precious design time.
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className={clsx("textRightToLeft h-14 border-b-2 border-t-2 font-sego uppercase text-white shadow-md")}>
        <div>
          <span>
            <div className="flex items-end">
              high-converting <Image alt="" src={ShapeIcon} className="h-[40px] w-[40px]" />
              trend <Image alt="" src={ShapeIcon} className="h-[40px] w-[40px]" />
              creative <Image alt="" src={ShapeIcon} className="h-[40px] w-[40px]" />
              efficient <Image alt="" src={ShapeIcon} className="h-[40px] w-[40px]" />
              attractive <Image alt="" src={ShapeIcon} className="h-[40px] w-[40px]" />
              high-converting <Image alt="" src={ShapeIcon} className="h-[40px] w-[40px]" />
              trend <Image alt="" src={ShapeIcon} className="h-[40px] w-[40px]" />
              creative <Image alt="" src={ShapeIcon} className="h-[40px] w-[40px]" />
              efficient <Image alt="" src={ShapeIcon} className="h-[40px] w-[40px]" />
              attractive <Image alt="" src={ShapeIcon} className="h-[40px] w-[40px]" />
              high-converting <Image alt="" src={ShapeIcon} className="h-[40px] w-[40px]" />
              trend <Image alt="" src={ShapeIcon} className="h-[40px] w-[40px]" />
              creative <Image alt="" src={ShapeIcon} className="h-[40px] w-[40px]" />
              efficient <Image alt="" src={ShapeIcon} className="h-[40px] w-[40px]" />
              attractive <Image alt="" src={ShapeIcon} className="h-[40px] w-[40px]" />
              high-converting <Image alt="" src={ShapeIcon} className="h-[40px] w-[40px]" />
              trend <Image alt="" src={ShapeIcon} className="h-[40px] w-[40px]" />
              creative <Image alt="" src={ShapeIcon} className="h-[40px] w-[40px]" />
              efficient <Image alt="" src={ShapeIcon} className="h-[40px] w-[40px]" />
              attractive <Image alt="" src={ShapeIcon} className="h-[40px] w-[40px]" />
              high-converting <Image alt="" src={ShapeIcon} className="h-[40px] w-[40px]" />
              trend <Image alt="" src={ShapeIcon} className="h-[40px] w-[40px]" />
              creative <Image alt="" src={ShapeIcon} className="h-[40px] w-[40px]" />
              efficient <Image alt="" src={ShapeIcon} className="h-[40px] w-[40px]" />
              attractive <Image alt="" src={ShapeIcon} className="h-[40px] w-[40px]" />
            </div>
          </span>
        </div>
      </div>
    </header>
  );
}
