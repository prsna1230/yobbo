import axios from "axios";
import React from "react";
import { useForm } from "react-hook-form";
import { useHistory } from "react-router";

const Register = () => {
  let {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  let history = useHistory();
  const onFormSubmit = async (userObj) => {
    let responseObj = await axios.post("/users/createaccount", userObj);
    console.log(responseObj);
    let payload = responseObj.data;
    if (payload.message === "Success") {
      alert("Successfully registered");
      history.push("/login");
    } else {
      alert("User name already taken, please choose unique username");
    }
  };
  return (
    <div className="row mt-5">
      <form
        className="col-11 col-sm-8 col-md-6 col-lg-5 shadow mx-auto mt-3"
        onSubmit={handleSubmit(onFormSubmit)}
      >
        <h2 className="text-start heading">Sign Up</h2>
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
          {errors.username?.type === "required" ? (
            <label className="text text-danger ">*Username is Required</label>
          ) : (
            <label htmlFor="username">Username*</label>
          )}
        </div>

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
          {errors.password?.type === "required" ? (
            <label className="text text-danger ">*password is Required</label>
          ) : (
            <label htmlFor="password">Password*</label>
          )}
        </div>

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

          {errors.dob?.type === "required" ? (
            <label className="text text-danger ">*Dob is Required</label>
          ) : (
            <label htmlFor="dob">Dob*</label>
          )}
        </div>

        <div class="form-check">
          <input
            class="form-check-input"
            type="checkbox"
            value="readPrivacy"
            id="readPrivacy"
            {...register("readPrivacy", { required: true })}
          />
          <label class="form-check-label" for="flexCheckDefault">
            *I declare to have read the privacy policy
          </label>
        </div>
        {errors.readPrivacy?.type === "required" && (
          <p className="text text-danger ">*checking is Required</p>
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
