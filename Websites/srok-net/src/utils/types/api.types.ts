export interface CustomError {
  data: {
    code: number;
    msg: string;
  };
  status: number;
}

export interface ICheckConsistencyRes {
  success?: boolean;
  error?: boolean;
  rollback_step: number;
  msg?: string;
}
