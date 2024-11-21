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
          <div className="py-16 bg-white">
            <div className="grid sm:grid-cols-2 max-w-7xl mx-auto">
              <div className="aspect-video">
                <Image
                  alt="pricing"
                  src={"/images/diagram.jpeg"}
                  width={500}
                  height={500}
                  className="w-full h-full object-contain object-center rounded-lg"
                />
              </div>
              <div className="aspect-video flex items-start">
                <Image
                  alt="pricing"
                  src={"/images/pricing.jpeg"}
                  width={500}
                  height={500}
                  className="w-full object-contain object-center rounded-lg"
                />
              </div>
            </div>

            <div className="flex flex-col items-center gap-10 p-8 md:p-16 justify-center">
              <div>
                <h2 className="text-2xl font-bold text-center">
                  Process Flow Automation
                </h2>
                <p className="text-center">
                  Process flow automation is the process of using software to
                  replace humans with machines when performing a sequence of
                  activities. It’s often used in business to describe how
                  software programs can execute a set of activities within a
                  digital enterprise. Process automation can help businesses to:
                  Improve efficiency, Enhance agility, Save time, Reduce errors,
                  Boost productivity, and Improve customer experience.
                </p>
              </div>

              <div>
                <h2 className="text-2xl font-bold text-center">
                  Auto Pilot Formats
                </h2>
                <p className="text-center">
                  Automated scheduled reporting through google automation and
                  business intelligence tools.
                </p>
              </div>
            </div>
          </div>
        </FadeInWhenVisible>
        <FadeInWhenVisible>
          <Industries />
        </FadeInWhenVisible>
        <FadeInWhenVisible>
          <Footer />
        </FadeInWhenVisible>
        <WhatsAppWidget />
      </div>
    </>
  );
}
