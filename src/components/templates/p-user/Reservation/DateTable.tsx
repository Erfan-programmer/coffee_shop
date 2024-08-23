"use client";
import React from "react";
import styles from "@/styles/p-user/dataTable.module.css";
import { FaRegStar, FaStar } from "react-icons/fa";
import swal from "sweetalert";
import { showSwal } from "@/utils/helpers";

export default function DataTable({ reservations, title }: any) {
  const deleteReservation = async  (id: string) => {
   const res = await fetch(`/api/reservation/${id}` , {
    method:"DELETE",
    headers:{
      "Content-Type":"application/json"
    }
   })
   if(res.status === 200){
    showSwal("رزرو با موفقیت لغو شد" , "success" , "باشه")
   }
   else if(res.status === 500){
    showSwal("مشکل فنی در سایت وجود دارد دوباره تلاش کنید" , "error" , "تلاش مجدد")
   }
  };

  return (
    <div>
      <div>
        <h1 className={styles.title}>
          <span>{title}</span>
        </h1>
      </div>
      <div className={styles.table_container}>
        <table className={styles.table}>
          <thead>
            <tr>
              <th>شناسه</th>
              <th>شماره میز</th>
              <th>ساعت</th>
              <th>شماره همراه</th>
              <th>حذف</th>
            </tr>
          </thead>
          <tbody>
            {reservations?.map((reservation: any, index: number) => (
              <tr key={index} className="my-5">
                <td>{index + 1}</td>
                <td className="bg-[#c0aa83] text-white">{reservation?.tableID}</td>
                <td>{reservation?.time}</td>
                <td>{reservation?.phone}</td>
                <td>
                    <button className={styles.delete_btn} onClick={()=> deleteReservation(reservation?._id)}>حذف</button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
