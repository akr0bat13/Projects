export interface IPreventiveMeasureProps {
  title: string;
  value: boolean;
}

export interface IApilationProps {
  years: string;
  month: string;
  apilationDate: Date | null;
  detention: string;
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
  preventiveMeasure: IPreventiveMeasureProps[];
  apilation: IApilationProps;
  punishmentType: IPunishmentTypeProps;
}
