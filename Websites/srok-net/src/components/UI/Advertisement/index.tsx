import React, { CSSProperties, FC } from "react";

import Question from "src/assets/images/question.svg";
import { H } from "src/components/UI/Text/H";
import { P } from "src/components/UI/Text/P";
import "./Advertisement.scss";

interface AdvertisementProps {
  styleConteiner?: CSSProperties;
  title: string;
  text: React.ReactNode;
  onClick?: () => void;
}

const Advertisement: FC<AdvertisementProps> = (props) => {
  const { title, text, onClick, styleConteiner } = props;

  return (
    <div className="advertising-wrapper" style={styleConteiner}>
      <div className="advertising-image">
        <img src={Question} alt="" />
      </div>
      <div className="advertising-content">
        <div className="advertising-content-title" onClick={onClick}>
          <H variant="hd" color="blue">
            {title}
          </H>
        </div>
        <P variant="sm">{text}</P>
        <div className="advertising-content-more-info" onClick={onClick}>
          <P variant="md" color="blue">
            Подробнее
          </P>
        </div>
      </div>
    </div>
  );
};

export default Advertisement;
