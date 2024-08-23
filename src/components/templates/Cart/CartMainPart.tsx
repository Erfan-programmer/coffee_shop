"use client";
import CartItem from "@/components/modules/cartItem/CartItem";
import SelectBox from "@/components/modules/SelectBox/selectBox";
import RangeSlider from "@/components/modules/SilderRange/SilderRange";
import Link from "next/link";
import React, { useRef, useState } from "react";
import Styles from "@/styles/CartItem/ccartMain.module.css";
import { FaAngleLeft } from "react-icons/fa";
import { BsCartFill } from "react-icons/bs";
import Sidebar from "@/components/modules/Sidebar/Sidebar";
import { useParams } from "next/navigation";

const CartMainPart = ({ products }: any) => {
  const options = [
    { type: "دسته بندی محصولات", level: -1 },
    { type: "براساس محبوب ترین ها", level: "1" },
    { type: "(بیشترین به کمترین) بر اساس قیمت", level: "2" },
    { type: "(کمترین به بیشترین) بر اساس قیمت", level: "3" },
  ];

  const [min, setMin] = useState<number>(0);
  const [max, setMax] = useState<number>(500_000);
  const [filterValue, setFilterValue] = useState<number | string>();
  const ref = useRef<any>();
  const { categoryName } = useParams();

  const filteredValues = (numbers: number[]) => {
    setMax(numbers[1]);
    setMin(numbers[0]);
  };

  const filteredAndSortedProducts = products
    .filter(
      (product: any) =>
        product.category?.label === categoryName &&
        Number(product?.price) >= min &&
        Number(product?.price) <= max
    )
    .sort((productOne: any, productTwo: any) => {
      switch (filterValue) {
        case "2":
          return Number(productOne.price) - Number(productTwo.price);
        case "3":
          return Number(productTwo.price) - Number(productOne.price);
        case "1":
          return Number(productTwo.score) - Number(productOne.score);
        default:
          return 0;
      }
    });

  return (
    <div className="max-w-screen-xl mx-auto mb-[300px] h-auto flex flex-col flex-row-reverse justify-center md:flex-row-reverse bg-transparent sidebar_part">
      <div className="shop-main w-full md:w-[75%] p-5">
        <div className="shop-main_header flex flex-col md:flex-row gap-5 justify-between items-center">
          <p className="text-[#111]">نتیجه همه 9 محصول</p>
          <select
            name=""
            id=""
            className="p-2 border border-2"
            ref={ref}
            onChange={(event) => {
              const value = event.target.value;
              setFilterValue(value);
            }}
          >
            {options?.map((option: any) => (
              <option
                key={option?.level}
                value={option?.level}
                className={`p-2 ${
                  option?.level === -1 ? "opacity-50" : "opacity-100"
                }`}
                disabled={option?.level === -1 ? true : false}
              >
                {option?.type}
              </option>
            ))}
          </select>
        </div>

        {filteredAndSortedProducts.length !== 0 ? (
          <div className="shop-main-body grid grid-cols-1 justify-items-center content-center md:grid-cols-2 gap-10 lg:grid-cols-3">
            {filteredAndSortedProducts.map((product: any) => (
              <CartItem
                key={product._id}
                category={product.category}
                _id={product?._id}
                title={
                  product?.title.length > 30
                    ? product?.title.slice(0, 30) + "..."
                    : product?.title
                }
                comments={product.comments}
                shortDescription={
                  product?.shortDescription.length > 30
                    ? product?.shortDescription.slice(0, 30) + "..."
                    : product?.shortDescription
                }
                price={product?.price}
                img={product?.img?.imgUrl}
              />
            ))}
          </div>
        ) : (
          <div className="bg-[red] p-5 w-full mt-5 text-white">
            محصولی برای فیلتر اعمال شده یافت نشد
          </div>
        )}
      </div>
      <Sidebar>
        <h2 className="text-xl font-black pr-3 ">فیلتر شده بر اساس قیمت</h2>
        <div className="h-[1px] w-11/12 bg-[#aaa] mx-auto mt-5 mb-10"></div>
        <RangeSlider slideRange={filteredValues} />
        <div className="filter-section">
          <div className="flex justify-center items-center">
            <p className="ml-2">قیمت : </p>
            <div className="flex justify-center items-center gap-2">
              <p className="max-price"> {min?.toLocaleString()}</p>تا
              <p className="min-price"> {max?.toLocaleString()} </p>
              <p>(تومان)</p>
            </div>
          </div>
          <div
            className={`cartItem-button mt-10 flex justify-center ${Styles.addToCart_btn}`}
          >
            <button className="faMedium">
              <p className="text-sm">اعمال فیلتر</p>
            </button>
          </div>
        </div>
      </Sidebar>
    </div>
  );
};

export default CartMainPart;
