"use client";
import Footer from "@/components/Footer";
import { blogs } from "@/store/blogs";
import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import React, { useEffect } from "react";
import {
  FacebookIcon,
  FacebookShareButton,
  WhatsappIcon,
  WhatsappShareButton,
  LinkedinIcon,
  LinkedinShareButton,
} from "react-share";

export default function Blog({ slug }) {
  const blog = blogs.filter((e) => e.path === slug);
  const { title, desc, image, postedOn, brief } = blog[0];
  const { name, userImg } = blog[0].approvedBy[0];

  const { pathname } = usePathname();
  useEffect(() => {
    // 👇️ scroll to top on page load
    window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
  }, [pathname]);

  const shareUrl = "https://panamax.co.in/";
  return (
    <>
      <section className="container grid grid-cols-12 mx-auto mt-4 gap-4 mb-4 px-4">
        <Head>
          <title>{`Blog ${slug}`}</title>
        </Head>

        {/* blog */}
        <div className="col-span-12 lg:col-span-8 bg-white p-5 rounded-md box-shadow-card">
          {/* breadcrumbs */}
          <h2 className="text-lg md:text-3xl font-bold">{title}</h2>
          <div className="flex items-center justify-between border-y-2 border-[#EEEEEE] py-4 my-4">
            <figure className="w-[50px] md:w-[80px] mr-3">
              <Image
                src={userImg}
                alt="user"
                className="w-full h-full object-center object-cover rounded-full outline outline-1 outline-offset-2 outline-primary"
              />
            </figure>

            {/* user info */}
            <div className="mr-auto font-sm font-bold text-slate-900 capitalize">
              <span className="text-xs md:text-lg md:text-md">
                Approved by:
              </span>
              <h2 className="text-xs md:text-lg text-primary">{name}</h2>
            </div>

            <div>
              <h2 className="text-xs md:text-lg font-bold">Posted on:</h2>
              <p>{postedOn}</p>
            </div>
          </div>

          <div>
            <figure>
              <Image
                src={image}
                alt=""
                className="rounded-xl object-cover object-center w-full h-full"
              />
            </figure>
            <p
              className="mt-4 mb-8"
              dangerouslySetInnerHTML={{ __html: desc }}
            />

            <div>
              {brief.map((item, key) => {
                return (
                  <div key={key} className="mt-[20px] space-y-2">
                    <h5 className="text-lg border-l-[2px] pl-[5px] font-[600]  border-primary">
                      {item.name}
                    </h5>
                    <p dangerouslySetInnerHTML={{ __html: item.value }} />
                  </div>
                );
              })}
            </div>

            <div className="py-8 border-t-2 border-[#EEEEEE]">
              <h2 className="text-lg capitalize mb-3">share it also on -</h2>
              <div className="flex gap-2">
                <FacebookShareButton url={shareUrl}>
                  <FacebookIcon size={40} className="rounded-md" />
                </FacebookShareButton>
                <WhatsappShareButton url={shareUrl}>
                  <WhatsappIcon size={40} className="rounded-md" />
                </WhatsappShareButton>
                <LinkedinShareButton url={shareUrl}>
                  <LinkedinIcon size={40} className="rounded-md" />
                </LinkedinShareButton>
              </div>
            </div>
          </div>
        </div>

        <div className="col-span-12 lg:col-span-4 grid md:block grid-cols-2 lg:grid-cols-1 gap-y-4 gap-4">
          {/* recent blogs */}
          <div className="p-4 row-span-1 bg-white box-shadow-card rounded-md col-span-2">
            <h2 className="text-2xl text-center font-bold text-primary mb-3 capitalize">
              recent articles
            </h2>
            <div className="flex-box-col-center gap-3">
              {blogs
                .reverse()
                .slice(0, 10)
                .map((e) => {
                  return (
                    <Link
                      key={e.id}
                      href={`/blogs/${e.path}`}
                      className="w-full"
                    >
                      <div className="flex-box-start gap-3 border rounded-md w-full p-3 ">
                        <Image
                          src={e.image}
                          alt=""
                          className="w-[50px] h-[50px] object-cover object-right rounded-[5px] shadow"
                        />
                        <div className="text-sm">
                          <h2 className="text-ellipsis overflow-hidden">
                            {e.title}
                          </h2>
                          <p>{e.createOn}</p>
                        </div>
                      </div>
                    </Link>
                  );
                })}
            </div>
          </div>
        </div>
      </section>
      <Footer />
    </>
  );
}
