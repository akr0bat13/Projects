import { ChangeEvent, CSSProperties } from "react";

interface RadioOption {
  label?: string;
  value: number;
  disabled?: boolean;
}

type RadioOptions = {
  [id: string]: RadioOption;
};

interface RadioProps {
  name?: string;
  onChange?: (e: ChangeEvent<HTMLInputElement>) => void;
  options: RadioOptions;
  selected?: number;
  sx?: CSSProperties;
}

interface Option {
  id: string;
  label?: string;
  value: number;
  disabled?: boolean;
}

export type { Option, RadioOption, RadioOptions, RadioProps };
