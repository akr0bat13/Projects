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
    <div className="useful-links-wrapper" style={styleConteiner}>
      <div className="useful-links-image">
        <img src={Question} alt="" />
      </div>
      <div className="useful-links-content">
        <div className="useful-links-content-title" onClick={onClick}>
          <H variant="hd" color="blue">
            {title}
          </H>
        </div>
        <P variant="sm">{text}</P>
        {onClick && (
          <div className="useful-links-content-more-info" onClick={onClick}>
            <P variant="md" color="blue">
              Подробнее
            </P>
          </div>
        )}
      </div>
    </div>
  );
};

export default Advertisement;
