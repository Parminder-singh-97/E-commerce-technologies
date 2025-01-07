import React from "react";
import "./Feature.css";

const Feature = () => {
  return (
    <>
      <div className=" bg-red-600 w-[90%] mx-auto">
        <div className="ms-5 bg-white">
          {" "}
          <h1 className="ms-2 text-red-700">Feature</h1>
        </div>
      </div>
      <div className="w-[90%] m-auto flex justify-between items-center gap-5 mt-5">
        <h1 className="text-4xl ">New Arrival</h1>
      </div>

      <div className="container m-auto min-h-[80vh] flex md:flex-nowrap justify-center flex-wrap gap-3">
        <div className="feature_left p-6 w-[570px] flex flex-col justify-end bg-black relative text-white">
          <h1 className="font-extrabold text-2xl ">PlayStation 5</h1>
          <p className="w-[60%]">
            Black and White version of the PS5 coming out on sale.
          </p>
          <div>
            <button className=" btn border p-2 mt-3 hover:bg-white cursor-pointer hover:text-black">
              Shop Now
            </button>
          </div>
        </div>
        <div className="feature_right flex flex-col  gap-3 w-[570px] ">
          <div className="feature_right-top text-white p-5 justify-end flex flex-col  bg-slate-400 min-h-[50%]  ">
            <h1 className="font-bold text-2xl ">Women’s Collections</h1>
            <p className="w-[60%]">
            Featured woman collections that give you another vibe.
            </p>
            <div>
              <button className=" btn border p-2 mt-3 hover:bg-white cursor-pointer hover:text-black">
                Shop Now
              </button>
            </div>
          </div>
          <div className="feature_right-bottom text-white flex justify-center h-full gap-3 items-center  ">
            <div className="feature_right-buttom-smallBox1 h-full flex flex-col justify-end p-4      w-[50%]">

            <h1 className="font-extrabold text-2xl ">Speaker</h1>
          <p className="w-[60%]">
          Amazon wireless speakers
          </p>
          <div>
            <button className=" btn border p-2 mt-3 hover:bg-white cursor-pointer hover:text-black">
              Shop Now
            </button>
          </div>
            </div>
            <div className="feature_right-buttom-smallBox2 h-full p-4 flex flex-col justify-end w-[50%]">
                
            <h1 className="font-extrabold text-2xl ">Perfume</h1>
          <p className="w-[60%]">
          GUCCI INTENSE OUD EDP
          </p>
          <div>
            <button className=" btn border p-2 mt-3 hover:bg-white cursor-pointer hover:text-black">
              Shop Now
            </button>
          </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Feature;
