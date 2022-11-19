import React from "react";
import { RiFacebookFill } from "react-icons/ri";
import { BsTwitter } from "react-icons/bs";
import { IoLogoLinkedin } from "react-icons/io";
import { BsArrowUp } from "react-icons/bs";

const Social = () => {
  return (
    <div className="w-11/13 mx-auto my-10 flex flex-col xsm:flex-row xsm:justify-between">
      <div className="flex my-4">
        <p className="mr-6 text-base">Follow Microsoft</p>
        <div className="flex items-center space-x-6">
          <RiFacebookFill className="text-xl cursor-pointer" title="Facebook" />
          <BsTwitter className="text-xl cursor-pointer" title="Twitter" />
          <IoLogoLinkedin className="text-xl cursor-pointer" title="LinkedIn" />
        </div>
      </div>
      <button className="bg-[#D9D9D9] hover:bg-white hover:drop-shadow-lg text-grey-darkest font-semibold text-center py-3 px-4 rounded inline-flex justify-center items-center w-full xsm:w-fit xsm:py-0">
        <BsArrowUp className="mr-1" />
        <span>Back to top</span>
      </button>
    </div>
  );
};

export default Social;
