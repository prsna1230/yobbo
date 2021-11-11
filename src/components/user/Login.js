import React, { useState, useEffect } from "react";
import { useForm } from "react-hook-form";
import { useHistory } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { userLogin, clearLoginState } from "../../store/userSlice";
const Login = () => {
  let history = useHistory();
  let dispatch = useDispatch(clearLoginState);
  let [userCredentialObj, setUserCredentialObj] = useState({
    email: "",
    password: "",
  });
  let {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  let { userObj, isSuccess, message } = useSelector((state) => state.user);
  useEffect(() => {
    // for Userdashboard
    if (isSuccess === true) {
      history.push(`/home/${userObj.name}`);
    }
    console.log(userCredentialObj);
    // eslint-disable-next-line
  }, [userCredentialObj, isSuccess]);
  // form submit
  function onLoginFormSubmit(userObj) {
    setUserCredentialObj({ ...userObj });
    dispatch(userLogin({ ...userObj }));
  }
  return (
    <div className="row mt-5">
      <form
        className="col-10 com-sm-8 col-md-6 col-lg-5 shadow mx-auto mt-3"
        onSubmit={handleSubmit(onLoginFormSubmit)}
      >
        <h2 className="text-start mb-3 text-dark heading p-2">
          Login{" "}
          <span className="text-danger text-center fs-6">
            {message && `* ${message}`}
          </span>
        </h2>
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
            <label className="text-danger">*Email is Required</label>
          ) : (
            <label htmlFor="email">Email*</label>
          )}
        </div>

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
          {errors.password?.type === "required" ? (
            <label className="text-danger ">*password is Required</label>
          ) : (
            <label htmlFor="password">Password*</label>
          )}
        </div>

        {/* Submit */}
        <button className="btn btn-warning w-50 d-block w-100 mt-3 heading">
          Sign in
        </button>
        {/* register page */}
        <h5 className="pt-4 text-center heading">New to YooBo?</h5>
        <h6
          className="btn text-primary d-block text-center py-0 mb-4 heading"
          onClick={() => history.push("/register")}
        >
          Create Account
        </h6>
      </form>
    </div>
  );
};

export default Login;
