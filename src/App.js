import React from "react";
import Navbar from "./components/Navbar";
import Header from "./components/Header";
import Features from "./components/Features";
import Download from "./components/Download";
import Business from "./components/Business";
import Social from "./components/Social";
import Footer from "./components/Footer";

const App = () => {
  return (
    <>
      <Navbar />
      <Header />
      <Features />
      <Download />
      <Business />
      <Social />
      <Footer />
    </>
  );
};

export default App;
