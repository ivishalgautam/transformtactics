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
          <Quality />
        </FadeInWhenVisible>
        <FadeInWhenVisible>
          <Industries />
        </FadeInWhenVisible>
        <FadeInWhenVisible>{/* <Blogs /> */}</FadeInWhenVisible>
        <FadeInWhenVisible>
          <Footer />
        </FadeInWhenVisible>
      </div>
    </>
  );
}
