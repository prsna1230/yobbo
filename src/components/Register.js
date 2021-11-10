import axios from "axios";
import React from "react";
import { useForm } from "react-hook-form";

const Register = () => {
  let {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const onFormSubmit = async (userObj) => {
    console.log(userObj);
  };
  return (
    <div className="row mt-5">
      <form
        className="col-11 col-sm-8 col-md-6 col-lg-5 shadow mx-auto mt-3"
        onSubmit={handleSubmit(onFormSubmit)}
      >
        <h2 className="text-start">Sign Up</h2>
        {/* username */}
        <div className="form-floating mb-4">
          <input
            type="text"
            name="username"
            id="username"
            className="form-control"
            placeholder="username"
            {...register("username", { required: true })}
          />
          <label htmlFor="username">Username*</label>
        </div>
        {errors.username?.type === "required" && (
          <p className="alert alert-danger ">*Username is Required</p>
        )}

        {/* password */}
        <div className="form-floating mb-4">
          <input
            type="password"
            name="password"
            id="password"
            className="form-control"
            placeholder="password"
            {...register("password", { required: true })}
          />
          <label htmlFor="password">Password*</label>
        </div>
        {errors.password?.type === "required" && (
          <p className="alert alert-danger ">*password is Required</p>
        )}

        {/* date od birth */}
        <div className="form-floating mb-2">
          <input
            type="date"
            name="dob"
            id="dob"
            className="form-control"
            placeholder="dob"
            {...register("dob", { required: true })}
          />
          <label htmlFor="dob">Dob*</label>
        </div>
        {errors.dob?.type === "required" && (
          <p className="alert alert-danger ">*Dob is Required</p>
        )}

        {/* Submit */}
        <button className="btn btn-primary w-50 d-block mx-auto mb-4 mt-3 rounded-pill">
          Sign Up
        </button>
      </form>
    </div>
  );
};

export default Register;
