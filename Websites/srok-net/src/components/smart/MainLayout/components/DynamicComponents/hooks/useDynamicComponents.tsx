import { selectIsMobileMenu } from "src/store/slices/isMobile/isMobile.selectors";

import { useSelector } from "src/store";

export const useDynamicComponents = () => {
  const isMobile = useSelector(selectIsMobileMenu);

  return {
    isMobile,
  };
};
