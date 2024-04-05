export interface ICalculatorCrimeInfo {
  law: string;
  part: string;
  name: string;
  severity: string;
  punishment: string;
}

export interface ICalculatorCrimeResult {
  lawsInfo: ICalculatorCrimeInfo[];
}

export interface LawsInfoResponse {
  data: {
    max_term: number;
    laws: ICalculatorCrimeInfo[];
  };
  error: string;
  success: boolean;
}
