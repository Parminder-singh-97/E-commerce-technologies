import React from "react";
import { BiCart } from "react-icons/bi";
import { MdDeleteOutline } from "react-icons/md";

const Card = ({image,name,price,star,isShowDelIcon=true}) => {
  return (
    <>
    <div className="w-[270px] h-[322px]  shadow-md rounded-md overflow-hidden relative">
        <div className="overflow-hidden relative bg-gray-100 flex flex-col group cursor-pointer ">
            <div className=" w-full absolute top-0 flex justify-between px-5 py-3">
                <span className="discount-badge inline-block p-1 h-7 text-sm bg-red-600 text-white rounded-md">-50%</span>
                <span className="wishList-Delete block p-1  text-black text-2xl">{isShowDelIcon && <MdDeleteOutline />}</span>
            </div>
            <div className="flex justify-center items-center p-6">

        <img src={image} alt="Card-img" className="w-full h-auto" />
            </div>
            <div className="bg-black flex justify-center items-center p-1 w-full absolute transition-all duration-500 ease-linear bottom-[-50px] group-hover:bottom-0   gap-4 text-white">
                <BiCart size={30} />
                <p className="text-md">Add to Cart</p>

            </div>
        </div>
        <div className="flex flex-col gap-3 p-5 justify-center h-32 items-start">
            <h1 className="text-center text-xl font-bold">Gucci  Duffle Bag</h1>
            <p className="text-center text-red-500 flex gap-4">
                $200
                <span className="line-through text-black">
                    $400
                   
                </span>
            </p>
            
        </div>
        
    </div>
    
    </>
  );
};

export default Card;
