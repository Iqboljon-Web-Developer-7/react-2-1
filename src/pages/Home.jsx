import Products from "@/components/products/Products";
import { useFetch } from "@/hooks/useFetch";
import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

const Home = () => {
  const [skip, setSkip] = useState(0);
  const { data } = useFetch(`/products`, [skip]);
  const userData = useSelector((state) => state.userData);
  const navigate = useNavigate();
  const navigateHandler = () => {
    navigate("/form");
  };
  useEffect(() => {
    console.log(userData);

    if (Object.keys(userData).length == 0) {
      navigateHandler();
    }
  }, []);

  return (
    <>
      {console.log(data)}
      <Products data={data?.payload} total={data?.total} setSkip={setSkip} />
    </>
  );
};

export default Home;
