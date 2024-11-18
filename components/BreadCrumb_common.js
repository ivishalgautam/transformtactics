"use client";
import Link from "next/link";
import React from "react";
import { AiFillHome } from "react-icons/ai";
import { VscChevronRight } from "react-icons/vsc";

function BreadCrumb_common() {
  return (
    <>
      <div className="breadcommon">
        <h2 className="text-[36px] font-bold text-primary relative z-10 text-center w-full">
          About Us
        </h2>
        <ul className="breadLinks text-white relative z-10 gap-1 text-center w-full flex-box-center">
          <li>
            <AiFillHome className="inline-block" /> <Link href="/">Home</Link>
          </li>
          <VscChevronRight className="inline-block" />
          <li>
            <Link href="">About</Link>
          </li>
        </ul>
      </div>
    </>
  );
}

export default BreadCrumb_common;
