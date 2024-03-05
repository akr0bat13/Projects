import { ChangeEvent, CSSProperties } from "react";

interface RadioOption {
  label?: string;
  value: string;
  disabled?: boolean;
}

type RadioOptions = {
  [id: string]: RadioOption;
};

interface RadioProps {
  name?: string;
  onChange?: (e: ChangeEvent<HTMLInputElement>) => void;
  options: RadioOptions;
  selected?: string;
  sx?: CSSProperties;
}

interface Option {
  id: string;
  label?: string;
  value: string;
  disabled?: boolean;
}

export type { RadioProps, RadioOption, RadioOptions, Option };
