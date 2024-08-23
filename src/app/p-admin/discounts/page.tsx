import Table from "@/components/templates/p-admin/discounts/Table";
import Layout from "@/components/layouts/AdminPanelLayout";
import styles from "@/components/templates/p-admin/discounts/table.module.css";
import ConnectToDB from "@/configs/db";
import DiscountModel from "@/models/Discount";
import ProductModel from "@/models/Product";
import FormDiscount from "@/components/templates/p-admin/discounts/AddDiscountBtn";

const Discounts = async () => {
  ConnectToDB();
  const discounts = await DiscountModel.find({}).populate("productID").sort({_id:-1}).lean();
  const products =  await ProductModel.find({}).lean()
  return (
    <Layout>
      <main>
        <section className={styles.discount}>
          <p>افزودن کد تخفیف جدید</p>
          <FormDiscount discounts={discounts} products={products} />
        </section>

        {discounts.length === 0 ? (
          <p className={styles.empty}>کد تخفیفی وجود ندارد</p>
        ) : (
          <Table
            discounts={JSON.parse(JSON.stringify(discounts))}
            title="لیست تخفیفات"
          />
        )}
      </main>
    </Layout>
  );
};

export default Discounts;
