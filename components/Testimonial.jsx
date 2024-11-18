"use client";
import React from "react";
import { FaQuoteLeft } from "react-icons/fa";

// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
// Import Swiper styles
import "swiper/css";

const Testimonial = () => {
  return (
    <section className="px-10 py-9 flex-box-center hidden">
      <Swiper
        autoplay={true}
        spaceBetween={20}
        breakpoints={{
          320: { slidesPerView: 1 },
          640: { slidesPerView: 2 },
          900: { slidesPerView: 3 },
        }}
      >
        {Array.from({ length: 6 }).map((_, key) => {
          return (
            <SwiperSlide key={key}>
              <div className="py-4 px-8 shadow-lg rounded-2xl bg-white flex-box-col-center gap-6 relative pt-10 pb-6 text-center my-10">
                <div className="text-primary absolute -top-5 left-8">
                  <FaQuoteLeft size={40} />
                </div>

                <h3 className="text-start">
                  Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                  Atque, minima exercitationem quasi, adipisci cumque quis
                  soluta vitae doloribus ipsa ullam molestias error voluptates
                  in placeat? Nulla repellat iure laborum excepturi?
                </h3>

                <div className="text-start w-full">
                  <p className="text-sm font-bold text-primary">User name</p>
                  <small className="text-xs text-slate-500">
                    professor, developer
                  </small>
                </div>
              </div>
            </SwiperSlide>
          );
        })}
      </Swiper>
    </section>
  );
};

export default Testimonial;
