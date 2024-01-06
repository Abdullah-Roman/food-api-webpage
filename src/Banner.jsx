import React from "react";
import Container from "./components/Container";

const Banner = () => {
  return (
    <div>
      <Container className="bg-[#F99F1C] sm:bg-[#eeeff0] rounded-lg flex  sm:flex-col items-center sm:px-0 px-12 pt-10">
        <div className="heading sm:w-[80%] w-2/3">
          <h2 className="text-white sm:text-black sm:text-xl text-7xl">
            Deliver Food to Your Door Step|
          </h2>
          <p className="text-zinc-200 sm:text-gray-700 sm:text-sm  py-4">
            Autentic Food, Fast Service, Quick Delivery
          </p>
        </div>
        <div className="pic sm:w-[90%] w-1/3 sm:bg-[#F99F1C] sm:rounded-md">
          <img className="w-full" src="./banner.png" alt="" />
        </div>
      </Container>
    </div>
  );
};

export default Banner;
