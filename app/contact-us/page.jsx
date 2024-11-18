"use client";
import React from "react";
import { useEffect } from "react";
import { usePathname } from "next/navigation";
import Footer from "@/components/Footer";
import Head from "next/head";
import EnquiryForm from "@/components/forms/enquiry";

export const ContactUs = () => {
  const pathname = usePathname();
  useEffect(() => {
    // 👇️ scroll to top on page load
    window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
  }, [pathname]);

  return (
    <>
      <section className="py-4 h-auto mx-4">
        <Head>
          <title>Contact Us</title>
        </Head>
        <div className="h-full w-full bg-white rounded-xl overflow-hidden grid md:grid-cols-2 gap-10 gap-y-12 py-8 px-4 md:px-10 lg:px-12 shadow-sm relative after:absolute after:right-0 after:top-0 after:w-1/5 after:h-full after:bg-primary after:hidden after:md:block">
          {/* form */}
          <div className="form w-full col-span-2 md:col-span-1 space-y-2">
            <div className="text-start w-full">
              <h2 className="text-slate-950 text-3xl font-bold capitalize">
                contact{" "}
                <span className="text-primary text-shadow">panamax</span>
              </h2>
              <p className="text-sm text-slate-700">
                Contact us we will contact with you soon.
              </p>
            </div>
            <EnquiryForm />
          </div>

          {/* maps */}
          <div className="relative z-10 flex-box-center col-span-2 md:col-span-1">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3497.4026318216456!2d77.05306507456281!3d28.767247377952103!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390d0763f2494e39%3A0x1f7a1f8962e6b110!2sPANAMAX%20LIMITED!5e0!3m2!1sen!2sin!4v1685341572680!5m2!1sen!2sin"
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              className="rounded-xl w-full"
              // width="400"
              height="350"
              title="map"
            ></iframe>
          </div>
        </div>
      </section>
      <Footer />
    </>
  );
};

export default ContactUs;
