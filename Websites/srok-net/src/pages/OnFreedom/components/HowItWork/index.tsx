import React from "react";

import Question from "src/assets/images/question.svg";
import { H } from "src/components/UI/Text/H";
import { P } from "src/components/UI/Text/P";

import { useOnFreedom } from "../../hooks/useOnFreedom";
import "./HowItWork.scss";

const HowItWork = () => {
  const { howItWorkContent } = useOnFreedom();
  const { title, content } = howItWorkContent;

  return (
    <div className="how-it-work-wrapper">
      <div className="how-it-work-image">
        <img src={Question} alt="" />
      </div>
      <div className="how-it-work-content">
        <H variant="hd" color="blue">
          {title}
        </H>
        <P variant="md">{content}</P>
      </div>
    </div>
  );
};

export default HowItWork;
