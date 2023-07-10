import { Backdrop, Button, CircularProgress } from "@mui/material";
import axios from "axios";
import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

const AxiosProducts = () => {
  const [productList, setProductList] = useState([]);
  const navigate = useNavigate();
  const [isReloading, setIsReloading] = useState(false);
  const [search, setSearch] = useState("");
  const [dataSearch, setDataSearch] = useState();
  const [limit, setLimit] = useState(30);

  const productListData = () => {
    setDataSearch(true);

    axios
      .get(`https://dummyjson.com/products?limit=${limit}`)
      .then(function (response) {
        // handle success
        setProductList(response.data.products);
        setIsReloading(false);
      })
      .catch(function (error) {
        // handle error
        alert(error?.message);
      });
  };
  const searchData = () => {
    axios
      .get(`https://dummyjson.com/products/search?q=${search}`)
      .then((res) => {
        setDataSearch(res.data);
      });
  };
  const limitValue = () => {
    axios.get(`https://dummyjson.com/products?limit=${limit}`).then((res) => {
      setProductList(res.data.products);
      console.log(res);
    });
  };

  useEffect(() => {
    search !== "" && searchData();
  }, [search]);

  useEffect(() => {
    document.title = productList?.limit
      ? `Products ( ${productList?.limit} )`
      : "Prdoucts";
  }, [productList?.limit]);

  useEffect(() => {
    productListData();
  }, [limit]);

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
      <div className="flex flex-col  justify-end p-3">
        <input
          type="text"
          placeholder="Search Products"
          onChange={(event) => setSearch(event.target.value)}
          className="p-2 border-2 outline-none"
        />
        {search?.length !== 0 && (
          <div className="h-96 absolute bg-white bg-opacity-40 backdrop-blur border-2 shadow-md w-11/12 z-50 top-16 left-10  flex flex-col gap-1 overflow-auto">
            {dataSearch?.products?.map((i) => {
              return (
                <>
                  <span
                    className="flex gap-1"
                    onClick={() => navigate(`/productdetail/${i.id}`)}
                  >
                    <img src={i.thumbnail} alt="" className="h-12 w-12" />
                    <p>{i.title}</p>
                  </span>
                </>
              );
            })}
          </div>
        )}
      </div>
      <div className="grid lg:grid-cols-5 md:grid-cols-3 grid-cols-2 lg:gap-4 gap-1 p-3">
        {productList?.map((i) => {
          return (
            <>
              <div
                className="flex flex-col gap-2 shadow-md cursor-pointer h-76"
                onClick={() => navigate(`/productdetail/${i.id}`)}
              >
                <img src={i.thumbnail} alt="" className="h-28" />
                <div className="p-2 h-42">
                  <p className="text-sm font-serif">{i.id}</p>
                  <p className="  text-sm font-serif">{i.title}</p>
                  <p className="text-sm font-serif">{i.description}</p>
                  <p className=" text-sm font-serif">{i.price}</p>
                  <p className=" text-sm font-serif">{i.discountPercen}</p>
                </div>
              </div>
            </>
          );
        })}

        <Button
          variant="contained"
          color="inherit"
          onClick={() => setLimit(limit + 10)}
        >
          See More
        </Button>
      </div>
    </>
  );
};

export default AxiosProducts;
