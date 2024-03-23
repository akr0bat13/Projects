import { useDispatch, useSelector } from "src/store";
import { checkIsMobile } from "src/store/slices/isMobile";
import { selectIsMobileMenu } from "src/store/slices/isMobile/isMobile.selectors";

export const useHeadBar = () => {
  const dispatch = useDispatch();
  const isMobile = useSelector(selectIsMobileMenu);

  const checkMobileOpen = () => {
    dispatch(checkIsMobile(true));
  };

  const checkMobileClosed = () => {
    dispatch(checkIsMobile(false));
  };

  return {
    isMobile,
    checkMobileOpen,
    checkMobileClosed,
  };
};
