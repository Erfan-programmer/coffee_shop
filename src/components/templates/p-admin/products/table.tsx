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
export default function DataTable({ products, title }: any) {
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
  const deleteProduct = async (id: string) => {
    const res = await fetch(`/api/product/${id}`, {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json",
      },
    });
    if (res.status === 200) {
      showSwal("محصول حذف شد", "success", "خوندم");
      router.refresh();
    }
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
              <th className="w-[8%]"></th>
              <th className="w-[8%]">نام محصول</th>
              <th className="w-[8%]">قیمت</th>
              <th className="w-[8%]">دسته بندی</th>
              <th className="w-[8%]">امتیاز</th>
              <th className="w-[8%]">عنوان</th>
              <th className="w-[8%]">توضیحات</th>
              <th className="w-[8%]">مشاهده</th>
              <th className="w-[8%]">ویرایش</th>
              <th className="w-[8%]">حذف</th>
            </tr>
          </thead>
          <tbody>
            {products?.map((product: any, index: number) => (
              <tr key={product?._id}>
                <td
                  className={
                    `w-32` + product.isAccept ? styles.accept : styles.reject
                  }
                >
                  <Image
                  width={100}
                  height={100}
                    src={`${product?.img?.imgUrl}`}
                    alt=""
                    className="w-100%"
                  />
                </td>
                <td>{product.title}</td>
                <td>{product?.price?.toLocaleString()}</td>
                <td>{product?.category?.title}</td>
                <td>
                  <div className="flex justify-center items-center">
                    {Array(Math.round(5))
                      .fill(0)
                      .map((score , index) => (
                        <AiFillStar key={index} />
                      ))}
                  </div>
                </td>
                <td className="text-center">
                  {product.shortDescription.length > 30
                    ? product.shortDescription.slice(0, 15) + "..."
                    : product.shortDescription}
                </td>
                <td
                  className="text-center"
                  dangerouslySetInnerHTML={{
                    __html:
                        product.longDescription.slice(0, 15)
                  }}
                ></td>
                <td>
                  <button
                    type="button"
                    className={styles.delete_btn}
                    onClick={() => showproductBody(product.longDescription)}
                  >
                    مشاهده
                  </button>
                </td>
                <td>
                  <Link href={`/p-admin/products/${product._id}`}>
                    <button type="button" className={styles.delete_btn}>
                      ویرایش
                    </button>
                  </Link>
                </td>
                <td>
                  <button
                    type="button"
                    className={styles.delete_btn}
                    onClick={() => deleteProduct(product._id)}
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
