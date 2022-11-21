import React from "react";
import { GoGlobe } from "react-icons/go";

const Footer = () => {
  return (
    <>
      <div className="grid grid-cols-1 gap-4 sm:grid-cols-3 lg:grid-cols-5 py-10 px-6 bg-[#F2F2F2]">
        <div className="flex flex-col space-y-2">
          <h1 className="text-[#616161] text-lg font-semibold">
            Microsoft Store
          </h1>
          <p className="text-[#181818] text-xs font-thin cursor-pointer hover:underline">
            Account profile
          </p>
          <p className="text-[#181818] text-xs font-thin cursor-pointer hover:underline">
            Download Center
          </p>
          <p className="text-[#181818] text-xs font-thin cursor-pointer hover:underline">
            Returns
          </p>
          <p className="text-[#181818] text-xs font-thin cursor-pointer hover:underline">
            Order tracking
          </p>
        </div>
        <div className="flex flex-col space-y-2">
          <h1 className="text-[#616161] text-lg font-semibold">Education</h1>
          <p className="text-[#181818] text-xs font-thin cursor-pointer hover:underline">
            Microsoft in education
          </p>
          <p className="text-[#181818] text-xs font-thin cursor-pointer hover:underline">
            Devices for education
          </p>
          <p className="text-[#181818] text-xs font-thin cursor-pointer hover:underline">
            Microsoft Teams for Education
          </p>
          <p className="text-[#181818] text-xs font-thin cursor-pointer hover:underline">
            Microsoft 365 Education
          </p>
          <p className="text-[#181818] text-xs font-thin cursor-pointer hover:underline">
            Office Education
          </p>
          <p className="text-[#181818] text-xs font-thin cursor-pointer hover:underline">
            Educator training and development
          </p>
          <p className="text-[#181818] text-xs font-thin cursor-pointer hover:underline">
            Deals for students and parents
          </p>
          <p className="text-[#181818] text-xs font-thin cursor-pointer hover:underline">
            Azure for students
          </p>
        </div>
        <div className="flex flex-col space-y-2">
          <h1 className="text-[#616161] text-lg font-semibold">Business</h1>
          <p className="text-[#181818] text-xs font-thin cursor-pointer hover:underline">
            Microsoft Cloud
          </p>
          <p className="text-[#181818] text-xs font-thin cursor-pointer hover:underline">
            Microsoft Security
          </p>
          <p className="text-[#181818] text-xs font-thin cursor-pointer hover:underline">
            Azure
          </p>
          <p className="text-[#181818] text-xs font-thin cursor-pointer hover:underline">
            Dynamics 365
          </p>
          <p className="text-[#181818] text-xs font-thin cursor-pointer hover:underline">
            Microsoft 365
          </p>
          <p className="text-[#181818] text-xs font-thin cursor-pointer hover:underline">
            Microsoft Advertising
          </p>
          <p className="text-[#181818] text-xs font-thin cursor-pointer hover:underline">
            Microsoft Industry
          </p>
          <p className="text-[#181818] text-xs font-thin cursor-pointer hover:underline">
            Microsoft Teamss
          </p>
        </div>

        <div className="flex flex-col space-y-2">
          <h1 className="text-[#616161] text-lg font-semibold">
            Developer & IT
          </h1>
          <p className="text-[#181818] text-xs font-thin cursor-pointer hover:underline">
            Developer Center
          </p>
          <p className="text-[#181818] text-xs font-thin cursor-pointer hover:underline">
            Documentation
          </p>
          <p className="text-[#181818] text-xs font-thin cursor-pointer hover:underline">
            Microsoft Learn
          </p>
          <p className="text-[#181818] text-xs font-thin cursor-pointer hover:underline">
            Azure Marketplace
          </p>
          <p className="text-[#181818] text-xs font-thin cursor-pointer hover:underline">
            AppSource
          </p>
          <p className="text-[#181818] text-xs font-thin cursor-pointer hover:underline">
            Microsoft Power Platform
          </p>
          <p className="text-[#181818] text-xs font-thin cursor-pointer hover:underline">
            Visual Studio
          </p>
        </div>
        <div className="flex flex-col space-y-2">
          <h1 className="text-[#616161] text-lg font-semibold">Company</h1>
          <p className="text-[#181818] text-xs font-thin cursor-pointer hover:underline">
            About Microsoft
          </p>
          <p className="text-[#181818] text-xs font-thin cursor-pointer hover:underline">
            Company news
          </p>
          <p className="text-[#181818] text-xs font-thin cursor-pointer hover:underline">
            Privacy at Microsoft
          </p>
          <p className="text-[#181818] text-xs font-thin cursor-pointer hover:underline">
            Investors
          </p>
          <p className="text-[#181818] text-xs font-thin cursor-pointer hover:underline">
            Sustainability
          </p>
        </div>
      </div>

      <div className="flex justify-between flex-col md:flex-row md:items-center px-6 pb-4 bg-[#F2F2F2]">
        <span className="cursor-pointer flex justify-start items-center">
          <GoGlobe className="text-2xl" />
          <span className="ml-3 text-[#181818] text-xs font-thin cursor-pointer hover:underline">
            English(Pakistan)
          </span>
        </span>

        <div className="flex flex-wrap space-x-4 space-y-2">
          <p></p>
          <p className="text-[#181818] font-thin text-xs cursor-pointer hover:underline">
            Contact Microsoft
          </p>
          <p className="text-[#181818] font-thin text-xs cursor-pointer hover:underline">
            Privacy
          </p>
          <p className="text-[#181818] font-thin text-xs cursor-pointer hover:underline">
            Terms of use
          </p>
          <p className="text-[#181818] font-thin text-xs cursor-pointer hover:underline">
            Trademarks
          </p>
          <p className="text-[#181818] font-thin text-xs cursor-pointer hover:underline ">
            About our ads
          </p>
          <p className="text-[#181818] font-thin text-xs ">
            &copy; Microsoft 2022
          </p>
        </div>
      </div>
    </>
  );
};

export default Footer;
