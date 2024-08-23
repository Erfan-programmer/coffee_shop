import Layout from "@/components/layouts/UserPanelLayout";
import styles from "@/styles/p-user/answerTicket.module.css";
import Link from "next/link";
import Answer from "@/components/templates/p-user/tickets/Answer";
import ConnectToDB from "@/configs/db";
import TicketModel from "@/models/Ticket";

const page = async ({ params }: any) => {
  const ticketID = params.id;
  ConnectToDB();
  const ticket: any = await TicketModel.findOne({ _id: ticketID })
    .populate("user", "name")
    .lean();
  const answerTicket:any = await TicketModel.findOne({ mainTicket: ticket?._id })
    .populate("user", "name")
    .lean();
  return (
    <Layout>
      <main className={styles.container}>
        <h1 className={styles.title}>
          <span>تیکت تستی</span>
          <Link href="/p-user/tickets/sendTicket">ارسال تیکت جدید</Link>
        </h1>

        <div>
          <Answer type="user" {...ticket} />
          {answerTicket && <Answer type="admin" {...answerTicket} />}

          {!answerTicket && (
            <div className={styles.empty}>
              <p>هنوز پاسخی دریافت نکردید</p>
            </div>
          )}
        </div>
        <div className="my-[20px]">
        {ticket?.isFinished  && (
          <div className={styles.empty}>
            <p>تیکت از طرف پشتیبان بسته شد</p>
          </div>
        )}
        </div>
      </main>
    </Layout>
  );
};

export default page;
