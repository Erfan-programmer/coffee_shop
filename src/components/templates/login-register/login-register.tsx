"use client";
import styles from "@/styles/login-register.module.css";
import { useEffect, useState } from "react";
import { authTypes } from "@/utils/constants";

import Login from "@/components/templates/login-register/Login";
import Register from "@/components/templates/login-register/Register";
import Image from "next/image";

const Login_register = () => {
  const [authType, setAuthType] = useState(authTypes.LOGIN);
  const showRegisterForm = () => setAuthType(authTypes.REGISTER);
  const showloginForm = () => setAuthType(authTypes.LOGIN);

  return (
    <section className="relative mb-[200px] md:mb-[150px] overflow-hidden">
      <div className={`${styles.login_register} grid grid-cols-1 md:grid-cols-2 justify-items-center content-center  `}>
        <div className={"w-full"} data-aos="fade-up">
          {authType === authTypes.LOGIN ? (
            <Login showRegisterForm={showRegisterForm} />
          ) : (
            <Register showloginForm={showloginForm} />
          )}
        </div>
        <section className="p-4 w-full top-0 absolute md:relative">
          <Image
          layout="responsive"
            src="http://localhost:3000/uploads/1724394400559menu-bg.png"
            placeholder="blur"
            blurDataURL={"/images/menu-bg.png"}
            priority
            alt=""
            width={100}
            height={100}
          />
        </section>
      </div>
    </section>
  );
};

export default Login_register;