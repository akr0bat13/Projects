import { ReactNode } from "react";

export interface ISentenceProps {
  year: string;
  month: string;
}

export interface IChargeArticleProps {
  id: number;
  state: string;
  part: string;
  episodesNumber: number;
  icon?: ReactNode;
  onClick?: (id: number) => void;
}

export interface ICalculatorState {
  verdictDate: Date | null;
  comesInToForse: Date | null;
  chargeArticle: IChargeArticleProps[];
  sentence: ISentenceProps;
}
