import React from "react";
import Style from "@/styles/Index/ReentProducts.module.css";
import ActionAreaCard from "@/components/modules/PostCard/PostCard";
import pic from "../../../../public/images/blog1-770x570.jpg";
import Link from "next/link";
import RecentProductCard from "@/components/modules/productCart/ProductCart";

const RecentProducts = ({lastProducts , category , title  , subTitle}:any) => {

  return (
    <section className={`relative ${Style.recent_post_container}`}>
      <div className="max-w-screen-xl mx-auto text-white relative flex flex-col justify-center items-center">
        <div className="title_des absolute text-center top-[-160px]">
          <div className="font-black text-2xl">
            <p className="text-[#c0aa83]">محصولات ما</p>
          </div>
          <div className="font-black text-2xl md:text-4xl">
            <h4>آخرین محصولات های سایت</h4>
          </div>
        </div>
        <div className="posts_container w-full">
          <div className="posts-inner grid grid-cols-1 gap-10 md:grid-cols-2 lg:grid-cols-3 justify-items-center	 content-center">
            {lastProducts?.map((product:any , index:any) => (
              <RecentProductCard key={index} {...product} btnTitle="ادامه ..." href={`/shop/product-category/${product?.category.title}/${product?._id}`}/>
            ))}
          </div>
          <div className="posts-inner_des-btn my-20">
            <Link href={`/shop/product-category/${category && category[0]?.label}`} className={"introduce_des_bio_button_dark border border-2 border-[#c0aa83] text-[#c0aa83] bg-white]"}>
              بیشتر
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default RecentProducts;
