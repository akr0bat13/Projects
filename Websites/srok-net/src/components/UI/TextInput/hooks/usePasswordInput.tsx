import { useState, useEffect } from "react";

export const usePasswordInput = () => {
  const [isShow, setShow] = useState(false);

  const handleClickTrigger = () => {
    setShow(!isShow);
  };

  useEffect(() => {
    if (!isShow) return;
    const timer = setTimeout(() => setShow(false), 2000);
    return () => clearTimeout(timer);
  }, [isShow]);

  return {
    isShow,
    handleClickTrigger,
  };
};
