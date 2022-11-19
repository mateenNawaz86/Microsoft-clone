import React from "react";

const FeatureItem = (props) => {
  const { img, title, description, linkText } = props;
  return (
    <>
      <div className="flex flex-col cursor-pointer">
        <img src={img} alt="FeatureImg" className="w-full" />
        <h1 className="text-xl font-semibold py-3">{title}</h1>
        <p className="">{description}</p>
        <div className="py-4">
          <span className=" text-[#3468BC] cursor-pointer text-md hover:mr-1  font-semibold hover:underline  ">
            {linkText}
          </span>
          <span className="ml-1 text-2xl text-[#3468BC]">&gt;</span>
        </div>
      </div>
    </>
  );
};

export default FeatureItem;
