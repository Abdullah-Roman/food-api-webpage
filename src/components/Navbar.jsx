import React, { useState } from "react";
import Container from "./Container";
import { LiaMaleSolid } from "react-icons/lia";
import { CiSearch } from "react-icons/ci";
import { FaAngleDown } from "react-icons/fa6";

const Navbar = () => {
  const [menu, setMenu] = useState(false);

  return (
    <div>
      <Container>
        <div className="flex justify-between sm:justify-around py-4">
          <div className="logo">
            <h1 className="text-black font-bold font-poppins">pti.</h1>
          </div>
          <div className="menu flex gap-x-3">
            <div className="relative">
              <input
                className="placeholder:text-sm sm:ps-6 bg-white py-1 sm:px-3 px-14 rounded-md"
                type="text"
                placeholder="Search Audiobook"
              />
              <CiSearch className="absolute top-2 left-2 text-orange-500" />
            </div>
            <div className="relative" onClick={() => setMenu(!menu)}>
              <button className="bg-white font-poppins text-black font-medium  py-1 ps-4 sm:pe-5 pe-20  rounded-md">
                MENU
              </button>
              <FaAngleDown className="absolute  top-2 sm:hidden left-[5.7rem] text-orange-500" />
              <div
                className={`bg-white sm:-translate-x-5 p-2 mt-2 rounded-md ${
                  menu ? "visible" : "hidden"
                }`}
              >
                <ul className="py-1">
                  <li className="text-base text-gray-500 ps-3 font-poppins py-1 hover:text-orange-600 hover:bg-[#BABABA]">
                    Home
                  </li>
                  <li className="text-base text-gray-500 ps-3 font-poppins py-1 hover:text-orange-600 hover:bg-[#BABABA]">
                    Details
                  </li>
                  <li className="text-base text-gray-500 ps-3 font-poppins py-1 hover:text-orange-600 hover:bg-[#BABABA]">
                    Category
                  </li>
                  <li className="text-base text-gray-500 ps-3 font-poppins py-1 hover:text-orange-600 hover:bg-[#BABABA]">
                    My Favourites
                  </li>
                  <li className="text-base text-gray-500 ps-3 font-poppins py-1 hover:text-orange-600 hover:bg-[#BABABA]">
                    Profile
                  </li>
                  <li className="text-base text-gray-500 ps-3 font-poppins py-1 hover:text-orange-600 hover:bg-[#BABABA]">
                    Log In/Sign up
                  </li>
                </ul>
              </div>
            </div>
          </div>
          <div className="icon">
            <div className="w-10 h-10 bg-orange-700 rounded-full relative md:hidden">
              <LiaMaleSolid className="text-white inner text-2xl " />
            </div>
          </div>
        </div>
      </Container>
    </div>
  );
};

export default Navbar;
