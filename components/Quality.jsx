"use client";
import React, { useState } from "react";
import { GiSandsOfTime, GiSpectacleLenses } from "react-icons/gi";
import { BsBriefcase, BsDeviceSsd, BsHeadphones } from "react-icons/bs";
import { BiSupport } from "react-icons/bi";

const data = [
  {
    id: 1,
    title: "Ontime",
    desc: "We ensure on-time delivery, providing reliable and punctual delivering services to meet customer deadlines and expectations.",
    icon: (
      <GiSandsOfTime
        size={50}
        className="justify-start justify-self start !h-auto mt-1 relative z-10 text-primary"
      />
    ),
  },
  {
    id: 2,
    title: "Experience",
    desc: "With years of experience in the adhesive tape manufacturing industry, we bring extensive knowledge, expertise, and a proven track record of delivering high-quality products.",
    icon: (
      <BsBriefcase
        size={50}
        className="justify-start justify-self start !h-auto mt-1 relative z-10 text-primary"
      />
    ),
  },
  {
    id: 3,
    title: "Technical",
    desc: "We hold a significant technical advantage in the tape industry, leveraging advanced technologies and innovative solutions for superior performance and reliability.",
    icon: (
      <BsDeviceSsd
        size={50}
        className="justify-start justify-self start !h-auto mt-1 relative z-10 text-primary"
      />
    ),
  },
  {
    id: 4,
    title: "Transparency",
    desc: "We prioritize transparency, fostering open communication and providing customers with clear and accurate information throughout their engagement.",
    icon: (
      <GiSpectacleLenses
        size={50}
        className="justify-start justify-self start !h-auto mt-1 relative z-10 text-primary"
      />
    ),
  },
  {
    id: 5,
    title: "End to end",
    desc: "We provides comprehensive end-to-end support, guiding and assisting customers at every stage of their tape-related needs for a seamless experience.",
    icon: (
      <BsHeadphones
        size={50}
        fill="#ffffff"
        className="justify-start justify-self start !h-auto mt-1 relative z-10 text-primary"
      />
    ),
  },
];

const Quality = () => {
  const [hoveredIndex, setHoveredIndex] = useState(5);

  return (
    <section className="bg-white w-full grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 gap-y-8 px-4 md:px-12 py-12">
      <div className="px-1 py-2 rounded-xl transition-all flex-box-col-start gap-y-4">
        <h2 className="text-primary capitalize text-3xl font-thin">
          doing{" "}
          <span className="font-bold italic text-shadow capitalize inline-block">
            best practices
          </span>{" "}
          <br />
          for best quality
        </h2>
        <p className="text-lg">
          Panamax implements best practices to ensure top-notch quality,
          employing efficient processes, rigorous quality control, and
          industry-leading standards for superior service and customer
          satisfaction.
        </p>
      </div>

      {data.map((item) => {
        return (
          <div
            className={`grid grid-cols-6 gap-2 px-3 py-4 rounded-xl cursor-pointer relative before:absolute before:top-0 before:left-0 before:h-full before:w-full before:bg-primary  before:rounded-2xl ${
              hoveredIndex === item.id
                ? "before:scale-100 !text-white"
                : "before:scale-0"
            }  before:transition-transform before:duration-500 before:ease-in-out overflow-hidden why-card`}
            onMouseEnter={() => setHoveredIndex(item.id)}
            onMouseLeave={() => setHoveredIndex(5)}
            key={item.id}
          >
            {item.icon}
            <div className="col-span-5 relative z-10">
              <h2
                className={`${
                  hoveredIndex === item.id ? "text-white" : "text-primary"
                }  font-bold capitalize text-xl`}
              >
                {item.title}
              </h2>
              <p className="mt-3 text-lg">{item.desc}</p>
            </div>
          </div>
        );
      })}
    </section>
  );
};

export default Quality;
