import Image from "next/image";
import Link from "next/link";
import React from "react";
import Styles from "../../../styles/Index/mainPage.module.css";
import { FaHeart } from "react-icons/fa";
import { GiChessKing } from "react-icons/gi";

import image_one from "../../../../public/images/simple/dane--third---Copy.png"
import image_2 from "../../../../public/images/simple/dane--third---2.png"
import image_3 from "../../../../public/images/simple/dane--third---3.png"
import image_4 from "../../../../public/images/simple/dane--third---4.png"
import image_5 from "../../../../public/images/IMG_20240807_115456_220.png"
const MainPage = () => {
  return (
    <section className=" h-screen relative w-full bg-[#00000033] top-0 right-0 left-0 flex justify-center items-center main-section">
      <div className="max-w-screen-xxl mx-auto py-10 relative grid grid-cols-1 lg:grid-cols-2 justify-items-center content-end">
        <div
          className={` w-full flex flex-col gap-10 p-8 py-10 text-white`}
        >
          <div className={Styles.main_title}>
            <h1>
              کافه <span>King</span>
            </h1>
          </div>
          <div className={Styles.main_bio}>
            <p>
              ما در این سایت با خدمات متفاوت اعم از فروش ابزار کافه ، سفارش
              محصولات و رزرو میز در مغازه کافه کینگ با پرسنل های متخصص و خوش
              خدمت منتظر حضور گرم شما مشتریان عزیز هستیم.
              <FaHeart className="text-[#C0AA83] inline-block" />
            </p>
          </div>
          <div className={Styles.main_buttons + " w-full flex flex-col sm:flex-row justify-start items-center sm:justify-start gap-10 md:gap-1"}>
            <Link href="/products">مشاهده محصولات</Link>
            <Link href="/about-us"> درباره ما </Link>
          </div>
        </div>
        <div className="animation-image relative hidden  lg:flex justify-center items-center w-100 h-[500px]">
      <div className="coffee-plate "></div>
        <div className="cup">
          <div className="top-coffee">
            <div className="vapor-coffee">
              <span className="i1"></span>
              <span className="i5"></span>
              <span className="i2"></span>
              <span className="i6"></span>
              <span className="i13"></span>
              <span className="i11"></span>
              <span className="i9"></span>
              <span className="i4"></span>
              <span className="i7"></span>
              <span className="i10"></span>
              <span className="i8"></span>
            </div>
            <div className="circle-coffee">
              <div className="coffee-content"></div>
            </div>
            <div className="body-coffee relative">
              <div className="flex flex-col opacity-15 justify-start gap-2 items-center text-white text-2xl">
                <GiChessKing className="text-6xl" style={{color:"#C0AA83"}}/>
                <p className="font-black">Coffee</p>
              </div>
              </div>
          </div>
          <div className="coffee-cup-handle"></div>
         </div>
        </div>
      </div>
    </section>
  );
};

export default MainPage;
