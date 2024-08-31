"use client";
import CartItem from "@/components/modules/cartItem/CartItem";
import SelectBox from "@/components/modules/SelectBox/selectBox";
import React, { useState } from "react";
import Styles from "@/styles/CartItem/ccartMain.module.css";
import Image from "next/image";
import { BsCartFill } from "react-icons/bs";
import InputCount from "@/components/modules/Inputcount";
import Link from "next/link";
import CartItemTabs from "./CartItemTabs";
import CommentForm from "./CommentForm/CommentForm";
import { FaRegStar, FaStar } from "react-icons/fa";
import ToastComponent, { ToastSuccess } from "@/components/modules/Toastify";
const ProductInfo = ({ productInfo, productID, token, stars }: any) => {
  const options = [
    "دسته بندی محصولات",
    "براساس محبوب ترین ها",
    "براساس آخرین محصول ها",
    "(بیشترین به کمترین) بر اساس قیمت",
    "(کمترین به بیشترین) بر اساس قیمت",
  ];
  const tabsmenuInfos = [
    {
      value: 1,
      label: "توضیحات",
      items: [
        {
          value: 1,
          description: productInfo?.longDescription,
        },
      ],
    },
    {
      value: 2,
      label: " دیدگاه ها",
      items: [
        {
          value: 2,
          returnCall: () => (
            <CommentForm
              comments={productInfo.comments}
              token={token}
              productID={productID}
            />
          ),
        },
      ],
    },
  ];

  const [count, setCount] = useState<any>(1);
  const [cart, setCart] = useState<any>([]);
  const addToCartHandler = (price: any, title: any, img: any) => {
    ToastSuccess("محصول به سبد خرید اضافه شد", "success");

    const mainCart = {
      title,
      price,
      img,
      count,
      total: price * count,
    };
    cart.push(mainCart);
    const cartItems = JSON.parse(localStorage.getItem("cart") as any);
    const isExist = cartItems?.find(
      (item: any) => item.title === mainCart.title
    );
    if (!isExist) {
      cartItems?.length > 0
        ? localStorage.setItem("cart", JSON.stringify([...cartItems, ...cart]))
        : localStorage.setItem("cart", JSON.stringify([...cart]));
    } else {
      const newItemObj = {
        title: isExist.title,
        price: Number(isExist.price),
        count: Number(isExist.count) + Number(count),
        img: isExist.img,
        total: Number(isExist.price) * Number(isExist.count),
      };

      const newCartItem = cartItems.filter((item: any) => item.title !== title);
      newCartItem.push({ ...newItemObj });

      localStorage.setItem("cart", JSON.stringify(newCartItem));
    }
  };
  return (
    <>
      <ToastComponent />

      <div className="shop-main w-full md:w-[75%] p-5 faNum">
        <div className="shop-main_header flex overflow-hidden flex-col md:flex-row justify-center h-100 items-start mt-[100px] gap-5">
          <div className="w-[100%] md:w-[40%]  h-full flex flex-col justify-center items-center ]">
            <Image
              src={productInfo?.img?.imgUrl}
              layout="responsive"
              width={100}
              height={100}
              loading="lazy"
              alt=""
            />
          </div>
          <div className="w-full md:w-[60%] h-full gap-5">
            <h1 className="font-black faNum text-2xl faNum">
              {productInfo?.title}
            </h1>
            {productInfo?.comments?.length !== 0 && stars ? (
              <>
                <div className="stars flex mt-5">
                  {new Array(
                    Math.round(
                      stars /
                        productInfo?.comments?.filter(
                          (comment: any) => comment?.isAccept === true
                        )?.length
                    )
                  )
                    .fill(0)
                    ?.map((item, index) => (
                      <FaStar key={index} className="text-[orange]" />
                    ))}
                  {new Array(
                    Math.round(
                      5 -
                        stars /
                          productInfo?.comments?.filter(
                            (comment: any) => comment?.isAccept === true
                          )?.length
                    )
                  )
                    .fill(0)
                    ?.map((item, index) => (
                      <FaRegStar key={index} className="text-[#aaa]" />
                    ))}
                </div>
              </>
            ) : (
              <div className="stars flex mt-5">
                {new Array(5).fill(0)?.map((item, index) => (
                  <FaRegStar key={index} className="text-[#aaa]" />
                ))}
              </div>
            )}
            <div className="shop-main-price my-5 flex gap-1">
              <p className="">{productInfo?.price?.toLocaleString()}</p>
              <p>تومان</p>
            </div>
            <div className="shop-main-price-description my-[10px] text-[#aaa]">
              <span>{productInfo?.shortDescription}</span>
            </div>
            <div className="shop-main-form">
              <form onSubmit={(event) => event.preventDefault()}>
                <div
                  className={`cartItem-button flex justify-start gap-5 items-center`}
                >
                  <div className=" h-full">
                    <input
                      type="number"
                      className="py-3 pr-4 rounded-md pr-2 text-md border border-1-[#aaa] w-32"
                      value={count}
                      onChange={(event: any) => setCount(event.target.value)}
                    />
                  </div>
                  <div className={`${Styles.addToCart_btn} my-5`}>
                    <button
                      className="faNum  flex justify-center items-center"
                      onClick={() =>
                        addToCartHandler(
                          productInfo.price,
                          productInfo.title,
                          productInfo.img
                        )
                      }
                    >
                      <p className="text-xs w-full">افزودن به سبد خرید</p>{" "}
                      <BsCartFill />
                    </button>
                  </div>
                </div>
              </form>
            </div>
            <div className="shop-main-categories font-black text-xl faNum flex justify-start items-center">
              <p className="ml-2">بسته بندی : </p>
              <ul className="text-[#c0aa83] flex justify-between gap-1">
                {productInfo?.category?.title}
              </ul>
            </div>
            <div className="shop-main-categories font-black text-xl faNum flex justify-start items-center mt-2">
              <p className="ml-2">برچسب ها</p>

              <ul className="text-[#c0aa83] flex justify-between gap-1 ">
                {productInfo?.labels?.map((label: string , index:any) => (
                  <li>
                    <Link href="" key={index}>{label}</Link>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
        <div className="shop-main-body grid grid-cols-1 w-full justify-items-center content-center">
          <CartItemTabs tabMenu={tabsmenuInfos} />
        </div>
      </div>
    </>
  );
};

export default ProductInfo;
