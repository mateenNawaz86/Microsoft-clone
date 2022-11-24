import React, { useState } from "react";
import { BsList } from "react-icons/bs";
import { VscSearch } from "react-icons/vsc";
import { IoCartOutline } from "react-icons/io5";
import { HiOutlineUserCircle } from "react-icons/hi";
import logoImg from "../assets/logo.png";

const Navbar = () => {
  const [showMenu, setShowMenu] = useState(false);

  const showMenuHandler = () => setShowMenu(!showMenu);

  return (
    <>
      <div className="flex justify-between items-center h-14 px-4 md:px-8 lg:px-16">
        <div className="flex justify-between items-center space-x-3 md:order-2">
          <BsList
            className="text-2xl cursor-pointer md:hidden"
            onClick={() => showMenuHandler()}
          />
          <VscSearch
            className="text-xl cursor-pointer md:hidden"
            title="Search Microsoft.com"
          />
        </div>
        <div className="flex justify-between items-center md:order-1">
          <img className="w-28 cursor-pointer " src={logoImg} alt="logo" />
          <ul
            className={`md:flex justify-between items-center absolute left-0 w-full md:w-auto md:z-auto md:space-x-5 md:bg-white bg-[#f2f2f2]  md:static text-sm  transition-all duration-300 ease-in pb-6 md:pb-0 ${
              showMenu ? "top-14 opacity-100" : "top-[-560px]"
            } md:opacity-100 opacity-0`}
          >
            <li className="cursor-pointer py-3 px-6 md:py-0 md:px-0 md:ml-6 border-b-2 border-[#e7e7e7] md:border-b-0">
              <a
                href="https://www.microsoft.com/en/microsoft-365?rtc=1"
                target="_blank"
                rel="noreferrer"
              >
                Microsoft 360
              </a>
            </li>
            <li className="cursor-pointer py-3 px-6 md:py-0 md:px-0 border-b-2 border-[#e7e7e7] md:border-b-0">
              <a
                href="https://www.microsoft.com/en/microsoft-365/microsoft-office?rtc=1"
                target="_blank"
                rel="noreferrer"
              >
                Office
              </a>
            </li>
            <li className="cursor-pointer py-3 px-6 md:py-0 md:px-0 border-b-2 border-[#e7e7e7] md:border-b-0">
              <a
                href="https://www.microsoft.com/en-us/windows/"
                target="_blank"
                rel="noreferrer"
              >
                Windows
              </a>
            </li>
            <li className="cursor-pointer py-3 px-6 md:py-0 md:px-0">
              <a
                href="https://support.microsoft.com/en-US"
                target="_blank"
                rel="noreferrer"
              >
                Support
              </a>
            </li>
          </ul>
        </div>

        <div className="flex justify-between items-center md:order-3 space-x-4 text-sm">
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
