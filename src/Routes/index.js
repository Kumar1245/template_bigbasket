import React from "react";
import AxiosProducts from "../AxiosProduct";
import ProductDetail from "../AxiosProductDetails";
import Home from "../Pages/Home";
import SignUp from "../Authentication/SignUp";
import SignIn from "../Authentication/SignIn";
import ProfileUpdate from "../Authentication/ProfileUpdate";

const routes = [
  {
    id: 1,
    path: "/",
    element: <Home />,
  },
  {
    id: 2,
    path: "/product",
    element: <AxiosProducts />,
  },
  {
    id: 3,
    path: "/productdetail/:id",
    element: <ProductDetail />,
  },
  {
    id: 4,
    path: "/signup",
    element: <SignUp />,
  },
  {
    id: 5,
    path: "/signin",
    element: <SignIn />,
  },
  {
    id: 6,
    path: "/profile",
    element: <ProfileUpdate />,
  },
];

export default routes;
