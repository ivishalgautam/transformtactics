import Image from "next/image";
import React from "react";

export default function Processflow() {
  return (
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
            Process flow automation is the process of using software to replace
            humans with machines when performing a sequence of activities. It’s
            often used in business to describe how software programs can execute
            a set of activities within a digital enterprise. Process automation
            can help businesses to: Improve efficiency, Enhance agility, Save
            time, Reduce errors, Boost productivity, and Improve customer
            experience.
          </p>
        </div>

        <div>
          <h2 className="text-2xl font-bold text-center">Auto Pilot Formats</h2>
          <p className="text-center">
            Automated scheduled reporting through google automation and business
            intelligence tools.
          </p>
        </div>
      </div>
    </div>
  );
}
