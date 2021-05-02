import React from "react";
import Header from "../parts/Header";
import Footer from "../parts/Footer";
import BreadCrumb from "../parts/Breadcrumb";
import SideBar from "../parts/Sidebar";
import Posts from "../parts/Posts";

const category = () => {
  return (
    <>
      <Header />
      <BreadCrumb />
      <section className="blog-section">
        <div className="container">
          <div className="row">
            <Posts />
            <SideBar />
          </div>
        </div>
      </section>
      <Footer />
    </>
  );
};

export default category;
