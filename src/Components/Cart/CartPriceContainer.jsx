import React from "react";
import Button from "../CustomComponents/Button";

const CartPriceContainer = () => {
  return (
    <>
      <div className="w-[80%] mx-auto grid grid-cols-2 mb-28 mt-12">
        <div className="flex gap-1 justify-start items-start w-full  ">
          <form action="" className="flex justify-center gap-2">
            <input
              type="text"
              placeholder="Coupon Code"
              name="Coupon-code"
              id="Coupon-code"
              className="border  px-4 py-3 rounded-md border-black"
            />

            <button
              className={`bg-[#DB4444] w-[150px] flex rounded-md   justify-center items-center text-xs py-[16px] text-white `}
            >
              Apply Coupon
            </button>

            {/* <Button size='50px'content={"Apply Coupon"}/> */}
          </form>
        </div>
        <div className=" max-h-full p-5 ">
          <div className="border border-black rounded-md p-5 w-[80%]">
            <div>
              <h1>Cart Total</h1>
            </div>
            <div className="flex justify-between w-full border-b-2 py-2 my-1 border-b-slate-500">
              subTotal <span>$1220</span>
            </div>
            <div className="flex justify-between w-full border-b-2 py-2 my-1 border-b-slate-500">
              Shipping <span>Free</span>
            </div>
            <div className="flex justify-between w-full border-b-2 py-2 my-1 border-b-slate-500">
              Total: <span>$1220</span>
            </div>
            <div className="flex justify-center items-center py-4">
            <button
              className={`bg-[#DB4444] w-[150px] flex rounded-md   justify-center items-center text-xs py-[16px] text-white `}
            >
              Procees to checkout
            </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default CartPriceContainer;
