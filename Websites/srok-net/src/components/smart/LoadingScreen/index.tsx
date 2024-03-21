import React from "react";
import "./Loading.scss";

const LoadingScreen = () => {
  return (
    <>
      <div className="loading-content">
        <div className="loadingspinner">
          <div id="square1"></div>
          <div id="square2"></div>
          <div id="square3"></div>
          <div id="square4"></div>
          <div id="square5"></div>
        </div>
        <div className="loading-title">Загрузка...</div>
      </div>
    </>
  );
};

export default LoadingScreen;
