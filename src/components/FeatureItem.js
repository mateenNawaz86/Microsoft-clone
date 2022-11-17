import React from "react";

const FeatureItem = (props) => {
  const { img, title, description, linkText } = props;
  return (
    <>
      <div className="w-10/13 mx-auto">
        <div className="grid-cols-1">
          <div className="flex flex-col">
            <img src={img} alt="FeatureImg" />
            <h1>{title}</h1>
            <p>{description}</p>
            <div className="pt-4">
              <span className=" text-[#3468BC] cursor-pointer text-md hover:mr-1  font-semibold hover:underline lg:text-black ">
                {linkText}
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

export default FeatureItem;
