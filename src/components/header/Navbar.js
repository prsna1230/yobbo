import React from "react";
import { useHistory } from "react-router-dom";
import { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { clearLoginState } from "../../store/userSlice";

const Navbar = () => {
  let { isSuccess, userObj } = useSelector((state) => state.user);
  let dispatch = useDispatch();
  let history = useHistory();
  let [token, setToken] = useState(null);
  const onUserLogout = () => {
    // remove token frm Local Storage
    localStorage.clear();
    setToken(null);
    dispatch(clearLoginState());
  };
  // to get Name
  useEffect(() => {
    // for Userdashboard
    if (!isSuccess) {
      history.push(`/home`);
    }
  }, [isSuccess]);

  return (
    <div>
      <nav
        className="navbar navbar-expand-lg navbar-light sticky-top p-0"
        style={{ backgroundColor: "#e3f2fd" }}
      >
        <div className="container-fluid">
          <a className="navbar-brand heading" href="/">
            YObbO
          </a>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <a className="nav-link heading" href="/men">
                  MEN
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link heading" href="/womens">
                  WOMEN
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link heading" href="/kids">
                  KIDS
                </a>
              </li>
            </ul>
            <form className="d-flex mx-auto">
              <input
                className="form-control me-2 h-100"
                type="search"
                placeholder="Search"
                aria-label="Search"
              />
              <button className="btn btn-outline-success heading" type="submit">
                Search
              </button>
            </form>

            <ul className="navbar-nav mx-auto mb-2 mb-lg-0">
              <li className="nav-item dropdown my-auto">
                <img
                  src="https://img.icons8.com/color/48/000000/gender-neutral-user.png"
                  alt=""
                  width="24px"
                  className="my-auto d-block mx-auto dropdown-toggle"
                  id="navbarDarkDropdownMenuLink"
                  role="button"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                />
                {token === null && !isSuccess ? (
                  <p className="dropdown heading">profile</p>
                ) : (
                  <p>{localStorage.getItem("name")}</p>
                )}

                <ul
                  class="dropdown-menu dropdown-menu-dark"
                  aria-labelledby="navbarDarkDropdownMenuLink"
                >
                  {token === null && !isSuccess ? (
                    <li>
                      <button
                        className="btn dropdown-item heading"
                        onClick={() => history.push("/login")}
                      >
                        Login/Register
                      </button>
                    </li>
                  ) : (
                    <li>
                      <button
                        className="btn dropdown-item heading"
                        onClick={onUserLogout}
                      >
                        {localStorage.setItem("name", userObj.name)}
                        Logout
                      </button>
                    </li>
                  )}

                  <li>
                    <a class="dropdown-item" href="/">
                      Another action
                    </a>
                  </li>
                  <li>
                    <button
                      className="btn dropdown-item heading"
                      onClick={() => history.push("/adminlogin")}
                    >
                      Admin Login
                    </button>
                  </li>
                </ul>
              </li>
              <li className="nav-item my-auto px-4">
                <img
                  src="https://img.icons8.com/color/48/000000/like.png"
                  alt=""
                  width="24px"
                  className="my-auto d-block mx-auto "
                />
                <p className="heading">Wishlist</p>
              </li>
              <li className="nav-item my-auto">
                <img
                  src="https://img.icons8.com/color/48/000000/shopaholic.png"
                  alt=""
                  width="24px"
                  className="my-auto d-block mx-auto "
                />
                <p className="heading">Cart</p>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
