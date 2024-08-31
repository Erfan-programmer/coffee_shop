"use client";
import React, { ReactNode, useEffect, useState } from "react";
import RangeSlider from "../SilderRange/SilderRange";
import Link from "next/link";
import { FaAngleLeft } from "react-icons/fa";
import CategoryModel from "@/models/Category";
import ConnectToDB from "@/configs/db";
import Image from "next/image";

type childrenType = {
  children?: ReactNode;
};
const Sidebar = ({ children }: childrenType) => {
  const [categories, setAllCategories] = useState([]);
  const [preCart, setPreCart] = useState([]);
  useEffect(() => {
    const getAllCategories = async () => {
      const res = await fetch("/api/category", {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
        },
      });
      if (res.status === 200) {
        const categories = await res.json();
        setAllCategories(categories);
      }
    };
    getAllCategories();
  }, []);
  useEffect(() => {
    setPreCart(JSON.parse(localStorage.getItem("cart") as any));
  }, []);

  const updateCartHandler = () => {
    setPreCart(JSON.parse(localStorage.getItem("cart") as any));
  };
  return (
    <div className="shop-filter-list w-full  md:w-[25%] bg-[#F6F6F6] h-auto py-10 relative">
      <div className="h-auto  sticky top-[112px] p-4">
        <h2 className="text-2xl font-black pr-3"> پیش نمایش سبد خرید </h2>
        <div className="h-[1px] w-11/12 bg-[#aaa] mx-auto mt-5"></div>
        <div className="cart-lists h-auto flex flex-col justify- gap-2 items-center mb-[20px]">
          {preCart?.length ? (
            preCart.map((cart: any , index) => (
              <div className="w-full flex justify-center gap-5 items-center rounded-md shadow-md p-2">
                <div className="imageCart w-16 h-16 flex-2">
                  <Image
                    src={cart.img.imgUrl}
                    layout="responsive"
                    width={50}
                    height={50}
                    key={index}
                    alt=""
                    loading="lazy"
                  />
                </div>
                <div className="countCard flex-1">
                  <input
                    type="text"
                    value={cart.count + " عدد "}
                    className="w-16 p-2"
                  />
                </div>
                <div className="titleCart flex-2">
                  <p>{cart.total.toLocaleString() + " تومان "}</p>
                </div>
              </div>
            ))
          ) : (
            <p className="text-[#aaa] pt-3 font-md">هیچ محصولی یافت نشد</p>
          )}
          <div className="flex justify-center items-center">
            <button
              className="px-4 py-2 text-white rounded-md shadow-md font-black text-md bg-[#171717]"
              onClick={updateCartHandler}
            >
              آپدیت سبد
            </button>
          </div>
        </div>
        <h2 className="text-2xl font-black pr-3">بسته بندی</h2>
        <div className="h-[1px] w-11/12 bg-[#aaa] mx-auto mt-5"></div>
        <ul className="pr-3 my-10">
          {JSON.parse(JSON.stringify(categories)).map((category: any) => (
            <li
              className="flex justify-start items-center gap-1"
              key={category?._id}
            >
              <FaAngleLeft className="text-[#c0aa83]" />
              <Link href={`/shop/product-category/${category?.label}`}>
                {category?.title}
              </Link>
            </li>
          ))}
        </ul>
        {children}
        <h2 className="text-xl font-black pr-3 mt-[100px]">برچسب ها</h2>
        <div className="h-[1px] w-11/12 bg-[#aaa] mx-auto mt-5 mb-10"></div>
        <div className="flex justify-start items-center w-[80%] flex-wrap gap-1 text-[#aaa] pr-2">
          <p>#قهوه عربیکا</p>
          <p>#قهوه ترک</p>
          <p>#قهوه کلمبیایی</p>
          <p>#کلاه باریستا</p>
          <p>#باریستا</p>
          <p>#قهوه ساز</p>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
