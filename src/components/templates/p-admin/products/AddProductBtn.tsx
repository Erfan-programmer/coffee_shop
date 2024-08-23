"use client";
import React, { useEffect, useRef, useState } from "react";
import styles from "@/components/templates/p-admin/products/table.module.css";
// import { showSwal } from "@/utils/helpers";
import { useRouter } from "next/navigation";
import { showSwal } from "@/utils/helpers";
import dynamic from "next/dynamic";

import TextEditor from "../../TextEditor/TextEditor";
import CustomEditor from "../../TextEditor/TextEditor";
type optionType = {
  title: string;
  _id: string;
};

const FormProducts = ({ products }: any) => {
  const router = useRouter();
  const [options, setOptions] = useState<optionType[]>([]);
  const [img, setImg] = useState<any>({});
  const [source, setSource] = useState<any>({});
  const [title, setTitle] = useState("");
  const [shortDescription, setShortDescription] = useState("");
  const [longDescription, setLongDescription] = useState("");
  const [category, setCategory] = useState("");
  const [labels, setLabels] = useState("");
  const [price, setPrice] = useState("");
  const ref = useRef();
  const addDiscount = async () => {
    const formState = {
      img,
      title,
      price,
      shortDescription,
      longDescription,
      category,
      labels,
    };
    if (
      !title.trim() ||
      labels.length === 0 ||
      !shortDescription.trim() ||
      !longDescription.trim() ||
      !category.trim() ||
      !price.match(/\d+/g)
    ) {
      showSwal("اطلاعات را درست وارد کنید !!", "error", "باشه");
      return;
    }

    const res = await fetch("/api/product", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(formState),
    });
    if (res.status === 201) {
      showSwal("محصول ایجاد شد", "success", "فهمیدم");
      setTitle("");
      setImg("");
      setCategory("");
      setPrice("");
      setShortDescription("");
      setLongDescription("");
      longDescriptionHandler(longDescription)
      setCategory("");
      setLabels("");
      router.refresh();
    } else if (res.status === 422) {
      showSwal("فیلد ها به صورت صحیح پر نشده است !!", "error", "فهمیدم");
    } else if (res.status === 500) {
      showSwal("مشکل فنی در سرور به وجود امده است !!", "error", "فهمیدم");
    }
  };

  useEffect(() => {
    const getCategories = async () => {
      const res = await fetch("/api/category", {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
        },
      });
      if (res.status === 200) {
        const options = await res.json();
        setOptions(options);
      }
    };
    getCategories();
  }, []);


  const sendImageHandler = async (event: any) => {
    setImg(event.target.files[0]);
    const formState = new FormData();
    formState.append("img", event.target.files[0]);

    const res = await fetch("/api/image", {
      method: "POST",
      body: formState,
    });
    if (res.status === 201) {
      const data = await res.json();
      setSource(data?.imagePath);
      setImg(data?.imagePath?._id);
    }
  };

  const longDescriptionHandler = (handlerValue:any) => {
    setLongDescription(handlerValue)
  }
  return (
    <>
      <div className={styles.discount_main}>
        <div>
          <label>نام محصول</label>
          <input
            placeholder="لطفا نام محصول را وارد کنید"
            type="text"
            value={title}
            onChange={(event) => setTitle(event.target.value)}
          />
        </div>
        <div>
          <label>قیمت محصول</label>
          <input
            placeholder="لطفا قیمت محصول را به (عدد) وارد کنید"
            type="text"
            value={price}
            onChange={(event) => setPrice(event.target.value)}
          />
        </div>
        <div>
          <label>نام برچسب</label>
          <input
            placeholder="لطفا نام برچسب را وارد کنید"
            type="text"
            value={labels}
            onChange={(event) => setLabels(event.target.value)}
          />
        </div>
        <div>
          <label>دسته بندی</label>
          <select
            defaultValue="-1"
            value={category}
            onChange={(event) => setCategory(event.target.value)}
          >
            <option value="-1">دسته بندی را وارد کنید</option>
            {options.length !== 0 &&
              options?.map((option: optionType) => (
                <option value={option?._id} key={option?._id}>
                  {option?.title}
                </option>
              ))}
          </select>
        </div>
        <div>
          <label>انتخاب عکس</label>
          <input
            placeholder="عکس محصول را وارد کنید"
            type="file"
            name={source.name}
            onChange={sendImageHandler}
          />
        </div>
      </div>
        <div className="w-full flex flex-col gap-5">
          <label>توضیحات کوتاه</label>
          <textarea  className="w-full h-40 p-5 border border-2-black"
            placeholder="لطفا توضیحات محصول را وارد کنید"
            value={shortDescription}
            onChange={(event) => setShortDescription(event.target.value)}
          />
        </div>
        <div className="w-full h-auto">
          <label>توضیحات کامل</label>

          <CustomEditor initialContent={longDescription} onContentChange={longDescriptionHandler}/>
        </div>
      <button onClick={addDiscount}>افزودن</button>
    </>
  );
};

export default FormProducts;
