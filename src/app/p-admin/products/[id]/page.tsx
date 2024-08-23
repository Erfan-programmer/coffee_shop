import React from "react";
import Layout from "@/components/layouts/AdminPanelLayout";
import styles from "@/components/templates/p-admin/products/table.module.css";
import connectToDB from "@/configs/db";
import ProductModel from "@/models/Product";
import EditProduct from "@/components/templates/p-admin/products/product/editProduct";
import ImageModel from "@/models/Image"
const SingleProductPage = async ({ params }: any) => {
  const { id } = params;
  connectToDB();
  const product = await ProductModel.findOne({ _id: id }).populate("img")
  const image = await ImageModel.findOne({_id:product?.img?._id}).lean()
  return (
    <Layout>
      <main>
        <section className={styles.discount}>
          <EditProduct product={JSON.parse(JSON.stringify(product))} image={JSON.parse(JSON.stringify(image))} />
        </section>
      </main>
    </Layout>
  );
};

export default SingleProductPage;
