"use client";
import React from "react";
// import { Link, useLocation, useNavigate } from "react-router-dom";
import {
  FaFacebookF,
  FaInstagram,
  FaLinkedinIn,
  FaYoutube,
} from "react-icons/fa";
import { MdKeyboardArrowRight } from "react-icons/md";
import {
  BsFillTelephoneFill,
  BsFillEnvelopeFill,
  BsPinMapFill,
} from "react-icons/bs";

import logo from "../public/assets/panamax-footer-logo.png";
import { useSelector } from "react-redux";
import Link from "next/link";
import { useRouter } from "next/navigation";
import Image from "next/image";

const navList = [
  {
    name: "home",
    path: "/",
  },
  {
    name: "about",
    path: "/about",
  },
  // {
  //   name: "products",
  //   path: "/products",
  // },
  {
    name: "contact",
    path: "/contact-us",
  },
  {
    name: "blogs",
    path: "/blogs",
  },
];

const services = [
  { name: "Digital Marketing Services", path: "#" },
  { name: "Facebook Paid Advertisement Services", path: "#" },
  { name: "SEO Services", path: "#" },
  { name: "Data Management Services", path: "#" },
  { name: "MS Excel Training & Services", path: "#" },
  { name: "Google App developement Services", path: "#" },
  { name: "Social Media Marketing Services", path: "#" },
  { name: "Pay per Click Services", path: "#" },
  { name: "Email Marketing Services", path: "#" },
  { name: "Hosting Services", path: "#" },
  { name: "WhatApp Marketing Services", path: "#" },
  { name: "Graphic Designing Services", path: "#" },
  { name: "Web developement Services", path: "#" },
  { name: "React.Js developement Services", path: "#" },
  { name: "Node.Js developement Services", path: "#" },
  { name: "Wordpress Development Services", path: "#" },
];
const Footer = () => {
  let navigate = useRouter();
  const { products } = useSelector((store) => store.products);

  return (
    <footer className="bg-gradient-to-r from-[#001234] to-[#000123] w-full px-4 md:px-12">
      {/* logo and address */}
      <div className="flex-box-center flex-wrap max-w-[1200px] mx-auto bg-white rounded-b-xl py-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-y-4">
          {/* logo */}
          <Link href="/" className="mx-auto">
            <figure className="size-20">
              <Image
                src={"/images/logo.png"}
                width={100}
                height={100}
                alt="Logo"
                className="object-contain object-center"
              />
            </figure>
          </Link>

          {/* address */}
          <div className="flex items-center justify-start md:justify-center gap-2 px-4 border-l-0 lg:border-l lg:border-[#777777]">
            <figure className="w-8">
              <BsFillEnvelopeFill size={50} className="text-primary" />
            </figure>
            <div className="">
              <p className="text-xs text-gray-500">Mail us at:</p>
              <h2 className="font-bold text-sm">
                kraftwerk@transformtactics.co.in
              </h2>
            </div>
          </div>

          <div className="flex items-center justify-start md:justify-center gap-2 px-4 border-l-0 lg:border-l lg:border-[#777777]">
            <figure className="w-8">
              <BsFillTelephoneFill size={50} className="text-primary" />
            </figure>
            <div className="">
              <p className="text-xs text-gray-500">Call us at:</p>
              <h2 className="font-bold text-sm">
                +91 6392838207,
                <br />
                +91 9625775962
              </h2>
            </div>
          </div>

          <div className="flex items-center justify-start md:justify-center gap-2 px-4 border-l-0 lg:border-l lg:border-[#777777]">
            <figure className="w-8">
              <BsPinMapFill size={50} className="text-primary" />
            </figure>
            <div className="">
              <p className="text-xs text-gray-500">Address:</p>
              <h2 className="font-bold text-sm">
                Sector 3, Ballabgarh Faridabad
              </h2>
            </div>
          </div>
        </div>
      </div>

      {/* navigation*/}
      <div className="grid grid-cols-4 mt-6 mx-auto max-w-[1200px] gap-y-8">
        <div className="col-span-4 lg:col-span-3 text-white flex-box-start flex-col items-start md:flex-row gap-4 md:gap-10">
          <div className="grid grid-cols-12 w-full gap-8 md:gap-0">
            {/* product categories */}
            <div className="col-span-12">
              <h2 className="text-xl mb-4 relative before:absolute before:top-0 before:left-0 before:w-8 before:h-1 before:rounded-full before:bg-primary">
                Services
              </h2>
              {/* categories */}
              <div className="grid grid-cols-1 md:grid-cols-3 items-start gap-4 gap-y-6">
                <ul>
                  {services.slice(0, 4).map((item, key) => {
                    return (
                      <li
                        key={key}
                        className="text-sm md:text-md lg:text-[14px] capitalize mb-1 nav-list overflow-x-hidden hover:overflow-x-visible relative"
                      >
                        <span className="inline-block  transition-all absolute -left-10 top-0">
                          <MdKeyboardArrowRight size={20} className="inline" />
                        </span>
                        <Link href={`/product/${item.path}`}>{item.name}</Link>
                      </li>
                    );
                  })}
                </ul>
                <ul>
                  {services.slice(4, 8).map((item, key) => {
                    return (
                      <li
                        key={key}
                        className="text-sm md:text-md lg:text-[14px] capitalize mb-1 nav-list overflow-x-hidden hover:overflow-x-visible relative"
                      >
                        <span className="inline-block  transition-all absolute -left-10 top-0">
                          <MdKeyboardArrowRight size={20} className="inline" />
                        </span>
                        <Link href={`/product/${item.path}`}>{item.name}</Link>
                      </li>
                    );
                  })}
                </ul>
                <ul>
                  {services.slice(8, 12).map((item, key) => {
                    return (
                      <li
                        key={key}
                        className="text-sm md:text-md lg:text-[14px] capitalize mb-1 nav-list overflow-x-hidden hover:overflow-x-visible relative"
                      >
                        <span className="inline-block  transition-all absolute -left-10 top-0">
                          <MdKeyboardArrowRight size={20} className="inline" />
                        </span>
                        <Link href={`/product/${item.path}`}>{item.name}</Link>
                      </li>
                    );
                  })}
                </ul>
                <ul>
                  {services.slice(12, 16).map((item, key) => {
                    return (
                      <li
                        key={key}
                        className="text-sm md:text-md lg:text-[14px] capitalize mb-1 nav-list overflow-x-hidden hover:overflow-x-visible relative"
                      >
                        <span className="inline-block  transition-all absolute -left-10 top-0">
                          <MdKeyboardArrowRight size={20} className="inline" />
                        </span>
                        <Link href={`/product/${item.path}`}>{item.name}</Link>
                      </li>
                    );
                  })}
                </ul>
              </div>
            </div>
          </div>
        </div>
        {/* nav list */}
        <div className="col-span-4 lg:col-span-1 !h-auto mt-8 md:mt-0 flex items-start justify-start flex-col rounded-lg gap-2 md:gap-4">
          <h3 className="text-white text-xl relative before:absolute before:top-0 before:left-0 before:w-8 before:h-1 before:rounded-full before:bg-primary">
            Quick links
          </h3>
          <ul>
            {navList.map((item, key) => {
              return (
                <li
                  key={key}
                  className="text-white mb-1 text-sm md:text-md lg:text-[14px] capitalize nav-list overflow-x-hidden hover:overflow-x-visible relative"
                >
                  <span className="inline-block  transition-all absolute -left-10 top-0">
                    <MdKeyboardArrowRight size={20} className="inline" />
                  </span>
                  <Link href={item.path}>{item.name}</Link>
                </li>
              );
            })}
          </ul>
          {/* socials */}
          <div className="mt-auto">
            <h3 className="text-white text-xl mb-2 relative before:absolute before:top-0 before:left-0 before:w-8 before:h-1 before:rounded-full before:bg-primary">
              Socials
            </h3>

            <div className="flex-box-center gap-2">
              <a
                href="#"
                className="flex-box-center bg-white hover:bg-secondary text-secondary hover:text-white w-8 h-8 rounded-full transition-colors cursor-pointer"
              >
                <FaFacebookF size={15} className="m-auto" />
              </a>
              <a
                href="#"
                className="flex-box-center bg-white hover:bg-secondary text-secondary hover:text-white w-8 h-8 rounded-full transition-colors cursor-pointer"
              >
                <FaInstagram size={15} className="m-auto" />
              </a>
              <a
                href="#"
                className="flex-box-center bg-white hover:bg-secondary text-secondary hover:text-white w-8 h-8 rounded-full transition-colors cursor-pointer"
              >
                <FaLinkedinIn size={15} className="m-auto" />
              </a>
              <a
                href="#"
                className="flex-box-center bg-white hover:bg-secondary text-secondary hover:text-white w-8 h-8 rounded-full transition-colors cursor-pointer"
              >
                <FaYoutube size={15} className="m-auto" />
              </a>
            </div>
          </div>
        </div>
      </div>

      <div className="max-w-[1200px] mx-auto border-t border-[#00051c] py-3 mt-8">
        {/* copyright */}
        <p className="text-sm text-white text-right">
          Copyright {new Date().getFullYear()}. All right Reserved
        </p>
      </div>
    </footer>
  );
};

export default Footer;
