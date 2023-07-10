import React, { useEffect, useState } from "react";

const Product = () => {
  const [productData, setProductdata] = useState([]);
  const Productlists = () => {
    fetch("https://dummyjson.com/products")
      .then((res) => res.json())
      .then((res) => {
        setProductdata(res);
      });
  };
  useEffect(() => {
    Productlists();
  }, []);
  console.log(productData);
  return (
    <div className="p-3 bg-gray-800 text-white">
      {productData?.products?.map((i) => {
        return (
          <>
            <p>{i.id}</p>
            <p>{i.title}</p>
            <p>{i.description}</p>
            <p>{i.price}</p>
            <p>{i.discountPercen}</p>
          </>
        );
      })}
    </div>
  );
};

export default Product;
