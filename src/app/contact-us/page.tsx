import BreadCrumb from "@/components/modules/BreadCrumb/BreadCrumb";
import ContactFormSection from "@/components/templates/Contact-us/contactFormSection";
import React from "react";

const page = () => {
  return (
    <section className="relative mb-[100px]">
      <BreadCrumb title={["تماس با ما"]} />
      <ContactFormSection />
    </section>
  );
};

export default page;
