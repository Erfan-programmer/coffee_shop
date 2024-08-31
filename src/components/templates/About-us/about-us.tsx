"use client";
import Image from "next/image";
import React, { useState } from "react";
import imageSrc from "/public/images/reservation_img.png";
import Styles from "@/styles/aboutUs.module.css";
import Link from "next/link";
import AboutItemBox from "../AboutItemBox/AboutItemBox";
import { aboutItemDes } from "../AboutItemBox/AboutItemBox";
type AboutItems = aboutItemDes[];
const AboutUsSection = () => {
  const [serviceInfos, setServiceUInfos] = useState<AboutItems>(
    [
      {
        image: "/images/about-icon-1.png",
        description: "بهترین تنوع در ایران",
        sub_description: `اما اعضای حزب در حال تیراندازی هستند. من دبیرستان بودم، از ماشین متنفرم. تا بالش، زمین به کامیون های بزرگ نیاز دارد.`,
      },
      {
        image: "/images/about-icon-2.png",
        description: "بسیاری از نقاط فروش",
        sub_description: `اما اعضای حزب در حال تیراندازی هستند. من دبیرستان بودم، از ماشین متنفرم. تا بالش، زمین به کامیون های بزرگ نیاز دارد.`,
      },
      {
        image: "/images/about-icon-3.png",
        description: "باریستاهای حرفه ای",
        sub_description: `اما اعضای حزب در حال تیراندازی هستند. من دبیرستان بودم، از ماشین متنفرم. تا بالش، زمین به کامیون های بزرگ نیاز دارد.`,
      },
      {
        image: "/images/about-icon-4.png",
        description: "تحویل سریع 24 ساعته",
        sub_description: `اما اعضای حزب در حال تیراندازی هستند. من دبیرستان بودم، از ماشین متنفرم. تا بالش، زمین به کامیون های بزرگ نیاز دارد.`,
      },
    ] || []
  );
  return (
    <section className="py-10 pb-20 bg-white">
      <div className={Styles.about_background}>
        <div className="introduce_bio text-white max-w-screen-xl mx-auto">
          <div className="introduce_des  p-5 grid grid-cols-1 md:grid-cols-2  gap-1 justify-items-center content-center text-center">
            <div
              data-aos="fade-up"
              className={`${Styles.introduce_des_bio} flex flex-col gap-y-4  justify-center item-center`}
            >
              <p className="mb-5 text-[#c0aa83] opacity-100"> ما که هستیم ؟</p>
              <p className="text-[#212121] opacity-100" style={{ fontSize: "2rem" }}>
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
              <div className="flex justify-center items-center gap-4">
                <Link
                  href={""}
                  className={Styles.introduce_des_bio_button_dark}
                >
                  مشاهده محصولات
                </Link>
                <Link href={""} className={Styles.introduce_des_bio_button}>
                  مشاهده منو
                </Link>
              </div>
            </div>
            <div
              data-aos="fade-up"
              className="introduce_Des_img hidden lg:block"
            >
              <Image
                src={imageSrc}
                width={420}
                height={200}
                className="rounded-md"
                alt="reserver-image"
                loading="lazy"
              />
            </div>
          </div>

          <div className="service_introduce grid grid-cols-1 justify-items-center content-center  md:grid-cols-2 lg:grid-cols-4 mt-[150px]">
            {serviceInfos?.map((serviceInfo: any , index) => (
              <AboutItemBox {...serviceInfo} key={index}/>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutUsSection;
