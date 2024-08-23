"use client"
import React from "react";
import styles from "./table.module.css";
import { showSwal } from "@/utils/helpers";
import Swal from "sweetalert2";
import { useRouter } from "next/navigation";

function Table({ categories }: any) {
  const route = useRouter()
  const deleteCategory =  (id: String) => {
    swal({
      title:"آیا از حذف اطمینان دارید؟",
      icon:"info",
      buttons:["لغو" , "بله"]
    }).then( async (result)=>{
      if(result){
        const res = await fetch(`/api/category/${id}`, {
          method: "DELETE",
          headers: {
            "Content-Type": "application/json",
          },
        });
        if (res.status === 200) {
          showSwal("دسته بندی با موفقیت حذف شد", "success", "فهمیدم");
          route.refresh()
    
        } else if (res.status === 500) {
          showSwal("مشکل فنی در سیستم یافت شد", "success", "تلاش دوباره");
        }

      }
    })
  };
  const editCategory = async (id: String, inputFields: any) => {
    Swal.fire({
      title: "ویرایش کامنت",
      html: `
      <input id="swal-input1" value=${inputFields.title} class="swal2-input">
      <input id="swal-input2" value=${inputFields.label} class="swal2-input">
    `,

      inputAttributes: {
        autocapitalize: "off",
      },
  preConfirm: () => {
    const firstValue =  document.getElementById("swal-input1") as HTMLInputElement
    const secondValue = document.getElementById("swal-input2") as HTMLInputElement
    return [
      firstValue.value,
      secondValue.value
    ]
  },
      showCancelButton: true,
      confirmButtonText: "ویرایش",
      cancelButtonText: "لغو",
      showLoaderOnConfirm: true,
    }).then(async (result) => {
      if (result.isConfirmed) {
        const res = await fetch(`/api/category/${id}`, {
          method: "PUT",
          headers: {
            "Content-Type": "application/json",
          },
          body:JSON.stringify({title:result.value[0] , label:result.value[1]})
        });
        if (res.status === 200) {
          showSwal("دسته بندی با موفقیت ویرایش شد", "success", "فهمیدم");
          route.refresh()
        } else if (res.status === 500) {
          showSwal("مشکل فنی در سیستم یافت شد", "error", "تلاش دوباره");
        }
      }
    });
  };
  return (
    <div className="overflow-x-auto p-5">
      <table className={styles.table}>
        <thead>
          <tr>
            <th>#</th>
            <th>عنوان فهرست</th>
            <th>برچسب فهرست</th>
            <th>حذف</th>
            <th>ویرایش</th>
          </tr>
        </thead>
        <tbody>
          {categories?.map((category: any, index: number) => (
            <tr key={category?._id}>
              <td>{index + 1}</td>
              <td>{category.title}</td>
              <td>{category.label}</td>
              <td>
                <button
                  type="button"
                  className={styles.delete_btn}
                  onClick={() => deleteCategory(category?._id)}
                >
                  حذف
                </button>
              </td>
              <td>
                <button
                  type="button"
                  className={styles.delete_btn}
                  onClick={() => editCategory(category?._id, category)}
                >
                  ویرایش
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default Table;
