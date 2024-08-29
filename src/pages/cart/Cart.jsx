import CardProducts from "@/components/cardProducts/CardProducts";
import Products from "@/components/products/Products";
import React from "react";
import { useSelector } from "react-redux";

const Cart = () => {
  const cartList = useSelector((state) => state.cart);
  // console.log(cartList);

  return (
    <section>
      <CardProducts data={cartList} title={"Hello"} />
    </section>
  );
};

export default Cart;
