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
          <h1 className="text-2xl font-bold">
            YOUR NEEDS, OUR SOLUTIONS. STRATEGIES PROPOSAL
          </h1>
          <div className="my-6 text-sm">
            <p className="mt-4">
              We are excited to introduce how our automation and data analytics
              services can optimize your business processes, helping you save
              valuable time and resources while unlocking actionable insights.
            </p>
          </div>
          <Link href="/about" className="btn-primary">
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
