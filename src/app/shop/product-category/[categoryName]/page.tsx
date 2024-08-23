import BreadCrumb from "@/components/modules/BreadCrumb/BreadCrumb";
import CartMainPart from "@/components/templates/Cart/CartMainPart";
import ConnectToDB from "@/configs/db";
import CategoryModel from "@/models/Category";
import ProductModel from "@/models/Product";
import { authUser } from "@/utils/serverHelpers";
import React from "react";
const page = async ({ params }: any) => {
  const { categoryName } = params;

  ConnectToDB();
  const category = await CategoryModel.findOne({ label: String(categoryName) });
  const products = await ProductModel.find({})
    .populate("category")
    .populate("img")
    .populate("comments")
    .lean();

  return (
    <section className="relative mb-[300px] md:mb-[100px] mt-[50px]">
      <BreadCrumb title={["همه محصولات", category.title]} />
      <CartMainPart
        products={JSON.parse(JSON.stringify(products))}
      />
    </section>
  );
};

export default page;
