import React from "react";
import headerImg from "../assets/header-img.avif";

const Header = () => {
  return (
    <>
      <div className="header">
        <img src={headerImg} alt="header" className="object-cover w-auto" />
        <div className="flex flex-col pl-4 py-10 pr- md:bg-white md:shadow-lg md:p-10 md:w-11/12 md:mx-auto md:-translate-y-10 md:rounded  lg:shadow-none lg:absolute lg:top-48 lg:left-14 lg:bg-transparent lg:w-fit">
          <h2 className="text-xl font-semibold lg:text-2xl">Microsoft 365</h2>
          <p className="py-3 text-base font-medium lg:py-5 lg:w-80">
            Everything you need to achieve more in less time
          </p>
          <div className="flex flex-col items-start xsm:flex-row xsm:justify-start xsm:items-center lg:flex-col lg:items-start ">
            <button className="cursor-pointer bg-[#2E5DA5] hover:bg-[#154996] text-white text-base font-semibold transition duration-200 rounded-sm px-3 py-2">
              For one person
            </button>
            <div className="py-4 xsm:ml-10 lg:ml-0">
              <span className=" text-[#3468BC] cursor-pointer text-lg hover:mr-1  font-semibold hover:underline lg:text-black ">
                For up to six people
              </span>
              <span className=" ml-1 text-2xl text-[#3468BC] lg:text-black">&gt;</span>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Header;
