"use client";
import * as React from "react";
import Box from "@mui/material/Box";
import Tab from "@mui/material/Tab";
import TabContext from "@mui/lab/TabContext";
import TabList from "@mui/lab/TabList";
import TabPanel from "@mui/lab/TabPanel";
import { useState } from "react";
import "./cartItemTabs.css";
import localFont from "next/dist/compiled/@next/font/dist/local";
import Image from "next/image";
interface MenuItem {
  title: string;
  price: number;
  description: string;
}

interface Category {
  value: number;
  items: MenuItem[];
}

export interface TabMenu {
  [key: string]: Category;
}
export default function CartItemTabs({ tabMenu }: any) {
  const [value, setValue] = useState("1");
  const handleChange = (event: React.SyntheticEvent, newValue: string) => {
    setValue(newValue);
  };

  return (
    <Box sx={{ width: "100%", typography: "body1", fontFamily: "faMedium" }}>
      <TabContext value={value}>
        <Box sx={{ borderBottom: 1, borderColor: "#C0AA83" }}>
          <TabList
            onChange={handleChange}
            sx={{
              borderColor: "#C0AA83",
              fontFamily:"faMedium",
              textWrap: "wrap",
              marginBottom:"10px"
            }}
            className="main_font"
          >
            {tabMenu?.map((menu: any, index: number) => (
              <Tab key={index} label={menu.label} value={String(menu.value)} />
            ))}
          </TabList>
        </Box>
        {tabMenu?.map((menu: any, index: number) =>
          menu.items?.map((item: any) => (
            <>
              <TabPanel
                value={String(item.value)}
                className="shadow-xl border-[1px] text-[#222] p-0 border-[#F6F6F6] my-5 transition ease-in-out "
              >
                <div className="flex justify-between items-middle ">
                  <div className="flex flex-col gap-4 flex-1">
                    <div className="flex-1 flex flex-row-reverse justify-start w-full  items-center text-md md:text-lg font-black">
                      <div className="flex flex-col gap-5 font-sm  flex-3 w-full">
                        <div className="flex  justify-end text-xs font-black w-full">
                          {item.description ? (
                            <div className="p-5 text-lg bg-[#F6F6F6] w-full flex flex-col gap-5 justify-center items-start" style={{lineHeight:"1.5rem"}} dangerouslySetInnerHTML={{ __html:item.description}}>
                            </div>
                          ) : (
                            <div className="w-full bg-[#F6F6F6]">{item?.returnCall()}</div>
                          )}
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </TabPanel>
            </>
          ))
        )}
      </TabContext>
    </Box>
  );
}
