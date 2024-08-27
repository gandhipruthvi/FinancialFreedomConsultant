import React from "react";
import "../styles/Loader.scss";

const Loader = ({ hidden }) => {
  return (
    <div className={`loader ${hidden ? "hidden" : ""}`}>
      <div className="loader__content">
        <div className="loader__bar"></div>
        <div className="loader__bar"></div>
        <div className="loader__bar"></div>
        <div className="loader__bar"></div>
        <div className="loader__bar"></div>
        <div className="loader__ball"></div>
      </div>
    </div>
  );
};

export default Loader;
