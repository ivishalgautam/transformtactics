"use client";
import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { RiSendPlaneFill } from "react-icons/ri";
import { AiFillHome } from "react-icons/ai";
import { VscChevronRight } from "react-icons/vsc";
import { BsChevronDown, BsChevronUp } from "react-icons/bs";
import { Swiper, SwiperSlide } from "swiper/react";
import Modal from "../components/Modal";
import { openModal } from "../store/features/modalSlice";
import { motion } from "framer-motion";
import Footer from "../components/Footer";
import { useEffect } from "react";
import { usePathname } from "next/navigation";
import Link from "next/link";
import Image from "next/image";
import NotFound from "@/app/not-found";

export const Product = ({ productId }) => {
  let dispatch = useDispatch();
  const pathname = usePathname();

  useEffect(() => {
    // 👇️ scroll to top on page load
    window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
  }, [pathname]);

  let slice = 5;
  const [showMore, setShowMore] = useState(false);
  const [showFeatures, setShowFeatures] = useState(slice);
  const [showApplications, setShowApplications] = useState(slice);

  const { products } = useSelector((store) => store.products);

  const filteredProduct = products?.filter((e) => e.path === productId);

  if (!filteredProduct.length) {
    return <NotFound />;
  }

  const {
    title,
    name,
    about,
    features,
    description,
    applications,
    industrialUses,
    productImg,
    videoPath,
  } = filteredProduct[0];

  const container = {
    hidden: { opacity: 1, scale: 0 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: {
        delayChildren: 0.3,
        staggerChildren: 0.2,
      },
    },
  };

  const item = {
    hidden: { y: "100", opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
    },
  };

  return (
    <>
      <motion.section
        variants={container}
        initial="hidden"
        animate="visible"
        className="bg-white overflow-hidden"
      >
        {/* breadcrumb */}
        <motion.div variants={item} className="breadcommon">
          <h2 className="text-[24px] font-bold text-primary relative z-10 capitalize ">
            {name}
          </h2>
          <ul className="breadLinks flex-box-start text-white text-xs md:text-sm relative z-10 gap-1">
            <li>
              <AiFillHome className="inline-block" /> <Link href="/">Home</Link>
            </li>
            <VscChevronRight className="inline-block" />
            <li>
              <Link href="/">Product</Link>
            </li>
            <VscChevronRight className="inline-block" />
            <li className="">
              <Link href="#">{name}</Link>
            </li>
          </ul>
        </motion.div>

        {/* product details */}
        <motion.div
          variants={item}
          className="bg-white p-8 px-4 md:px-10 lg:px-12 rounded-lg grid grid-cols-12 gap-6 relative before:absolute before:left-0 before:top-0 before:bg-pink-light before:w-1/5 before:h-full before:hidden before:md:block"
        >
          <Swiper slidesPerView={1} className="col-span-12 md:col-span-5">
            {Array.from({ length: 2 }).map((_, key) => (
              <SwiperSlide key={key}>
                <figure className="col-span-2 md:col-span-1 relative z-10 h-full w-full">
                  <Image
                    src={productImg}
                    alt={`Product img-${key + 1}`}
                    className="rounded-2xl object-contain !h-auto"
                  />
                </figure>
              </SwiperSlide>
            ))}
          </Swiper>

          <div className="col-span-12 md:col-span-7 py-4 flex-box-col-center items-start transition-all">
            <h1 className="text-2xl font-bold text-gray-900 capitalize border-l-[3px] mb-4 border-primary pl-2">
              {title}
            </h1>
            <div>
              <p
                dangerouslySetInnerHTML={{
                  __html: showMore ? about : about.substring(0, 700),
                }}
                className="inline"
              />
              {about.length > 700 && (
                <button
                  onClick={() => {
                    setShowMore(!showMore);
                  }}
                  className="text-primary text-sm font-bold ml-2"
                >
                  {showMore ? " show less" : " show more..."}
                </button>
              )}
            </div>
            {/* <p className="mt-2">
            <span className="font-bold capitalize">Color :</span> Creamish
          </p>
          <p className="">
            <span className="font-bold capitalize">standard lenght -</span>{" "}
            50Mtr
          </p> */}
            <button
              className="btn-primary capitalize mt-3 py-1"
              onClick={() => {
                dispatch(openModal());
              }}
            >
              send enquiry{" "}
              <span className="">
                <RiSendPlaneFill className="inline" size={15} />
              </span>
            </button>
          </div>
        </motion.div>

        <Modal productTitle={filteredProduct[0].title} />

        {/* product specs */}
        <motion.div
          variants={item}
          className="bg-white px-4 md:px-4 lg:px-12 py-4"
        >
          {/* description */}
          <div className="bg-pink-light rounded-xl overflow-hidden px-12 py-10">
            <ul className="pt-10 border-t-2 border-dashed border-gray-300 relative ul-list-tick">
              <div className="text-white bg-primary rounded-full px-4 py-1 absolute -top-4 left-1/2 -translate-x-1/2 after:absolute after:-bottom-1 after:left-1/2 after:-translate-x-1/2 after:rotate-45 after:w-5 after:h-5 after:bg-primary z-10 after:-z-[1]">
                Description
              </div>
              {description?.map((item, key) => {
                return (
                  <li className="mb-1" key={key}>
                    {item}
                  </li>
                );
              })}
            </ul>
          </div>

          {/* features */}
          <div className="mt-10">
            <h2 className="text-3xl text-primary font-thin capitalize text-center my-6">
              product{" "}
              <span className="font-bold italic text-shadow">features</span>
            </h2>
            <table className="table-auto border-separate border-spacing-y-4 px-4 w-full">
              <tbody>
                {features?.slice(0, showFeatures).map((feature, key) => {
                  return (
                    <tr className="even:bg-gray-100" key={key}>
                      <th className="align-top text-start p-2 rounded-l">
                        {feature.name}
                      </th>
                      <td className="p-2 rounded-r text-sm">{feature.about}</td>
                    </tr>
                  );
                })}
              </tbody>
            </table>
            {features.length > slice && (
              <button
                className="text-primary mx-auto w-full font-bold flex-box-col-center"
                onClick={() =>
                  setShowFeatures((prev) =>
                    features.length > prev
                      ? prev + features.length - slice
                      : prev - (features.length - slice)
                  )
                }
              >
                {features.length <= showFeatures ? (
                  <>
                    <BsChevronUp /> show less
                  </>
                ) : (
                  <>
                    show more <BsChevronDown />
                  </>
                )}
              </button>
            )}
          </div>
        </motion.div>

        {/* product application */}
        <motion.div
          variants={item}
          className="bg-white my-10 relative overflow-hidden  pb-4 after:absolute after:-top-[1.25rem] after:right-0 after:h-[300%] after:w-1/3 after:bg-pink-light after:rotate-[50deg]"
        >
          <h2 className="text-3xl font-thin text-primary capitalize text-center">
            product{" "}
            <span className="font-bold italic text-shadow"> application</span>
          </h2>

          <div className="grid grid-cols-12 px-4 md:px-10 lg:px-20 py-10 relative z-10 gap-y-8">
            <div
              className={`col-span-12 ${
                videoPath === "" ? "lg:col-span-12" : "lg:col-span-8"
              }`}
            >
              <ul className={`px-4 ul-list-tick`}>
                {applications?.slice(0, showApplications).map((item, key) => {
                  return (
                    <li className="mb-2" key={key}>
                      {item.about}
                    </li>
                  );
                })}
                {applications.length > slice && (
                  <button
                    className="text-primary font-bold w-full flex-box-col-center"
                    onClick={() =>
                      setShowApplications((prev) =>
                        applications.length > prev
                          ? prev + applications.length - slice
                          : prev - (applications.length - slice)
                      )
                    }
                  >
                    {applications.length <= showApplications ? (
                      <>
                        <BsChevronUp /> show less
                      </>
                    ) : (
                      <>
                        show more <BsChevronDown />
                      </>
                    )}
                  </button>
                )}
              </ul>
            </div>
            {/* below section hidden might show later */}
            {videoPath !== "" && (
              <div
                className={`col-span-12 lg:col-span-4 rounded-xl overflow-hidden flex-box-center md:items-start`}
              >
                {/* video section */}
                <motion.div variants={item} className="px-4 flex-box-center">
                  <iframe
                    width="315"
                    height="560"
                    src={`https://www.youtube.com/embed/${videoPath}`}
                    title="YouTube video player"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                    allowFullScreen
                    className="rounded-xl shadow-lg"
                  ></iframe>
                </motion.div>
              </div>
            )}
          </div>
        </motion.div>

        {/* icons */}
        <div className="flex-box-center mt-4 gap-6 flex-wrap relative z-10 px-4 md:px-10 lg:px-20 gap-y-20 hidden">
          {applications.map((item, key) => {
            return (
              <div
                key={key}
                className="rounded-2xl bg-white flex-box-col-between gap-y-1 w-[180px] h-[120px]"
              >
                <figure className="p-4 rounded-lg box-shadow-card">
                  <Image src={item.icon} alt="" className="w-[50px]" />
                </figure>
                <h2 className="pt-2 text-center text-sm">{item.name}</h2>
              </div>
            );
          })}
        </div>

        {/* industries */}
        <motion.div variants={item} className="my-10 px-4 md:px-10 lg:px-12">
          <h2 className="font-thin text-3xl text-primary capitalize text-center">
            used by{" "}
            <span className="font-bold italic text-shadow"> industries</span>
          </h2>
          <div className="mt-10 flex-box-center flex-wrap gap-4">
            {industrialUses?.map((item, key) => {
              return (
                <div
                  key={key}
                  className="rounded-xl p-4 w-[150px] md:w-[200px] h-[120px] md:h-[150px] flex flex-col items-center justify-around box-shadow-card"
                >
                  <Image src={item.icon} alt="" className="w-[50px]" />
                  <span className="capitalize text-center text-xs md:text-sm">
                    {item.name}
                  </span>
                </div>
              );
            })}
          </div>
        </motion.div>
      </motion.section>
      <Footer />
    </>
  );
};
