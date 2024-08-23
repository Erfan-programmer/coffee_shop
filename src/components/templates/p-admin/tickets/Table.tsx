"use client";
import React from "react";
import styles from "./table.module.css";
import { useRouter } from "next/navigation";
import { showSwal } from "@/utils/helpers";
import swal from "sweetalert";
export default function DataTable({ tickets, title }: any) {
  const router = useRouter();

  const showTicketBody = (body: string) => {
    showSwal(body, "info", "بستن");
  };

  const answerToTicket = async (ticket: any) => {
    swal({
      title: "لطفا پاسخ مورد نظر را وارد کنید:",
      content: "input" as any,
      buttons: ["ثبت پاسخ"],
    }).then(async (answerText) => {
      if (answerText) {
        const answer = {
          ...ticket,
          body: answerText,
          ticketID: ticket?._id,
        };

        const res = await fetch("/api/tickets/answer", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(answer),
        });

        if (res.status === 201) {
          await fetch(`/api/tickets/answer/hasAnswer/${ticket._id}` , {
            method:"PUT",
            headers:{
              "Content-Type" : "application/json"
            }
          })
          swal({
            title: "پاسخ مورد نظر ثبت شد",
            icon: "success",
            buttons: ["فهمیدم"],
          });
        }
      }
    });
  };

  const closeTicketHandler = (id: string) => {
    swal({
      title: "آیا از بستن تیکت اطمینان دارید ؟",
      icon: "info",
      buttons: ["خیر ", "بله"],
    }).then(async (result: any) => {
      if (result) {
        const res = await fetch(`/api/tickets/answer/${id}`, {
          method: "PUT",
          headers: {
            "Content-Type": "application/json",
          },
        });
        if (res.status === 200) {
          showSwal("تیکت بسته شد", "success", "حله");
          router.refresh()
        } else if (res.status === 500) {
          showSwal("خطای فنی در سرور یافت شد", "error", "تلاش دوباره");
        }
      }
    });
  };

  const deleteTicketHandler = (id: string) => {
    swal({
      title: "آیا از حذف تیکت اطمینان دارید ؟",
      icon: "info",
      buttons: ["خیر ", "بله"],
    }).then(async (result: any) => {
      if (result) {
        const res = await fetch(`/api/tickets/answer/${id}`, {
          method: "DELETE",
          headers: {
            "Content-Type": "application/json",
          },
        });
        if (res.status === 200) {
          router.refresh()
          showSwal("تیکت بسته شد", "success", "حله");
        } else if (res.status === 500) {
          showSwal("خطای فنی در سرور یافت شد", "error", "تلاش دوباره");
        }
      }
    });
  };
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
              <th>عنوان</th>
              <th>دپارتمان</th>
              <th>مشاهده</th>
              <th>پاسخ</th>
              <th>بستن</th>
              <th>حذف</th>
            </tr>
          </thead>
          <tbody>
            {tickets?.map((ticket: any, index: number) => (
              <tr key={ticket?._id}>
                <td className={ticket.hasAnswer ? "bg-[#dc3545]" : "bg-[#28a745]"}>{index + 1}</td>
                <td>{ticket.user.name}</td>
                <td>{ticket.title}</td>
                <td>{ticket.department.title}</td>
                <td>
                  <button
                    type="button"
                    className={styles.edit_btn}
                    onClick={() => showTicketBody(ticket.body)}
                  >
                    مشاهده
                  </button>
                </td>
                <td>
                  <button
                    type="button"
                    className={`${styles.delete_btn} ${ticket?.hasAnswer ? "opacity-50 bg-[#aaa] cursor-auto" : "opacity-100"}`}
                    onClick={() => answerToTicket(ticket)}
                    disabled={ticket?.hasAnswer}
                  >
                    پاسخ
                  </button>
                </td>
                <td>
                  <button
                    type="button"
                    onClick={() => closeTicketHandler(ticket?._id)}
                    className={`${styles.delete_btn} ${ticket?.isFinished ? "opacity-50 bg-[#aaa] cursor-auto" : "opacity-100"}`}
                  >
                    بستن
                  </button>
                </td>
                <td>
                  <button
                    type="button"
                    className={styles.delete_btn}
                    onClick={() => deleteTicketHandler(ticket?._id)}
                  >
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
