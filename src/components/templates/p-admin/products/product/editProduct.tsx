"use client";
import React, { useEffect, useRef, useState } from "react";
import styles from "@/components/templates/p-admin/products/table.module.css";
// import { showSwal } from "@/utils/helpers";
import { useRouter } from "next/navigation";
import { showSwal } from "@/utils/helpers";
import { RxCross1 } from "react-icons/rx";
import CustomEditor from "@/components/templates/TextEditor/TextEditor";
import Image from "next/image";

type optionType = {
  title: string;
  _id: string;
};

const EditProduct = ({ product, image }: any) => {
  const router = useRouter();
  const [options, setOptions] = useState<optionType[]>([]);
  const [img, setImg] = useState<any>(image?._id);
  const [imgPath, setImgPath] = useState<any>("");
  const [title, setTitle] = useState(product.title);
  const [shortDescription, setShortDescription] = useState(
    product.shortDescription
  );
  const [longDescription, setLongDescription] = useState(
    product.longDescription
  );
  const [category, setCategory] = useState(product.category);
  const [price, setPrice] = useState(product?.price);
  const [labels, setLabels] = useState(product.labels.join());
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
      !shortDescription.trim() ||
      !longDescription.trim() ||
      !category.trim() ||
      img === undefined || img === ''
    ) {
      showSwal("اطلاعات را درست وارد کنید !!", "error", "باشه");
    }

    const res = await fetch(`/api/product/${product?._id}`, {
      method: "PUT",
      body: JSON.stringify(formState),
    });
    if (res.status === 200) {
      showSwal("محصول ویرایش شد", "success", "فهمیدم");
      router.refresh();
    } else if (res.status === 422) {
      showSwal("فیلد ها به صورت صحیح پر نشده است !!", "error", "فهمیدم");
    } else if (res.status === 500) {
      showSwal("مشکل فنی در سرور به وجود امده است !!", "error", "فهمیدم");
    }
  };

  const setImageHandler = async (event: any) => {
    setImg(event.target.files[0]);
    const formState = new FormData();
    formState.append("img", event.target.files[0]);

    const res = await fetch("/api/image", {
      method: "POST",
      body: formState,
    });
    if (res.status === 201) {
      const data = await res.json();
      setImg(data?.imagePath?._id);
      setImgPath(data?.imagePath?.imgUrl)
      setTimeout(() => {
      }, 2000);
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

  useEffect(()=>{
  if(product?.img?._id){
    const getImage = async  ()=>{
      const res = await fetch(`/api/image/${product?.img?._id}`)
      if(res.status === 200){
        const data = await res.json()
        setImgPath(data?.imageFind?.imgUrl)
      }
    }
     getImage()
}  
  },[])
  const deleteImageHandler = async () => {
  setImgPath("")
  if(image?._id){
    const res = await fetch(`/api/image/${image?._id}`, {
      method: "DELETE",
    });
    if (res.status === 200) {
      setImg("");
      setImgPath("")
    }
  }
  };

  const longDescriptionHandler = (handlerValue:any) => {
    setLongDescription(handlerValue)
  }
  return (
    <>
      <div className={"grid grid-cols-1 sm:grid-cols-2 gap-5 justify-items-center content-center"}>
        <div className="flex flex-col items-start justify-center w-full">
          <label>نام محصول</label>
          <input
            placeholder="لطفا نام محصول را وارد کنید"
            type="text"
            value={title}
            onChange={(event) => setTitle(event.target.value)}
          />
        </div>
        <div className="flex flex-col items-start justify-center w-full">
          <label>قیمت محصول</label>
          <input
            placeholder="لطفا قیمت محصول را به (عدد) وارد کنید"
            type="text"
            value={price}
            onChange={(event) => setPrice(event.target.value)}
          />
        </div>
        <div className="flex flex-col items-start justify-center w-full">
          <label>نام برچسب</label>
          <input
            placeholder="لطفا نام برچسب را وارد کنید"
            type="text"
            value={labels}
            onChange={(event) => setLabels(event.target.value)}
          />
        </div>
        <div className="flex flex-col items-start justify-center w-full">
          <label>دسته بندی</label>
          <select
          className="w-full"
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
        <div className="w-full">
          {/* icons */}
          {imgPath ? (
            <>
              <label htmlFor="">عکس محصول</label>
              <div className="product-profile w-[100px] h-[100px] rounded-full relative mt-10">
                <RxCross1
                  className="text-[red] absolute cursor-pointer mr-1 mt-1"
                  onClick={deleteImageHandler}
                />
                <Image
                width={100}
                height={100}
                  className="w-full h-full border border-[2px]"
                  src={imgPath}
                  alt=""
                  loading="lazy"
                  layout="responsive"
                />
              </div>
            </>
          ) : (
            <>
              <label>انتخاب عکس</label>
              <input
                placeholder="عکس محصول را وارد کنید"
                type="file"
                name={img?.name}
                size={img?.size}
                onChange={setImageHandler}
              />
            </>
          )}
        </div>
        <div className="flex flex-col items-start justify-center w-full">
          <label>توضیحات کوتاه</label>
          <textarea
            placeholder="لطفا توضیحات محصول را وارد کنید"
            value={shortDescription}
            className="border border-2-black w-full min-h-32 p-3"
            onChange={(event) => setShortDescription(event.target.value)}
          />
        </div>
      </div>
        <div className="w-full relative flex flex-col mt-10">
          <label>توضیحات کامل</label>
          <CustomEditor initialContent={longDescription} onContentChange={longDescriptionHandler}/>
        </div>
      <button onClick={addDiscount}>ویرایش</button>
    </>
  );
};

export default EditProduct;
