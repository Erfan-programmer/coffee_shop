"use client";
import React, { useRef, useState } from "react";
import styles from "@/components/templates/p-admin/discounts/table.module.css";
import { showSwal } from "@/utils/helpers";
import { useRouter } from "next/navigation";

const FormCategory = ({ products }: any) => {
  const router = useRouter();
  const [formState, setFormState] = useState({
    title: "",
    label:""
  });
  const AddCategoryLabel = async () => {
    if (
      !formState.title.trim() 
    ) {
      showSwal("اطلاعات را درست وارد کنید !!" , "error" , "باشه")
    }
    const res = await fetch("/api/category", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(formState),
    });
    if (res.status === 201) {
      setFormState({...formState , title:"" , label:""})
      showSwal("دسته بندی ایجاد شد" , "success" , "فهمیدم")
      setFormState({ ...formState, title:""});
      router.refresh();
    } else if (res.status === 422) {
      showSwal("فیلد ها به صورت صحیح پر نشده است !!" , "error" , "فهمیدم")
    } else if (res.status === 500) {
      showSwal("مشکل فنی در سرور به وجود امده است !!" , "error" , "فهمیدم")
    }
  };
  return (
    <>
      <div className={styles.discount_main}>
        <div>
          <label>عنوان دسته بندی</label>
          <input
            placeholder="لطفا عنوان دسته بندی را وارد کنید"
            type="text"
            value={formState.title}
            onChange={(event) =>
              setFormState({ ...formState, title: event.target.value })
            }
          />
        </div>
        <div>
          <label>برچسب دسته بندی</label>
          <input
            placeholder="لطفا برچسب دسته بندی را وارد کنید"
            type="text"
            value={formState.label}
            onChange={(event) =>
              setFormState({ ...formState, label: event.target.value })
            }
          />
        </div>
      </div>
      <button onClick={AddCategoryLabel}>افزودن</button>
    </>
  );
};

export default FormCategory;
