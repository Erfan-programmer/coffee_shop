"use client";
import React from "react";
import styles from "./table.module.css";
import { useRouter } from "next/navigation";
import Swal from "sweetalert2";
import { showSwal } from "@/utils/helpers";
import swal from "sweetalert";
import { IoMdStar } from "react-icons/io";
import { FaRegStar, FaStar } from "react-icons/fa";
export default function DataTable({ comments, title }: any) {
  const router = useRouter();

  const showCommentBody = (body: string) => {
    showSwal(body, "info", "خوندم");
  };

  const acceptCommentHandler = async (commentID: string | number) => {
    const res = await fetch(`/api/comments/accept/${commentID}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
    });
    if (res.status === 200) {
      router.refresh();
    } else if (res.status === 500) {
      showSwal("unknown internal server error !!", "error", "خوندم");
    }
  };

  const rejectCommentHandler = async (commentID: string) => {
    const res = await fetch(`/api/comments/reject/${commentID}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
    });
    if (res.status === 200) {
      router.refresh();
    } else if (res.status === 500) {
      showSwal("unknown internal server error !!", "error", "خوندم");
    }
  };

  const EditComment = (_id: string, body: string) => {
    Swal.fire({
      title: "ویرایش کامنت",
      input: "text",
      inputValue: body,
      inputAttributes: {
        autocapitalize: "off",
      },
      showCancelButton: true,
      confirmButtonText: "ویرایش",
      cancelButtonText: "لغو",
      showLoaderOnConfirm: true,
    }).then(async (result) => {
      if (result.isConfirmed) {
        const res = await fetch(`/api/comment/${_id}`, {
          method: "PUT",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({body:result.value}),
        });
        if (res.status === 200) {
          showSwal("کامنت ویرایش شد", "success", "فهمیدم");
          router.refresh();
        } else if (res.status === 419) {
          showSwal("کامنت مورد نظر معتبر نیس", "error", "تلاش دوباره");
        } else if (res.status === 500) {
          showSwal("مشکلی در سرور وحود دارد", "error", "تلاش دوباره");
        }
      }
    });
  };

  return (
    <div className="w-full">
      <div>
        <h1 className={styles.title}>
          <span>{title}</span>
        </h1>
      </div>
      <div className={`${styles.table_container} overflow-x-auto `}>
        <table className={styles.table}>
          <thead>
            <tr>
              <th>شناسه</th>
              <th>کاربر</th>
              <th>ایمیل</th>
              <th>امتیاز</th>
              <th>محصول</th>
              <th>تاریخ ثبت</th>
              <th>مشاهده</th>
              <th>ویرایش</th>
              <th>حذف</th>
              <th>تایید</th>
              <th>پاسخ</th>
              <th>بن</th>
            </tr>
          </thead>
          <tbody>
            {comments?.map((comment: any, index: number) => (
              <tr key={comment?._id}>
                <td
                  className={comment.isAccept ? styles.accept : styles.reject}
                >
                  {index + 1}
                </td>
                <td>{comment?.username}</td>
                <td>{comment?.email}</td>
                <td>
                  <div className="flex justify-center items-center">
                    {new Array(comment?.star).fill(0).map((item, index) => (
                      <FaStar key={index} className="text-[orange]" />
                    ))}

                    {new Array(5 - comment?.star).fill(0).map((item, index) => (
                      <FaRegStar key={index} className="text-[#aaa]"/>
                    ))}
                  </div>
                </td>
                <td>{comment?.productID?.title}</td>
                <td>{new Date(comment.date).toLocaleDateString("fa-IR")}</td>
                <td>
                  <button
                    type="button"
                    className={styles.edit_btn}
                    onClick={() => showCommentBody(comment.body)}
                  >
                    مشاهده
                  </button>
                </td>
                <td>
                  <button
                    type="button"
                    className={styles.edit_btn}
                    onClick={() => EditComment(comment?._id, comment?.body)}
                  >
                    ویرایش
                  </button>
                </td>
                <td>
                  <button type="button" className={styles.delete_btn}>
                    حذف
                  </button>
                </td>
                <td>
                  {comment.isAccept ? (
                    <button
                      type="button"
                      className={styles.delete_btn}
                      onClick={() => rejectCommentHandler(comment?._id)}
                    >
                      رد
                    </button>
                  ) : (
                    <button
                      type="button"
                      className={styles.delete_btn}
                      onClick={() => acceptCommentHandler(comment?._id)}
                    >
                      تایید
                    </button>
                  )}
                </td>
                <td>
                  <button type="button" className={styles.delete_btn}>
                    پاسخ
                  </button>
                </td>
                <td>
                  <button type="button" className={styles.delete_btn}>
                    بن
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
