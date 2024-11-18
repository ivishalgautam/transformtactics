"use client";
import React from "react";
import { BiBarChartAlt2 } from "react-icons/bi";

const Statements = () => {
  return (
    <section className="bg-white px-4 md:px-10 lg:px-12 py-8">
      <h2 className="text-3xl font-thin text-primary capitalize mb-16 text-center">
        our <span className="italic font-bold text-shadow">statements</span>
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 gap-y-16">
        <div className="relative p-5 border rounded-xl text-center">
          <div className="absolute -top-12 left-1/2 -translate-x-1/2 text-primary bg-white rounded-full border-t p-4 pb-2">
            <BiBarChartAlt2 size={45} />
          </div>
          <h2 className="text-2xl font-bold mb-2">Vision</h2>
          <p className="text-lg">
            To be the premier global adhesive tape company, driving innovation
            and creating enduring value for our customers and stakeholders.
          </p>
        </div>
        <div className="relative p-5 border rounded-xl text-center">
          <div className="absolute -top-12 left-1/2 -translate-x-1/2 text-primary bg-white rounded-full border-t p-4 pb-2">
            <BiBarChartAlt2 size={45} />
          </div>
          <h2 className="text-2xl font-bold mb-2">Principles</h2>
          <p className="text-lg">
            Quality-driven manufacturing, customer-centric approach, continuous
            innovation, sustainable practices, and fostering long-term
            partnerships.
          </p>
        </div>
        <div className="relative p-5 border rounded-xl text-center">
          <div className="absolute -top-12 left-1/2 -translate-x-1/2 text-primary bg-white rounded-full border-t p-4 pb-2">
            <BiBarChartAlt2 size={45} />
          </div>
          <h2 className="text-2xl font-bold mb-2">Values</h2>
          <p className="text-lg">
            At Panamax Ltd., our core values of trust, integrity, excellence,
            collaboration, and agility guide us in delivering exceptional
            adhesive tape solutions.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Statements;
