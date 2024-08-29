import React from "react";
import { Route, Routes } from "react-router-dom";
import Layout from "@/components/layout/Layout";
import Home from "./Home";
import Cart from "@/pages/cart/Cart";
import Form from "@/components/form/Form";

const Pages = () => {
  return (
    <div className="font-OSANS">
      <Routes>
        <Route path="/form" element={<Form />} />
        <Route path="/" element={<Layout />}>
          <Route path="" element={<Home />} />
          <Route path="/cart" element={<Cart />} />
        </Route>
      </Routes>
    </div>
  );
};

export default Pages;
