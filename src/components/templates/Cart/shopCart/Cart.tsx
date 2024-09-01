"use client";
import Image from "next/image";
import React, { useEffect, useRef, useState } from "react";
import { RxCross1 } from "react-icons/rx";
import Styles from "@/styles/Cart/Cart.module.css";

import InputCount from "@/components/modules/Inputcount";
import Link from "next/link";
import Input from "@/components/modules/Input/Input";

import CartItem from "@/components/modules/cartItem/CartItem";
import { showSwal } from "@/utils/helpers";
import { useRouter } from "next/navigation";
import ToastComponent, { ToastSuccess } from "@/components/modules/Toastify";
type discountCountType = {
  discount: Number;
  productID: string;
};
const Cart = ({user}:any) => {
  const [count, setCount] = useState<string | number | any>();
  const [cart, setCart] = useState<any>([]);
  const [allCart, setAllCart] = useState<any>([]);
  const [totalWithDiscount, setTotalWithDiscount] = useState<any>([]);
  const [discountCount, setDiscountCount] = useState<discountCountType[]>([]);
  const [totalDiscount, setTotalDiscount] = useState(0);
  const [totalPrice, setTotalPrice] = useState<number | any>(0);

  const [transportationPrice, setTransportationPrice] = useState<number | any>(
    0
  );
  const [discountCode, setDiscountCode] = useState<any>("");
  const [discountCounts, setDiscountCounts] = useState<discountCountType[]>([]);
  const [code, setCode] = useState<string>("");
  useEffect(() => {
    const cartITem = JSON.parse(localStorage.getItem("cart") as any) || [];
    setCart(cartITem);
    setAllCart(cartITem);
    totalPriceHandler(cart);
  }, []);

  useEffect(() => {
    totalPriceHandler(totalWithDiscount);
  }, [discountCode]);

  useEffect(() => {
    totalPriceHandler(cart);
  }, [cart]);
  const router = useRouter();
  const changeCountHandler = (index: number, event: any) => {
    setDiscountCount([]);
    setDiscountCode("");
    const updatedCart = [...cart];
    updatedCart[index].count = parseInt(event.target.value);
    updatedCart[index].total = Number(
      updatedCart[index].price * updatedCart[index].count
    );

    setCart(updatedCart);
    localStorage.setItem("cart", JSON.stringify(updatedCart));
  };
  const deleteProductHandler = (title: string) => {
    const deleteCart = [...cart];
    const filteredCarts = deleteCart.filter(
      (cart: any) => cart.title !== title
    );
    localStorage.setItem("cart", JSON.stringify(filteredCarts));
    showSwal("محصول با موفقیت حذف شد", "success", "باشه");
    location.reload();
  };

  // Update totalPriceHandler to handle multiple discounts
  const totalPriceHandler = (cart: any) => {
    let totalPrice = 0;
    let totalDiscountValue = 0;

    if (cart.length) {
      totalPrice = cart.reduce((total: any, item: any) => {
        const discountForItem: any = discountCounts.find(
          (discount) => discount.productID === item.title
        )?.discount;

        // Calculate total price, subtracting the discount if applicable
        return total + item.total - (discountForItem ? discountForItem : 0);
      }, 0);
      totalDiscountValue = discountCounts.reduce(
        (total: any, discount: any) => {
          return total + discount.discount;
        },
        0
      );
    }
    setTotalPrice(totalPrice);
    setTotalDiscount(totalDiscountValue);
  };

  const submitDiscountCode = async () => {
    if(!user){
      ToastSuccess("برای استفاده از کد های تخفیف ابتدا باید وارد سایت شوید", "error");
      return;
    }
    if (!code.trim()) {
      showSwal("مقدار کد را وارد کنید", "error", "تلاش دوباره");
      return;
    }
    const res: any = await fetch("/api/discounts/use", {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ code , user }),
    });

    if (res.status === 200) {
      const data = await res.json();
      // ... (Show success message)

      const matchingProductIndex = cart.findIndex(
        (item: any) => item.title === data.discountCode?.productID?.title
      );

      if (matchingProductIndex !== -1) {
        // Calculate the discount amount
        const discountAmount =
          (Number(cart[matchingProductIndex].price) *
            Number(data?.discountCode?.percentage)) /
          100;

        // Update the 'total' property directly
        const updatedCart = [...cart];
        updatedCart[matchingProductIndex].total =
          updatedCart[matchingProductIndex].price - discountAmount;

        // Manage discountCounts (find and update existing entry)
        const existingDiscountIndex = discountCounts.findIndex(
          (discount) =>
            discount.productID === data.discountCode?.productID?.title
        );

        if (existingDiscountIndex !== -1) {
          const updatedDiscountCounts: any = [...discountCounts];
          updatedDiscountCounts[existingDiscountIndex].discount =
            discountAmount;
          setDiscountCounts(updatedDiscountCounts);
        } else {
          // Create a new entry only if it doesn't exist
          setDiscountCounts([
            ...discountCounts,
            {
              discount: discountAmount,
              productID: data.discountCode?.productID?.title,
            },
          ]);
        }

        // Update the cart state and localStorage
        setCart(updatedCart);
        localStorage.setItem("cart", JSON.stringify(updatedCart));

        // ... (Rest of the success handling)
      }
    }
    else if(res.status === 409){
      ToastSuccess("این کد قبلا توسط شما استفاده شده است", "error");
      return;
    }
    else if(res.status === 422){
      ToastSuccess("زمان استفاده از این کد به اتمام رسیده است", "error");
      return;
    }
    else if(res.status === 419){
      ToastSuccess("کد نامعتبر است", "error");
      return;
    }
    // ... (Error handling)
  };

  const getPaymentHandler = () => {
    if(!user){
      ToastSuccess("برای تصویه حساب کامل باید وارد حسیاب کاربری شوید !!" , "error")
      return;
    }
  }
  return (
    <div className="w-full">
      <ToastComponent />
      <table className="w-full overflow-x-auto">
        <thead className="w-full h-20 bg-[#c0aa83]">
          <tr className="w-full text-white font-black text-sm md:text-lg">
            <th></th>
            <th>محصول</th>
            <th>قیمت (تومان)</th>
            <th>تعداد</th>
            <th>جمع (تومان)</th>
          </tr>
        </thead>
        <tbody className="border border-1 w-full">
          {cart.length !== 0 ? (
            cart?.map((cartItem: any, index: any) => (
              <tr className="text-center text-sm md:text-lg" key={cartItem._id}>
                <td>
                  <div className="flex justify-center gap-2 items-center">
                    <button>
                      {
                        <RxCross1
                          className="text-[#d9534f]"
                          onClick={() => deleteProductHandler(cartItem?.title)}
                        />
                      }
                    </button>
                    <div className="w-20 h-20">
                      <Image
                        src={cartItem?.img.imgUrl}
                        width={100}
                        height={100}
                        alt='="'
                        loading="lazy"
                      />
                    </div>
                  </div>
                </td>

                <td>{cartItem?.price?.toLocaleString()}</td>
                <td className="font-black text-md md:text-lg text-[#c0aa83]">
                  {cartItem?.title.length > 30 ? cartItem?.title.slice(0,30) + " ..." : cartItem?.title}
                </td>
                <td className="w-auto">
                  <input
                    type="number"
                    className="py-3 pr-4 rounded-md pr-2 text-md border border-1-[#aaa] min-w-8 max-w-20 text-center"
                    defaultValue={cartItem?.count}
                    value={count}
                    min={1}
                    onChange={(event: any) => changeCountHandler(index, event)}
                  />
                </td>
                <td
                  className={`font-black text-md md:text-lg text-[#c0aa83] ${index + ""}`}
                >
                  {cartItem?.total
                    ? cartItem?.total?.toLocaleString()
                    : (cartItem?.count * cartItem?.price).toLocaleString()}
                </td>
              </tr>
            ))
          ) : (
            <div className="w-full flex justify-center items-center">
              <p className={"empty"}>محصولی در سبد خرید وجود ندارد</p>
            </div>
          )}
        </tbody>
      </table>
      <div className="discount flex justify-center  md:justify-start items-center  my-[50px]">
        <div className="discount-form grid grid-cols-2 justify-items-center content-center w-10/12 md:w-[40%]">
          <div className="border border-1  w-full">
            <input
              type="text"
              className="py-3 pr-4 rounded-md pr-2 text-md border border-1-[#aaa] w-full"
              value={code}
              onChange={(event) => setCode(event.target.value)}
            />
          </div>
          <button
            className={
              Styles.introduce_des_bio_button +
              " text-center mx-auto md:mr-0 w-full flex justify-center  items-center"
            }
            onClick={submitDiscountCode}
          >
            اعمال کد تخفیف
          </button>
        </div>
      </div>

      <div className="total-price-container flex justify-center md:justify-start items-center md:items-start w-full md:w-[300px]">
        <div className="total-price flex flex-col justify-center items-middle border border-5 p-10 w-full">
          <div className="sub-price flex justify-center gap-2 items-center w-full">
            <h4 className="text-md font-black">جمع زیر : </h4>
            <p className="font-black text-lg text-[#c0aa83] ">
              {totalPrice.toLocaleString()}
              تومان
            </p>
          </div>
          <div className="sub-price flex justify-center gap-2 items-center my-5 w-full">
            <h4 className="text-md font-black">هزینه حمل و نقل :</h4>
            <p className="font-black text-lg text-[#c0aa83] ">
              {transportationPrice}
            </p>
          </div>
          {totalDiscount > 0 && (
            <div className="sub-price flex justify-center gap-2 items-center my-5 w-full">
              <h4 className="text-md font-black">
                {" "}
                مقدار کسر به ازای کد تخفیف :{" "}
              </h4>
              <p className="font-black text-lg text-[red] ">
                {totalDiscount.toLocaleString()}-
              </p>
            </div>
          )}
          <div className="sub-price flex justify-center gap-2 items-center my-10 w-full">
            <h4 className="text-xl font-black">جمع کل : </h4>
            <p className="font-black text-lg text-[#c0aa83] ">
              {(transportationPrice + totalPrice)?.toLocaleString()}
              تومان
            </p>
          </div>
          <button
            className={
              " text-center text-xl mx-auto md:mr-0 w-full font-black py-2 px-2 bg-[#171717] hover:bg-[#404040] rounded-md text-[#c0aa83]"
            }
            onClick={getPaymentHandler}
          >
            پرداخت
          </button>
        </div>
      </div>
    </div>
  );
};

export default Cart;
