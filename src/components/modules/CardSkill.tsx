"use client";
import React, { useEffect, useState } from "react";
import CountUp from 'react-countup';


type CardSkillProp = {
  count: number;
  title: string;
  description: string;
};
const CardSkill = ({ count, title, description }: CardSkillProp) => {
  let countNum = 0
  return (
    <div data-aos="fade-up" className="border border-8 border-white max-w-80  p-3 py-10 font-black text-center flex flex-col gap-6">
      <div className="count text-[#C0AA83] text-5xl md:text-7xl">
        {countNum}
        
        <CountUp start={0} end={count} decimal=","preserveValue={false}  redraw={false}/>
        </div>
      <div className="title text-center">
        <h4 className="text-3xl md:text-5xl">{title}</h4>
      </div>
      <div className="description">
        <span className="text-justify font-normal">{description}</span>
      </div>
    </div>
  );
};

export default CardSkill;
