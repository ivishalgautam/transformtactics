"use client";
import { blogs } from "@/store/blogs";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import React, { useEffect } from "react";
import { FaPenNib } from "react-icons/fa";

const Blogs = () => {
  const { pathname } = usePathname();
  useEffect(() => {
    // 👇️ scroll to top on page load
    window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
  }, [pathname]);
  return (
    <section className="bg-white mt-14 px-4 md:px-16 py-10">
      <h2 className="font-thin text-3xl text-primary text-center mb-4">
        Our{" "}
        <span className="inline-block italic font-bold text-shadow">Blogs</span>
      </h2>
      <div className="flex-box-center flex-wrap lg:flex-nowrap gap-8 gap-y-12 py-4 px-2 md:px-8">
        {blogs
          .slice(blogs.length - 3, blogs.length)
          .map(({ id, title, desc, image, postedOn, path }) => {
            return (
              <Link key={id} href={`/blogs/${path}`}>
                <div className="rounded-xl shadow-md  relative md:pb-0">
                  <figure className="">
                    <Image
                      src={image.src}
                      alt={"image"}
                      width={image.width}
                      height={image.height}
                      className="w-full h-[200px] object-cover object-center rounded-xl"
                    />
                  </figure>
                  <div className="px-4 py-6 pb-8">
                    <h2 className="font-bold">
                      {title.substring(0, 60) + "..."}
                    </h2>
                    <small className="text-xs text-primary">
                      {" "}
                      <FaPenNib className="inline-block mr-[3px]" /> Admin
                    </small>
                    <p className="text-sm">{desc.substring(0, 145) + "..."}</p>
                  </div>
                  <button className="absolute left-1/2 -translate-x-1/2 -bottom-5 btn-primary">
                    Read More
                  </button>
                </div>
              </Link>
            );
          })}
      </div>
    </section>
  );
};

export default Blogs;
