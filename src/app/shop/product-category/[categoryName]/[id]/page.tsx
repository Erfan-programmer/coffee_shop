import BreadCrumb from "@/components/modules/BreadCrumb/BreadCrumb";
import Sidebar from "@/components/modules/Sidebar/Sidebar";
import ProductInfo from "@/components/templates/Cart/ProductInfo";
import ProductModel from "@/models/Product";
import React from "react";
import { authUser } from "@/utils/serverHelpers";
import Link from "next/link";
import RecentProductCard from "@/components/modules/productCart/ProductCart";
import { PiLadderBold } from "react-icons/pi";
import CategoryModel from "@/models/Category"
import ConnectToDb from "@/configs/db"
const MainProduct = async ({ params }: any) => {
  const { id, categoryName } = params;
  ConnectToDb()
  let stars: any = [];
  let initValue = 0;
  const productInfo = await ProductModel.findOne({ _id: id }, "-__v")
    .populate("comments")
    .populate("category")
    .populate("img");
  const token = await authUser();
  productInfo?.comments
    .filter((comment: any) => comment.isAccept === true)
    ?.map((commentCount: any) => stars.push(commentCount.star));
  let newStars = stars.reduce((acc: any, cur: any) => acc + cur, initValue);
  const relatedProducts = await ProductModel.find({
    category: productInfo?.category?._id,
  }).populate("img")
  const category = await CategoryModel.findOne({label:categoryName})
  return (
    <section className="relative my-[100px]">
      <BreadCrumb title={["صفحه اصلی", "محصولات", `${category?.title}` , `${productInfo?.title}`]} />
      <div className="max-w-screen-xl mx-auto mb-[100px] h-auto flex flex-col flex-row-reverse justify-center md:flex-row-reverse bg-transparent">
        <ProductInfo
          productInfo={JSON.parse(JSON.stringify(productInfo))}
          productID={id}
          token={token}
          stars={newStars}
        />
        <Sidebar />
      </div>
      {JSON.parse(JSON.stringify(relatedProducts)).length !== 0 && (
        <div className="max-w-screen-xl mx-auto text-white relative flex flex-col bg-[#eee] p-[20px] justify-center items-center">
          <div className="title_des text-center my-[50px]">
            <div className="font-black text-2xl">
              <p className="text-[#c0aa83]">محصولات ما</p>
            </div>
            <div className="font-black text-black text-2xl md:text-4xl">
              <h4>محصولات مشابه</h4>
            </div>
          </div>
          <div className="posts_container w-full">
            <div className="posts-inner grid grid-cols-1 gap-10 md:grid-cols-2 lg:grid-cols-3 justify-items-center	 content-center">
              {JSON.parse(JSON.stringify(relatedProducts)).filter((product:any)=> product._id !==  String(id) )?.map(
                (product: any , index:any) => (
                  <RecentProductCard
                    {...product}
                    key={index}
                    btnTitle={"مشاهده"}
                    href={`/shop/product-category/${categoryName?.label}/${product?._id}`}
                  />
                )
              )}
            </div>
          </div>
        </div>
      )}
    </section>
  );
};

export default MainProduct;
