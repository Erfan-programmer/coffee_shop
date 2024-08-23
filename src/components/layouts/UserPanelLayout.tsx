"use client";
import React, { ReactNode, useEffect, useState } from "react";
import styles from "./userPanelLayout.module.css";
import Sidebar from "@/components/modules/p-user/Sidebar";
import Topbar from "@/components/modules/p-user/Topbar";
import { authUser } from "@/utils/serverHelpers";
import { redirect } from "next/navigation";
import { FaAngleLeft, FaAngleRight } from "react-icons/fa";
type childrenType = {
  children: ReactNode;
};
const Layout = ({ children }: childrenType) => {
  const [isOpenSidebar, setISOpenSidebar] = useState<boolean>(false);
  const [user, setUser] = useState<any>({});
  const [customStyle , setCustomStyle] = useState("right-[-100%]")
  useEffect(() => {
    const getUser = async () => {
      const res = await fetch(`/api/auth/getme`, {
        method: "GET"
      });
      if (res.status === 200) {
        const user = await res.json();
        setUser(user);
      }
    };

    getUser();
  }, []);
  return (
    <div className={`${styles.layout} mb-[200px]`}>
      <section className={styles.section}>
        <div
          className={`bg-[#000000b3] md:hidden w-full h-full absolute ${
            isOpenSidebar ? "top-0" : "top-[-100%]"
          } right-0 left 0-bottom-0 `}
          onClick={() => {setISOpenSidebar(false) , setCustomStyle("right-[-100%]")}}
        ></div>
        <Sidebar user={user} customStyle={customStyle}/>
        <div
          className={`bg-[#171717] text-white w-8 h-8 flex right-0 justify-center items-center md:hidden top-[50%] absolute ${
            isOpenSidebar ? " right-[45%] " : " right-0 "
          } rounded-md ${styles.openBtn} ${isOpenSidebar && styles.openBtnOpacity}`}
        >
          {isOpenSidebar ? (
              <FaAngleRight onClick={() => {setISOpenSidebar(false) , setCustomStyle( "right-[-100%]")}} />
          ) : (

            <FaAngleLeft onClick={() => {setISOpenSidebar(true) , setCustomStyle("right-0")}} />
          )}
        </div>
        <div className={styles.contents}>
          <Topbar name={user?.name} />
          {children}
        </div>
      </section>
    </div>
  );
};

export default Layout;
