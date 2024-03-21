export const validateInputNumber = (value: string) => {
  if (value === "") {
    return true;
  }
  const number = parseInt(value, 10);
  return !isNaN(number) && number >= 0 && number <= 12;
};
export const validateInputYear = (value: string) => {
  const regex = new RegExp(/^[0-100]*$/);
  return regex.test(value);
};

export const validateInputActState = (value: string) => {
  const regex = new RegExp(/^(?:\d{1,3}(?:\.\d{1,8})?|\d{1,8}|)$/);
  return regex.test(value);
};

export const validateEmail = (value: string) => {
  const regex = new RegExp(
    /^((?!\.)[\w\-_.]*[^.])(@\w+)(\.\w+(\.\w+)?[^.\W])$/
  );
  return regex.test(value);
};

export const validateDate = (value: string) => {
  const regex = /^[0-9.]*$/;
  return regex.test(value);
};
