export interface ISentenceProps {
  year: string;
  month: string;
}

export interface IChargeArticleProps {
  state: string;
  part: string;
  episodesNumber: number;
}

export interface ICalculatorState {
  verdictDate: string;
  comesInToForse: string;
  sentence: ISentenceProps;
  chargeArticle: IChargeArticleProps[];
}
