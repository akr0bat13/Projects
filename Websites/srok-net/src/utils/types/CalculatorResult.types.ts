export interface ICalculatorCrimeInfo {
  law: string;
  part: string;
  name: string;
  severity: string;
  punishment: string;
}

export interface LawsInfoResponse {
  data: {
    max_term: number;
    laws: ICalculatorCrimeInfo[];
  };
  error: string;
  success: boolean;
}
export interface ICalculatorData {
  max_term: number | undefined;
  credit_period: number | undefined;
  release: {
    date: string;
    credit: number | undefined;
  };
  udo: {
    date: string;
    credit: number | undefined;
  };
  ptr: {
    date: string;
    credit: number | undefined;
  };
  itr: {
    date: string;
    credit: number | undefined;
  };
  colony: {
    date: string;
    credit: number | undefined;
  };
}

export interface ICalculatorResponce {
  data: ICalculatorData;
  error: string;
  success: boolean;
}

export interface ICalculatorCrimeResult {
  lawsInfo: ICalculatorCrimeInfo[];
  calculatorInfo: ICalculatorData;
}
