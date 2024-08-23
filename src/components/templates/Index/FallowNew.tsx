import React from "react";
import { FaTwitter } from "react-icons/fa";
import { FaFacebookF } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaGooglePlusG } from "react-icons/fa";

function FallowNew() {
  return (
        <div className="subscribe-container h-auto p-4 py-10 bg-[#c0aa83]  flex flex-col md:flex-row gap-5 justify-center  items-center justify-center items-center mb-[50px] mt-[-205px]">
          <div className="subscribe_bio text-white faMedium w-full h-full">
            <p className="text-xl font-bold">مارا دنبال کنید</p>
            <p className="text-[#171717] font-bold text-md md:text-2xk">
              اطلاع رسانی های هفتگی
            </p>
          </div>
          <div className="subscribe_forms h-full w-full">
            <form className="flex justify-center items-center w-full">
              <input
                type="text"
                className="bg-white text-[#171717] p-4 flex-3 "
                placeholder="ایمیل خود را وارد کنید ..."
              />
              <button
                type="submit"
                className="bg-[#171717] text-white font-black flex-2 text-md p-4 "
              >
                دنبال کردن
              </button>
            </form>
          </div>
          <div className="socials h-full flex justify-center h-full w-full items-center gap-5 ">
            <div className="social btn w-12 h-12">
              <button className="w-full h-full bg-[#D9CCB5] flex justify-center items-center">
                <FaTwitter />
              </button>
            </div>
            <div className="social btn w-12 h-12">
              <button className="w-full h-full bg-[#D9CCB5] flex justify-center items-center">
                <FaFacebookF />
              </button>
            </div>
            <div className="social btn w-12 h-12">
              <button className="w-full h-full bg-[#D9CCB5] flex justify-center items-center">
                <FaInstagram />
              </button>
            </div>
            <div className="social btn w-12 h-12">
              <button className="w-full h-full bg-[#D9CCB5] flex justify-center items-center">
                <FaGooglePlusG />
              </button>
            </div>
          </div>
        </div>
  );
}

export default FallowNew;
