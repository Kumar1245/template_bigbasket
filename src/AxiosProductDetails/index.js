import axios from "axios";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

import { Backdrop, CircularProgress } from "@mui/material";

const ProductDetail = () => {
  const { id } = useParams();
  const [productDetail, setProductDetail] = useState([]);
  const [images, setImages] = useState([]);
  const [isReloading, setIsReloading] = useState(false);

  const productListData = () => {
    setIsReloading(true);
    axios
      .get(`https://dummyjson.com/products/${id}`)
      .then(function (response) {
        //  success
        setProductDetail(response.data);
        setIsReloading(false);
      })
      .catch(function (error) {
        // error
        alert(error?.message);
      });
  };
  console.log(productDetail, "iddd");

  useEffect(() => {
    productListData();
  }, []);

  return isReloading ? (
    <>
      <Backdrop
        sx={{ color: "#fff", zIndex: (theme) => theme.zIndex.drawer + 1 }}
        open={true}
      >
        <CircularProgress color="inherit" />
      </Backdrop>
    </>
  ) : (
    <>
      <div className="flex flex-col w-1/2 gap-3  p-4">
        <img
          src={images || productDetail?.thumbnail}
          alt=""
          className="h-72 pl-4"
        />

        <div className="flex flex-row h-16">
          {productDetail?.images?.map((i) => {
            return (
              <>
                <div className="flex flex-row gap-2">
                  <img
                    src={i}
                    alt=""
                    className="h-24 w-24 p-4"
                    onClick={() => setImages(i)}
                  />
                </div>
              </>
            );
          })}
        </div>
      </div>

      <div className=" flex  flex-col">
        <span className="font-serif  ">
          <p>{productDetail?.id}</p>
          <p>{productDetail?.title}</p>
          <p>{productDetail?.description}</p>
          <p>{productDetail?.price}</p>
          <p>{productDetail?.rating}</p>
          <p>{productDetail?.discountPercen}</p>
        </span>
      </div>
    </>
  );
};

export default ProductDetail;
