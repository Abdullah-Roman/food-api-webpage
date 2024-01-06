import React from "react";
import Navbar from "./components/Navbar";
import Banner from "./Banner";
import Foodsapi from "./components/Foodsapi";
import Footer from "./components/Footer";
import Userform from "./components/Userform";

const App = () => {
  return (
    <>
      <Navbar />
      <Banner />
      <Foodsapi />
      <Userform />
      <Footer />
    </>
  );
};

export default App;
