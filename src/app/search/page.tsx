import BreadCrumb from "@/components/modules/BreadCrumb/BreadCrumb";
import React, { Suspense } from "react";
import SearchArticle from "@/components/templates/search/SearchArticle";
import Loading from "./loading";
const page = (props:any) => {
  const {searchParams} = props
  const {q} = searchParams
  return (
    <section className={`relative mb-[100px] mt-[50px]`}>
      <BreadCrumb title={["جستجو"]} />
      <div className="max-w-screen-xxl mx-auto">
        <Suspense fallback={<Loading />}>
        <SearchArticle searchResult={q} />
        </Suspense>
      </div>
    </section>
  );
};

export default page;
