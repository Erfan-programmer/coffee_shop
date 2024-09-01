"use client";
import React, { useEffect, useState } from "react";
import "./Navbar.css";
import { FaHamburger, FaSearch } from "react-icons/fa";
import { RxCross1 } from "react-icons/rx";

import Image from "next/image";
import logo_light from "/public/images/1724394845877logo_white-7.png"
import logo_dark from "/public/images/1724394721509logo_white-dark-7.png"
import { FaAngleDown } from "react-icons/fa";
import { BsCartFill } from "react-icons/bs";
import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
const Navbar = ({ userToken: token, categoryName }: any) => {

  const pathname = usePathname();
  const [tokenExist, setTokenExist] = useState<any>();
  const [toggleMenu, setIstoggleMenu] = useState(false);
  const [searchValue, setSearchValue] = useState("");
  const [dropDownAccount, setIsDropDownAccount] = useState(false);
  const [dropDownTestMenu, setIsDropDownTestMenu] = useState(false);
  const [isInputShow, setIsInputShow] = useState(false);
  const [sizeLG, setSizeLG] = useState<boolean>(false);
  const [size, setSize] = useState<number | any>();

  const cartCount = JSON.parse(localStorage.getItem("cart") as any);
  useEffect(() => {
    window.addEventListener("click", (event: any) => {
      if (toggleMenu) {
        if (
          event.target.nodeName.includes() == "DIV" ||
          event.target.nodeName == "SECTION" ||
          event.target.nodeName == "NAV"
        ) {
          setIstoggleMenu(false);
        }
      }
    });
  }, [toggleMenu]);
  const [fixTop, setFixTop] = useState(false);

  useEffect(() => {
    const fixNavbarToTop = () => {
      const currentScroll = window.pageYOffset;
      if (currentScroll > 105) {
        setFixTop(true);
      } else {
        setFixTop(false);
      }
    };

    window.addEventListener("scroll", fixNavbarToTop);

    return () => window.removeEventListener("scroll", fixNavbarToTop);
  }, []);
2
  useEffect(() => {
    setTokenExist(token);
  }, []);
  window.addEventListener("resize", () => {
    setSize(window.innerWidth);
    if (window.innerWidth > 1024) {
      setIstoggleMenu(false);
      setSizeLG(false);
    } else {
      setSizeLG(true);
    }
  });
  useEffect(() => {
    if (window.innerWidth <= 1024) {
      setSizeLG(true);
    }
  }, []);
  const router = useRouter();

  const serachInputHandler = () => {
    router.push(`/search?q=${searchValue}`);
    setIstoggleMenu(false);
  };
  return (
    <nav
      className={`${pathname == "/" ? "bg-transparent absolute" : "bg-white"} ${
        fixTop ? "navbar_fixed lg:bg-[black] lg:text-white" : ""
      } border-gray-200  p-2 z-50  top-0 right-0 left-0 bg-[#00000033]`}
    >
      {isInputShow ? (
        <div
          className={`flex max-w-screen-xl mx-auto text-white justify-between items-center search_box `}
        >
          <div className="flex justify-center items-center w-10/12 border border-gray-300 dark:focus:ring-[#C0AA83] dark:focus:border-[#C0AA83] pl-2">
            <input
              type="search"
              id="search"
              className={`${
                pathname == "/"
                  ? "text-gray-900 dark:text-white"
                  : "text-[#171717]"
              } block   left-20 w-full p-2 text-sm  inputSearch  rounded-sm bg-transparent focus:ring-[#C0AA83] focus:border-none dark:bg-transparent dark:border-gray-600 dark:placeholder-gray-400 `}
              placeholder="چی میخوری ؟"
              required
              value={searchValue}
              onChange={(event: any) => setSearchValue(event.target.value)}
            />
            <FaSearch
              onClick={serachInputHandler}
              className={
                pathname == "/"
                  ? "text-gray-900 dark:text-white"
                  : "text-[#171717]" + " cursor-pointer"
              }
            />
          </div>
          <RxCross1
            className={`cursor-pointer ${
              pathname == "/"
                ? "text-gray-900 dark:text-white"
                : "text-[#171717]"
            } `}
            onClick={() => setIsInputShow(false)}
          />
        </div>
      ) : (
        <div className="max-w-screen-xl flex flex-wrap items-center justify-between lg:justify-start  lg:gap-10 mx-auto lg:p-4">
          <Link
            href="/"
            className="flex items-center p-4 space-x-3 rtl:space-x-reverse"
          >
            <Image
              src={
                fixTop ? logo_light : pathname === "/" ? logo_light : logo_dark
              }
              width={100}
              height={150}
              className="h-8"
              loading="lazy"
              alt="Flowbite Logo"
            />
          </Link>
          <button
            data-collapse-toggle="navbar-default"
            onClick={() => {
              setIstoggleMenu((prev) => !prev);
            }}
            type="button"
            className="flex items-center main-sectio p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg lg:hidden hover:bg-white focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400  dark:focus:ring-gray-600"
            aria-controls="navbar-default"
            aria-expanded="false"
          >
            <span className="sr-only">Open main menu</span>
            {toggleMenu ? (
              <RxCross1 />
            ) : (
              <FaHamburger className="animate-bounce " />
            )}
          </button>
          <div
            className={` ${
              !toggleMenu ? "hidden" : "block"
            } w-full lg:block lg:w-auto`}
            id="navbar-default"
          >
            <ul
              className={`font-medium   ${
                pathname === "/"
                  ? "bg-black dark:text-white lg:bg-transparent dark:text-white"
                  : fixTop
                  ? "lg:text-white"
                  : "  dark:text-[#171717] lg:text-white "
              } lg:flex flex-col p-4 lg:p-0 mt-4 border border-gray-100 rounded-lg   lg:flex-row lg:space-x-5 rtl:space-x-reverse lg:mt-0 lg:border-0  `}
            >
              {sizeLG && (
                <li>
                  <div
                    className={`flex max-w-screen-xl mx-auto  justify-between items-center mb-4 `}
                  >
                    <div
                      className={`flex w-full mx-auto  justify-between items-center search_box `}
                    >
                      <div className="flex justify-center items-center w-full border border-gray-300 dark:focus:ring-[#C0AA83] dark:focus:border-[#C0AA83] pl-2">
                        <input
                          type="search"
                          id="search"
                          className={`text-white block  left-20 w-full p-2 text-sm  inputSearch  rounded-sm bg-transparent focus:ring-[#C0AA83] focus:border-none dark:bg-transparent dark:border-gray-600 dark:placeholder-gray-400 `}
                          placeholder="چی میخوری ؟"
                          required
                          value={searchValue}
                          onChange={(event: any) =>
                            setSearchValue(event.target.value)
                          }
                        />
                        <FaSearch
                          onClick={serachInputHandler}
                          className={`
                              text-[#171717] cursor-pointer
                          `}
                        />
                      </div>
                    </div>
                  </div>
                </li>
              )}
              <li>
                <Link
                  href="/"
                  className={`block py-2 px-3   rounded lg:bg-transparent ${
                    pathname === "/" && " dark:text-[#C0AA83] "
                  } lg:p-0  `}
                  aria-current="page"
                >
                  صفحه اصلی
                </Link>
              </li>
              <li>
                <Link
                  href="/menu"
                  className={`block py-2 px-3 rounded hover:bg-[#c0aa83] lg:hover:bg-transparent ${
                    pathname === "/menu" && " dark:text-[#C0AA83] "
                  }  lg:border-0 lg:hover:text-[#C0AA83] lg:p-0  lg:dark:hover:text-[#C0AA83] dark:hover:text-white lg:dark:hover:bg-transparent" `}
                >
                  منو
                </Link>
              </li>
              <li>
                <Link
                  href="/reservation"
                  className={`block py-2 px-3 ${
                    pathname === "/reservation" && " dark:text-[#C0AA83] "
                  } rounded hover:bg-[#c0aa83] lg:hover:bg-transparent lg:border-0 lg:hover:text-[#C0AA83] lg:p-0  lg:dark:hover:text-[#C0AA83] dark:hover:text-white lg:dark:hover:bg-transparent" `}
                >
                  رزرو میز
                </Link>
              </li>
              <li>
                <Link
                  href={`/shop/product-category/${categoryName}`}
                  className={`block py-2 px-3  rounded hover:bg-[#c0aa83] ${
                    pathname === "/shop/product-category/coffee" &&
                    " dark:text-[#C0AA83] "
                  } lg:hover:bg-transparent lg:border-0 lg:hover:text-[#C0AA83] lg:p-0  lg:dark:hover:text-[#C0AA83] dark:hover:bg-[#c0aa83] dark:hover:text-white lg:dark:hover:bg-transparent `}
                >
                  فروشگاه
                </Link>
              </li>
              {toggleMenu && (
                <li>
                  <Link
                    href="/cart"
                    className={`flex justify-between items-center py-2 px-3 ${
                      pathname === "/cart" && " dark:text-[#C0AA83] "
                    } rounded hover:bg-[#c0aa83] lg:hover:bg-transparent lg:border-0 lg:hover:text-[#C0AA83] lg:p-0  lg:dark:hover:text-[#C0AA83] dark:hover:bg-[#c0aa83] dark:hover:text-white lg:dark:hover:bg-transparent `}
                  >
                    سبد خرید{" "}
                    <BsCartFill className="text-[#C0AA83] lg:hover:text-[#fff]" />
                  </Link>
                </li>
              )}
              <li className="relative block dropdown-container">
                <Link
                  href="/services"
                  className={`block flex items-center justify-between ${
                    pathname === "/services" && " dark:text-[#C0AA83] "
                  } gap-1 service_menu py-2 px-3 rounded hover:bg-[#c0aa83] lg:hover:bg-transparent lg:border-0 lg:hover:text-[#C0AA83] lg:p-0  lg:dark:hover:text-[#C0AA83] dark:hover:bg-[#c0aa83] dark:hover:text-white lg:dark:hover:bg-transparent`}
                >
                  خدمات
                </Link>
              </li>
              <li>
                <Link
                  href="/about-us"
                  className={`block py-2 px-3  rounded hover:bg-[#c0aa83] ${
                    pathname === "/about-us" && " dark:text-[#C0AA83] "
                  } lg:hover:bg-transparent lg:border-0 lg:hover:text-[#C0AA83] lg:p-0  lg:dark:hover:text-[#C0AA83] dark:hover:bg-[#c0aa83] dark:hover:text-white lg:dark:hover:bg-transparent `}
                >
                  درباره ما
                </Link>
              </li>
              <li>
                <Link
                  href="/contact-us"
                  className={`block py-2 px-3  rounded hover:bg-[#c0aa83] ${
                    pathname === "/contact-us" && " dark:text-[#C0AA83] "
                  } lg:hover:bg-transparent lg:border-0 lg:hover:text-[#C0AA83] lg:p-0  lg:dark:hover:text-[#C0AA83] dark:hover:bg-[#c0aa83] dark:hover:text-white lg:dark:hover:bg-transparent `}
                >
                  تماس با ما
                </Link>
              </li>
              {tokenExist ? (
                <li className="relative block dropdown-container">
                  <Link
                    href=""
                    className={`block flex items-center justify-between  gap-1 service_menu py-2 px-3  rounded hover:bg-[#c0aa83] lg:hover:bg-transparent lg:border-0 lg:hover:text-[#C0AA83] lg:p-0  lg:dark:hover:text-[#C0AA83] dark:hover:bg-[#c0aa83] dark:hover:text-white lg:dark:hover:bg-transparent`}
                    onClick={() => {
                      setIsDropDownTestMenu((prev) => !prev);
                    }}
                  >
                    <Link
                      href="/p-user"
                      className={`${
                        pathname === "/p-user" && " dark:text-[#C0AA83] "
                      }`}
                    >
                      حساب کاربری
                    </Link>
                    <FaAngleDown
                      className={`angle_show ${
                        dropDownTestMenu
                          ? "transition-all lg:transition-none duration-500	rotate-180	lg:rotate-0"
                          : "back_angle"
                      } `}
                    />
                  </Link>
                  <ul
                    className={`p-4 ${
                      dropDownTestMenu
                        ? " flex flex-col gap-4  lg:hidden "
                        : "hidden"
                    }  ${
                      pathname === "/"
                        ? "bg-[#00000033] lg:bg-black dark:text-white"
                        : "bg-white text-[#171717]  dark:text-[#171717]  "
                    } dropdown-list transition-height duration-100  lg:w-40 relative lg:absolute z-10`}
                  >
                    <li>
                      <Link
                        className={`block py-2 px-3 
                        rounded hover:bg-[#c0aa83] lg:hover:bg-transparent lg:border-0 lg:hover:text-[#C0AA83] lg:p-0  lg:dark:hover:text-[#C0AA83] dark:hover:bg-[#c0aa83] dark:hover:text-white lg:dark:hover:bg-transparent `}
                        href="/p-user/tickets"
                      >
                        تیکت های پشتیبانی
                      </Link>
                    </li>
                    <li>
                      <Link
                        className={`block py-2 px-3 
                        rounded hover:bg-[#c0aa83] lg:hover:bg-transparent lg:border-0 lg:hover:text-[#C0AA83] lg:p-0  lg:dark:hover:text-[#C0AA83] dark:hover:bg-[#c0aa83] dark:hover:text-white lg:dark:hover:bg-transparent `}
                        href="/p-user/comments"
                      >
                        کامنت‌ها
                      </Link>
                    </li>
                    <li>
                      <Link
                        className={`block py-2 px-3 
                        rounded hover:bg-[#c0aa83] lg:hover:bg-transparent lg:border-0 lg:hover:text-[#C0AA83] lg:p-0  lg:dark:hover:text-[#C0AA83] dark:hover:bg-[#c0aa83] dark:hover:text-white lg:dark:hover:bg-transparent `}
                        href="/p-user/wishlist"
                      >
                        علاقه‌مندی‌ها
                      </Link>
                    </li>
                    <li>
                      <Link
                        className={`block py-2 px-3 
                        rounded hover:bg-[#c0aa83] lg:hover:bg-transparent lg:border-0 lg:hover:text-[#C0AA83] lg:p-0  lg:dark:hover:text-[#C0AA83] dark:hover:bg-[#c0aa83] dark:hover:text-white lg:dark:hover:bg-transparent `}
                        href="/p-user/account-details"
                      >
                        جزئیات اکانت
                      </Link>
                    </li>
                  </ul>
                </li>
              ) : (
                <li>
                  <li>
                    <Link
                      href="/login-register"
                      className={`flex justify-between items-center py-2 px-3 ${
                        pathname == "/"
                          ? "text-white dark:text-white"
                          : "text-[#171717]"
                      } ${fixTop && "text-white"} rounded hover:bg-[#c0aa83] lg:hover:bg-transparent lg:border-0 lg:hover:text-[#C0AA83] lg:p-0  lg:dark:hover:text-[#C0AA83] dark:hover:bg-[#c0aa83] dark:hover:text-white lg:dark:hover:bg-transparent `}
                    >
                      ورود / عضویت
                    </Link>
                  </li>
                </li>
              )}
            </ul>
          </div>
          <div
            className={`hidden lg:flex justify-center items-center ${
              pathname === "/"
                ? "text-white"
                : fixTop
                ? "text-white"
                : " text-[#171717]"
            } mr-auto `}
          >
            <div
              className={`flex justify-between items-center gap-1 mx-5 text-lg ${
                isInputShow ? "opacity-10" : "opacity-100"
              }`}
            >
              <span
                className={`widget_basket text-white
                `}
              >
                {cartCount ? cartCount.length : 0}
              </span>
              <Link href="/cart">
                <BsCartFill />
              </Link>
            </div>
            <div className="search flex items-center">
              <FaSearch
                className="text-lg  cursor-pointer"
                onClick={() => {
                  setIsInputShow(true), serachInputHandler;
                }}
              />
            </div>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
