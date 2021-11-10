import React from "react";
import { useForm } from "react-hook-form";
import { useHistory } from "react-router-dom";
const Login = () => {
  let history = useHistory();
  let {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  // form submit
  function onLoginFormSubmit(userObj) {
    console.log(userObj);
  }
  return (
    <div className="row mt-5">
      <form
        className="col-11 com-sm-8 col-md-6 col-lg-5 shadow mx-auto mt-3"
        onSubmit={handleSubmit(onLoginFormSubmit)}
      >
        <h2 className="text-start mb-3 text-dark heading">Login</h2>
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
        <div className="form-floating mb-2">
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

        {/* Submit */}
        <button className="btn btn-warning w-50 d-block mx-auto mt-3 rounded-pill heading">
          Sign in
        </button>
        {/* register page */}
        <h3 className="mt-2 text-center heading">New to YooBo?</h3>
        <button
          className="btn btn-primary rounded-pill d-block w-50 mx-auto mb-5 heading"
          onClick={() => history.push("/register")}
        >
          Create Account
        </button>
      </form>
    </div>
  );
};

export default Login;
