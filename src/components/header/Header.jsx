import React from "react";

import { FiSearch } from "react-icons/fi";
import { PiShoppingCartSimple } from "react-icons/pi";
import { IoExitOutline } from "react-icons/io5";
import { RiMenu5Line } from "react-icons/ri";

import websiteLogo from "@/assets/Group.svg";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <header className="min-h-16 flex justify-between items-center wrapper">
      <div className="header__img">
        <Link to={"/"}>
          <img src={websiteLogo} alt="websiteLogo" />
        </Link>
      </div>
      <ul
        className="header__links hidden lg:flex self-stretch
       justify-center gap-9 text-[#3D3D3D]"
      >
        <li className="flex items-center justify-center duration-200 border-b-2 border-transparent hover:border-b-green-500">
          <a href="#">Home</a>
        </li>
        <li className="flex items-center justify-center duration-200 border-b-2 border-transparent hover:border-b-green-500">
          <a href="#">Shop</a>
        </li>
        <li className="flex items-center justify-center duration-200 border-b-2 border-transparent hover:border-b-green-500">
          <a href="#">Plant Care</a>
        </li>
        <li className="flex items-center justify-center duration-200 border-b-2 border-transparent hover:border-b-green-500">
          <a href="#">Blogs</a>
        </li>
      </ul>
      <div className="header__nav text-2xl flex items-center justify-center gap-7">
        <FiSearch className="cursor-pointer" />
        <Link to={"/cart"}>
          <PiShoppingCartSimple className="cursor-pointer" />
        </Link>
        <button className="py-[.4rem] px-4 bg-[#46A358] flex items-center justify-center gap-1 text-xl rounded-lg text-slate-100">
          <IoExitOutline />
          Login
        </button>
        <RiMenu5Line className="lg:hidden cursor-pointer" />
      </div>
    </header>
  );
};

export default Header;
