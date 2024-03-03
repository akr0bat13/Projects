import { TOption } from "src/components/UI/Select/Select";

export interface IInputProps {
  state: string;
  part: string;
}

export interface IInputFormProps {
  value1: string;
  value2: string;
  value3: string;
  value4: string;
}

export interface IInputSearchValue {
  value: string;
  onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
  placeholder: string;
}

export interface IInputFormsValue {
  value: string;
  onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
  placeholder: string;
}

export interface IForms {
  title: string;
  inputsContent: IInputFormsValue[];
}

interface IComponent {
  label: string;
  isSelect?: boolean;
  disabled?: boolean;
}

export interface ISearchResult {
  title: string;
  components: IComponent[];
  disabled?: boolean;
}

export interface OnFreedomState {
  inputsValue: IInputProps;
  selectedCity: TOption;
}
