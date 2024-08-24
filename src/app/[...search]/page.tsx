import BreadCrumb from "@/components/modules/BreadCrumb/BreadCrumb";
import React, { Suspense } from "react";
import SearchArticle from "@/components/templates/search/SearchArticle";
import Loading from "./loading";
import { redirect } from "next/navigation";
const page = (props: any) => {
  const { searchParams , params } = props;
  const {search} = params
  console.log(props);
  if (!searchParams.q ||  search[0] != "search") {
    redirect("/404");
  } else {
    const { q } = searchParams;
    return (
      <section className={`relative mb-[100px] mt-[50px]`}>
        <BreadCrumb title={["جستجو", `${q}`]} />
        <div className="max-w-screen-xxl mx-auto">
          <Suspense fallback={<Loading />}>
            <SearchArticle searchResult={q} />
          </Suspense>
        </div>
      </section>
    );
  }
};

export default page;
