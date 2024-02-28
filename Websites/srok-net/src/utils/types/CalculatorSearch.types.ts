import { ReactNode } from "react";

export interface ISentenceProps {
  year: string;
  month: string;
}

export interface IChargeArticleProps {
  id: number;
  state: string;
  part: string;
  episodesNumber: string;
  icon?: ReactNode;
}

export interface ICalculatorState {
  verdictDate: Date | null;
  comesInToForse: Date | null;
  chargeArticle: IChargeArticleProps[];
  sentence: ISentenceProps;
  conviction: boolean;
}
