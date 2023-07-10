import axios from "axios";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

const UserDetails = () => {
  const [usersDetailsData, setUsersDetailsData] = useState();
  const { id } = useParams();
  const [isReloading, setIsReloading] = useState(false);

  const UsersDetails = (props) => {
    // setIsReloading(true);
    axios.get(`https://dummyjson.com/users/${id}`).then(function (response) {
      setUsersDetailsData(response.data);
      console.log(response.data);
    });
  };
  useEffect(() => {
    UsersDetails();
  }, [id]);
  return <></>;
};

export default UserDetails;
