export interface IOnFreedomModalInputs {
  contactInfo: string;
  useInform: string;
  periodic: string;
}
export interface IOnFreedomModalValuablePrice {
  defaultPrice: string;
  willingToPay: string;
}
export interface IOnFreedomModalExtraSupport {
  supportVariants: string;
  textField: string;
}

export interface OnFreedomModalState {
  modalInputs: IOnFreedomModalInputs;
  valuablePrice: IOnFreedomModalValuablePrice;
  extraSupport: IOnFreedomModalExtraSupport;
  acceptTerms: boolean;
}
