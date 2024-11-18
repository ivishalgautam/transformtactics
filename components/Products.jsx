"use client";
import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import SwiperCore, { Autoplay } from "swiper";
import Image from "next/image";

const Products = () => {
  SwiperCore.use([Autoplay]);
  return (
    <section className="bg-gradient-to-r from-[#001234] to-[#000123] w-full grid grid-cols-9 px-8 py-12 gap-4">
      <div className="col-span-9 lg:col-span-4 flex items-start justify-center flex-col">
        <h2 className="text-white font-thin text-3xl capitalize">
          About Company
        </h2>
        <p className="text-white my-4 text-sm">
          At Transform Tactics, we are experts in Google Workspace, Data
          Analytics, and Automation. We specialize in creating customized
          automation solutions and developing powerful systems tailored to the
          unique needs of your organization. Our services focus on automating
          repetitive tasks, optimizing data management, and building custom
          applications that improve operational efficiency and drive business
          growth. With a commitment to innovation and excellence, we deliver
          tailored solutions that enable businesses to streamline their
          processes, make data-driven decisions, and stay competitive in
          today&apos;s fast-paced environment.
        </p>
        {/* <Link className="btn-secondary-product">View more</Link> */}
      </div>

      {/* products */}
      <div className="col-span-9 lg:col-span-5 flex-box-center gap-4 flex-wrap md:flex-nowrap">
        <Swiper
          slidesPerView={2}
          loop={true}
          spaceBetween={20}
          autoplay={{
            delay: 2000,
            disableOnInteraction: false,
          }}
          breakpoints={{
            320: { slidesPerView: 1 },
            640: { slidesPerView: 2 },
            900: { slidesPerView: 2 },
            1440: { slidesPerView: 3 },
          }}
          className="bg-transparent"
        >
          <SwiperSlide>
            <figure className="w-full">
              <Image
                src={"/images/seo.jpeg"}
                alt=""
                className="rounded-lg"
                width={500}
                height={500}
              />
            </figure>
          </SwiperSlide>
          <SwiperSlide>
            <figure className="w-full">
              <Image
                src={"/images/data-management.webp"}
                alt=""
                className="rounded-lg"
                width={500}
                height={500}
              />
            </figure>
          </SwiperSlide>
          <SwiperSlide>
            <figure className="w-full">
              <Image
                src={"/images/excel-training.avif"}
                alt=""
                className="rounded-lg"
                width={500}
                height={500}
              />
            </figure>
          </SwiperSlide>
          <SwiperSlide>
            <figure className="w-full">
              <Image
                src={"/images/web-development.webp"}
                alt=""
                className="rounded-lg"
                width={500}
                height={500}
              />
            </figure>
          </SwiperSlide>
        </Swiper>
      </div>
    </section>
  );
};

export default Products;
