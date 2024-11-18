"use client";
import React, { useState } from "react";

// import heroImage from "../assets/hero-image.png";
import img1 from "../public/assets/Indusrty-Images/1-01.jpg";
import img2 from "../public/assets/Indusrty-Images/1-02.jpg";
import img3 from "../public/assets/Indusrty-Images/1-03.jpg";
import img4 from "../public/assets/Indusrty-Images/1-04.jpg";
import img5 from "../public/assets/Indusrty-Images/1-05.jpg";
import img6 from "../public/assets/Indusrty-Images/1-06.jpg";
import img7 from "../public/assets/Indusrty-Images/1-07.jpg";
import img8 from "../public/assets/Indusrty-Images/1-08.jpg";
import img9 from "../public/assets/Indusrty-Images/1-09.jpg";
import img10 from "../public/assets/Indusrty-Images/1-10.jpg";
import img11 from "../public/assets/Indusrty-Images/1-11.jpg";
import img12 from "../public/assets/Indusrty-Images/1-12.jpg";
import { Swiper, SwiperSlide } from "swiper/react";
import Link from "next/link";
import Image from "next/image";

let industryImages = [
  {
    path: img1,
    title: "Shipping & Logistics",
  },
  {
    path: img2,
    title: "Electrical",
  },
  {
    path: img3,
    title: "Automotive",
  },
  {
    path: img4,
    title: "Healthcare",
  },
  {
    path: img5,
    title: "HVAC",
  },
  {
    path: img6,
    title: "Label",
  },
  {
    path: img7,
    title: "Aerospace & Aviation",
  },
  {
    path: img8,
    title: "Packaging",
  },
  {
    path: img9,
    title: "Paper Mill",
  },
  {
    path: img10,
    title: "Printing",
  },
  {
    path: img11,
    title: "White Goods",
  },
  {
    path: img12,
    title: "Wireharness",
  },
];

const Industries = () => {
  const [hoveredIndex, setHoveredIndex] = useState(null);

  return (
    <section className="w-full">
      <h2 className="font-thin text-primary text-3xl text-center my-8">
        Industries{" "}
        <span className="inline-block font-bold italic text-shadow">
          We Serve
        </span>
      </h2>

      <div className="flex-box-center flex-wrap gap-5 px-4 md:px-12 lg:px-16">
        <Swiper
          loop={true}
          spaceBetween={20}
          autoplay={{
            delay: 2000,
            disableOnInteraction: false,
          }}
          breakpoints={{
            320: { slidesPerView: 1 },
            640: { slidesPerView: 2 },
            900: { slidesPerView: 3 },
            1280: { slidesPerView: 4 },
            1440: { slidesPerView: 5 },
          }}
        >
          {industryImages.map((item, key) => {
            return (
              <SwiperSlide key={key}>
                <div
                  className="relative shadow-xl rounded-xl overflow-hidden w-[250px] h-[300px]"
                  onMouseOver={() => setHoveredIndex(key)}
                  onMouseLeave={() => setHoveredIndex(null)}
                >
                  <figure className="w-full h-full relative z-0 before:absolute before:bottom-0 before:left-0 before:w-full before:h-full before:bg-gradient-to-t before:from-black hover:before:from-primary before:z-10">
                    <Image
                      src={item.path}
                      alt="industry"
                      className="absolute w-full h-full object-cover object-center"
                    />
                  </figure>
                  {/* <button
                  className={` ${
                    hoveredIndex === key ? "opacity-100" : "opacity-0"
                  } absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 btn-primary rounded-xl transition-none`}
                >
                  View More
                </button> */}
                  <h2
                    className={`py-2 absolute ${
                      hoveredIndex === key ? "bottom-8" : "bottom-4"
                    } w-2/3 left-1/2 -translate-x-1/2 z-10 text-center pointer-events-none rounded-full border border-white text-white transition-all`}
                  >
                    {item.title}
                  </h2>
                </div>
              </SwiperSlide>
            );
          })}
        </Swiper>
      </div>
    </section>
  );
};

export default Industries;
