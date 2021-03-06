import React from "react";
import PostItem from "./PostItem";
import Pagination from "./Pagination";

const posts = () => {
  return (
    <>
      <div className="col-lg-8">
        <div className="blog-box list-style">
          <PostItem />
          <PostItem />
          <PostItem />
          <PostItem />
          <Pagination />
        </div>
      </div>
    </>
  );
};

export default posts;
