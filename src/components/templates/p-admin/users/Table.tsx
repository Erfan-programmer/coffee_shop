"use client"
import React from "react";
import swal from "sweetalert";
import styles from "./table.module.css";
import { useRouter } from "next/navigation";
export default function DataTable({ users, title }:any) {
  const router = useRouter()
 const changeRoleHandler  = async (id:string) =>{
  const res = await fetch("/api/user/role" , {
    method:"PUT",
    headers:{
      "Content-Type":"application/json"
    },
    body:JSON.stringify({_id:id})
  })
  if(res.status === 200){
    swal({
      title:" نقش کاربر با موفقیت  تغییر یافت",
      icon:"success",
      buttons:["فهمیدم"]
    })
  }
 }

 const removeUserHandler = async (id:string) =>{
  const res = await fetch(`/api/user/${id}` , {
    method:"DELETE",
    headers:{
      "Content-Type":"application/json"
    },
  })
  if(res.status === 200){
    swal({
      title:"کاربر با موفقیت حذف شد",
      icon:"success",
      buttons:["فهمیدم"]
    })
    router.refresh()
  }
 }

 const banUserHandler = async (email:string , phone:string) =>{
  const res = await fetch("/api/ban_users" , {
    method:"POST",
    headers:{
      "Content-Type":"application/json"
    },
    body:JSON.stringify({email , phone})
  })
  if(res.status === 200){
    swal({
      title:" کاربر با موفقیت  بلاک شد",
      icon:"success",
      buttons:["فهمیدم"]
    })
  }
 }
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
              <th>نام و نام خانوادگی</th>
              <th>ایمیل</th>
              <th>نقش</th>
              <th>ویرایش</th>
              <th>تغییر سطح</th>
              <th>حذف</th>
              <th>بن</th>
            </tr>
          </thead>
          <tbody>
            {users?.map((user:any, index:number) => (
              <tr key={user?._id}>
                <td>{index + 1}</td>
                <td>{user.name}</td>
                <td>{user.email ? user.email : "ایمیل یافت نشد"}</td>
                <td>{user.role === "USER" ? "کاربر عادی" : "مدیر"}</td>
                <td>
                  <button type="button" className={styles.edit_btn}>
                    ویرایش
                  </button>
                </td>
                <td>
                  <button type="button" className={styles.edit_btn} onClick={() =>changeRoleHandler(user?._id) }>
            تغییر نقش
                  </button>
                </td>
                <td>
                  <button type="button" className={styles.delete_btn} onClick={() => removeUserHandler(user?._id)}>
                    حذف
                  </button>
                </td>
                <td>
                  <button type="button" className={styles.delete_btn} onClick={()=> banUserHandler(user.email , user.phone)}>
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
