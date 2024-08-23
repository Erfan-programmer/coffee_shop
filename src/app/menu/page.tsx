import React, { useEffect, useState } from "react";

import Styles from "@/styles/Index/TopBarMenuSection.module.css";

import BreadCrumb from "@/components/modules/BreadCrumb/BreadCrumb";

import MenuCart from "@/components/templates/menu/cart";
import MenusModel from "@/models/Menus";
import SubMenusModel from "@/models/SubMenus";
import ConnectToDB from "@/configs/db";
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

const TabBarMenuSection: React.FC = async () => {
  ConnectToDB();
  const fetchedMenus = await MenusModel.find({});
  const fetchedSubMenus = await SubMenusModel.find({}).populate("image")

  return (
    <section className={`${Styles.top_bar_section} mb-[200px]`}>
      <BreadCrumb title={["لیست منو"]} />
      <div className="max-w-screen-xl mx-auto p-4">
        <div className="w-full">
          <div className="">
            <div
              className={`${Styles.coffee_menu} flex justify-center items-center`}
            >
              <div
                data-aos="fade-up"
                className={`${Styles.top_bar_article_container} p-4 w-full bg-[#C0AA83] h-[100vh] customScroll text-center`}
              >
                <div className="my-10 text-black">
                  <div className="flex text-2xl flex-row-reverse items-center gap-4 text-[#fff] justify-center my-2 mb-[50px]">
                    لیست منوی{" "}
                    <span className="text-[#171717] font-black faBold text-4xl drop-shadow-md drop-shadow-white">
                      King
                    </span>
                  </div>
                  <MenuCart
                    menus={JSON.parse(JSON.stringify(fetchedMenus))}
                    subMenus={JSON.parse(JSON.stringify(fetchedSubMenus))}
                  />
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
