import Overlay_bottom from "@/components/modules/overlays/overlay_bottom";
import FallowNew from "@/components/templates/Index/FallowNew";
import GetDiscounts from "@/components/templates/Index/GetDiscounts";
import MainPage from "@/components/templates/Index/MainPage";
import RecentPosts from "@/components/templates/Index/RecentPosts";
import ReserveTime from "@/components/templates/Index/ReserveTime";
import Skills from "@/components/modules/Skills";
import TabBarMenuSection from "@/components/templates/Index/TabBarMenuSection";
import Testimonial from "@/components/templates/Index/Testimonial";
import Image from "next/image";
import RecentProducts from "@/components/templates/Index/RecentProducts";
import ProductsModel from "@/models/Product";
import ConnectToDB from "@/configs/db";
import MenusModel from "@/models/Menus";
import SubMenusModel from "@/models/SubMenus";
import CategoryModel from "@/models/Category";

export default async function Home() {
   ConnectToDB()
  const lastProducts = await ProductsModel.find({} , "img title shortDescription longDescription category").populate("img").populate("category").limit(3)
  const category = await CategoryModel.find({})

  const fetchedMenus = await MenusModel.find({});
  const fetchedSubMenus = await SubMenusModel.find({}).populate("image");

  return (
    <>
      <MainPage />
      {/* overlay */}
      <Overlay_bottom />
      <ReserveTime />
      <Skills />
      <TabBarMenuSection  menus={JSON.parse(JSON.stringify(fetchedMenus))} submenus={JSON.parse(JSON.stringify(fetchedSubMenus))} />
      <Testimonial />
      <GetDiscounts />
      <RecentProducts lastProducts={JSON.parse(JSON.stringify(lastProducts))} category={JSON.parse(JSON.stringify(category))}/>
      <RecentPosts />
    </>
  );
}
