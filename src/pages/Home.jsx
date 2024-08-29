import Products from "@/components/products/Products";
import { useFetch } from "@/hooks/useFetch";
import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

const Home = () => {
  const [skip, setSkip] = useState(0);
  const { data } = useFetch(`/products`, { limit: 10, skip: (skip - 1) * 10 }, [
    skip,
  ]);
  const userData = useSelector((state) => state.userData);
  const navigate = useNavigate();
  const navigateHandler = () => {
    navigate("/form");
  };
  useEffect(() => {
    if (Object.keys(userData).length == 0) {
      navigateHandler();
    }
  }, []);

  return (
    <>
      <Products data={data?.products} total={data?.total} setSkip={setSkip} />
    </>
  );
};

export default Home;
