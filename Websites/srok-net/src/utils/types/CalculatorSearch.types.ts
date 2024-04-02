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

export interface LawData {
  law: string | null;
  part: string | null;
  name: string | null;
  severity: string | null;
  punishment: string | null;
}
