import React from "react";
import downImg from "../assets/app-download.webp";

const Download = () => {
  return (
    <div className="relative my-10 cursor-pointer">
      <img
        src={downImg}
        alt="header"
        className="object-cover w-auto lg:w-10/13 lg:mx-auto"
      />
      <div className="flex flex-col px-4 py-10 md:bg-white md:shadow-lg md:p-10 md:w-11/13 md:mx-auto md:-translate-y-10 md:rounded  lg:shadow-none lg:absolute lg:top-52 lg:left-28 lg:bg-transparent lg:w-fit xl:top-44">
        <h2 className="text-xl font-semibold lg:text-2xl xl:text-3xl">
          Outlook for iOS and Android
        </h2>
        <p className="py-3 text-base font-normal lg:py-4 lg:w-80 xl:w-auto ">
          Connect. Organise. Get things done.
        </p>
        <div className="mt-3 flex flex-col items-start xsm:flex-row xsm:justify-start xsm:items-center lg:flex-col lg:items-start lg:mt-0 xl:flex-row xl:items-baseline">
          <button className="cursor-pointer bg-[#2E5DA5] hover:bg-[#154996] text-white text-base font-semibold transition duration-200 rounded-sm px-3 py-2">
            Download now
          </button>
        </div>
      </div>
    </div>
  );
};

export default Download;
