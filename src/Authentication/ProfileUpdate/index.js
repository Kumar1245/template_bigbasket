import React from "react";
import CustomButton from "../../Shared/CustomButton";
import { TextField } from "@mui/material";
import { useFormik } from "formik";
import axios from "axios";
import { useSelector } from "react-redux";

const ProfileUpdate = () => {
  const userData = useSelector((state) => state.userData);
  const initialValues = {
    name: userData?.name || "",
    email: userData?.email || "",
    dob: "",
    city: "",
    state: "",
    country: "",
    gender: "",
    phone: "",
  };
  const { handleChange, handleSubmit, values, resetForm } = useFormik({
    initialValues: initialValues,
    onSubmit: () => {
      const reqBody = {
        id: localStorage.getItem("user_id"),
        name: values.name,
        email: values.email,
        dob: values.dob,
        city: values.city,
        state: values.state,
        country: values.country,
        gender: values.gender,
        phone: values.phone,
      };
      axios
        .put("https://api-eduvila.onrender.com/profile", reqBody)
        .then((res) => {
          res.data && alert("Updated Successfully");
          resetForm();
        });
    },
  });

  return (
    <>
      <form onSubmit={handleSubmit} className="grid grid-cols-2 py-4 border ">
        <TextField
          type="text"
          id="name"
          name="name"
          label="Name"
          placeholder="Enter Name"
          value={values.name}
          onChange={handleChange}
          className="p-2 gap-3 "
        />
        <TextField
          type="number"
          id="phone"
          name="phone"
          label="Phone"
          placeholder="Enter Phone"
          value={values.phone}
          onChange={handleChange}
        />
        <TextField
          type="email"
          id="email"
          name="email"
          label="Email"
          placeholder="Enter Email"
          value={values.email}
          onChange={handleChange}
        />
        <TextField
          type="date"
          id="dob"
          name="dob"
          label=""
          placeholder="Enter date of birth"
          value={values.dob}
          onChange={handleChange}
        />

        <TextField
          type="text"
          id="city"
          name="city"
          label="City"
          placeholder="Enter City"
          value={values.city}
          onChange={handleChange}
        />
        <TextField
          type="text"
          id="state"
          name="state"
          label="State"
          placeholder="Enter State"
          value={values.state}
          onChange={handleChange}
        />
        <TextField
          type="text"
          id="country"
          name="country"
          label="Country"
          placeholder="Enter Country"
          value={values.country}
          onChange={handleChange}
        />
        <TextField
          type="text"
          id="gender"
          name="gender"
          label="Gender"
          placeholder="Enter Gender"
          value={values.gender}
          onChange={handleChange}
        />
        <CustomButton type="submit" className="p-4 ">
          Update
        </CustomButton>
      </form>
    </>
  );
};

export default ProfileUpdate;
