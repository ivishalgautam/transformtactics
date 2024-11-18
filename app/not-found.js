import React from "react";
import Notfound from "../public/assets/not-found.png";
import Image from "next/image";

const NotFound = () => {
  return (
    <div className="bg-white h-screen">
      <figure className="w-full">
        <Image
          src={Notfound}
          alt=""
          className="max-w-4xl mx-auto object-cover object-center"
        />
      </figure>
    </div>
  );
};

export default NotFound;
