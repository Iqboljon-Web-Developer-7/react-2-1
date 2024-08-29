import { useFetch } from "@/hooks/useFetch";
import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";

import { FaAngleUp } from "react-icons/fa6";
import { FaAngleDown } from "react-icons/fa6";
import { CiHeart } from "react-icons/ci";
import { BiShuffle } from "react-icons/bi";

import img from "@/assets/product/home.svg";
import cartImg from "@/assets/product/cart.svg";
import Rating from "../rating/Rating";

const Product = () => {
  const { id } = useParams();
  const { data: product } = useFetch(`/products/${id}`, {}, [id]);
  const [idx, setIdx] = useState(0);
  const [counter, setCounter] = useState(1);

  const [state, dispatch] = useStateValue();

  useEffect(() => {
    window.scroll(0, 0);
  }, []);

  return (
    <>
      {product ? (
        <section className="product wrapper mt-8 mb-20">
          <div className="product__info flex items-center text-sm my-4 gap-4">
            <Link to={"/"} className="flex items-center justify-center gap-2">
              <img src={img} className="max-w-4" alt="img of home" />
              <span className="text-[#3BB77E]">Home</span>
            </Link>{" "}
            <span className="text-slate-300">/</span>
            <Link className="text-[#3BB77E]" to={"/"}>
              Products
            </Link>
            <span className="text-slate-300">/</span>
            <p className="text-[#7E7E7E]">{product?.title}</p>
          </div>
          <div className="product__main flex justify-between flex-col lg:flex-row gap-10">
            <div className="product__main-imgs lg:w-2/4">
              <img
                src={product?.images[idx]}
                className="mx-auto max-w-[33rem] max-h-[33rem] object-contain"
                alt="img of product"
              />
              <div className="imgs-container flex justify-evenly overflow-x-auto gap-2">
                {product?.images.length > 1 &&
                  product?.images.map((src, idx) => (
                    <img
                      key={idx}
                      className="max-w-36 max-h-40 object-contain p-2 border-2 cursor-pointer"
                      onClick={() => setIdx(idx)}
                      src={src}
                    />
                  ))}
              </div>
            </div>
            <div className="product__main-info text-center lg:text-start lg:w-2/4">
              <h2 className="mt-4 text-4xl text-[#253D4E]">{product?.title}</h2>
              <div className="rating flex items-center justify-center lg:justify-start  mt-2 gap-2">
                <Rating rating={product?.rating} />
                <span className="text-[#B6B6B6] text-sm">
                  ({product?.reviews.length} reviews)
                </span>
              </div>
              <div className="price mt-3 flex gap-3 justify-center lg:justify-start">
                <h4 className="main_price font-Quicksand text-[3.725rem] font-semibold text-[#3BB77E]">
                  ${product?.price}
                </h4>
                <div className="old-price pt-5">
                  <p className="text-[#FDC040] text-sm">
                    {product?.discountPercentage}% off
                  </p>
                  <p className="text-[#B6B6B6] text-2xl">
                    <del>
                      {" "}
                      {(
                        product?.price +
                        (product?.price / 100) * product?.discountPercentage
                      ).toFixed(2)}
                    </del>
                  </p>
                </div>
              </div>
              <p className="my-5 text-[#7E7E7E] text-[1.0675rem]">
                {product?.description}
              </p>
              <div className="product__navigation flex gap-3 justify-center lg:justify-start">
                <div className="counter flex items-center border pl-4 pr-2 border-[#3BB77E]">
                  <p className="min-w-6 h-5 leading-5">{counter}</p>
                  <div className="btns flex items-center justify-center flex-col">
                    <button
                      onClick={() => setCounter((prev) => prev + 1)}
                      className="w-5 h-5 hover:text-orange-500 text-[#3BB77E] duration-200 rounded-full text-[.7rem] flex items-center justify-center"
                    >
                      <FaAngleUp />
                    </button>
                    <button
                      disabled={counter <= 1}
                      onClick={() => setCounter((prev) => prev - 1)}
                      className="w-5 h-5 hover:text-orange-500 text-[#3BB77E] duration-200 rounded-full text-[.7rem] flex items-center justify-center"
                    >
                      <FaAngleDown />
                    </button>
                  </div>
                </div>
                <button className="py-2 px-4 rounded-md font-semibold text-white bg-[#3BB77E] flex items-center justify-center gap-2 text-sm">
                  <img src={cartImg} alt="cart icon" className="w-4" />
                  Add to cart
                </button>
                <button className="py-1 px-3 text-xl border border-gray-200 rounded-md">
                  <CiHeart />
                </button>
                <button className="py-1 px-3 text-xl border border-gray-200 rounded-md">
                  <BiShuffle />
                </button>
              </div>
              <div className="details text-start grid grid-cols-2 w-fit gap-x-7 gap-y-2 mt-6 text-sm">
                <p className="text-[#3BB77E]">
                  <span className="text-[#7E7E7E]">Type:</span>{" "}
                  {product?.category}
                </p>
                <p className="text-[#3BB77E]">
                  <span className="text-[#7E7E7E]">SKU:</span> {product?.sku}
                </p>
                <p className="text-[#3BB77E]">
                  <span className="text-[#7E7E7E]">MFG:</span>{" "}
                  {product?.meta["createdAt"]}
                </p>
                <p className="text-[#3BB77E] flex gap-1">
                  <span className="text-[#7E7E7E]">Tags:</span>{" "}
                  {product?.tags.map((item, idx) => (
                    <span key={idx}>{item}</span>
                  ))}
                </p>
                <p className="text-[#3BB77E]">
                  <span className="text-[#7E7E7E]">Life:</span> 1 month
                </p>
                <p className="text-[#3BB77E]">
                  <span className="text-[#7E7E7E]">Stock:</span>{" "}
                  {product?.stock} items in Stock
                </p>
              </div>
            </div>
          </div>
        </section>
      ) : (
        <div className="p-4 max-w-5xl mx-auto">
          <div className="flex flex-col lg:flex-row gap-8">
            <div className="flex-1">
              <div className="bg-gray-200 rounded h-80"></div>
              <div className="flex justify-evenly mt-4 gap-4">
                <div className="bg-gray-200 rounded h-24 w-24"></div>
                <div className="bg-gray-200 rounded h-24 w-24"></div>
                <div className="bg-gray-200 rounded h-24 w-24"></div>
              </div>
            </div>

            <div className="flex-1">
              <div className="h-6 bg-gray-200 rounded w-1/3 mb-4"></div>
              <div className="h-8 bg-gray-200 rounded w-1/4 mb-6"></div>
              <div className="h-4 bg-gray-200 rounded w-1/6 mb-2"></div>
              <div className="h-20 bg-gray-200 rounded mb-6"></div>

              <div className="h-10 bg-gray-200 rounded w-1/4 mb-4"></div>

              <div className="h-6 bg-gray-200 rounded w-1/5 mb-2"></div>
              <div className="h-6 bg-gray-200 rounded w-1/6 mb-2"></div>
              <div className="h-6 bg-gray-200 rounded w-1/3 mb-2"></div>

              <div className="h-10 bg-gray-200 rounded w-1/4 mt-6"></div>
              <div className="h-6 bg-gray-200 rounded w-1/4 mt-2"></div>
            </div>
          </div>
        </div>
      )}
      <div className="product__info wrapper">
        <div className="btns text-sm flex flex-wrap gap-2 font-Quicksand font-semibold">
          <button className="py-2 px-5 text-[#7E7E7E] hover:text-green-400 duration-200 border shadow-sm rounded-full">
            Description
          </button>
          <button className="py-2 px-5 text-[#7E7E7E] hover:text-green-400 duration-200 border shadow-sm rounded-full">
            Additional info
          </button>
          <button className="py-2 px-5 text-[#7E7E7E] hover:text-green-400 duration-200 border shadow-sm rounded-full">
            Vendor
          </button>
          <button className="py-2 px-5 text-[#7E7E7E] hover:text-green-400 duration-200 border shadow-sm rounded-full">
            Reviews ({product?.reviews.length})
          </button>
        </div>
        <p className="description my-5 text-[1rem] text-slate-700">
          {product?.description}
        </p>
        <div className="details text-start grid grid-cols-2 w-fit gap-x-3 sm:gap-x-7 gap-y-2 mt-6 text-sm">
          <p className="text-slate-900">
            <span className="text-[#7E7E7E]">Type:</span> {product?.category}
          </p>
          <p className="text-slate-900">
            <span className="text-[#7E7E7E]">SKU:</span> {product?.sku}
          </p>
          <p className="text-slate-900">
            <span className="text-[#7E7E7E]">MFG:</span>{" "}
            {product?.meta["createdAt"]}
          </p>
          <p className="text-slate-900 flex gap-1">
            <span className="text-[#7E7E7E]">Tags:</span>{" "}
            {product?.tags.map((item, idx) => (
              <span key={idx}>{item}</span>
            ))}
          </p>
          <p className="text-slate-900">
            <span className="text-[#7E7E7E]">Life:</span> 1 month
          </p>
          <p className="text-slate-900">
            <span className="text-[#7E7E7E]">Stock:</span> {product?.stock}{" "}
            items in Stock
          </p>
        </div>
        <div className="additional-info my-4">
          <h3 className="text-2xl">Suggested Use</h3>
          <p>Refrigeration not necessary.</p>
          <p>Stir before serving</p>
        </div>
      </div>
    </>
  );
};

export default Product;
