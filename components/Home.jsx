"use client";
import About from "@/components/About";
import Footer from "@/components/Footer";
import Hero from "@/components/Hero";
import Industries from "@/components/Industries";
import Map from "@/components/Map";
import Products from "@/components/Products";
import Quality from "@/components/Quality";
import { FadeInWhenVisible } from "@/utils/FadeInWhenInView";
import { usePathname } from "next/navigation";
import { useEffect, useRef } from "react";
import WhatsAppWidget from "./whatsapp-widget";
import Services from "./services";
import Image from "next/image";
import InitialBanner from "./initial-banner";
import Processflow from "./process-flow";
import EnquiryForm from "./forms/enquiry";

export default function Home() {
  const container = useRef(null);
  const { pathname } = usePathname();
  useEffect(() => {
    // 👇️ scroll to top on page load
    window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
  }, [pathname]);

  return (
    <>
      <div ref={container} className="bg-pink-light">
        {/* <InitialBanner /> */}
        <FadeInWhenVisible>
          <Hero />
        </FadeInWhenVisible>
        <FadeInWhenVisible>
          <About />
        </FadeInWhenVisible>
        <FadeInWhenVisible>
          <Products />
        </FadeInWhenVisible>
        <FadeInWhenVisible>
          <Map />
        </FadeInWhenVisible>
        <FadeInWhenVisible>
          <Services />
        </FadeInWhenVisible>
        <FadeInWhenVisible>
          <Quality />
        </FadeInWhenVisible>

        <FadeInWhenVisible>
          <Processflow />
        </FadeInWhenVisible>
        <FadeInWhenVisible>
          <Industries />
        </FadeInWhenVisible>
        <FadeInWhenVisible>
          <div className="bg-white px-4 md:px-12 py-12 space-y-10">
            <h2 className="text-[#099140] text-4xl text-center font-bold">
              Enquiry Form
            </h2>
            <EnquiryForm />
          </div>
        </FadeInWhenVisible>

        <FadeInWhenVisible>
          <Footer />
        </FadeInWhenVisible>
        <WhatsAppWidget />
      </div>
    </>
  );
}
