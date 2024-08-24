import BreadCrumb from "@/components/modules/BreadCrumb/BreadCrumb";
import AboutUsSection from "@/components/templates/About-us/about-us";
import Skills from "@/components/modules/Skills";
import React from "react";
import BecomeDealer from "@/components/templates/About-us/BecomeDealer";

function AboutUs() {

  return (
    <section className="relative">
      <BreadCrumb title={["درباره ما"]}/>
      <AboutUsSection />
      {/* <></> */}
      <Skills />
      <BecomeDealer />
    </section>
  );
}

export default AboutUs;
