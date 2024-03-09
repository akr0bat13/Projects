export interface IFiltrationDate {
  id: number;
  start: Date | null;
  end: Date | null;
}

export interface IFiltrationSelectProps {
  title: string;
  isActive: boolean;
  values: IFiltrationDate[];
}

export interface IFiltrationCheckBoxProps {
  title: string;
  value: boolean;
}

export interface IApilationProps {
  isActive?: boolean;
  years: string;
  month: string;
  apilationDate: Date | null;
  detention: number | null;
}

export interface IPunishmentTypeProps {
  settlementsColony: boolean;
  generalRegimeColony: boolean;
  maximumSecurityColony: boolean;
  specialRegimeColony: boolean;
  forcedLabor: boolean;
  prison: boolean;
}

export interface ICalculatorFiltrationState {
  homeArrest: IFiltrationSelectProps;
  timeUnderArrest: IFiltrationSelectProps;
  rejectingCurrentDoings: IFiltrationSelectProps;
  apilation: IApilationProps;
  punishmentType: IFiltrationCheckBoxProps[];
}
