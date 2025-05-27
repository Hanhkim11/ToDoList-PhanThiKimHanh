import React from "react";
import Form from "./Form";

const BaiTap = () => {
  return (
    <div>
      <nav className="navbar navbar-expand-lg bg-dark ">
        <div className="container-fluid mx-5">
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarTogglerDemo03"
            aria-controls="navbarTogglerDemo03"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon" />
          </button>

          <a className="navbar-brand text-white" href="#">
            Cybersoft
          </a>

          <div
            className="collapse navbar-collapse navbar-nav me-auto mb-2 mb-lg-0 gap-3 "
            id="navbarTogglerDemo03"
          >
            <ul className="navbar-nav ms-auto mb-2 mb-lg-0 gap-3">
              <li className="nav-item">
                <a
                  className="nav-link active text-white"
                  aria-current="page"
                  href="#"
                >
                  Home
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link text-white" href="#">
                  About
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link disabled text-white">Register</a>
              </li>
              <li className="nav-item">
                <a className="nav-link text-white" href="#">
                  Login
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link disabled text-white">Products</a>
              </li>
            </ul>
            <form className="d-flex" role="search">
              <input
                className="form-control me-2"
                type="search"
                placeholder="Search"
                aria-label="Search"
              />
              <button className="btn btn-outline-success" type="submit">
                Search
              </button>
            </form>
          </div>
        </div>
      </nav>

      <Form />
    </div>
  );
};

export default BaiTap;
