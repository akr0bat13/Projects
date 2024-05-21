import cn from "classnames";
import { DetailedHTMLProps, FC, InputHTMLAttributes } from "react";
import "./SwitchToggle.scss";

export interface SwitchToggleProps
  extends Omit<
    DetailedHTMLProps<InputHTMLAttributes<HTMLInputElement>, HTMLInputElement>,
    "type"
  > {
  title?: string;
  isSpin?: boolean;
}

export const SwitchToggle: FC<SwitchToggleProps> = (props) => {
  const { title, onChange, checked, disabled, ...rest } = props;
  return (
    <div className="switch-toggle-root">
      <label className="switch-toggle">
        <input
          type="checkbox"
          disabled={disabled}
          onChange={onChange}
          checked={checked}
          {...rest}
        />
        <span className="slider"></span>
      </label>
      {title && (
        <div
          className={cn("switch-toggle-title", {
            "switch-toggle-title-disabled": disabled,
          })}
        >
          {title}
        </div>
      )}
    </div>
  );
};
