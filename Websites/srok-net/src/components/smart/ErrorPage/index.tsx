import React from "react";
import { Link } from "react-router-dom";
import "./ErrorPage.scss";

const Error = () => {
  return (
    <>
      <div className="error-page-wrapper">
        <div className="error-page-title">Ой! Что-то пошло не так.</div>
        <div className="error-page-title">Стреница не найдена.</div>
        <div className="error-page-button">
          <Link to="/">На главную</Link>
        </div>
      </div>
    </>
  );
};

export default Error;
