"use client";
import React, { useState } from "react";
import {
  FaFacebookF,
  FaGooglePlusG,
  FaInstagram,
  FaMapMarkerAlt,
  FaTwitter,
} from "react-icons/fa";
import { FaPhoneAlt } from "react-icons/fa";
import { FaSkype } from "react-icons/fa";
import { TfiYoutube } from "react-icons/tfi";
import Styles from "@/styles/ContactUs/contact_us.module.css";
import Input from "@/components/modules/Input/Input";
import TextArea from "@/components/modules/TextArea/TextArea";
import MapLocation from "@/components/modules/MapLocation/mapLocation";
import ToastComponent, { ToastSuccess } from "@/components/modules/Toastify";
const ContactFormSection = () => {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [post, setPost] = useState("");

  const addCustomary = async (event: any) => {
    event.preventDefault();
    const res = await fetch("/api/contact_us", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ username, email, post }),
    });

    if (res.status === 201) {
      setUsername("");
      setEmail("");
      setPost("");
      ToastSuccess("اطلاعات شما با موفقیت ثبت شد", "success");
    } else if (res.status === 422) {
      ToastSuccess("اطلاعات ورودی نافص است !!", "error");
    } else if (res.status === 500) {
      ToastSuccess("مشکل فنی بوحود امده است", "error");
    }
  };

  return (
    <section
      className={`relative bg-white py-10 flex justify-center items-center ${Styles.section_forms}`}
    >
      <ToastComponent />
      <div className="max-w-screen-xl mx-auto h-full">
        <div className="w-full h-[100%] grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 justify-items-center content-center">
          <div className="contact-us-bio w-full  flex flex-col p-4 justify-center items-center gap-10">
            <div className="contact-us-bio_header w-full">
              <p className="text-4xl font-black text-[#212121] mb-4">
                دفتر مرکزی
              </p>
              <div className="w-[90%] mt-10">
                <span className="text-[#212121]">
                  Lorem ipsum, dolor sit amet consectetur adipisicing elit. Esse
                  reprehenderit dolorum sequi pariatur perspiciatis ipsam ad
                  exercitationem, et harum incidunt nemo officia ipsa voluptatem
                  velit cum magni laborum dolorem accusantium.
                </span>
              </div>
            </div>
            <div className="contact-us-bio-body w-full mt-10">
              <div className="flex justify-start items-center gap-10">
                <ul>
                  <li className="flex justify-start items-center gap-4">
                    <FaPhoneAlt className="text-[#c0aa83]" />
                    <p className="font-md text-md text-[#aaa]">09143456789</p>
                  </li>
                  <li className="flex justify-start items-center gap-4">
                    <FaSkype className="text-[#c0aa83]" />
                    <p className="font-md text-md text-[#aaa]">myKingCoffee</p>
                  </li>
                  <li className="flex justify-start items-center gap-4">
                    <FaMapMarkerAlt className="text-[#c0aa83]" />
                    <p className="font-md text-md text-[#aaa]">
                      {" "}
                      نشانی ادربیل خیابان عطایی
                    </p>
                  </li>
                </ul>
              </div>
            </div>
            <div className="contact-us-bio-footer w-full">
              <h4>راه های ارتباطی : </h4>
              <div className="socials h-full flex justify-start h-full w-full items-center gap-5 ">
                <div className="social btn w-12 h-12">
                  <button className="w-full h-full rounded-full bg-[#1CB7EB] flex justify-center text-white items-center">
                    <FaTwitter />
                  </button>
                </div>
                <div className="social btn w-12 h-12">
                  <button className="w-full h-full rounded-full bg-[#4E71A8] flex justify-center text-white items-center">
                    <FaFacebookF />
                  </button>
                </div>
                <div className="social btn w-12 h-12">
                  <button className="w-full h-full rounded-full bg-[#444444] flex justify-center text-white items-center">
                    <FaInstagram />
                  </button>
                </div>
                <div className="social btn w-12 h-12">
                  <button className="w-full h-full rounded-full bg-[#CA3737] flex justify-center text-white items-center">
                    <TfiYoutube />
                  </button>
                </div>
              </div>
            </div>
          </div>
          <div className={`opening-hours w-full ${Styles.open_bg} p-8`}>
            <div className="border border-8 border-white h-full h-full p-7">
              <div className="introduce_des_time text-center  text-white">
                <h3 className="mb-5 text-lg md:text-xl mb-4">
                  ساعات کاری کافه
                </h3>
                <ul className="w-full flex flex-col justify-center items-start gap-y-5">
                  <li>
                    <div
                      className={`${Styles.time_week_container} flex justify-between md:justify-center `}
                    >
                      <p className="day text-lg md:text-xl">شنبه : </p>
                      <p className="time text-lg md:text-xl">11:30 -- 21:00</p>
                    </div>
                  </li>
                  <li>
                    <div
                      className={`${Styles.time_week_container} flex justify-between md:justify-center `}
                    >
                      <p className="day text-lg md:text-xl">یک شنبه : </p>
                      <p className="time text-lg md:text-xl">11:30 -- 21:00</p>
                    </div>
                  </li>
                  <li>
                    <div
                      className={`${Styles.time_week_container} flex justify-between md:justify-center `}
                    >
                      <p className="day text-lg md:text-xl">دو : </p>
                      <p className="time text-lg md:text-xl">11:30 -- 21:00</p>
                    </div>
                  </li>
                  <li>
                    <div
                      className={`${Styles.time_week_container} flex justify-between md:justify-center `}
                    >
                      <p className="day text-lg md:text-xl">سه شنبه : </p>
                      <p className="time text-lg md:text-xl">11:30 -- 21:00</p>
                    </div>
                  </li>
                  <li>
                    <div
                      className={`${Styles.time_week_container} flex justify-between md:justify-center `}
                    >
                      <p className="day text-lg md:text-xl">چهار شنبه : </p>
                      <p className="time text-lg md:text-xl">11:30 -- 21:00</p>
                    </div>
                  </li>
                  <li>
                    <div
                      className={`${Styles.time_week_container} flex justify-between md:justify-center `}
                    >
                      <p className="day text-lg md:text-xl">پنجشنبه : </p>
                      <p className="time text-lg md:text-xl">11:30 -- 21:00</p>
                    </div>
                  </li>
                </ul>
              </div>
            </div>
          </div>
          <div className="form-box h-full w-full bg-[#F6F6F6] p-4">
            <form className="flex flex-col text-[#212121] justify-center items-center h-full gap-3">
              <div className="w-full flex flex-col font-black text-lg justify-center items-center gap-4">
                <p>نام نام خونوادگی : </p>
                <Input value={username} setValue={setUsername} />
              </div>
              <div className="w-full flex flex-col font-black text-lg justify-center items-center gap-4">
                <p>ایمیل : </p>
                <Input value={email} setValue={setEmail} />
              </div>
              <div className="w-full flex flex-col font-black text-lg justify-center items-center gap-4">
                <p>درخواست :</p>
                <TextArea value={post} setValue={setPost} />
              </div>
              <div className="submit-button my-5">
                <button
                  type="submit"
                  className={Styles.introduce_des_bio_button}
                  onClick={addCustomary}
                >
                  ارسال
                </button>
              </div>
            </form>
          </div>
        </div>
        <div className="w-full my-[100px]">
          <MapLocation lat={38.2337177} long={48.3223617} />
        </div>
      </div>
    </section>
  );
};

export default ContactFormSection;
