import React from "react";
import { useHistory } from "react-router-dom";
const Navbar = () => {
  let history = useHistory();
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
                <p className="dropdown heading">profile</p>
                <ul
                  class="dropdown-menu dropdown-menu-dark"
                  aria-labelledby="navbarDarkDropdownMenuLink"
                >
                  <li>
                    <button
                      className="btn dropdown-item heading"
                      onClick={() => history.push("/login")}
                    >
                      Login/Register
                    </button>
                  </li>
                  <li>
                    <a class="dropdown-item" href="/">
                      Another action
                    </a>
                  </li>
                  <li>
                    <a class="dropdown-item" href="/">
                      Something else here
                    </a>
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
