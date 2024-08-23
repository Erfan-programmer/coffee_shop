import React from "react";
import CardSkill from "./CardSkill";
import Styles from "@/styles/Index/Skills.module.css";
const Skills = () => {
  return (
    <section className={`${Styles.skills_background} `}>
      <div className="max-w-screen-xxl mx-auto p-10 py-20 text-white">
        <h4 className="text-center text-md md:text-xl fs-5">دستاوردهای ما</h4>
        <div className="grid grid-cols-1 sm:grid-cols-2 justify-items-center gap-2  lg:grid-cols-3 xl:grid-cols-4 mt-10">
          <CardSkill
            title="فروشگاه آنلاین"
            count={3}
            description="تعداد شعبه های king 3 مورد در نقاط مختلف ایران است"
          />
          <CardSkill
            title="نوع محصولات"
            count={52}
            description="52 نوع محصول با عطر و طعم های مختلف در اختیار شما است."
          />
          <CardSkill
            title=" سال تجربه خدمت به شما"
            count={4}
            description="از سال 1394 خورشیدی مفتخر به خدمت رسانی به شما عزیزان را داریم"
          />
          <CardSkill
            title="مشتریان و کاربران ما"
            count={1221}
            description="هر روز به خونواده king اضاقه میشود شما هم عضوی از ما باشید"
          />
        </div>
      </div>
    </section>
  );
};

export default Skills;
