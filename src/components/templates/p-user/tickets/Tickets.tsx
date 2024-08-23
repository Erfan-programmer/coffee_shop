"use client";
import React, { useState, useMemo } from "react";
import styles from "@/styles/p-user/tickets.module.css";
import Link from "next/link";
import Box from "@/components/modules/infoBox/InfoBox";
import Ticket from "./Ticket";

function Tickets({ tickets }: any) {
  const [filterBaseOpen, setFilterBaseOpen] = useState("all");
  const [filterBaseStatus, setFilterBaseStatus] = useState("all");

  const filteredTickets = useMemo(() => {
    return tickets.filter((ticket: any) => {
      let matchesOpenFilter = true;
      let matchesStatusFilter = true;

      if (filterBaseOpen !== "all") {
        matchesOpenFilter = 
          filterBaseOpen === "open" 
            ? !ticket.isFinished 
            : filterBaseOpen === "close" 
            ? ticket.isFinished 
            : filterBaseOpen === "isAnswered" 
            ? ticket.hasAnswer 
            : ticket.isFinished;
      }

      if (filterBaseStatus !== "all") {
        matchesStatusFilter = 
          filterBaseStatus === "receive" 
            ? ticket.isAnswer === true 
            : ticket.isAnswer === false;
      }

      return matchesOpenFilter && matchesStatusFilter;
    });
  }, [tickets, filterBaseOpen, filterBaseStatus]);

  const openTicketsCount = tickets.filter((ticket: any) => !ticket.isFinished).length;
  const closeTicketsCount = tickets.filter((ticket: any) => ticket.isFinished).length;
  const answeredTicketsCount = tickets.filter((ticket: any) => ticket.hasAnswer).length;
  const finishedTicketsCount = tickets.filter((ticket: any) => ticket.isFinished && ticket.hasAnswer).length;

  return (
    <main className={styles.container}>
      <h1 className={styles.title}>
        <span>همه تیکت ها</span>
        <Link href="/p-user/tickets/sendTicket"> ارسال تیکت جدید </Link>
      </h1>

      <div className={`${styles.boxes} grid justify-items-center content-center grid-cols-1 md:grid-cols-4 gap-2`}>
        <Box title={"باز"} value={openTicketsCount} />
        <Box title={"بسته"} value={closeTicketsCount} />
        <Box title={"پاسخ داده شده"} value={answeredTicketsCount} />
        <Box title={"پایان یافته"} value={finishedTicketsCount} />
        <Box title={"همه"} value={tickets.length} />
      </div>

      <div className={styles.filtering}>
        <div className="grid grid-cols-2 md:grid-cols-4">
          <select onChange={(event) => setFilterBaseStatus(event.target.value)}>
            <option value="all">همه</option>
            <option value="send">فرستاده شده</option>
            <option value="receive">دریافتی</option>
          </select>
          <select onChange={(event) => setFilterBaseOpen(event.target.value)}>
            <option value="all">همه</option>
            <option value="open">باز</option>
            <option value="close">بسته</option>
            <option value="isAnswered">پاسخ داده شده</option>
            <option value="isFinished">پایان یافته</option>
          </select>
        </div>
        <button type="submit">اعمال</button>
      </div>

      <div>
        {filteredTickets.length > 0 ? (
          filteredTickets.map((ticket: any) => <Ticket key={ticket?._id} {...ticket} />)
        ) : (
          <div className={styles.empty}>
            <p>تیکتی وجود ندارد</p>
          </div>
        )}
      </div>
    </main>
  );
}

export default Tickets;
