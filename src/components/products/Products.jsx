import React, { memo, useState } from "react";

import { TbHeartPlus } from "react-icons/tb";
import { FaHeart } from "react-icons/fa";
import { BsCartPlus } from "react-icons/bs";
import Rating from "../rating/Rating";
import { Link } from "react-router-dom";
import "./Products.scss";
import { Pagination } from "antd";
import { useDispatch } from "react-redux";

const Products = ({ data, total, setSkip }) => {
  const dispatch = useDispatch();
  const [addBtnClr, setAddBtnClr] = useState("hover:bg-[#bbf2d7] bg-[#DEF9EC]");

  const [current, setCurrent] = useState(0);
  const onChange = (page) => {
    setCurrent(page);
    setSkip(page);
  };
  const itemRender = (_, type, originalElement) => {
    if (type === "prev") {
      return <a className="dark:text-slate-200">Previous</a>;
    }
    if (type === "next") {
      return <a className="dark:text-slate-200">Next</a>;
    }
    return originalElement;
  };

  let items = data?.map((product, inx) => (
    <div
      className="border border-green-100 group rounded-xl dark:border-slate-600 dark:hover:border-green-200 hover:border-green-400 hover:shadow-md duration-300 cursor-pointer p-3"
      key={inx}
    >
      <div className="w-full h-60 bg-gray-200">
        <Link to={`/product/${product?.id}`}>
          <img
            className="w-full h-full object-contain"
            src={product.images[0]}
            alt="Photo"
          />
        </Link>
      </div>
      <p className="text-sm mt-2 text-slate-500">{product.tags[0]}</p>
      <p className="mt-2 leading-6 text-[1rem] dark:text-slate-200">
        {product.title}
      </p>
      <p className="mt-2 leading-5 text-sm line-clamp-2 text-slate-800 dark:text-slate-300">
        {product.description}
      </p>
      <p className="mt-2 flex items-center gap-3">
        <Rating rating={product.rating} />{" "}
        <span className="text-sm text-gray-500">({product.rating})</span>
      </p>
      <div className="flex justify-between items-center mt-2">
        <strong>
          <span className="text-green-800 dark:text-green-500">
            {product.price} $
          </span>
        </strong>
        <div className="flex gap-3">
          <button
            onClick={() => dispatch({ type: "TOGGLE_WISHLIST_ITEM", product })}
            className="p-2 rounded-full hidden group-hover:block hover:bg-red-200 text-[1rem] bg-red-100 duration-200"
          >
            {/* {wishlist.some((x) => x.id == product.id) ? (
              <FaHeart className="text-red-500" />
            ) : ( */}
            <TbHeartPlus />
            {/* )} */}
          </button>

          <button
            onClick={() => dispatch({ type: "TOGGLE_CARD_ITEM", product })}
            className={`p-2 ${addBtnClr} text-sm flex items-center justify-center rounded-lg text-[#3BB77E] text-[1rem]  duration-200`}
          >
            <BsCartPlus />
            &nbsp;
            {/* {cart.some((x) => x.id == product.id) ? (
              <span className="text-red-500">Remove</span>
            ) : ( */}
            <span>Add</span>
            {/* )} */}
          </button>
        </div>
      </div>
    </div>
  ));
  return (
    <div className="mx-auto products mt-4 wrapper">
      <div className="mb-8 grid gap-3 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5">
        {items ||
          new Array(10).fill().map((_, idx) => (
            <div
              key={idx}
              role="status"
              className="max-w-sm p-4 border border-gray-200 rounded shadow animate-pulse md:p-6 dark:border-gray-700"
            >
              <div className="flex items-center justify-center h-48 mb-4 bg-gray-300 rounded dark:bg-gray-700">
                <svg
                  className="w-10 h-10 text-gray-200 dark:text-gray-600"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="currentColor"
                  viewBox="0 0 16 20"
                >
                  <path d="M14.066 0H7v5a2 2 0 0 1-2 2H0v11a1.97 1.97 0 0 0 1.934 2h12.132A1.97 1.97 0 0 0 16 18V2a1.97 1.97 0 0 0-1.934-2ZM10.5 6a1.5 1.5 0 1 1 0 2.999A1.5 1.5 0 0 1 10.5 6Zm2.221 10.515a1 1 0 0 1-.858.485h-8a1 1 0 0 1-.9-1.43L5.6 10.039a.978.978 0 0 1 .936-.57 1 1 0 0 1 .9.632l1.181 2.981.541-1a.945.945 0 0 1 .883-.522 1 1 0 0 1 .879.529l1.832 3.438a1 1 0 0 1-.031.988Z" />
                  <path d="M5 5V.13a2.96 2.96 0 0 0-1.293.749L.879 3.707A2.98 2.98 0 0 0 .13 5H5Z" />
                </svg>
              </div>
              <div className="h-2.5 bg-gray-200 rounded-full dark:bg-gray-700 w-48 mb-4"></div>
              <div className="h-2 bg-gray-200 rounded-full dark:bg-gray-700 mb-2.5"></div>
              <div className="h-2 bg-gray-200 rounded-full dark:bg-gray-700 mb-2.5"></div>
              <div className="h-2 bg-gray-200 rounded-full dark:bg-gray-700"></div>
              <div className="flex items-center mt-4">
                <svg
                  className="w-10 h-10 me-3 text-gray-200 dark:text-gray-700"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                >
                  <path d="M10 0a10 10 0 1 0 10 10A10.011 10.011 0 0 0 10 0Zm0 5a3 3 0 1 1 0 6 3 3 0 0 1 0-6Zm0 13a8.949 8.949 0 0 1-4.951-1.488A3.987 3.987 0 0 1 9 13h2a3.987 3.987 0 0 1 3.951 3.512A8.949 8.949 0 0 1 10 18Z" />
                </svg>
                <div>
                  <div className="h-2.5 bg-gray-200 rounded-full dark:bg-gray-700 w-32 mb-2"></div>
                  <div className="w-48 h-2 bg-gray-200 rounded-full dark:bg-gray-700"></div>
                </div>
              </div>
              <span className="sr-only">Loading...</span>
            </div>
          ))}
      </div>
      <div className="flex justify-center">
        <Pagination
          defaultPageSize={10} // nechta itemlar ko'rinishi
          total={total} // jami nechta malumot bor
          itemRender={itemRender} // ortga oldinga o'tkazish
          current={current} // hozirgi indicator soni
          onChange={onChange} // o'zgarganda indikator sonini o'zgartiruvchi
          hideOnSinglePage // 10tadan kam bo'lganda hidden
        />
      </div>
    </div>
  );
};

export default memo(Products);
