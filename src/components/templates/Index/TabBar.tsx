"use client";
import * as React from "react";
import Box from "@mui/material/Box";
import Tab from "@mui/material/Tab";
import TabContext from "@mui/lab/TabContext";
import TabList from "@mui/lab/TabList";
import TabPanel from "@mui/lab/TabPanel";
import { useState, useEffect } from "react";
import "./TabBar.css";
import Image from "next/image";

interface MenuItem {
  title: string;
  price: number;
  description: string;
  image: {
    imgUrl: string;
  };
}

interface Category {
  value: number;
  items: MenuItem[];
}

export interface TabMenu {
  [key: string]: Category;
}

export default function LabTabs({ menus, submenus }: { menus: any[]; submenus: any[] }) {
  const [value, setValue] = useState("1");
  const [tabID, setTabID] = useState(1);
  const [filteredSubMenus, setFilteredSubMenus] = useState([]);

  useEffect(() => {
    const filtered:any = submenus.filter((sub) => sub.value === tabID);
    setFilteredSubMenus(filtered);
  }, [tabID, submenus]);

  const handleChange = (event: React.SyntheticEvent, newValue: string) => {
    setValue(newValue);
  };

  return (
    <Box sx={{ width: "100%", typography: "body1", fontFamily: "faNum" }}>
      <TabContext value={value}>
        <Box sx={{ borderBottom: 1, borderColor: "#C0AA83" }}>
          <TabList
            onChange={handleChange}
            sx={{
              borderColor: "#C0AA83",
              textWrap: "wrap",
            }}
            className="main_font"
          >
            {menus?.map((menu, index) => (
              <Tab
                key={index}
                label={menu.label.toString()}
                value={String(menu?.value)}
                onClick={() => setTabID(menu.value)}
              />
            ))}
          </TabList>
        </Box>
        {filteredSubMenus?.map((menu:any, index) => (
          <TabPanel
            key={index}
            value={String(menu.value)}
            className="shadow-xl border-[1px] text-[#171717] p-2 border-[#171717] my-5 transition ease-in-out hover:bg-[#aa9674] cursor-pointer"
          >
            <div className="flex justify-between items-center p-5">
              <div className="flex flex-col gap-4 flex-1">
                <div className="flex-1 flex flex-row-reverse justify-between w-full items-center text-md md:text-lg font-black">
                  <div className="flex justify-end items-center flex-2 w-[25%]">
                    <div className="h-24 w-24">
                      <Image
                        src={menu.image.imgUrl}
                        layout="responsive"
                        loading="lazy"
                        width={50}
                        height={50}
                        alt={menu.title}
                      />
                    </div>
                  </div>
                  <div className="flex flex-col gap-5 font-sm text-[#fff] flex-3 w-[75%]">
                    <div className="flex-1 text-md font-black flex flex-row-reverse justify-between text-[#171717] gap-1 mr-2 text-center">
                      <p>{menu.title}</p>
                      <div className="flex flex-row-reverse gap-1">
                        {menu.price.toLocaleString()} <p>تومان</p>
                      </div>
                    </div>
                    <div className="flex justify-end text-xs font-black">
                      <p className="pr-2">{menu.description}</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </TabPanel>
        ))}
      </TabContext>
    </Box>
  );
}
