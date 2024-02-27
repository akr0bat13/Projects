import React, { CSSProperties, FC } from "react";

import Question from "src/assets/images/question.svg";
import { H } from "src/components/UI/Text/H";
import { P } from "src/components/UI/Text/P";

import { useHowItWorks } from "./hooks/useHowItWorks";
import "./HowItWorks.scss";

interface HowItWorksProps {
  styleConteiner?: CSSProperties;
}

const HowItWorks: FC<HowItWorksProps> = ({ styleConteiner }) => {
  const { howItWorksContent } = useHowItWorks();
  const { title, content } = howItWorksContent;

  return (
    <div className="how-it-work-wrapper" style={styleConteiner}>
      <div className="how-it-work-image">
        <img src={Question} alt="" />
      </div>
      <div className="how-it-work-content">
        <H variant="hd" color="blue">
          {title}
        </H>
        <P variant="sm">{content}</P>
      </div>
    </div>
  );
};

export default HowItWorks;
