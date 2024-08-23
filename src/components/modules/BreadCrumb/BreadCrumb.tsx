import React from "react";
import Styles from "@/styles/BreadCrumb/BreadCrumb.module.css";
import { FaAngleLeft } from "react-icons/fa";
import Link from "next/link";
type BreadCrumbProps = {
  title: string[];
};
const BreadCrumb = ({ title }: BreadCrumbProps) => {
  const options = {
    coffee: "کافه",
    italian: "ایتالیایی",
    green_coffee: "قهوه سبز",
    received_coffee: "قهوه برداشته شده",
    un_category: "دسته بندی نشده",
  };

  return (
    <section className={` ${Styles.breadcrumb_bg}`}>
      <div className="max-w-screen-xl mx-auto  h-full flex items-center">
        <div className="description  text-white  flex flex-col justify-center items-start h-full gap-10 pr-4">
          <p className="text-md xs:text-xs sm:text-sm md:text-md lg:text-4xl font-black">{[...title].reverse()[0]}</p>
          <ul className="flex justify-start items-center gap-1 flex-wrap text-white text-md md:text-lg">
            <li className="text-white">
              <Link href="/">کافه کینگ</Link>
            </li>
            <li>
              <FaAngleLeft />
            </li>
            <>
              {title?.map((titleCategory: any, index: any) => (
                <>
                  <li
                    className={`${
                      index + 1 === title.length && "text-[#c0aa83]"
                    }`}
                  >
                    {titleCategory}
                  </li>
                  {index + 1 < title.length && (
                    <li>
                      <FaAngleLeft />
                    </li>
                  )}
                </>
              ))}
            </>
          </ul>
        </div>
      </div>
    </section>
  );
};

export default BreadCrumb;
