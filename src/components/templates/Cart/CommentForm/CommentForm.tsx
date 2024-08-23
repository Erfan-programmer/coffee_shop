"use client";
import Input from "@/components/modules/Input/Input";
import Scores from "@/components/modules/Scores";
import TextArea from "@/components/modules/TextArea/TextArea";
import React, { useEffect, useState } from "react";
import Styles from "@/styles/CartItem/ccartMain.module.css";
import Box from "@mui/material/Box";
import Rating from "@mui/material/Rating";
import Comment from "../../Comment/Comment";
import { showSwal } from "@/utils/helpers";
import { cookies } from "next/headers";
import Link from "next/link";
const CommentForm = ({ comments, productID, token }: any) => {
  const [review, setReview] = useState<string>("");
  const [star, setStar] = useState<number>(0);
  const [username, setUserName] = useState<string>(token ? token?.name : "");
  const [checkRemember, setCheckRemember] = useState<boolean>(false);
  const [email, setEmail] = useState<string>(token ? token?.email : "");
  const [body, setBody] = useState("");
  const submitComment = async (event: any) => {
    event.preventDefault();
    const formState = { username, email, star, body, productID };
    const res = await fetch("/api/comments", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(formState),
    });
    if (res.status === 201) {
      setStar(0);
      setBody("");
      showSwal("کامنت با موفقیت ثبت شد", "success", "فهمیدم");
    } else if (res.status === 500) {
      showSwal("مشکل فنیدر سرور وحود دارد", "error", "تلاش مجدد");
    }
  };
  return (
    <div>
      <div className="comment-form p-4">
        <h2 className="font-black fontBold text-xl">دیدگاه ها</h2>
        <div className="comment-form-reviews my-[15px]">
          <p className="font-xs text-[#aaa]">بیننده ای وحود ندارد</p>
        </div>
        <div className="comment-form-scores my-10">
          <b className="font-black fontBold text-xl">امتیاز شما</b>
          <Scores star={star} setStar={setStar} />
          <div className="form_control my-4">
            <form>
              <div className="comment-form_name flex flex-col gap-2 my-6">
                <label htmlFor="" className="font-black fontBold text-xl">
                  دیدگاه ها :{" "}
                </label>
                <TextArea value={body} setValue={setBody} />
              </div>
              <div className="comment-form_name flex flex-col gap-2 my-6">
                <label htmlFor="" className="font-black fontBold text-xl">
                  نام و نام خونوادگی :{" "}
                </label>
                <Input value={username} setValue={setUserName} />
              </div>
              <div className="comment-form_name flex flex-col gap-2 my-6">
                <label htmlFor="" className="font-black fontBold text-xl">
                  ایمیل :{" "}
                </label>
                <Input value={email} setValue={setEmail} />
              </div>
              <div className="comment-form_checkbox flex flex-col gap-2">
                <input
                  type="checkbox"
                  className="cursor-pointer"
                  checked={checkRemember}
                  onChange={(event) => setCheckRemember(event.target.checked)}
                />

                <div className="flex justify-center">
                  <p onClick={() => setCheckRemember((prev) => !prev)}>
                    نام و ایمیل من را ذخیره کن
                  </p>
                </div>
              </div>

              <div
                className={`${Styles.addToCart_btn} flex justify-center my-10`}
              >
                {token == null ? (
                  
                  <button className="faMedium" onClick={submitComment}>
                    <Link href="/login-register">
                      <p className="text-xs w-full">ابتدا وارد حساب خود شوید</p>
                    </Link>
                  </button>
                ) : (
                  <button className="faMedium" onClick={submitComment}>
                    <p className="text-xs w-full">ارسال دیدگاه</p>
                  </button>
                )}
              </div>
            </form>
          </div>
        </div>
      </div>
      <div className="p-5">
      {comments.filter((comment: any) => comment.isAccept).length === 0 ? (<p>دیدگاهی وجود ندارد</p>) : (

        <p>
        نظرات ({comments.filter((comment: any) => comment.isAccept).length}) :
        </p>
      )}
        <hr />

        <main>
          <div>
            <div>
              {comments.map(
                (comment: any) =>
                  comment.isAccept && (
                    <Comment key={comment._id} comment={comment} />
                  )
              )}
            </div>
          </div>
        </main>
      </div>
    </div>
  );
};

export default CommentForm;
