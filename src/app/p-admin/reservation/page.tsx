
import React from "react";
import styles from "../../../components/templates/p-admin/reservation/table.module.css"
import { useRouter } from "next/navigation";
import Layout from "@/components/layouts/AdminPanelLayout";
import ReservationModel from "@/models/Reservation";
import Table from "@/components/templates/p-admin/reservation/table";
export default async function page() {
  const reservations  = await ReservationModel.find({}).sort({_id:-1})
  return (
    <Layout>
    <main className="w-full">
      {reservations.length === 0 ? (
        <p className={styles.empty}>رزروی وجود ندارد</p>
      ) : (
        <Table
          reservations={JSON.parse(JSON.stringify(reservations))}
          title="لیست رزرو ها"
        />
      )}
    </main>
  </Layout>
  );
}

