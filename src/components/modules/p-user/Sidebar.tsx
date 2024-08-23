
"use client"
import styles from "./sidebar.module.css";
import { ImReply } from "react-icons/im";
import { FaComments, FaHeart, FaShoppingBag, FaUsers } from "react-icons/fa";
import { MdOutlineAttachMoney } from "react-icons/md";
import { MdSms, MdLogout } from "react-icons/md";
import { usePathname, useRouter } from "next/navigation";
import { TbListDetails } from "react-icons/tb";
import Link from "next/link";
import swal from "sweetalert";
import ToastComponent, { ToastSuccess } from "../Toastify";

const Sidebar = ({user , customStyle}:any) => {
  const path:any = usePathname();
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
          ToastSuccess("با موفقیت از اکانت خارج شدید" , "success")
          router.replace("/");
          router.refresh()
        }
      }
    });
  };
  return (
    <aside className={`${styles.sidebar} ${customStyle}`}>
      <ToastComponent />
      <div className={styles.sidebar_header}>
        <p>خوش اومدی {user ? user.name : "کاربر"} عزیز</p>
      </div>
      <ul className={styles.sidebar_main}>
          <>
            <Link href={"/p-user"} className={ path.includes("/")  && styles.sidebar_link_active}>
              <ImReply />
              پیشخوان
            </Link>
            <Link href={"/p-user/orders"} className={ path.includes("/orders")  && styles.sidebar_link_active}>
              <FaShoppingBag />
              سفارش ها
            </Link>
            <Link href={"/p-user/tickets"} className={ path.includes("/tickets")  && styles.sidebar_link_active}>
              <MdSms />
              تیکت های پشتیبانی
            </Link>
            <Link href={"/p-user/wishlist"} className={ path.includes("/wishlist")  && styles.sidebar_link_active}>
              <FaHeart />
              علاقه مندی
            </Link>
            <Link href={"/p-user/account-details"} className={ path.includes("/account-details")  && styles.sidebar_link_active}>
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
