import Layout from "@/components/layouts/AdminPanelLayout";
import FormCategory from "@/components/templates/p-admin/categories/AddBtn";
import Table from "@/components/templates/p-admin/categories/Table";
import React from "react";
import CategoryModel from "@/models/Category"
import styles from "@/components/templates/p-admin/discounts/table.module.css";

const page = async () => {
  const discounts: any = [];
  const products: any = [];
  const categories = await CategoryModel.find({}).sort({_id:-1})
  return (
    <Layout>
      <main>
        <section className={styles.discount}>
          <p>افزودن فهرست جدید</p>
          <FormCategory products={products} />
        </section>

        {categories.length === 0 ? (
          <p className={styles.empty}>کد فهرستی وجود ندارد</p>
        ) : (
          <Table
            categories={JSON.parse(JSON.stringify(categories))}
            title="لیست فهرست ها"
          />
        )}
      </main>
    </Layout>
  );
};

export default page;
