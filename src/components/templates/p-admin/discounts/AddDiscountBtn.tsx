"use client";
import React, { useRef , useState} from "react";
import styles from "@/components/templates/p-admin/discounts/table.module.css";
// import { showSwal } from "@/utils/helpers";
import { useRouter } from "next/navigation";
import { showSwal } from "@/utils/helpers";

const FormDiscount = ({ discounts , products }:any) => {
  
    const router = useRouter()
  const [formState, setFormState] = useState({
    code: "",
    maxUse: "",
    productID: "",
    percentage: "",
  });
  const addDiscount = async () => {
    if(!formState.code.trim() || !formState.maxUse.trim() || !formState.productID.trim() || !formState.percentage.trim()){
        showSwal("اطلاعات را درست وارد کنید !!" , "error" , "باشه")
    }
    const res = await fetch("/api/discounts" , {
        method:"POST",
        headers:{
            "Content-Type" : "application/json"
        },
        body:JSON.stringify(
            formState
        )
    })
    if(res.status === 201){
        showSwal("کد تخفیف ایجاد شد" , "success" , "فهمیدم")
        setFormState({...formState , code:"" , maxUse:"" , percentage:""})
        router.refresh()
    }
    else if(res.status === 422){
        showSwal("فیلد ها به صورت صحیح پر نشده است !!" , "error" , "فهمیدم")
    }
    else if(res.status === 500){
        showSwal("مشکل فنی در سرور به وجود امده است !!" , "error" , "فهمیدم")
    }

  };
  return (
    <>
      <div className={styles.discount_main}>
        <div>
          <label>شناسه تخفیف</label>
          <input
            placeholder="لطفا شناسه تخفیف را وارد کنید"
            type="text"
            value={formState.code}
            onChange={(event) =>
              setFormState({ ...formState, code: event.target.value })
            }
          />
        </div>
        <div>
          <label>درصد تخفیف</label>
          <input
            placeholder="لطفا درصد تخفیف را وارد کنید"
            type="text"
            value={formState.percentage}
            onChange={(event) =>
              setFormState({ ...formState, percentage: event.target.value })
            }
          />
        </div>
        <div>
          <label>حداکثر استفاده</label>
          <input
            placeholder="حداکثر استفاده از کد تخفیف"
            type="text"
            value={formState.maxUse}
            onChange={(event) =>
              setFormState({ ...formState, maxUse: event.target.value })
            }
          />
        </div>
        <div>
          <label>محصول</label>
          <select
            name=""
            id=""
            defaultValue={formState.productID}
            onChange={(event) =>
              setFormState({ ...formState, productID: event.target.value })
            }
          >
            <option value="محصول را وارد کنید">محصول را وارد کنید</option>
            {products?.map((product:any) => (
              <option key={product?._id} value={product?._id}>{product?.title}</option>
            ))}
          </select>
        </div>
      </div>
      <button onClick={addDiscount}>افزودن</button>
    </>
  );
};

export default FormDiscount;
