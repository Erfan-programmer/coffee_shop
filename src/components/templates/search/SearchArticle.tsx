import ConnectToDB from "@/configs/db";
import SubMenusModel from "@/models/SubMenus";
import ProductModel from "@/models/Product";
import React from "react";
import Link from "next/link";
import styles from "./SearchArticle.module.css";
const SearchArticle = async ({ searchResult }: any) => {
  ConnectToDB();
  const findProduct = await ProductModel.find({
    $or: [{ title: searchResult }, { labels: searchResult }],
  } ).populate("category");
  const findSubMenu = await SubMenusModel.find({
    $or: [{ title: searchResult }, { label: searchResult }],
  }).populate("image");
  return (
    <div className="max-w-screen-xl mx-auto h-[auto]  py-10 px-5 md:p-0">
      
      {findProduct.length === 0 && findSubMenu.length === 0 && <p className={styles.empty}>
        چنین محتوایی وجود ندارد</p>}
      {findProduct.length !== 0 && (
        <>
          <h2 className="font-black text-4xl faMedium my-[20px]">محصولات</h2>
          <div className="product-box">
            {findProduct?.map((product: any , index:any) => (
              <article key={index} className="text-lg font-black w-full bg-[#aaa] mt-[10px] p-10 h-auto md:h-[140px] rounded-lg flex flex-col md:flex-row justify-between items-start md:items-center gap-5 items-start">
                <div className="flex flex-col gap-5">
                  <div>
                    <h3>{product?.title}</h3>
                  </div>
                  <div className="paragraph text-sm text-[#222]">
                    <p>{product?.shortDescription.slice(0, 30) + "..."}</p>
                  </div>
                  <div className="labels text-sm text-[#222]">
                    <div className="flex gap-2">
                      برچسب ها :{" "}
                      <div className="flex justify-center gap-2">
                        {product?.labels?.map((item: any , index:any) => (
                          <span className="text-[#f1f1f1]" key={index}>
                            #<span className="underline">{item}</span>
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
                <div>
                  <Link href={`/shop/product-category/${product?.category?.title}/${product?._id}`} className={styles.search_content_button}>
                    مشاهده
                  </Link>
                </div>
              </article>
            ))}
          </div>
        </>
      )}

      {findSubMenu.length !== 0 && (
        <>
          <h2 className="font-black text-4xl faMedium my-[20px]">منوها</h2>
          <div className="product-box">
            {findSubMenu?.map((menu: any , index) => (
              <article key={index} className="text-lg font-black w-full bg-[#aaa] mt-[10px] p-10 h-auto md:h-[140px] rounded-lg flex flex-col md:flex-row justify-between items-start md:items-center gap-5 items-start">
                <div className="flex flex-col gap-5">
                  <div>
                    <h3>{menu?.title}</h3>
                  </div>
                  <div className="paragraph text-sm text-[#222]">
                    <p>{menu?.description.slice(0, 30) + "..."}</p>
                  </div>
                  <div className="labels text-sm text-[#222]">
                    <div className="flex gap-2">
                      برچسب ها :{" "}
                      <div className="flex justify-center gap-2">
                        {menu?.label?.map((item: any , index:any) => (
                          <span className="text-[#f1f1f1]" key={index}>
                            #<span className="underline">{item}</span>
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
                <div>
                  <Link href="/menu" className={styles.search_content_button}>
                    مشاهده
                  </Link>
                </div>
              </article>
            ))}
          </div>
        </>
      )}
    </div>
  );
};

export default SearchArticle;
