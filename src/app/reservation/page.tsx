import BreadCrumb from "@/components/modules/BreadCrumb/BreadCrumb";
import React from "react";
import Styles from "@/styles/reservation/reservation.module.css";
import ReservationBox from "@/components/templates/ReservationBox/ReservationBox";
const Reservation = () => {
  return (
    <section className={`relative`}>
      <BreadCrumb title={["رزرو میز"]} />

      <div className={Styles.reservation_background}>
        <div className="max-w-screen-xl mx-auto flex flex-col justify-center items-center relative items-center h-full">
          <ReservationBox />
        </div>
      </div>
    </section>
  );
};

export default Reservation;
