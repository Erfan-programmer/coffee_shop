import React from "react";
import Styles from "@/styles/Index/ReserveTime.module.css";
import Overlay_bottom from "@/components/modules/overlays/overlay_bottom";
import Overlay_top from "@/components/modules/overlays/overlay_top";
import Image from "next/image";
import imageSrc from "/public/images/reservation_img.png";
import Link from "next/link";
const ReserveTime = () => {
  return (
    <div className="relative">
      <Overlay_top />
      <div className="py-10 pb-20 bg-[#171717]">
        <div className={Styles.reserve_background}>
          <div className="introduce_bio text-white">
            <div className="introduce_des  p-5 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3  gap-12 items-center justify-center text-center">
              <div
                data-aos="fade-up"
                className={`${Styles.introduce_des_bio} flex flex-col gap-y-4 `}
              >
                <p className="mb-5"> ما که هستیم ؟</p>
                <h3>
                  درباره کافه <span>KING</span>
                </h3>
                <div className="text-justify w-full md:w-full">
                  <span className="w-full">
                    کافه کینگ برند کافه در ایران دو سالا است که پدیرای میهمانان
                    عزیز همشهری و مسافران شهر های دیگر و حتی مفتخر ب پدیرایی از
                    توزیست های کشور های دیگر بوده است، ما دارای کادر مجرب در بخش
                    های فروش و پدیرایی سالن هستیم تا بتوانیم لطفی به بهترین شکل
                    ممکن از مهمانان مان پدیرا باشیم .
                  </span>
                </div>
                <Link
                  href={""}
                  className={
                    Styles.introduce_des_bio_button + " mx-auto md:mr-0"
                  }
                >
                  رزرو میز
                </Link>
              </div>
              <div className="introduce_des_time text-center  text-white">
                <h3 className="mb-5 text-lg md:text-xl">ساعات کاری کافه</h3>
                <ul className="w-full flex flex-col gap-y-5">
                  <li>
                    <div
                      className={`${Styles.time_week_container} flex justify-between md:justify-center `}
                    >
                      <p className="day text-lg md:text-xl">شنبه : </p>
                      <p className="time text-lg md:text-xl">11:30 تا 21:00</p>
                    </div>
                  </li>
                  <li>
                    <div
                      className={`${Styles.time_week_container} flex justify-between md:justify-center `}
                    >
                      <p className="day text-lg md:text-xl">یک شنبه : </p>
                      <p className="time text-lg md:text-xl">11:30 تا 21:00</p>
                    </div>
                  </li>
                  <li>
                    <div
                      className={`${Styles.time_week_container} flex justify-between md:justify-center `}
                    >
                      <p className="day text-lg md:text-xl">دو : </p>
                      <p className="time text-lg md:text-xl">11:30 تا 21:00</p>
                    </div>
                  </li>
                  <li>
                    <div
                      className={`${Styles.time_week_container} flex justify-between md:justify-center `}
                    >
                      <p className="day text-lg md:text-xl">سه شنبه : </p>
                      <p className="time text-lg md:text-xl">11:30 تا 21:00</p>
                    </div>
                  </li>
                  <li>
                    <div
                      className={`${Styles.time_week_container} flex justify-between md:justify-center `}
                    >
                      <p className="day text-lg md:text-xl">چهار شنبه : </p>
                      <p className="time text-lg md:text-xl">11:30 تا 21:00</p>
                    </div>
                  </li>
                  <li>
                    <div
                      className={`${Styles.time_week_container} flex justify-between md:justify-center `}
                    >
                      <p className="day text-lg md:text-xl">پنجشنبه : </p>
                      <p className="time text-lg md:text-xl">11:30 تا 21:00</p>
                    </div>
                  </li>
                </ul>
              </div>
              <div
                data-aos="fade-upt"
                className="introduce_Des_img hidden lg:block"
              >
                <Image
                  src={imageSrc}
                  width={320}
                  height={100}
                  loading="lazy"
                  className="rounded-md"
                  alt="reserver-image"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ReserveTime;
