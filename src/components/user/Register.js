import axios from "axios";
import React from "react";
import { useForm } from "react-hook-form";
import { useHistory } from "react-router";
import { encrypt } from "../../authorizedRequest/EncriptionDecription";
const Register = () => {
  let {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  let history = useHistory();
  const onFormSubmit = async (userObj) => {
    console.log(userObj);
    let encryptedObj = encrypt(userObj);
    console.log(encryptedObj);
    let responseObj = await axios.post("/users/createaccount", {
      encryptedObj: encryptedObj,
    });
    console.log(responseObj);
    let payload = responseObj.data;
    console.log(payload);
    if (payload.message === "Success") {
      alert("Successfully registered");
      history.push("/login");
    } else {
      alert("Email already taken, please choose unique username");
    }
  };
  return (
    <div className="row mt-5">
      <form
        className="col-10 col-sm-8 col-md-6 col-lg-5 shadow mx-auto mt-3"
        onSubmit={handleSubmit(onFormSubmit)}
      >
        <h2 className="text-start p-2 heading">Sign Up</h2>
        {/* name */}
        <div className="form-floating mb-4">
          <input
            type="text"
            name="name"
            id="name"
            className="form-control"
            placeholder="Name"
            {...register("name", { required: true })}
          />
          {errors.name?.type === "required" ? (
            <label className="text-danger ">*Name is Required</label>
          ) : (
            <label htmlFor="name">Name*</label>
          )}
        </div>
        {/* email */}
        <div className="form-floating mb-4">
          <input
            type="email"
            name="email"
            id="email"
            className="form-control"
            placeholder="Email"
            {...register("email", { required: true })}
          />
          {errors.email?.type === "required" ? (
            <label className="text-danger ">*Email is Required</label>
          ) : (
            <label htmlFor="username">Email*</label>
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
            <label className="text-danger ">*password is Required</label>
          ) : (
            <label htmlFor="password">Password*</label>
          )}
        </div>
        {/* policy */}
        <div class="form-check">
          <input
            class="form-check-input"
            type="checkbox"
            value="checkedPrivacy"
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
        <button className="btn btn-primary d-block w-100 mt-3">Sign Up</button>
        {/* login page */}
        <h5 className="pt-4 text-center heading">Already a user?</h5>
        <h6
          className="btn text-primary d-block text-center py-0 mb-4 heading"
          onClick={() => history.push("/login")}
        >
          Login
        </h6>
      </form>
    </div>
  );
};

export default Register;
