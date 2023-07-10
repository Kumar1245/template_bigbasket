import { Button } from "@mui/material";
import axios from "axios";
import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import UserDetails from "../Components";

const AllUsersData = () => {
  const [usersData, setUsersData] = useState([]);
  const navigate = useNavigate();

  const listOfdata = () => {
    axios
      .get("https://dummyjson.com/users")
      .then(function (res) {
        //handle succes
        console.log(res.data);
        setUsersData(res.data);
      })
      .catch((error) => {
        alert(error, "Data Error");
      });
  };
  useEffect(() => {
    listOfdata();
  }, []);

  return (
    <>
      <div className="grid lg:grid-cols-5 md:grid-cols-2 p-3 gap-3">
        {usersData?.users?.map((i) => {
          return (
            <div className="flex flex-col gap-2 p-2 shadow-md hover:border-2 cursor-pointer">
              <p>{i.id}</p>
              <p>{i?.address?.city}</p>
              <p>{i.firstName}</p>
              <p>{i.lastName}</p>
              <p>{i.maidenName}</p>
              <p>{i.age}</p>
              <p>{i.gender}</p>
              <p>{i.email}</p>
              <p>{i.phone}</p>
              <p>{i.birthdate}</p>
              <Button
                variant="contained"
                color="inherit"
                onClick={() => navigate(`/usersdetails/${i.id}`)}
              >
                See Details
              </Button>
            </div>
          );
        })}
      </div>
    </>
  );
};

export default AllUsersData;
