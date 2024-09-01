import React from "react";

import { Modal } from "@mui/material";

import { FiSearch } from "react-icons/fi";
import { PiShoppingCartSimple } from "react-icons/pi";
import { IoExitOutline } from "react-icons/io5";
import { RiMenu5Line } from "react-icons/ri";
import { MdOutlineAddToPhotos } from "react-icons/md";

import websiteLogo from "@/assets/Group.svg";
import { Link, useNavigate } from "react-router-dom";
import BasicModal from "../modal/Modal";

// import { Button, Checkbox, Form, Input } from "antd";
const Header = () => {
  const onFinish = (values) => {
    console.log("Success:", values);
  };
  const onFinishFailed = (errorInfo) => {
    console.log("Failed:", errorInfo);
  };
  // function myPopup(title, src) {
  //   new Popup({
  //     id: "my-popup",
  //     title,
  //     content: `
  //       <Form
  //         name="basic"
  //         labelCol={{
  //           span: 8,
  //         }}
  //         wrapperCol={{
  //           span: 16,
  //         }}
  //         style={{
  //           maxWidth: 600,
  //         }}
  //         initialValues={{
  //           remember: true,
  //         }}
  //         onFinish={onFinish}
  //         onFinishFailed={onFinishFailed}
  //         autoComplete="off"
  //       >
  //         <Form.Item
  //           label="Username"
  //           name="username"
  //           rules={[
  //             {
  //               required: true,
  //               message: 'Please input your username!',
  //             },
  //           ]}
  //         >
  //           <Input />
  //         </Form.Item>

  //         <Form.Item
  //           label="Password"
  //           name="password"
  //           rules={[
  //             {
  //               required: true,
  //               message: 'Please input your password!',
  //             },
  //           ]}
  //         >
  //           <Input.Password />
  //         </Form.Item>

  //         <Form.Item
  //           name="remember"
  //           valuePropName="checked"
  //           wrapperCol={{
  //             offset: 8,
  //             span: 16,
  //           }}
  //         >
  //           <Checkbox>Remember me</Checkbox>
  //         </Form.Item>

  //         <Form.Item
  //           wrapperCol={{
  //             offset: 8,
  //             span: 16,
  //           }}
  //         >
  //           <Button type="primary" htmlType="submit">
  //             Submit
  //           </Button>
  //         </Form.Item>
  //       </Form>
  //     `,
  //     showImmediately: true,
  //   });
  // }

  function myPopup() {
    return <BasicModal />;
  }
  const navigate = useNavigate();

  const navigateHandler = () => {
    navigate("/form");
  };
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
        {/* <p className="flex items-center justify-center text-xl gap-4 hover:text-orange-400 duration-300 cursor-pointer">
          Add product <MdOutlineAddToPhotos className="text-2xl" />
        </p> */}
        <BasicModal />
        <FiSearch className="cursor-pointer" />
        <Link to={"/cart"}>
          <PiShoppingCartSimple className="cursor-pointer" />
        </Link>
        <button
          onClick={() => {
            navigateHandler();
            localStorage.clear();
          }}
          className="py-[.4rem] px-4 bg-[#46A358] flex items-center justify-center gap-1 text-xl rounded-lg text-slate-100"
        >
          <IoExitOutline />
          LogOut
        </button>
        <RiMenu5Line className="lg:hidden cursor-pointer" />
      </div>
    </header>
  );
};

export default Header;
