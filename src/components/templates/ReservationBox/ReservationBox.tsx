"use client";
import React, { useEffect, useState } from "react";
import "./Reservation.css";
import { FaAngleDoubleDown } from "react-icons/fa";
import { showSwal } from "@/utils/helpers";
import SelectOption from "@/components/modules/Select";
import Link from "next/link";
const ReservationBox = () => {
  const [serverPage, setReservePage] = useState<boolean>();
  const [phone, setPhone] = useState("");
  const [username, setUsername] = useState("");
  const [time, setTime] = useState("");
  const [reservedRecent, setReservedRecent] = useState<any>();
  const [tableID, setTableID] = useState<number>();
  const [reserved, setReserved] = useState([]);
  const [dateTime, setDateTime] = useState([
    "11:00 تا 12:00",
    "12:00 تا 13:00",
    "13:00 تا 14:00",
    "14:00 تا 15:00",
    "15:00 تا 16:00",
    "16:00 تا 17:00",
    "17:00 تا 18:00",
    "18:00 تا 19:00",
    "19:00 تا 20:00",
    "20:00 تا 21:00",
    "21:00 تا 22:00",
  ]);
  const reserveHandler = async (event: any) => {
    event.preventDefault();
    if (!username.trim() || !phone.trim() || !time.trim() || tableID === 0) {
      showSwal("همه قیبد هارا وارد کنید", "error", "تلاش دوباره");
    }
    const res = await fetch("/api/reservation", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ phone, username, time, tableID }),
    });
    if (res.status === 200) {
      setUsername("");
      setPhone("");
      swal({
        title: "میز با موفقیت رزرو شد",
        icon: "success",
        buttons: ["اوکی"],
      });
      setReservePage(false);
      getAllReserveTable();
      showSwal("میز با موفقیت رزرو شد", "success", "فهمیدم");
    } else if (res.status === 500) {
      setUsername("");
      setPhone("");
      swal({
        title: "مشکل فنی در سرور وجود دارد",
        icon: "error",
        buttons: ["تلاش دوباره"],
      });
      setReservePage(false);
    } else if (res.status === 422) {
      setUsername("");
      setPhone("");
      swal({
        title: "این میز قبلا رزرو شده است",
        icon: "error",
        buttons: ["تلاش دوباره"],
      });
      setReservePage(false);
    }
  };

  const getAllReserveTable = async () => {
    const res = await fetch("/api/time", {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
    });
    if (res.status === 200) {
      const datas = await res.json();
      setReservedRecent(datas.times);
      setReserved(datas);
    }
  };
  useEffect(() => {
    getAllReserveTable();
  }, [tableID]);

  useEffect(() => {
    getAllReserveTable();
  }, []);

  return (
    <>
      {serverPage && (
        <div
          className="modal h-auto w-full flex justify-center items-center"
          id="overlay"
        >
          <div
            className="overlay_section absolute top-0 left-0 right-0"
            onClick={(event) => {
              setReservePage(false);
            }}
          ></div>
          <form
            className=" form_box text-white w-full p-10 h-auto bg-[#222] text-white"
            id="reservation"
          >
            <div className="grid grid-cols-1 md:grid-cols-2 justify-items-center gap-3 content-center">
              <div className="form_number flex flex-col w-full gap-2">
                <label htmlFor="شماره میز">شماره میز</label>
                <input
                  className="bg-[#00000077] text-white p-4"
                  type="text"
                  value={Number(tableID)}
                  readOnly
                />
              </div>
              <div className="form_number flex flex-col w-full gap-2">
                <label htmlFor="نام مشتری">نام مشتری</label>
                <input
                  className="bg-[#00000077] text-white p-4"
                  type="text"
                  value={username}
                  onChange={(event) => setUsername(event.target.value)}
                />
              </div>
              <div className="form_number flex flex-col w-full gap-2">
                <label htmlFor="شماره همراه">شماره همراه : </label>
                <input
                  className="bg-[#00000077] text-white p-4"
                  type="text"
                  value={phone}
                  onChange={(event) => setPhone(event.target.value)}
                />
              </div>
              <div className="w-full flex flex-col gap-2 text-white">
                <label htmlFor="ساعات رزرو">ساعات رزرو : </label>
                <select
                  className="bg-[#00000077] text-white p-4"
                  defaultValue={-1}
                  onChange={(event) => setTime(event.target.value)}
                >
                  <option value="-1">ساعت رزرو را تعیین کنید</option>
                  {dateTime.filter(
                    (time: any) =>
                      time !==
                      reservedRecent.find(
                        (reservedTime: any) => reservedTime.tableID === tableID
                      )
                  ) !== undefined ? (
                    <>
                      {dateTime
                        ?.filter((time: any) => {
                          return !reservedRecent?.some(
                            (reservedTime: any) =>
                              reservedTime.tableID === tableID &&
                              time === reservedTime.times
                          );
                        })
                        .map((time, index) => (
                          <option
                            value={time}
                            key={index}
                            className="cursor-pointer"
                          >
                            {time}
                          </option>
                        ))}
                      {dateTime
                        ?.filter((time: any) => {
                          return reservedRecent?.some(
                            (reservedTime: any) =>
                              reservedTime.tableID === tableID &&
                              time === reservedTime.times
                          );
                        })
                        .map((time, index) => (
                          <option
                            value={time}
                            key={index}
                            className="bg-[#aaa]"
                            disabled
                          >
                            {time} (رزرو شده)
                          </option>
                        ))}
                    </>
                  ) : (
                    dateTime
                      .filter(
                        (time: any) =>
                          time !==
                          reservedRecent.find(
                            (reservedTime: any) =>
                              reservedTime.tableID === tableID
                          )?.times
                      )
                      .map((time, index) => (
                        <option
                          value={time}
                          key={index}
                          className="cursor-pointer"
                        >
                          {time}
                        </option>
                      ))
                  )}
                </select>
              </div>
            </div>
            <div className="button-submit flex justify-center text-center mt-[50px]">
              <button
                type="submit"
                onClick={reserveHandler}
                className="w-full sm:w-1/2 md:w-[150px]"
              >
                رزرو
              </button>
            </div>
          </form>
        </div>
      )}
      <div className="w-full grid grid-cols-2 md:grid-cols-4 justify-items-center gap-[50px] content-center  h-full ">
        {new Array(8).fill(0)?.map((table, index) => (
          <div className="table1 mt-[100px]" key={index}>
            <button
              className={` w-16 h-16 btn_radius  text-white text-xl faBold font-black ${
                dateTime?.filter((time: any, indexBtn: number) => {
                  return reservedRecent?.some(
                    (reservedTime: any) =>
                      reservedTime.tableID === tableID &&
                      time === reservedTime.times
                  );
                }).length === dateTime.length
                  ? " bg-[#c0aa83]"
                  : " bg-[#c0aa83]"
              }`}
              onClick={() => {
                setReservePage(true);
                setTableID(index + 1);
                window.scrollTo({ top: 20, behavior: "smooth" });
              }}
            >
              میز {index + 1}
            </button>
          </div>
        ))}
      </div>
      <div className=" w-full h-12 bg-black half-circle text-white text-center my-[50px]">
        <p>طبقه بالا</p>
        <div className="flex justify-center">
          <FaAngleDoubleDown className="text-white" />
        </div>
      </div>
      <div className="w-full grid grid-cols-2 md:grid-cols-4 justify-items-center gap-[50px] content-center  h-full mt-[50px]">
        {new Array(4).fill(0)?.map((table, index) => (
          <div className="table1" key={index}>
            <button
              className={` w-24 h-24 btn_radius  text-white text-xl faBold font-black bg-[#c0aa83]`}
              onClick={() => {
                setReservePage(true);
                setTableID(index + 9);
                window.scrollTo({ top: 20, behavior: "smooth" });
              }}
            >
              میز {index + 9}
            </button>
          </div>
        ))}
      </div>
    </>
  );
};

export default ReservationBox;
