import React from "react";

const Navbar = () => {
  return (
    <div>
      <nav
        className="navbar navbar-expand-lg navbar-light sticky-top"
        style={{ backgroundColor: "#e3f2fd" }}
      >
        <div className="container-fluid">
          <a className="navbar-brand" href="/">
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
                <a className="nav-link active" href="/men">
                  MEN
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="/womens">
                  WOMEN
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="/kids">
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
              <button className="btn btn-outline-success" type="submit">
                Search
              </button>
            </form>
            <ul className="navbar-nav mx-auto mb-2 mb-lg-0">
              <li className="nav-item my-auto">
                <img
                  src="https://img.icons8.com/color/48/000000/gender-neutral-user.png"
                  alt=""
                  width="24px"
                  className="my-auto"
                />
              </li>
              <li className="nav-item my-auto px-4">
                <img
                  src="https://img.icons8.com/color/48/000000/like.png"
                  alt=""
                  width="24px"
                  className="my-auto"
                />
              </li>
              <li className="nav-item my-auto">
                <img
                  src="https://img.icons8.com/color/48/000000/shopaholic.png"
                  alt=""
                  width="24px"
                  className="my-auto"
                />
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
