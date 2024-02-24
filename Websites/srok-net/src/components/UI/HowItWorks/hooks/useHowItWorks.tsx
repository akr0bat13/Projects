import React from "react";

import Br from "src/components/UI/Br";
import { IHowItWorkContent } from "src/utils/types/HowItWorks.types";

export const useHowItWorks = () => {
  const howItWorksContent: IHowItWorkContent = {
    title: "Как это работает?",
    content: (
      <React.Fragment>
        С помощью искусственного интеллекта мы провели анализ уголовных дел из
        открытых источников. <Br />
        На основе анализа мы подготовили отчеты, которые помогают людям понять
        фактическую информацию о том, какое наказание выносится по статье
      </React.Fragment>
    ),
  };

  return {
    howItWorksContent,
  };
};
