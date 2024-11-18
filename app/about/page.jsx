"use client";
import React, { useEffect } from "react";
import { motion } from "framer-motion";
import Head from "next/head";
import Image from "next/image";
import { usePathname } from "next/navigation";
import Map from "@/components/Map";
import Footer from "@/components/Footer";
import Testimonial from "@/components/Testimonial";
import Statements from "@/components/Statements";
import BreadCrumb_common from "@/components/BreadCrumb_common";
import heroImage from "../../public/assets/hero-image.png";

const AboutPage = () => {
  const { pathname } = usePathname();
  useEffect(() => {
    // 👇️ scroll to top on page load
    window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
  }, [pathname]);
  return (
    <motion.div
      initial={{ x: "100%", opacity: 0 }}
      animate={{ x: "0%", opacity: 1 }}
      transition={{
        duration: 0.7,
        ease: "easeInOut",
        delayChildren: 0.3,
        staggerChildren: 0.2,
      }}
    >
      {/* breadcrumb */}
      <BreadCrumb_common />
      <section className="bg-white w-full grid grid-cols-1 lg:grid-cols-12 place-items-start gap-5 p-4 mt-4 md:p-10 relative after:absolute after:top-0 after:right-0 after:bg-primary after:w-1/6 after:h-full after:-z-10 z-0 after:hidden after:lg:block">
        {/* content */}
        <motion.div
          initial="hidden"
          animate={{ opacity: 1 }}
          transition={{ duration: 2 }}
          className="px-2 md:px-8 lg:px-10 col-span-1 lg:col-span-8"
        >
          <h2 className="text-2xl font-bold">
            About&nbsp;
            <span className="inline-block text-primary italic drop-shadow-lg">
              Panamax
            </span>
          </h2>
          <div className="my-6 text-sm">
            <p className="mt-4 text-lg">
              Panamax is built on trust and forging enduring relationships.
              Trust sets us apart and propels us towards success. Our mission is
              to help everyone achieve greatness and create remarkable stories
              together. We have the solutions to transform your dreams into
              reality. With pride, we declare, We Make Things Stick, and we
              commit to sticking with you on your journey towards fulfilling
              your aspirations.
            </p>
            <p className="mt-4 text-lg">
              In 1996, Mr. Chetan Singla founded Panamax, fueled by unwavering
              perseverance and passion. His vision has driven the growth and
              evolution of the Panamax family. Supporting him is our exceptional
              Managing Partner, Mrs. Monika Singla, who provides inspiration and
              strength. We are immensely grateful for their invaluable
              contributions, fortifying the Panamax family tree, and making it
              stronger and more resilient.
            </p>
            <p className="mt-4 text-lg">
              We are a leading manufacturer and supplier of adhesive tapes,
              specializing in customized industrial solutions. As a preferred
              OEM partner, we offer comprehensive services. Our commitment to
              quality, design, and packaging differentiates us, as we aim to
              surpass customer expectations, providing a holistic experience and
              fostering enduring relationships.
            </p>
            <p className="mt-4 text-lg">
              To ensure success, we invest in capabilities, meeting global
              quality standards and embracing advanced technology. Our aim is to
              earn customer trust through exceptional products and friendly,
              forthcoming customer service.
            </p>
            <p className="mt-4 text-lg">
              We are proud to have earned the trust and partnership of esteemed
              enterprises in diverse industries such as PSUs, automotive,
              healthcare, telecommunications, hospitality, electrical,
              electronics, fabrication, and packaging. As your one-stop solution
              for adhesive tapes, we invite you to connect with us for a
              mutually beneficial journey.
            </p>
          </div>
        </motion.div>

        {/* image section */}
        <motion.div
          initial="hidden"
          animate={{ opacity: 1 }}
          transition={{ duration: 2 }}
          className="flex-box-center col-span-1 lg:col-span-4"
        >
          <figure>
            <Image src={heroImage} alt="img" />
          </figure>
        </motion.div>
      </section>
      <Statements />
      <Testimonial />
      <Map />
      <Footer />
    </motion.div>
  );
};

export default AboutPage;
