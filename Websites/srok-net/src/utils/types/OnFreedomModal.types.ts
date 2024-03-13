export interface IOnFreedomModalInputs {
  contactInfo: string;
  useInform: string;
  periodic: string;
}
export interface IOnFreedomModalValuablePrice {
  defaultPrice: number;
  willingToPay: number;
}
export interface IOnFreedomModalExtraSupport {
  supportVariants: number;
  textField: string;
}

export interface OnFreedomModalState {
  modalInputs: IOnFreedomModalInputs;
  valuablePrice: IOnFreedomModalValuablePrice;
  extraSupport: IOnFreedomModalExtraSupport;
  acceptTerms: boolean;
}
