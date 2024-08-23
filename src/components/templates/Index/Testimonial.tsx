"use client";
import { Swiper, SwiperSlide } from "swiper/react";
import Styles from "@/styles/Index/Testimonials.module.css";
import React from "react";
import { FaQuoteRight } from "react-icons/fa";
import { Navigation , Autoplay } from "swiper/modules";
import "swiper/css/navigation";
import "swiper/css";

const Testimonial = () => {
  return (
    <section className={`relative  ${Styles.bGTestimonial} py-8`}>
      <h4 className="text-white text-center font-black text-3xl">
        نظرات مشتریان
      </h4>
      <div className="max-w-screen-xl mx-auto flex h-11/12 mt-8 flex items-center" data-aos="fade-up">
        <Swiper
          navigation={true}
          modules={[Navigation , Autoplay]}
          loop={true}
          autoplay={{
            delay: 2500,
            pauseOnMouseEnter:true,
            disableOnInteraction: false,
          }}
          className="mySwiper w-full  h-[100%]"
        >
          <SwiperSlide>
            <div className="w-10/12 h-[80%] cursor-grab flex flex-col justify-center py-5 items-center gap-16 border border-8 border-[#c0aa83] text-center text-white">
              <div className="bio-part">
                <p className="text-lg">person mae</p>
                <span className="text-[#ddd]">role</span>
              </div>
              <div className="max-w-[80%] min-h-32 max-h-44 text-justify overflow-auto customScroll">
                <p className="text-2xl w-full pr-4">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Quasi
                  explicabo iusto cum totam fugiat architecto illum quisquam
                  deserunt quod! Ipsa voluptas non at provident rerum harum
                  tenetur suscipit, optio vel. Lorem, ipsum dolor sit amet
                  consectetur adipisicing elit. Odit necessitatibus aliquid
                  molestiae eos dolorem molestias repellat officia quam!
                  Cupiditate quibusdam velit amet praesentium ratione saepe,
                  magni a nam animi quos. Quas molestiae dolore voluptas modi
                  aspernatur non cumque exercitationem pariatur veritatis,
                  deserunt laboriosam corrupti nulla sunt omnis quos labore
                  repellat sapiente itaque iusto ipsam quasi officiis. Eos quam
                  est assumenda.
                </p>
              </div>
              {/* Qoute part */}
              <div className="flex justify-center items-center text-6xl">
                <FaQuoteRight />
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="w-10/12 h-[80%] cursor-grab flex flex-col justify-center py-5 items-center gap-16 border border-8 border-[#c0aa83] text-center text-white">
              <div className="bio-part">
                <p className="text-lg">person mae</p>
                <span className="text-[#ddd]">role</span>
              </div>
              <div className="max-w-[80%] min-h-32 max-h-44 text-justify overflow-auto customScroll">
                <p className="text-2xl w-full pr-4">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Quasi
                  explicabo iusto cum totam fugiat architecto illum quisquam
                  deserunt quod! Ipsa voluptas non at provident rerum harum
                  tenetur suscipit, optio vel. Lorem, ipsum dolor sit amet
                  consectetur adipisicing elit. Odit necessitatibus aliquid
                  molestiae eos dolorem molestias repellat officia quam!
                  Cupiditate quibusdam velit amet praesentium ratione saepe,
                  magni a nam animi quos. Quas molestiae dolore voluptas modi
                  aspernatur non cumque exercitationem pariatur veritatis,
                  deserunt laboriosam corrupti nulla sunt omnis quos labore
                  repellat sapiente itaque iusto ipsam quasi officiis. Eos quam
                  est assumenda.
                </p>
              </div>
              {/* Qoute part */}
              <div className="flex justify-center items-center text-6xl">
                <FaQuoteRight />
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="w-10/12 h-[80%] cursor-grab flex flex-col justify-center py-5 items-center gap-16 border border-8 border-[#c0aa83] text-center text-white">
              <div className="bio-part">
                <p className="text-lg">person mae</p>
                <span className="text-[#ddd]">role</span>
              </div>
              <div className="max-w-[80%] min-h-32 max-h-44 text-justify overflow-auto customScroll">
                <p className="text-2xl w-full pr-4">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Quasi
                  explicabo iusto cum totam fugiat architecto illum quisquam
                  deserunt quod! Ipsa voluptas non at provident rerum harum
                  tenetur suscipit, optio vel. Lorem, ipsum dolor sit amet
                  consectetur adipisicing elit. Odit necessitatibus aliquid
                  molestiae eos dolorem molestias repellat officia quam!
                  Cupiditate quibusdam velit amet praesentium ratione saepe,
                  magni a nam animi quos. Quas molestiae dolore voluptas modi
                  aspernatur non cumque exercitationem pariatur veritatis,
                  deserunt laboriosam corrupti nulla sunt omnis quos labore
                  repellat sapiente itaque iusto ipsam quasi officiis. Eos quam
                  est assumenda.
                </p>
              </div>
              {/* Qoute part */}
              <div className="flex justify-center items-center text-6xl">
                <FaQuoteRight />
              </div>
            </div>
          </SwiperSlide>
        </Swiper>
      </div>
    </section>
  );
};

export default Testimonial;
