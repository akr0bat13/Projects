import { ChangeEvent, useEffect, useState } from "react";

import { RadioOptions } from "src/components/UI/Radio";
import { useDispatch, useSelector } from "src/store";
import {
  updateContactUsModalData,
  updateContactUsModalTextField,
  updateContactUsModalTheme,
} from "src/store/slices/ContactUsModal";
import { contactUsModal } from "src/store/slices/ContactUsModal/contactUsModal.selectors";
import { checkIsMobile } from "src/store/slices/isMobile";
import { selectIsMobileMenu } from "src/store/slices/isMobile/isMobile.selectors";

export const useHeadBar = () => {
  const dispatch = useDispatch();
  const isMobile = useSelector(selectIsMobileMenu);
  const modalInfo = useSelector(contactUsModal);
  const { contactData, textInput, themeValue } = useSelector(contactUsModal);

  const [textContent, setTextContent] = useState(textInput);
  const [themeChoose, setThemeChoose] = useState(themeValue);
  const [contactInfo, setContactInfo] = useState(contactData);

  useEffect(() => {
    setTextContent(textInput);
  }, [modalInfo]);

  const checkMobileOpen = () => {
    dispatch(checkIsMobile(true));
  };

  const checkMobileClosed = () => {
    dispatch(checkIsMobile(false));
  };

  const theme_choose: RadioOptions = {
    theme_choose1: {
      value: 1,
      label: "Ваше предложение",
    },
    theme_choose2: {
      value: 2,
      label: "Индивидуальная консультация",
    },
    theme_choose3: {
      value: 3,
      label: "Прочее",
    },
  };

  const inputModalThemeChoose = (event: ChangeEvent<HTMLInputElement>) => {
    setThemeChoose(parseInt(event.target.value));
    dispatch(updateContactUsModalTheme(parseInt(event.target.value)));
  };

  const inputModalTextField = (event: ChangeEvent<HTMLTextAreaElement>) => {
    setTextContent(event.target.value);
    dispatch(updateContactUsModalTextField(event.target.value));
  };

  const inputModalUserInfo = (event: ChangeEvent<HTMLInputElement>) => {
    setContactInfo(event.target.value);
    dispatch(updateContactUsModalData(event.target.value));
  };

  return {
    isMobile,
    checkMobileOpen,
    checkMobileClosed,
    textContent,
    theme_choose,
    inputModalThemeChoose,
    inputModalTextField,
    inputModalUserInfo,
    contactInfo,
    themeChoose,
  };
};
