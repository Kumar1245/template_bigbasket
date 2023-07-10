import "./App.css";
import Landing from "./Landing";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./landing2/home";
import Navbar from "./Navbar/navbar";
import Project from "./landing2/Project";
import Calender from "./landing2/Calender";
import Reports from "./landing2/Reports";
import Service from "./landing2/Service";
import Team from "./landing2/team";
import Footer2 from "./Footer2/index";
import Api from "./Api";
import AxiosProducts from "./AxiosProduct";
import ProductDetail from "./AxiosProductDetails";
import Header from "./Header";
import AllUsersData from "./Users/AllUsers";
import UserDetails from "./Users/Components";
import route from "./Routes";
import routes from "./Routes";
import Layout from "./Layout";

function App() {
  return (
    <>
      {/* <Team /> */}

      <BrowserRouter>
        {/* <Header />
         <Home /> 
         <Service /> 
        <Project /> 
         <AxiosProducts />  */}

        <Routes>
          {routes.map((route) => {
            return (
              <Route
                path={route.path}
                element={<Layout component={route.element} />}
              />
            );
          })}
          {/* <Route path="/allusers" element={<AllUsersData />} />
          <Route path="/usersdetails/:id" element={<UserDetails />} /> */}
          {/* <Route path="/team" element={<Team />} />
          <Route path="/Poject" element={<Project />} />
          <Route path="/Calender" element={<Calender />} />
          <Route path="/Reports" element={<Reports />} />
          <Route path="/Service" element={<Service />} />
          <Route path="/api" element={<Api />} />
          <Route path="/axios-products" element={<AxiosProducts />} />
          <Route path="/axios-products/:id" element={<ProductDetail />} /> */}
        </Routes>
        {/* <Footer2 /> */}
      </BrowserRouter>
    </>
  );
}

export default App;
