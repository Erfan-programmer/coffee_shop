"use client";
import * as React from "react";
import Box from "@mui/material/Box";
import Tab from "@mui/material/Tab";
import TabContext from "@mui/lab/TabContext";
import TabList from "@mui/lab/TabList";
import { FaTableList, FaTableColumns } from "react-icons/fa6";
import TabPanel from "@mui/lab/TabPanel";
import { useState } from "react";
import "./cart.css";
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

interface MenuCartProps {
  menus: Category[];
  subMenus: MenuItem[];
}

export default function MenuCart({ menus, subMenus }: MenuCartProps) {



  
  const [value, setValue] = useState("1");
  const [tableState, setTableState] = useState("row");
  const [clickState, setClickState] = useState(false);
  const [tabID, setTabID] = useState(1);

  const handleChange = (event: React.SyntheticEvent, newValue: string) => {
    setValue(newValue);
    setTabID(Number(newValue));
  };

  const filteredSubMenus = subMenus.filter((sub: any) => sub.value === tabID);

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
            {menus?.map((menu:any, index) => (
              <Tab
                key={index}
                label={menu.label.toString()}
                value={String(menu?.value)}
                onClick={() => setTabID(menu.value)}
              />
            ))}
          </TabList>
        </Box>
        <div className="flex justify-end items-center mt-10 text-[#171717] text-2xl gap-2">
          <FaTableColumns
            className={`cursor-pointer p-[5px] text-[#171717] h-[1.6rem] w-[1.6rem] ${clickState && "bg-white"}`}
            onClick={() => {
              setTableState("column");
              setClickState(true);
            }}
          />
          <FaTableList
            className={`cursor-pointer p-[5px] text-[#171717] h-[1.6rem] w-[1.6rem] ${!clickState && "bg-white"}`}
            onClick={() => {
              setTableState("row");
              setClickState(false);
            }}
          />
        </div>
        <div
          className={`grid grid-cols-1 h-full pb-[100px] ${
            tableState === "row" ? "md:grid-cols-2 gap-5" : "md:grid-cols-3 gap-10"
          } justify-items-center-content-center`}
        >
          {filteredSubMenus?.map((menu: any, index: number) => (
            <TabPanel
              key={index}
              value={String(menu.value)}
              className={`shadow-xl text-[#c0aa83] h-auto ${
                tableState === "row"
                  ? "w-full p-0"
                  : "w-10/12 mx-auto "
              } border-[#171717] my-5 bg-[#171717] rounded-md transition ease-in-out hover:bg-[#212121] cursor-pointer`}
            >
              <div className="flex justify-between items-middle h-full p-2">
                <div className="flex flex-col gap-2 flex-1 h-full">
                  <div
                    className={`flex-1 flex ${
                      tableState === "row"
                        ? "flex-row-reverse gap-1 h-72"
                        : "flex-col h-[100px]"
                    } justify-start  w-full items-center text-md md:text-lg font-black`}
                  >
                    <div
                      className={`flex justify-start overflow-hidden items-center flex-2  rounded-md ${
                        tableState === "row"
                          ? "w-[35%] h-full"
                          : "w-[100%] h-[60%]"
                      }`}
                    >
                      <div className="h-[100%] w-[100%] relative menuImage">
                        <Image
                          src={menu.image.imgUrl}
                          className="h-[100%]"
                          layout="responsive"
                          height={100}
                          width={100}
                          loading="lazy"
                          alt=""
                        />
                      </div>
                    </div>
                    <div
                      className={`grid grid-cols-1 content-center  font-sm text-[#fff] flex-3 ${
                        tableState === "row"
                          ? "w-[65%] justify-items-start h-full"
                          : "w-full justify-items-center h-[50%]"
                      }`}
                    >
                      <div
                        className={`flex-1 text-lg font-light flex flex-row-reverse ${
                          tableState === "row"
                            ? "justify-between pl-4 "
                            : "justify-start pr-4"
                        } text-[#c0aa83] gap-10 text-center w-full mx-auto`}
                      >
                        <h2 className="faBold font-black text-2xl">
                          {menu.title}
                        </h2>
                      </div>
                      <div
                        className={`flex text-xs  justify-start text-right font-black w-[100%] text-[#aaa] `}
                      >
                        <p className={`${tableState === "column" && "pr-4"}`}>{ menu.description}</p>
                      </div>
                      <div
                        className={`flex text-sm flex-row-reverse justify-end   gap-1 w-full ${tableState === "column" && "pr-[10px]"}`}
                      >
                        {menu.price.toLocaleString()} <p>تومان</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </TabPanel>
          ))}
        </div>
      </TabContext>
    </Box>
  );
}
