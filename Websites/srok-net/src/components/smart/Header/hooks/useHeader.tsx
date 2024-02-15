import { useNavigate } from "react-router-dom";

import { ButtonProps } from "src/components/UI/Button/Button";

const useHeader = () => {
  const router = useNavigate();

  const handleClick = (route: string) => {
    router(route);
  };

  const buttonFreedom: ButtonProps = {
    label: "На свободу",
    onClick: () => handleClick("/freedom"),
    color: "secondary",
  };

  const buttonProfile: ButtonProps = {
    label: "Профиль",
    onClick: () => handleClick("/profile"),
    color: "secondary",
  };

  const mainButtons: ButtonProps[] = [buttonFreedom, buttonProfile];

  return { mainButtons };
};

export default useHeader;
