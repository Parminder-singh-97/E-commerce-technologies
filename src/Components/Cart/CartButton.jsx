import React from "react";

const CartButton = () => {
  return (
    <>
      <div className="w-[80%] mx-auto flex justify-between items-center">
        <div>
        <button className="bg-transparent py-[16px] text-[15px] text-nowrap w-full my-4 border-black rounded-md  border text-black px-[122px]">
          Return To Shop
        </button>
            
        </div>
        <div>

        <button className="bg-transparent py-[16px] text-[15px] text-nowrap w-full my-4  border rounded-md border-black text-black px-[122px]">
          Update Cart
        </button>
        </div>
      </div>
    </>
  );
};

export default CartButton;
