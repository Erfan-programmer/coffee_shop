import React from "react";
import Styles from "@/styles/footer.module.css";
import Image from "next/image";
import CustomizedButtons from "../Button/Button";
import { FaAngleLeft } from "react-icons/fa";
import { FaMapMarkerAlt } from "react-icons/fa";
import { FaPhoneAlt } from "react-icons/fa";
import { FaSkype } from "react-icons/fa";
import { FaEnvelope } from "react-icons/fa";
import FallowNew from "@/components/templates/Index/FallowNew";
import logo_light from "/public/images/1724394845877logo_white-7.png"

const Footer = () => {
  return (
    <footer>
      <section className={`relative ${Styles.footer_bg} pt-10`}>
        <div className="max-w-screen-xl mx-auto mt-[100px]">
          <FallowNew />
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 justify-items-center content-start  gap-10 md:gap-5">
            <div className="footer-description w-full flex flex-col items-center justify-center gap-10 flex-1">
              <div className="logo">
                <Image
                  loading="lazy"
                  src={logo_light}
                  layout="responsive"
                  width={50}
                  height={50}
                  alt=""
                />
                <div className="footer-description-bio max-w-11/12 text-justify">
                  <span className="text-[#d1d1d1] text-md ">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Est
                    nulla natus suscipit, nostrum sequi nobis quae accusantium
                    eum vero sit? Lorem, ipsum dolor sit amet consectetur
                    adipisicing elit. Esse, et? Lorem ipsum dolor sit amet
                    consectetur adipisicing elit. Dicta, eos.
                  </span>
                </div>
                <div className="footer-description-btn">
                  <CustomizedButtons title="اقدام کن" />
                </div>
              </div>
            </div>
            <div className="explore text-white w-full grid grid-cols-1 justify-items-center content-start gap-10  h-full flex-1">
              <h2 className="font-black text-[#c0aa83] text-lg md:text-2xl">
                خواندنی ها
              </h2>

              <ul className="grid grid-cols-2 justify-items-start content-center gap-5">
                <li className="flex  justify-start items-center cursor-pointer hover:text-[#c0aa83] transition ease-in-out delay-50 text-right">
                  <FaAngleLeft className="text-[#c0aa83]" />
                  صفحه اصلی
                </li>
                <li className="flex justify-start items-center cursor-pointer hover:text-[#c0aa83] transition ease-in-out delay-50 text-right">
                  <FaAngleLeft className="text-[#c0aa83]" /> بلاگ
                </li>
                <li className="flex justify-start items-center cursor-pointer hover:text-[#c0aa83] transition ease-in-out delay-50 text-right">
                  <FaAngleLeft className="text-[#c0aa83]" /> تماس با ما
                </li>
                <li className="flex justify-start items-center cursor-pointer hover:text-[#c0aa83] transition ease-in-out delay-50 text-right">
                  <FaAngleLeft className="text-[#c0aa83]" /> ارتباط با ما
                </li>
                <li className="flex justify-start items-center cursor-pointer hover:text-[#c0aa83] transition ease-in-out delay-50 text-right">
                  <FaAngleLeft className="text-[#c0aa83]" /> گالری
                </li>
                <li className="flex justify-start items-center cursor-pointer hover:text-[#c0aa83] transition ease-in-out delay-50 text-right">
                  <FaAngleLeft className="text-[#c0aa83]" /> محصولات
                </li>
              </ul>
            </div>
            <div className="explore text-white w-full grid grid-cols-1 justify-items-center content-start gap-10 flex-1">
              <h2 className="font-black text-[#c0aa83] text-lg md:text-2xl">
                ارتباط با ما
              </h2>

              <ul className="grid grid-cols-1 justify-items-start content-start gap-5">
                <li className="flex justify-start items-center gap-4 text-right">
                  <FaMapMarkerAlt className="text-[#c0aa83]" />
                  نشانی ادربیل خیابان عطایی
                </li>
                <li className="flex  justify-start items-center gap-4 text-right">
                  <FaPhoneAlt className="text-[#c0aa83]" />
                  09145676544
                </li>
                <li className="flex justify-start items-center gap-4 text-right">
                  <FaEnvelope className="text-[#c0aa83]" /> erfan@gmail.com
                </li>
                <li className="flex justify-start items-center gap-4 text-right">
                  <FaSkype className="text-[#c0aa83]" />
                  myKingCoffee
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div className="copy-right bg-black p-4 text-white flex justify-center items-center mt-10">
          <p>تمامی حقوق این سایت مربوط به کافه کینگ میباشد &#169;</p>
        </div>
      </section>
    </footer>
  );
};

export default Footer;
