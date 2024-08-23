import Image, { StaticImageData } from "next/image";
import React from "react";
import { BsCartFill } from "react-icons/bs";
import Styles from "@/styles/CartItem/CartItem.module.css";
import Link from "next/link";
import { AiFillStar } from "react-icons/ai";
import { FaRegStar } from "react-icons/fa6";

import { FaStar } from "react-icons/fa";
type CartItemType = {
  title: string;
  _id: String;
  price: number;
  img: any;
  comments: any;
  shortDescription: string;
  category: { title: string; label: string };
};
const CartItem = ({
  title,
  _id,
  shortDescription,
  comments,
  price,
  img,
  category,
}: CartItemType) => {
  const addToBasketHandler = () => {
    const mainCart = {
      title,
      _id,
      price,
      img,
    };
  };
  let stars: any = [];
  let initValue = 0;
  comments
    ?.filter((comment: any) => comment.isAccept === true)
    ?.map((commentCount: any) => stars.push(commentCount.star));
  let newStars = stars.reduce((acc: any, cur: any) => acc + cur, initValue);
  return (
    <Link href={`/shop/product-category/${category.label}/${_id}`}>
      <div className="w-92 h-100 p-10 flex flex-col justify-center text-center gap-5 items-center hover:shadow-xl hover:shadow-xl">
        <div className="h-52">
          <Image
            loading="lazy"
            layout="responsive"
            width={100}
            height={100}
            src={img || "/images/about-icon-1.png"}
            alt=""
          />
        </div>
        <div className="cartItem-title text-xl faMedium">
          <h2>{title}</h2>
        </div>
        <div className="cartItem-description text-xs text-[#aaa]">
          <span>{shortDescription}</span>
        </div>
        <div className="cartItem-price text-2xl font-black faMedium text-[#c0aa83]">
          <p>{price?.toLocaleString()} تومان</p>
        </div>
        <div className="cartItem-description text-xs text-[#aaa] flex justify-center items-center">
          {comments?.length !== 0 && stars ? (
            <>
              <div className="stars flex mt-5">
                {new Array(
                  Math.round(
                    stars /
                      comments?.filter(
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
                        comments?.filter(
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
        </div>
        <div className={`cartItem-button ${Styles.addToCart_btn}`}>
          <button className="faMedium " onClick={addToBasketHandler}>
            <p className="text-sm">افزودن به سبد خرید</p> <BsCartFill />
          </button>
        </div>
      </div>
    </Link>
  );
};

export default CartItem;
