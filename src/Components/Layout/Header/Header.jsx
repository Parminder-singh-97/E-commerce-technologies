import React, { useState } from "react";
import "./Header.css";
import { BiCart, BiHeart, BiSearch } from "react-icons/bi";
import { FaRegUser, FaRegUserCircle } from "react-icons/fa";
import { IoBagHandleOutline } from "react-icons/io5";
import { MdOutlineCancel } from "react-icons/md";
import { CiLogout } from "react-icons/ci";
import { Link, NavLink } from "react-router-dom";

const Header = () => {
  let [isAccountDropdownOpen, setisAccountDropdownOpen] = useState(false);

  let handleAccontOpenMenu = () => {
    setisAccountDropdownOpen((prev) => {
      return !prev;
    });
  };

  return (
    <>
      <header className=" ">
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
        <nav className=" nav border-b-2 sticky top-0 bg-white shadow-md z-50">
          <div className=" mx-auto w-[90%] nav_Container flex items-center justify-between m-4 gap-3">
            <div className="font-extrabold text-lg uppercase">Exclusive</div>
            <div className="nav-items ">
              <ul className="flex gap-9">
                {["Home", "Contact", "About", "SignUp"].map((item) => (
                  <NavLink
                    key={item}
                    to={`/${item}`}
                    className={({ isActive }) =>
                      `cursor-pointer hover:border-b-2 border-b-red-600 ${
                        isActive ? "border-b-2" : "border-b-0"
                      }`
                    }
                  >
                    <li className="p-1">{item}</li>
                  </NavLink>
                ))}
              </ul>
            </div>
            <div className="nav_Search-container">
              <div className=" flex items-center ">
                <span className="p-1 rounded-md flex items-center bg-gray-200">
                  <input
                    className="bg-transparent text-black p-1"
                    type="search"
                    placeholder="What are you looking For?"
                  />
                  <BiSearch className="text-xl mx-2" />
                </span>

                <span>
                  {" "}
                  <Link to="/WishList">

                  <BiHeart className="text-xl mx-3" />
                  </Link>
                </span>

                <span>
                <Link to="/Cart">

                  <BiCart className="text-xl mx-3" />
</Link>
                  {" "}
                </span>
                <span className="relative cursor-pointer">
                  <FaRegUserCircle onClick={handleAccontOpenMenu} />

                  {isAccountDropdownOpen && (
                    <div className="absolute z-[999] bottom-[-300%] right-[-20%]   h-6 ">
                      <ul className="account_dropdown flex flex-col p-5 drop-shadow-lg w-full text-nowrap     rounded-md  border border-gray-100     bg-zinc-500 bg-clip-padding backdrop-filter  backdrop-blur-lg bg-opacity-90 backdrop-saturate-200 backdrop-contrast-200">
                        <li className="p-1 hover:bg-slate-100 hover:text-black rounded-md cursor-pointer flex  items-center gap-1 text-white text-[13px]">
                          <span>
                            <FaRegUser />
                          </span>
                          Manage My Account
                        </li>
                        <li className="p-1 hover:bg-slate-100 hover:text-black rounded-md cursor-pointer flex  items-center gap-1 text-white text-[13px]">
                          <span>
                            <IoBagHandleOutline />
                          </span>
                          My Order
                        </li>
                        <li className="p-1 hover:bg-slate-100 hover:text-black rounded-md cursor-pointer flex  items-center gap-1 text-white text-[13px]">
                          <span>
                            <MdOutlineCancel />
                          </span>
                          My Cancellations
                        </li>
                        <li className="p-1 hover:bg-slate-100 hover:text-black rounded-md cursor-pointer flex  items-center gap-1 text-white text-[13px]">
                          <span>
                            <CiLogout />
                          </span>
                          Log Out
                        </li>
                      </ul>
                    </div>
                  )}
                </span>
              </div>
            </div>
          </div>
        </nav>
      </header>
    </>
  );
};

export default Header;
