import React from "react";
import { FaArrowRightLong } from "react-icons/fa6";

const CustomItems = () => {
  return (
    <>
      <div className="flex ">
        <div className="w-[40%] ps-6 flex flex-col justify-evenly">
          <div className="flex items-center  gap-5">
            <img
              className="w-5"
              src="../../../../../hero-images/apple-logo.webp"
              alt=""
            />{" "}
            <p className="text-sm"> iPhone 14 Series</p>
          </div>
          <div>
            <p className="text-3xl"> Up to 10% </p>
            <p> off Voucher</p>
          </div>
          <div className="">
            <p className=" flex gap-2 items-center text-sm underline">
              show Now <FaArrowRightLong />
            </p>
          </div>
        </div>
        <div className="w-[60%]">
          <img
            className="object-cover"
            src="../../../../../images/hero-images/mobile.webp"
            alt=""
          />
        </div>
      </div>
    </>
  );
};

export default CustomItems;
