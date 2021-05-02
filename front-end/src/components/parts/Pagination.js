import React from "react";

const pagination = () => {
  return (
    <>
      <div className="pagination-box">
        <ul className="pagination-list">
          <li>
            <a href="_#" className="active">
              1
            </a>
          </li>
          <li>
            <a href="_#">2</a>
          </li>
          <li>
            <a href="_#">
              Next Page <i className="fa fa-angle-right"></i>
            </a>
          </li>
        </ul>
      </div>
    </>
  );
};

export default pagination;
