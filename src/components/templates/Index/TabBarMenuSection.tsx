"use client"
import React, { useState } from "react";
import TabBar from "./TabBar";
import Styles from "@/styles/Index/TopBarMenuSection.module.css";
import { FaAngleLeft } from "react-icons/fa";

import Link from "next/link";
interface MenuItem {
  value: number;
  title: string;
  price: number;
  description: string;
  image: string;
}

interface Category {
  value: number;
  label: string;
  items: MenuItem[];
}

export type TabMenu = Category;

const TabBarMenuSection =  ({menus , submenus}:any) => {

  return (
    <section className={Styles.top_bar_section}>
      <div className="max-w-screen-xl mx-auto p-4">
        <div className="w-full">
          <div className="">
            <div className={` coffee_menu flex justify-center items-center`}>
              <div
                data-aos="fade-up"
                className={` ${Styles.top_bar_article_container} p-4 w-full sm:w-11/12 lg:w-1/2 bg-[#C0AA83] h-[30rem] customScroll text-center `}
              >
                <div className=" text-black ">
                  <div className="flex justify-between items-center my-2 mb-[50px]">
                    <Link
                      href="/menu"
                      className="text-md flex justify-between items-center text-black font-black="
                    >
                      <FaAngleLeft /> مشاهده همه
                    </Link>
                    <p className="text-md md:text-xl text-white font-black ">
                      لیست منوی پرطرفدار ها
                    </p>
                  </div>
                  <TabBar menus={menus} submenus={submenus}/>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TabBarMenuSection;
