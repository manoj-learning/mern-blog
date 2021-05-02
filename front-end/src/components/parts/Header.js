import React from "react";
import NavBar from "../parts/NavBar";
const header = () => {
  return (
    <header className="clearfix header-style5">
      <div className="logo-place">
        <div className="container">
          <div className="inner-logo-place">
            <a className="navbar-brand" href="index.html">
              <img src="images/logo.png" alt="" />
            </a>
          </div>
        </div>
      </div>
      <NavBar />
    </header>
  );
};

export default header;
