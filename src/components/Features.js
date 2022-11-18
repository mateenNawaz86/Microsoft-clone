import React from "react";
import FeatureItem from "./FeatureItem";
import designImg from "../assets/designed.jpg";
import edgeImg from "../assets/Edge.webp";
import oneDriveImg from "../assets/oneDrive.webp";
import oneNoteImg from "../assets/note.webp";

const Features = () => {
  const dummy_data = [
    {
      img: designImg,
      title: "Designed for life today – and tomorrow",
      description:
        "The next-generation of games. Your goals. Friends and family. Windows 11 was made to bring you closer to everything you love.",
      linkText: "See if your PC is ready",
    },
    {
      img: edgeImg,
      title: "Microsoft Edge",
      description:
        "World-class performance with more privacy, more productivity and more value while you browse.",
      linkText: "Download now",
    },
    {
      img: oneDriveImg,
      title: "Microsoft OneDrive",
      description:
        "Save your files and photos to OneDrive and access them from any device, anywhere.",
      linkText: "Learn more",
    },
    {
      img: oneNoteImg,
      title: "OneNote",
      description: "Organise your note and your life.",
      linkText: "Learn more",
    },
  ];
  return (
    <div className="w-11/13 mx-auto lg:w-10/13">
      <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 md:my-20 lg:grid-cols-4">
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
  );
};

export default Features;
