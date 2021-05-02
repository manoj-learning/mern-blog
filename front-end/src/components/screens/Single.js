import React from "react";
import Header from "../parts/Header";
import Footer from "../parts/Footer";
import Comment from "../parts/Comment";
import PostDesc from "../parts/PostDesc";

const single = () => {
  return (
    <>
      <Header />
      <div className="single-post no-sidebar">
        <PostDesc />
        <Comment />
      </div>
      <Footer />
    </>
  );
};

export default single;
