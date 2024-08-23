import BreadCrumb from "@/components/modules/BreadCrumb/BreadCrumb";
import Overlay_bottom from "@/components/modules/overlays/overlay_bottom";
import Overlay_top from "@/components/modules/overlays/overlay_top";
import TimeLine from "@/components/templates/service/TimeLine";
import React from "react";

const page = () => {
  return (
    <section className="relative my-[50px] w-auto bg-[#f1f1f1]">
      <BreadCrumb title={["خدمات"]} />
      <div className="max-w-screen-xl mx-auto my-[100px] h-auto ">
        <div className="w-full md:w-[70%] mx-auto">
          <TimeLine />
        </div>
      </div>
    </section>
  );
};

export default page;
