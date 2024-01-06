import React from "react";
import Container from "./Container";
import {
  FaArrowRightLong,
  FaGoogle,
  FaInstagram,
  FaTwitter,
} from "react-icons/fa6";

const Footer = () => {
  return (
    <div className="mt-20 bg-[#FCB462]">
      <Container className="flex justify-between  sm:justify-center items-center">
        <div className="sm:flex-col sm:items-center sm:justify-center">
          <div className="text-white relative sm:grid sm:place-items-center">
            <input
              className="pe-64 ps-10 sm:ps-4 sm:mr-5 py-4 sm:pe-20 rounded-md mt-10 placeholder:text-orange-600"
              type="text"
              placeholder="Enter Your Email"
            />
            <button className="flex items-center sm:mx-auto gap-x-2 bg-[#BA6D28] sm:bg-transparent px-3 py-1 rounded-md absolute sm:left-40 left-80 top-[3.2rem]">
              <p className="sm:text-orange-600">Subscribe</p>
              <span className="sm:text-orange-600">
                <FaArrowRightLong />
              </span>
            </button>
          </div>
          <h2 className="text-black font-bold font-poppins mt-14 sm:hidden">
            Pti.
          </h2>
          <div className="flex gap-x-32 items-center sm:flex-col">
            <p className="font-poppins sm:order-3 sm:pb-10">
              Copyright&copy;Tripp.All Right Reserved
            </p>
            <h2 className="text-black font-bold font-poppins my-8 sm:order-2  sm:block hidden">
              Pti.
            </h2>
            <div className="flex gap-x-3 sm:order-1 sm:mt-10">
              <div className="w-[3rem] h-[3rem] sm:w-[2rem] sm:h-[2rem] rounded-full sm:bg-orange-600 bg-[#EEEFF0] relative">
                <FaGoogle className="inner text-orange-600 sm:text-white z-40" />
              </div>
              <div className="w-[3rem] h-[3rem] sm:w-[2rem] sm:h-[2rem]  rounded-full sm:bg-orange-600  bg-[#EEEFF0] relative">
                <FaTwitter className="inner sm:text-white text-orange-600 z-40" />
              </div>
              <div className="w-[3rem] h-[3rem] sm:w-[2rem] sm:h-[2rem]  rounded-full sm:bg-orange-600  bg-[#EEEFF0] relative">
                <FaInstagram className="inner sm:text-white text-orange-600 z-40" />
              </div>
            </div>
          </div>
        </div>
        <div className="picture sm:hidden">
          <img src="./last.png" alt="" />
        </div>
      </Container>
    </div>
  );
};

export default Footer;
