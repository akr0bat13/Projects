export interface IOnFreedomModalInputs {
  useInform: string;
  periodic: string;
}
export interface IOnFreedomModalValuablePrice {
  defaultPrice: string;
  willingToPay: string;
}

export interface OnFreedomModalState {
  modalInputs: IOnFreedomModalInputs;
  valuablePrice: IOnFreedomModalValuablePrice;
}
