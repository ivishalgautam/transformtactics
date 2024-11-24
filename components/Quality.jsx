"use client";
import React, { useState } from "react";
import { GiSandsOfTime, GiSpectacleLenses } from "react-icons/gi";
import { BsBriefcase, BsDeviceSsd, BsHeadphones } from "react-icons/bs";
import { MdOutlineDocumentScanner } from "react-icons/md";

const data = [
  {
    id: 1,
    title: "Delivering Excellence with Smart Automation",
    desc: "Our services are designed to optimize processes and elevate business efficiency using cutting-edge technology, ensuring seamless operations and measurable success.",
    icon: (
      <GiSandsOfTime
        size={50}
        className="justify-start justify-self start !h-auto mt-1 relative z-10 text-primary"
      />
    ),
  },
  {
    id: 2,
    title: "Timely Execution",
    desc: "We guarantee timely implementation and delivery of solutions, empowering businesses to meet deadlines and achieve objectives with precision.",
    icon: (
      <BsBriefcase
        size={50}
        className="justify-start justify-self start !h-auto mt-1 relative z-10 text-primary"
      />
    ),
  },
  {
    id: 3,
    title: "Expertise",
    desc: "Backed by years of experience in automation and process optimization, we provide in-depth knowledge and proven methodologies for superior results.",
    icon: (
      <BsDeviceSsd
        size={50}
        className="justify-start justify-self start !h-auto mt-1 relative z-10 text-primary"
      />
    ),
  },
  {
    id: 4,
    title: "Technical Superiority",
    desc: "We leverage advanced technologies to create reliable and efficient systems tailored to meet your specific needs, ensuring top-notch performance.",
    icon: (
      <GiSpectacleLenses
        size={50}
        className="justify-start justify-self start !h-auto mt-1 relative z-10 text-primary"
      />
    ),
  },
  {
    id: 5,
    title: "Transparency",
    desc: "We prioritize clear and open communication, providing accurate updates and fostering trust throughout the implementation process.",
    icon: (
      <MdOutlineDocumentScanner
        size={50}
        className="justify-start justify-self start !h-auto mt-1 relative z-10 text-primary"
      />
    ),
  },
  {
    id: 6,
    title: "End-to-End Solutions",
    desc: "From consultation to implementation and beyond, we offer comprehensive support for all your automation and process improvement needs, ensuring a smooth journey.",
    icon: (
      <BsHeadphones
        size={50}
        className="justify-start justify-self start !h-auto mt-1 relative z-10 text-primary"
      />
    ),
  },
];

const Quality = () => {
  const [hoveredIndex, setHoveredIndex] = useState(1);

  return (
    <section className="bg-white w-full grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 gap-y-8 px-4 md:px-12 py-12">
      {data.map((item) => {
        return (
          <div
            className={`grid grid-cols-6 gap-2 px-3 py-4 rounded-xl cursor-pointer relative before:absolute before:top-0 before:left-0 before:h-full before:w-full before:bg-primary before:rounded-2xl ${
              hoveredIndex === item.id
                ? "before:scale-100 !text-white"
                : "before:scale-0"
            }  before:transition-transform before:duration-500 before:ease-in-out overflow-hidden why-card`}
            onMouseEnter={() => setHoveredIndex(item.id)}
            onMouseLeave={() => setHoveredIndex(1)}
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
