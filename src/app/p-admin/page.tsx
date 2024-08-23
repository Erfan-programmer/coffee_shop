import React from "react";
import AdminPanelLayout from "@/components/layouts/AdminPanelLayout";

import styles from "@/styles/p-admin/index.module.css";
import Box from "@/components/modules/infoBox/InfoBox";
import SaleChart from "@/components/templates/p-admin/index/SaleChart";
import GrowthChart from "@/components/templates/p-admin/index/GrowthChart";

import TicketModel from "@/models/Ticket";
import CommentModel from "@/models/Comment";
import UserModel from "@/models/User";
import ProductModel from "@/models/Product";
import ConnectToDB from "@/configs/db";

async function AdminHomePage() {
  ConnectToDB();
  const tickets = await TicketModel.find({}).lean();
  const users = await UserModel.find({}).lean();
  const products = await ProductModel.find({}).lean();

  return (
    <AdminPanelLayout>
      <main>
        <section className={styles.dashboard_contents}>
          <Box title="مجموع تیکت های دریافتی" value={tickets?.length} />
          <Box title="مجموع محصولات سایت" value={products?.length} />
          <Box title="مجموع سفارشات" value={"4"} />
          <Box title="مجموع کاربر های سایت" value={users?.length} />
        </section>{" "}
        <div className={styles.dashboard_charts}>
          <section className="w-full">
            <p>آمار فروش</p>
            <SaleChart />
          </section>
          <section className="w-full">
            <p>نرخ رشد</p>
            <GrowthChart />
          </section>
        </div>
      </main>
    </AdminPanelLayout>
  );
}

export default AdminHomePage;
