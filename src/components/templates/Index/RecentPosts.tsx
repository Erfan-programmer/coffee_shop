import React from "react";
import Style from "@/styles/Index/RecentPosts.module.css";
import ActionAreaCard from "@/components/modules/PostCard/PostCard";
import pic from "../../../../public/images/blog1-770x570.jpg";
import Link from "next/link";
import { BiMessageRoundedDots } from "react-icons/bi";
import { IoMdEye } from "react-icons/io";
import RecentPostCard from "@/components/modules/PostCard/PostCard";
type postListType = {
  img: string;
  title: string;
  shortDescription: string;
};
const RecentPosts = () => {
  const postsIno: postListType[] = [
    {
      img: "/images/blog1-770x570.jpg",
      title: "راهنمای برشته کردن قهوه",
      shortDescription: `در واقع حالم خوب نیست، چون از ترس اعضا متنفرم، اما نتیجه اش تختم در اتاق است. ما در ترس از زندگی و نیاز به مراقبت از بازیکنان زندگی می کنیم. هر کس ...`,
    },
    {
      img: "/images/blog2-770x570.jpg",
      title: "در مورد قهوه آمریکانو",
      shortDescription: `Vivamus tristique ligula quis orci malesuada tincidunt. Praesent magna purus, pharetra eu eleifend non, euismod vitae leo. Interdum et malesuada fames ac ante ...`,
    },
    {
      img: "/images/blog3-770x570.jpg",
      title: "تاریخچه قهوه",
      shortDescription: `مهمترین چیز در حال حاضر این است که زمان آماده شدن برای فوتبال آسان است. فردا یا توسعه دهنده ماشه. خود دره تا حدودی متفاوت است. نه حتی برنده...`,
    },
  ];
  return (
    <section className={`relative ${Style.recent_post_container}`}>
      <div className="max-w-screen-xl mx-auto text-white relative flex flex-col justify-center items-center">
        <div className="title_des absolute text-center top-[-160px]">
          <div className="font-black text-2xl">
            <p className="text-[#c0aa83]">بلاگ ما</p>
          </div>
          <div className="font-black text-2xl md:text-4xl">
            <h4>آخرین مقاله های سایت</h4>
          </div>
        </div>
        <div className="posts_container w-full">
          <div className="posts-inner grid grid-cols-1 gap-10 md:grid-cols-2 lg:grid-cols-3 justify-items-center	 content-center">
            {postsIno?.map((post , index) => (
              <RecentPostCard key={index} {...post} />
            ))}
          </div>
          <div className="posts-inner_des-btn my-20">
            <Link
              href={""}
              className={
                "introduce_des_bio_button_dark border border-2 border-[#c0aa83] text-[#c0aa83] bg-white]"
              }
            >
              بیشتر
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default RecentPosts;
