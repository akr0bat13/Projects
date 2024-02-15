import React from "react";

import Question from "src/assets/images/question.svg";
import Br from "src/components/UI/Br";
import { H } from "src/components/UI/Text/H";
import { P } from "src/components/UI/Text/P";
import "./HowItWork.scss";

const HowItWork = () => {
  return (
    <div className="how-it-work-wrapper">
      <div className="how-it-work-image">
        <img src={Question} alt="" />
      </div>
      <div className="how-it-work-content">
        <H variant="hd" color="blue">
          Как это работает?
        </H>
        <P variant="md">
          С помощью искусственного интеллекта мы провели анализ уголовных дел из
          открытых источников. <Br /> На основе анализа мы подготовили отчеты,
          которые помогают людям понять фактическую информацию о том, какое
          наказание выносится по статье
        </P>
      </div>
    </div>
  );
};

export default HowItWork;
