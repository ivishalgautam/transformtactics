"use client";
import React, { Fragment, useEffect, useState } from "react";
import { BsSearch } from "react-icons/bs";
import { Menu, Transition } from "@headlessui/react";
import { motion } from "framer-motion";

import logo from "../public/assets/logo.png";
import { useSelector } from "react-redux";
import AutoCompleteBox from "./AutoCompleteBox";
import { RxCross2, RxHamburgerMenu } from "react-icons/rx";
import { usePathname, useRouter } from "next/navigation";
import Link from "next/link";
import Image from "next/image";

const Navbar = () => {
  const pathname = usePathname();
  const { products } = useSelector((store) => store.products);
  useEffect(() => {
    window.addEventListener("scroll", () => setInputVal(""));
  }, [typeof window !== "undefined" && window.scrollY]);
  const navList = [
    {
      id: 1,
      name: "home",
      path: "/",
      type: "link",
    },
    {
      id: 2,
      name: "about",
      path: "/about",
      type: "link",
    },
    {
      id: 3,
      name: "products",
      path: "/products",
      type: "dropdowns",
      submenu: products,
    },
    {
      id: 4,
      name: "blogs",
      path: "/blogs",
      type: "link",
    },
    {
      id: 6,
      name: "contact",
      path: "/contact-us",
      type: "link",
    },
  ];

  const [isNavOpened, setIsNavOpened] = useState(false);
  const [activeIndex, setActiveIndex] = useState(null);
  const [inputVal, setInputVal] = useState("");
  const filteredProducts = products.filter(
    (product) => inputVal !== "" && product.title.includes(inputVal)
  );

  const handleClick = (id) => {
    if (activeIndex === id) {
      setActiveIndex(null);
    } else {
      setActiveIndex(id);
    }
  };

  const handleListClick = (e) => {
    const { tagName } = e.target;
    if (tagName === "A") {
      setIsNavOpened(false);
    }
  };

  function handleHamClick() {
    setIsNavOpened(!isNavOpened);
    document
      .getElementsByTagName("body")[0]
      .classList.toggle("body-scroll-stop");
  }

  return (
    <motion.header
      initial={{ top: -100, opacity: 0 }}
      animate={{ top: 0, opacity: 1 }}
      // transition={{ ease }}
      className="flex items-center justify-between bg-white px-2 sm:px-8 md:px-12 lg:px-18 relative shadow-md py-2"
    >
      {/* logo */}
      <Link href="/">
        <figure className="size-10">
          <Image
            src={"/images/logo.png"}
            width={80}
            height={80}
            alt="Logo"
            className="w-full h-full object-contain object-center"
          />
        </figure>
      </Link>

      {/* desktop nav list */}
      <nav className="desktop hidden lg:block tracking-wide">
        <ul className="flex items-center justify-center gap-4 relative z-50">
          {navList.map((menu, key) => {
            return (
              <li key={key}>
                <Link
                  href={"#"}
                  className={`text-sm capitalize ${
                    pathname === menu.path && "font-semibold text-primary"
                  } `}
                >
                  {menu.name}
                </Link>
              </li>
            );
          })}
        </ul>
      </nav>

      {/* mobile nav */}
      <motion.nav
        initial={{ opacity: 0 }}
        animate={{ right: isNavOpened ? "0%" : "100%", opacity: 1 }}
        transition={{ ease: "easeIn", duration: 0.2 }}
        className={`mobile-nav block md:hidden lg:hidden absolute top-0 w-full h-screen overflow-scroll bg-primary transition-all z-20`}
      >
        <RxCross2
          size={30}
          className="absolute top-4 right-4 text-white"
          onClick={() => handleHamClick()}
        />
        <ul className="flex-box-col-start gap-2 w-full h-full pt-10">
          {navList.map((menu, key) => {
            return menu.type !== "dropdown" ? (
              <li
                key={key}
                className="w-full text-start border-b border-red-700 py-2 px-4 text-lg font-bold"
                onClick={(e) => handleListClick(e)}
              >
                <Link
                  href={menu.path}
                  className="text-white capitalize inline-block py-2 w-full"
                  onClick={() => handleHamClick()}
                >
                  {menu.name}
                </Link>
              </li>
            ) : (
              <li
                key={key}
                className="relative w-full py-2 px-4 text-start capitalize border-b border-red-700 cursor-pointer"
                onClick={() => handleClick(menu.id)}
              >
                <div className="flex-box-start py-2 text-lg font-bold text-white">
                  {menu.name}
                  <span className="inline-block">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 20 20"
                      fill="currentColor"
                      className="w-5 h-5"
                    >
                      <path
                        fillRule="evenodd"
                        d="M5.23 7.21a.75.75 0 011.06.02L10 11.168l3.71-3.938a.75.75 0 111.08 1.04l-4.25 4.5a.75.75 0 01-1.08 0l-4.25-4.5a.75.75 0 01.02-1.06z"
                        clipRule="evenodd"
                      />
                    </svg>
                  </span>
                </div>

                <ul
                  className={` ${
                    activeIndex === menu.id ? "block" : "hidden"
                  } transition-all w-full p-[15px] bg-white rounded-lg`}
                >
                  {menu.submenu?.map((submenu, key) => {
                    return (
                      <li
                        key={key}
                        className="text-black text-start text-sm mb-2"
                      >
                        <Link
                          href={`/product/${submenu.path}`}
                          className="inline-block h-full w-full"
                          onClick={() => {
                            setIsNavOpened(false);
                            handleHamClick();
                          }}
                        >
                          {submenu.title}
                        </Link>
                      </li>
                    );
                  })}
                </ul>
              </li>
            );
          })}
        </ul>
      </motion.nav>

      {/* search input */}
      <div className="flex items-center justify-center relative ml-auto lg:ml-0">
        <form>
          <input
            type="text"
            value={inputVal}
            placeholder="Search..."
            className="bg-pink-light px-4 pr-14 text-sm md:text-md py-3 rounded-md w-40 md:w-56 lg:w-64 !border !border-[#0000] focus:!bg-white focus:!border focus:!border-primary transition-all"
            onChange={(e) => setInputVal(e.target.value)}
          />
          <button className=" bg-white text-primary h-[44px] w-[44px] m-[1px] rounded-md flex items-center justify-center absolute right-0 top-0">
            <BsSearch size={15} />
          </button>
          {/* autocomplete box */}
          {/* <AutoCompleteBox
            filteredProducts={filteredProducts}
            inputVal={inputVal}
            setInputVal={setInputVal}
          /> */}
        </form>
      </div>

      {/* hamburger */}
      <button className="block lg:hidden ml-4" onClick={() => handleHamClick()}>
        <RxHamburgerMenu size={30} />
      </button>
    </motion.header>
  );
};

export default Navbar;
