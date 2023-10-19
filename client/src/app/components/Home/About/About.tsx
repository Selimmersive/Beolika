"use client";
import clsx from "clsx";

export default function About() {
  return (
    <div>
      <div className="container">
        <p className={clsx("py-14 text-xl font-glacialRegular", "md:text-2xl", "xl:text-4xl xl:py-24")}>
              I founded my company with a clear mission: to empower entrepreneurs to succeed online, even without advanced design or shop-building
              skills. We understand that every moment counts, and that every project is unique. That{"'"}s why we{"'"}ve created a collection of
              themes designed to meet your specific needs.
        </p>
      </div>
    </div>
  );
}
