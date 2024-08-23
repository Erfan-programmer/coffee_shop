"use client";
import React from "react";
import styles from "./table.module.css";

import { useRouter } from "next/navigation";
// import { showSwal } from "@/utils/helpers";
import swal from "sweetalert";
import Image from "next/image";
import { FaStar } from "react-icons/fa";
import { AiFillStar } from "react-icons/ai";
import { showSwal } from "@/utils/helpers";
import Link from "next/link";
export default function DataTable({ reservations, title }: any) {
  const router = useRouter();

  const showproductBody = async (body: string) => {
    swal({
      title: ` عنوان :    
      ${body}
      `,
      icon: "info",
      buttons: ["فهمیدم"],
    });
  };
const deleteReserveHandler = async  (id:string) => {
  const res = await fetch(`/api/reservation/${id}`, {
    method:"DELETE",
    headers:{
      "Content-Type":"application/json"
    }
  })
  if(res.status === 200){
    showSwal("رزرو شما  حذف شد" , "success" , "خوندم")
    router.refresh()
  }
}
  return (
    <div>
      <div>
        <h1 className={styles.title}>
          <span>{title}</span>
        </h1>
      </div>
      <div className={`${styles.table_container} overflow-x-auto`}>
        <table className={styles.table}>
          <thead>
            <tr>
              <th>شناسه</th>
              <th>کاربر</th>
              <th>تلفن</th>
              <th>ساعت</th>
              <th>شماره میز</th>
              <th>حذف</th>
            </tr>
          </thead>
          <tbody>
            {reservations?.map((reservation: any, index: number) => (
              <tr key={reservation?._id}>
                <td
                  className={reservation.isAccept ? styles.accept : styles.reject}
                >
                  {index + 1}
                </td>
                <td>{reservation?.username}</td>
                <td>{reservation?.phone}</td>
                <td>{reservation?.time}</td>
                <td>{reservation?.tableID}</td>
                <td>
                  <button type="button" className={styles.delete_btn} onClick={()=> deleteReserveHandler(reservation?._id)}>
                    حذف
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
