import React from "react";
import headerImg from "../assets/header-img.avif";

const Header = () => {
  return (
    <>
      <div>
        <img src={headerImg} alt="header" className="object-cover w-auto" />
        <div className="flex flex-col px-4 py-10 md:bg-white md:shadow-lg md:p-10 md:w-11/13 md:mx-auto md:-translate-y-10 md:rounded  lg:shadow-none lg:absolute lg:top-48 lg:left-14 lg:bg-transparent lg:w-fit xl:top-52">
          <h2 className="text-xl font-semibold lg:text-2xl xl:text-3xl">Microsoft 365</h2>
          <p className="py-3 text-base font-normal lg:py-4 lg:w-80 xl:w-auto ">
            Everything you need to achieve more in less time
          </p>
          <div className="mt-3 flex flex-col items-start xsm:flex-row xsm:justify-start xsm:items-center lg:flex-col lg:items-start lg:mt-0 xl:flex-row xl:items-baseline">
            <button className="cursor-pointer bg-[#2E5DA5] hover:bg-[#154996] text-white text-base font-semibold transition duration-200 rounded-sm px-3 py-2">
              For one person
            </button>
            <div className="pt-4 xsm:ml-10 xsm:pt-0 lg:ml-0 lg:pt-3 xl:ml-10">
              <span className=" text-[#3468BC] cursor-pointer text-md hover:mr-1  font-semibold hover:underline lg:text-black ">
                For up to six people
              </span>
              <span className="ml-1 text-2xl text-[#3468BC] lg:text-black">
                &gt;
              </span>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Header;
