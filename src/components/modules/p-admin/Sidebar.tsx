"use client";
import styles from "./sidebar.module.css";
import { ImReply } from "react-icons/im";
import { FaComments, FaHeart, FaShoppingBag, FaUsers } from "react-icons/fa";
import { MdLabel, MdOutlineAttachMoney } from "react-icons/md";
import { BiCategory } from "react-icons/bi";
import { FaShoppingCart } from "react-icons/fa";
import { IoMdTimer } from "react-icons/io";

import { MdSms, MdLogout } from "react-icons/md";
import { usePathname, useRouter } from "next/navigation";
import { TbListDetails } from "react-icons/tb";
import Link from "next/link";
import swal from "sweetalert";

type nameType = {
  user:any,
  customStyle:string
}
const Sidebar = ({user , customStyle}:nameType) => {
  const path = usePathname() as any;
  const router = useRouter();
  const logoutHandler = () => {
    swal({
      title: "آیا از خروج اطمینان دارید؟",
      icon: "warning",
      buttons: ["نه", "آره"],
    }).then(async (result) => {
      if (result) {
        const res = await fetch(`/api/auth/signout/${user?._id}`, {
          method: "POST",
        });

        if (res.status === 200) {
          swal({
            title: "با موفقیت از اکانت خارج شدین",
            icon: "success",
            buttons: ["فهمیدم"],
          }).then((result) => {
            router.replace("/");
          });
        }
      }
    });
  };
  return (
    <aside className={`${styles.sidebar} ${customStyle}`}>
      <div className={styles.sidebar_header}>
        <p>خوش اومدی {user ? user.name : "ادمین"} عزیز</p>
      </div>
      <ul className={styles.sidebar_main}>
          <>
            <Link href={"/p-admin"} className={path.includes("/") && styles.sidebar_link_active}>
              <ImReply />
              پیشخوان
            </Link>
            <Link  className={ path.includes("orders")  && styles.sidebar_link_active} href={"/p-admin/orders"}>
              <FaShoppingBag />
              سفارش ها
            </Link>
            <Link  className={path.includes("reservation") && styles.sidebar_link_active} href={"/p-admin/reservation"}>
              <IoMdTimer />
              میز های رزور شده
            </Link>
            <Link  className={path.includes("products") && styles.sidebar_link_active} href={"/p-admin/products"}>
              <FaShoppingCart />
              محصولات
            </Link>
            <Link  className={path.includes("tickets") && styles.sidebar_link_active} href={"/p-admin/tickets"}>
              <MdSms />
              تیکت های پشتیبانی
            </Link>
            <Link  className={path.includes("discounts") && styles.sidebar_link_active} href={"/p-admin/discounts"}>
              <MdSms />
              کد های تخفیف
            </Link>
            <Link  className={path.includes("comments") && styles.sidebar_link_active} href={"/p-admin/comments"}>
              <FaComments />
              کامنت ها
            </Link>
            <Link  className={path.includes("categories") && styles.sidebar_link_active} href={"/p-admin/categories"}>
              <BiCategory />
              دسته بندی ها
            </Link>
            <Link  className={path.includes("account-details") && styles.sidebar_link_active} href={"/p-admin/account-details"}>
              <TbListDetails />
              جزئیات اکانت
            </Link>
          </>

      </ul>
      <div className={styles.logout} onClick={logoutHandler}>
        <MdLogout />
        خروج
      </div>
    </aside>
  );
};

export default Sidebar;
