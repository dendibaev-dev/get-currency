import React from "react";
import loaderIcon from "../common/assets/icons/loader.svg";

const Loader: React.FC = () => {
  return (
    <div className="loader">
      <img src={loaderIcon} className="loader__icon" alt="" />
    </div>
  );
};

export default Loader;
