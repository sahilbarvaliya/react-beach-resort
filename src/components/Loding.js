import React from "react";
import loadingGif from "../images/gif/loading-arrow.gif";
export default function Loding() {
  return (
    <div className="loading">
      <h4>Rooms Data Loading...</h4>
      <img src={loadingGif} alt="" />
    </div>
  );
}
