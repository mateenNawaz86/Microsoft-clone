import React from "react";
import { BsList } from "react-icons/bs";
import { VscSearch } from "react-icons/vsc";
import { IoCartOutline } from "react-icons/io5";
import { HiOutlineUserCircle } from "react-icons/hi";
import logoImg from "../assets/logo.png";

const Navbar = () => {
  return (
    <>
      <div className="flex justify-between items-center h-16 px-3 ">
        <div className="flex justify-between items-center space-x-3 md:order-2">
          <BsList className="text-2xl cursor-pointer md:hidden" />
          <VscSearch
            className="text-xl cursor-pointer md:hidden"
            title="Search Microsoft.com"
          />
        </div>
        <div className="flex justify-between items-center space-x-7 md:order-1">
          <img className="w-28 cursor-pointer" src={logoImg} alt="logo" />
          <ul className="md:flex justify-between items-center bg-[#F2F2F2] inset-0 -translate-x-96 inline-block absolute w-fit md:space-x-5 md:translate-x-0  md:w-auto md:bg-white md:static">
            <li className="cursor-pointer">Microsoft 360</li>
            <li className="cursor-pointer">Office</li>
            <li className="cursor-pointer">Windows</li>
            <li className="cursor-pointer">Support</li>
          </ul>
        </div>

        <div className="flex justify-between items-center md:order-3 space-x-4">
          <p className="cursor-pointer hidden md:block">All Microsoft</p>
          <VscSearch
            className=" ml-4 text-xl cursor-pointer hidden md:block"
            title="Search Microsoft.com"
          />
          <IoCartOutline
            className="text-xl cursor-pointer"
            title="0 items in shopping cart"
          />
          <HiOutlineUserCircle
            className="text-3xl cursor-pointer"
            title="Sign in to your account"
          />
        </div>
      </div>
    </>
  );
};

export default Navbar;
