import React from "react";
import Styles from "@/styles/Index/GetDiscount.module.css";
import Image from "next/image";
import image from "../../../../public/images/coffe_back.png";
import imageOneCoffee from "../../../../public/images/barg-coffee.png";
import Link from "next/link";
const GetDiscounts = () => {
  return (
    <section className={`relative ${Styles.getDiscount_bg}`}>
      <div className="max-w-screen-xl mx-auto">
        <div className="discount-container flex justify-center items-center ">
          <div className="discount-inner grid grid-cols-1 lg:grid-cols-2  relative w-full h-full bg-[#242424] my-10">
            <div className="discount-inner_image relative hidden lg:block">
              <Image
                layout="responsive"
                loading="lazy"
                src={image}
                alt=""
                width={400}
                height={400}
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
              />
            </div>
            <div className="discount-inner_des w-full text-white flex flex-col justify-center items-center gap-10">
              <p className="text-md">تخفیفای ویژه</p>
              <h3 className="text-2xl md:text-4xl font-black text-[#c0aa83]">
                کد تخفیف خود را دریافت کنید
              </h3>
              <div className="discount-cart-avatar flex flex-col items-center justify-center relative">
                <Image
                  layout="responsive"
                  src={imageOneCoffee}
                  width={300}
                  height={300}
                  alt="عکس دانه قهوه"
                  className="opacity-60"
                  loading="lazy"
                />
                <span className="w-[130px] opacity-20 right-20 shadowCustom h-3 bg-black absolute top-[80%]"></span>
              </div>
              <div className="discount-inner_desc-bio max-w-[90%] text-justify">
                <p>
                  کینگ کافه ماهانه ضد عدد کد تخقیق را برای مشتریانش بر حسب قرعه
                  جهت سفارش پودر های کافه و ابزارآلات آن هدیه میدهد تا باعث
                  افزایش صمیمتو بهره مندی شما ازین خونواده بزرگ شود، برای شرکت
                  در قرعه کشی کافیه در سایت ثبت نام کرده باشید،
                </p>
              </div>
              <div className="discount-inner_des-btn">
                <Link href={""} className={Styles.introduce_des_bio_button}>
                  دریافت کد تخفیف
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default GetDiscounts;
