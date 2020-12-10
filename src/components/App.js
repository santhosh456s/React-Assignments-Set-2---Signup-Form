import React, { Component, useState } from "react";
import { useForm } from "react-hook-form";
// import errors from "./ErrorMessage";
import "../styles/App.css";

const App = () => {
  const { register, handleSubmit, errors } = useForm();

  const onSubmit = (data) => {
    // alert(JSON.stringify(data));
    console.log(data);
  };

  return (
    <div id="main">
      <form onSubmit={handleSubmit(onSubmit)}>
        <label>Name:</label>
        <input name="name" ref={register({ required: true })} />
        {errors.name?.type === "required" && "All fields are mandatory"}
        <br />
        <label>Email:</label>
        <input name="email" ref={register({ required: true })} />
        {errors.name?.type === "required" && "All fields are mandatory"}
        <br />
        <label>Gender Selection:</label>
        <select name="gender" ref={register({ required: true })}>
          <option value="male" default>
            Male
          </option>
          <option value="female">Female</option>
          <option value="others">Others</option>
        </select>
        <br />
        {errors.name?.type === "required" && "All fields are mandatory"}
        <label>Phone Number:</label>
        <input
          type="number"
          name="phoneNumber"
          ref={register({ required: true })}
        />
        {errors.name?.type === "required" && "All fields are mandatory"}
        <br />
        <label>Password:</label>
        <input
          type="password"
          name="password"
          ref={register({ required: true, minLength: 6 })}
        />
        {errors.name?.type === "required" && "All fields are mandatory"}
        {errors.name?.type === "minLength" &&
          "Password must contain atleast 6 letters"}
        <br />
        <input type="submit" />
      </form>
    </div>
  );
};

export default App;
