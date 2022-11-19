import React from "react";
import FeatureItem from "./FeatureItem";
import windowImg from "../assets/365-window.webp";
import shopImg from "../assets/365-shop.webp";
import vivaImg from "../assets/micro-viva.webp";
import teamImg from "../assets/team-micro.webp";

const Business = () => {
  const dummy_data = [
    {
      img: windowImg,
      title: "Welcome to your Windows 365 Cloud PC",
      description:
        "Securely stream your Windows experience from the Microsoft cloud to any device.",
      linkText: "Get it today",
    },
    {
      img: shopImg,
      title: "Microsoft 365 for business",
      description:
        "Stay a step ahead with powerful apps for productivity, connection and security. ",
      linkText: "Shop now",
    },
    {
      img: vivaImg,
      title: "Microsoft Viva",
      description:
        "Discover the employee experience platform designed to help people connect, focus, learn and thrive at work",
      linkText: "Learn more",
    },
    {
      img: teamImg,
      title: "Get Microsoft Teams for free",
      description:
        "Online meetings, chat and shared cloud storage – all in one place.",
      linkText: "Sign up for free",
    },
  ];
  return (
    <>
      <div className="w-11/13 mx-auto md:my-20 lg:w-10/13">
        <h1 className="text-3xl font-semibold py-5">For business</h1>
        <div className="grid grid-cols-1 gap-5 sm:grid-cols-2  lg:grid-cols-4">
          {dummy_data.map((item, index) => {
            return (
              <FeatureItem
                key={index}
                img={item.img}
                title={item.title}
                description={item.description}
                linkText={item.linkText}
              />
            );
          })}
        </div>
      </div>
    </>
  );
};

export default Business;
