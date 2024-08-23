import Styles from "@/styles/p-user/comment.module.css";
import DataTable from "@/components/templates/p-user/Reservation/DateTable";
import Layout from "@/components/layouts/UserPanelLayout";
import React from "react";
import ConnectToDB from "@/configs/db";
import ReservationModel from "@/models/Reservation";
import { authUser } from "@/utils/serverHelpers";

const page = async () => {
  ConnectToDB();
  const user = await authUser();
  const reservations = await ReservationModel.find({});
  return (
    <Layout>
      <main>
        {reservations.length === 0 ? (
          <p className={Styles.empty}>رزروی وجود ندارد</p>
        ) : (
          <DataTable
            reservations={JSON.parse(JSON.stringify(reservations))}
            title="لیست رزرو ها"
          />
        )}
      </main>
    </Layout>
  );
};

export default page;
