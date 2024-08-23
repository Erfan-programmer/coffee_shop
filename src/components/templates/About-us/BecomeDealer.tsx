import Image from "next/image";
import Link from "next/link";
import React from "react";
import imageSrc from "/public/images/reservation_img.png";
import Styles from "@/styles/BecomeDealer.module.css";
const BecomeDealer = () => {
  return (
    <section className="py-10 mb-[200px] pb-20 bg-white">
      <div className={Styles.about_background}>
        <div className="introduce_bio text-white max-w-screen-xl mx-auto">
          <div className="introduce_des  p-5 grid grid-cols-1 md:grid-cols-2  gap-1 justify-items-center content-center text-center">
            <div
              className={`introduce_Des_img text-[#212121] h-full w-full text-2xl font-black lg:flex flex-col justify-center items-center ${Styles.dealer_bg}`}
            >
              <p>بیشتر از </p>
              <div className="text-8xl  text-[#c0aa83]">400</div>
              <h3 className="text-4xl font-black w-80 text-wrap">مشتری به ما اعتماد کرده اند</h3>
            </div>
            <div
              data-aos="fade-up"
              className={`${Styles.introduce_des_bio} flex flex-col gap-y-4  justify-center item-center`}
            >
              <p className="mb-5 text-[#c0aa83]"> ما که هستیم ؟</p>
              <p className="text-[#212121]" style={{ fontSize: "2rem" }}>
                درباره مارکتینگ کافه
              </p>
              <div className="text-justify w-full md:w-full text-[#171717] max-w-96">
                <div className="w-full text-lg">
                  کافه کینگ برند کافه در ایران دو سالا است که پدیرای میهمانان
                  عزیز همشهری و مسافران شهر های دیگر و حتی مفتخر ب پدیرایی از
                  توزیست های کشور های دیگر بوده است، ما دارای کادر مجرب در بخش
                  های فروش و پدیرایی سالن هستیم تا بتوانیم لطفی به بهترین شکل
                  ممکن از مهمانان مان پدیرا باشیم .
                </div>
              </div>
              <div className="flex justify-center items-center gap-4 mt-10 ">
                <Link
                  href={""}
                  className={Styles.introduce_des_bio_button_dark + " p-4 "}
                >
                  فروشنده شو
                </Link>
                <Link href={""} className={Styles.introduce_des_bio_button + " p-4 "}>
                با ما تماس بگیر
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BecomeDealer;
