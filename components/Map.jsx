import React from "react";
import mapImg from "../public/assets/map.png";
import Image from "next/image";
import Link from "next/link";

const Map = () => {
  return (
    <section className="px-4 md:px-12 flex-box-around flex-col lg:flex-row gap-4 py-10">
      {/* content */}
      <div className="flex-box-center lg:items-start flex-col flex-1">
        <h3 className="text-3xl font-thin text-primary capitalize">
          Our Services
        </h3>
        <p className="text-lg mt-4 ">
          At Transform Tactics, we specialize in developing innovative solutions
          that streamline business processes and enhance operational efficiency.
          Here’s how we can help: Process Automation to reduce manual work.
          Custom Tool and Platform Development tailored to your needs. Advanced
          Technology Integration for seamless operations. Let’s connect and
          explore how we can support your business with our solutions. We are
          committed to creating custom systems that align with your unique
          requirements.
        </p>

        <div className="mt-10">
          <h3 className="text-3xl font-thin text-primary capitalize">
            Our Solutions Include:
          </h3>
          <ul className="pt-10 border-t-2 border-dashed border-gray-300 relative ul-list-tick grid grid-cols-2 gap-x-8">
            <li> Sales Process FMS</li>
            <li> Recruitment Process FMS</li>
            <li> Breakdown Process</li>
            <li> Performance Monitoring System</li>
            <li> Appraisal Process</li>
            <li> Help Ticket Process</li>
            <li> Task Management & Delegation Process</li>
            <li> Production Monitoring System</li>
            <li> Purchase Monitoring System</li>
            <li> Inventory Management System</li>
            <li> Tool Age Monitoring</li>
            <li> Preventive Maintenance System</li>
            <li> Dashboards:</li>
            <li> Management Visualization Dashboard</li>
            <li> KRA & KPI Review Dashboard</li>
            <li> Automated Email Reporting</li>
          </ul>
        </div>
      </div>

      {/* map */}
      <div className="h-full flex-box-center flex-1">
        <div className="mapSite">
          <Image
            src={"/images/our-services.jpg"}
            width={500}
            height={500}
            alt=""
            className="rounded-lg"
          />
        </div>
      </div>
    </section>
  );
};

export default Map;
