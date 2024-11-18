"use client";
import React, { useState } from "react";
import { AiFillHome } from "react-icons/ai";
import { FaPenNib } from "react-icons/fa";
import { VscChevronRight } from "react-icons/vsc";
import { useEffect } from "react";
import { usePathname } from "next/navigation";
import Link from "next/link";
import Footer from "@/components/Footer";
import Head from "next/head";
import { blogs } from "@/store/blogs";
import Image from "next/image";
import { exhibitionData } from "@/store/exhibitionData";

const Page = () => {
  const [hoveredInd, setHoveredInd] = useState(null);
  const { pathname } = usePathname();
  useEffect(() => {
    // 👇️ scroll to top on page load
    window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
  }, [pathname]);

  return (
    <>
      <Head>
        <title>Exhibitions</title>
      </Head>
      {/* breadcrumb */}
      <div className="breadcommon">
        <h2 className="text-[24px] font-bold text-primary relative z-10 capitalize ">
          Exhibitions
        </h2>
        <ul className="breadLinks flex-box-start text-white text-xs md:text-sm relative z-10 gap-1">
          <li>
            <AiFillHome className="inline-block" /> <Link href="/">Home</Link>
          </li>
          <VscChevronRight className="inline-block" />
          <li>
            <Link href="#">Exhibitions</Link>
          </li>
        </ul>
      </div>
      <section className="bg-white px-4 md:px-16 py-10">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 gap-y-12 py-4 px-2 md:px-8">
          {exhibitionData.map(({ id, slug, address, images }) => {
            return (
              <Link
                key={id}
                href={`/exhibitions/${slug}`}
                onMouseOver={() => setHoveredInd(id)}
                onMouseLeave={() => setHoveredInd(null)}
                className="group overflow-hidden rounded-xl"
              >
                <div className="rounded-xl shadow-md relative md:pb-0">
                  <figure className="">
                    <Image
                      src={images[0]}
                      alt={address}
                      className="w-full h-[400px] group-hover:scale-110 object-cover object-center rounded-xl transition-all"
                    />
                  </figure>
                  <div
                    className={`px-4 py-6 pb-8 absolute inset-0 w-full h-full ${
                      hoveredInd === id ? "opacity-100" : "opacity-0"
                    } left-0 backdrop-blur-sm w-full bg-black/20 transition-all flex items-center justify-center`}
                  >
                    <h2 className="font-bold text-4xl text-center text-white tracking-wide">
                      {address}
                    </h2>
                  </div>
                </div>
              </Link>
            );
          })}
        </div>
      </section>
      <Footer />
    </>
  );
};

export default Page;
