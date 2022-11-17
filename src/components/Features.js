import React from "react";
import FeatureItem from "./FeatureItem";
import g1 from "../assets/designed.jpg"

const Features = () => {
  const dummy_data = [
    {
      img: g1,
      title: "Designed for life today – and tomorrow",
      description:
        "The next-generation of games. Your goals. Friends and family. Windows 11 was made to bring you closer to everything you love.",
      linkText: "See if your PC is ready",
    },
    {
      img: "../assets/Edge.webp",
      title: "Microsoft Edge",
      description:
        "World-class performance with more privacy, more productivity and more value while you browse.",
      linkText: "Download now",
    },
    {
      img: "../assets/oneDrive.webp",
      title: "Microsoft OneDrive",
      description:
        "Save your files and photos to OneDrive and access them from any device, anywhere.",
      linkText: "Learn more",
    },
    {
      img: "../assets/note.webp",
      title: "OneNote",
      description: "Organise your note and your life.",
      linkText: "Learn more",
    },
  ];
  return (
    <>
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
    </>
  );
};

export default Features;
