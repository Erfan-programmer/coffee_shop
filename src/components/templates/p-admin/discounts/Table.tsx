"use client";
import React from "react";
import styles from "./table.module.css";
import { showSwal } from "@/utils/helpers";
import { useRouter } from "next/navigation";

function Table({ discounts }: any) {
  const router = useRouter();
  const deleteDiscountHandler = async (id: string) => {
    const res = await fetch(`/api/discounts/${id}`, {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json",
      },
    });
    if (res.status === 200) {
      showSwal("کد تخفیف با موفقیت حذف شد", "success", "حله"), router.refresh();
    } else if (res.status == 422) {
      showSwal("کد تخفیف نامعتبر است", "error", "تلاش دوباره");
    } else if (res.status === 500) {
      showSwal("مشکل فنی در سیسان وجود دارد", "error", "تلاش دوباره");
    }
  };
  return (
    <div className="w-full">
      <div className={`${styles.table_container} overflow-x-auto`}>
        <table className={`${styles.table} p-10`}>
          <thead>
            <tr>
              <th>شناسه</th>
              <th>کد</th>
              <th>برای محصول</th>
              <th>درصد</th>
              <th>حداکثر استفاده</th>
              <th>دفعات استفاده شده</th>
              <th>حذف</th>
            </tr>
          </thead>
          <tbody>
            {discounts?.map((discount: any, index: number) => (
              <tr key={discount?._id}>
                <td>{index + 1}</td>
                <td>{discount?.code}</td>
                <td>{discount?.productID?.title}</td>
                <td>{discount?.percentage}</td>
                <td>{discount?.maxUse}</td>
                <td>{discount?.uses}</td>
                <td>
                  <button
                    type="button"
                    className={styles.delete_btn}
                    onClick={() => deleteDiscountHandler(discount?._id)}
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

export default Table;
