"use client";
import { motion } from "framer-motion";
import React, { useRef } from "react";
import aboutBanner from "../public/assets/about-banner.png";
import Link from "next/link";
import Image from "next/image";

const About = () => {
  const ref = useRef();

  return (
    <>
      <section className="bg-white w-full grid grid-cols-1 lg:grid-cols-12 gap-5 p-4 mt-4 md:p-10 relative after:absolute after:top-0 after:right-0 after:bg-primary after:w-1/6 after:h-full after:-z-10 z-0 after:hidden after:lg:block">
        {/* content */}
        <motion.div
          initial="hidden"
          animate={{ opacity: 1 }}
          transition={{ duration: 2 }}
          ref={ref}
          className="px-2 md:px-8 lg:px-10 col-span-12 md:col-span-7"
        >
          <h1 className="text-2xl font-bold">Your Needs, Our Solutions.</h1>
          <div className="my-6 text-sm">
            <p className="mt-4">
              We are excited to introduce how our automation and data analytics
              services can optimize your business processes, helping you save
              valuable time and resources while unlocking actionable insights.
            </p>
          </div>

          <div>
            <h1 className="font-thin text-3xl capitalize">Our Story</h1>
            <p className="my-4 text-sm">
              We established in 2013 with a team of 2 members now we have a team
              of 20+ experienced members who can use their knowledge and
              expertise to serve their Experience in automation and constraints
              finding.
            </p>
            <p className="my-4 text-sm">
              Welcome to a world of limitless possibilities, where the journey
              is as exhilarating as the destination, and where every moment is
              an opportunity to make your mark on the canvas of existence. The
              only limit is the extent of your imagination.
            </p>
          </div>
          <Link href="#" className="btn-primary">
            Read more
          </Link>
        </motion.div>

        {/* image section */}
        <motion.div
          initial="hidden"
          animate={{ opacity: 1 }}
          transition={{ duration: 2 }}
          ref={ref}
          className="flex-box-center col-span-12 md:col-span-5 w-full"
        >
          <figure>
            <Image
              src={"/images/home-about.webp"}
              width={400}
              height={400}
              alt=""
              className="sm:w-full lg:w-[85%] rounded-xl"
              loading="lazy"
            />
          </figure>
        </motion.div>
      </section>
    </>
  );
};

export default About;
