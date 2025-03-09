import React from "react";
import Card from "../CustomComponents/Card";
import { useLocation } from "react-router-dom";


const JustForYou = () => {
  let location=useLocation()
  console.log(location.pathname.split("/"))
  return (
    <>
      <section className="JustforYou-container my-20">
        <div className=" bg-red-600 w-[90%] my-14  mx-auto">
          <div className="ms-5 flex justify-between items-center bg-white">
            <div>
              <h1 className="ms-2  text-xl text-red-700">Just For You</h1>
            </div>
            <div>
              <button className="bg-transparent py-[16px] text-[15px] text-nowrap w-full   border text-black px-[122px]">
                See All
              </button>
            </div>
          </div>
        </div>
        <div className=" w-[90%] flex gap-4 mx-auto">
          <Card image="../../../images/laptop.png" isShowDelIcon={false} />
          <Card image="../../../images/laptop.png" isShowDelIcon={false} />
          <Card image="../../../images/laptop.png" isShowDelIcon={false} />
          <Card image="../../../images/laptop.png" isShowDelIcon={false} />
        </div>
      </section>
    </>
  );
};

export default JustForYou;
