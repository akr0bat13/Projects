export interface ISentenceProps {
  year: string;
  month: string;
}

export interface IChargeArticleProps {
  id: number;
  state: string;
  part: string;
  episodesNumber: number;
  isActive: boolean;
}

export interface ICalculatorState {
  verdictDate: Date | null;
  comesInToForse: Date | null;
  chargeArticle: IChargeArticleProps[];
  sentence: ISentenceProps;
}
