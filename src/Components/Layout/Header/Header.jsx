import React from "react";
import "./Header.css";
import { BiCart, BiHeart, BiSearch } from "react-icons/bi";

const Header = () => {
  return (
    <>
      <header>
        <div className="text-white bg-black p-3 flex justify-center">
          <div className="W-[100%] flex items-center gap-10 ">
            <p>
              {" "}
              Summer Sale For All Swim Suits And Free Express Delivery -{" "}
              <span className="underline">OFF 50%!</span>
            </p>

            <select className="header_lang-selector bg-transparent p-2 border rounded-xl">
              <option value="English">English</option>
              <option value="Punjabi">Punjab</option>
            </select>
          </div>
        </div>
        <nav className="nav border-b-2 sticky top-5">
          <div className=" mx-auto w-[90%] nav_Container flex items-center justify-between m-4 gap-3">
            <div className="font-extrabold text-lg uppercase">Exclusive</div>
            <div className="nav-items ">
              <ul className=" flex gap-9">
                <li>Home</li>
                <li>Contact</li>
                <li>About</li>
                <li>Sign Up</li>
              </ul>
            </div>
            <div className="nav_Search-container">
              <div className=" flex items-center">
                <span className="p-1 rounded-md flex items-center bg-gray-200">
                  <input
                    className="bg-transparent text-black p-1"
                    type="search"
                    placeholder="What are you looking For?"
                  />
                  <BiSearch className="text-xl mx-2" />
                </span>

                <BiHeart className="text-xl mx-3" />
                <BiCart className="text-xl mx-3" />
              </div>
            </div>
          </div>
        </nav>
      </header>
    </>
  );
};

export default Header;
