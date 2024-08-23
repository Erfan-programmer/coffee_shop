import React from "react";
import Layout from "@/components/layouts/AdminPanelLayout";
import styles from "@/components/templates/p-admin/products/table.module.css";
import Table from "@/components/templates/p-admin/products/table"
import FormProducts from "@/components/templates/p-admin/products/AddProductBtn";
import connectToDB from "@/configs/db";
import ProductModel from "@/models/Product";

const page = async () => {
  connectToDB();
  const products = await ProductModel.find({}).populate("category").populate("img").populate("comments").lean()
  .sort({ _id: -1 })
  
  return (
    <Layout>
      <main >
      <section className={styles.discount}>
          <p>افزودن محصول جدید</p>
          <FormProducts products={products} />
        </section>
        {products.length === 0 ? (
          <p className={styles.empty}>محصولی وجود ندارد</p>
        ) : (
          <Table
            products={JSON.parse(JSON.stringify(products))}
            title="لیست محصولات"
          />
        )}
      </main>
    </Layout>
  );
};

export default page;
