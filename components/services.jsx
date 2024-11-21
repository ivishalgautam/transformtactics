import Image from "next/image";
import React, { useState } from "react";

const data = [
  {
    img: "/services/3.jpeg",
    content: "Purchase Flow System",
  },
  {
    img: "/services/10.jpeg",
    content: "Inventory Management System (IMS)",
  },
  {
    img: "/services/5.jpeg",
    content: "Production Management System",
  },
  {
    img: "/services/6.jpeg",
    content: "Barcode Inventory System",
  },
  {
    img: "/services/2.jpeg",
    content: "Data Visualization",
  },
  {
    img: "/services/4.jpeg",
    content: "Help Ticket Process",
  },
];

export default function Services() {
  return (
    <div className="p-8">
      <div className="container grid sm:grid-cols-2 md:grid-cols-3 place-items-center gap-8">
        {data.map((item, ind) => (
          <div
            key={ind}
            className="rounded-lg shadow-lg overflow-hidden relative group cursor-pointer w-full h-full"
          >
            <Image
              alt={item.content}
              src={item.img}
              width={500}
              height={500}
              className="w-full h-full aspect-video object-cover object-center"
            />
            <div
              className={`absolute rounded-lg bg-black/80 transition-all duration-300 left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 text-center flex items-center justify-center w-0 h-0 opacity-0 group-hover:opacity-100 group-hover:text-white group-hover:w-full group-hover:h-full`}
            >
              {item.content}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
