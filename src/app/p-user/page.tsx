import Layout from "@/components/layouts/UserPanelLayout";
import styles from "@/styles/p-user/index.module.css";
import Box from "@/components/modules/infoBox/InfoBox";
import Tickets from "@/components/templates/p-user/index/Tickets";
import Orders from "@/components/templates/p-user/index/Orders";
import { authUser } from "@/utils/serverHelpers";
import { cookies } from "next/headers";
import { redirect } from "next/navigation";
import TicketModel from "@/models/Ticket";
import CommentModel from "@/models/Comment";

const page = async () => {
  const user = await authUser();
  const tickets = await TicketModel.find({ user: user?._id })
    .limit(3)
    .populate("department", "title")
    .sort({ _id: -1 })
    .lean();
  const allTickets = await TicketModel.find({ user: user?._id });
  const comments = await CommentModel.find({ user: String(user?._id) });
  return (
    <Layout>
      <main className="h-auto">
        <section className={styles.boxes}>
          <Box title="مجموع تیکت ها " value={allTickets.length} />
          <Box title="مجموع کامنت ها " value={comments.length} />
          <Box title="مجموع سفارشات" value="2" />
        </section>
        <section className={`${styles.contents} flex flex-col md:flex-row`}>
          <Tickets tickets={JSON.parse(JSON.stringify(tickets))} />
          <Orders />
        </section>
      </main>
    </Layout>
  );
};

export default page;
