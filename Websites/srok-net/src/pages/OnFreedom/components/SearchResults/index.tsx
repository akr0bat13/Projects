import cn from "classnames";
import React, { FC, useEffect, useState } from "react";
import "./SearchResults.scss";

import Book from "src/assets/images/book.svg";
import { Button } from "src/components/UI/Button/Button";
import { InputContainer } from "src/components/UI/InputContainer/InputContainer";
import { Select, TOption } from "src/components/UI/Select/Select";
import { H } from "src/components/UI/Text/H";
import { TextInput } from "src/components/UI/TextInput/TextInput";
import ContactForm from "src/components/smart/ContactForm";
import Modal from "src/components/smart/Modal";
import { useDispatch, useSelector } from "src/store";
import { updateSelectedCity } from "src/store/slices/OnFreedom";
import { selectedCity } from "src/store/slices/OnFreedom/onFreedom.selectors";
import { updateOnFreedomModal } from "src/store/slices/OnFreedomForm";
import { cities } from "src/utils/constants/cities";
import { updateNotification } from "src/utils/helpers/updateNotification";
import { metricsForm } from "src/utils/metrics/metrics";
import { ISearchResult } from "src/utils/types/OnFreedom.types";
import { OnFreedomModalState } from "src/utils/types/OnFreedomModal.types";

import { useOnFreedom } from "../../hooks/useOnFreedom";

const modalInitialState: OnFreedomModalState = {
  modalInputs: {
    contactInfo: "",
    useInform: "",
    periodic: "",
  },
  valuablePrice: {
    defaultPrice: 0,
    willingToPay: 0,
  },
  extraSupport: {
    supportVariants: 0,
    textField: "",
  },
};

const SearchResults: FC<ISearchResult> = (component) => {
  const { title, components, disabled } = component;

  const dispatch = useDispatch();

  const { label, value } = useSelector(selectedCity);

  const [selectValue, setSelectValue] = useState<TOption>({
    value,
    label,
  });
  const [cityError, setCityError] = useState<boolean>(false);

  const { showModalSettings, inputFormsValue, setShowModal } = useOnFreedom();
  const isCorrectCity = selectValue.value !== "Москва";

  useEffect(() => {
    if (isCorrectCity) {
      setCityError(true);
      updateNotification(
        "error",
        "На текущий момент отчеты доступны только по Москве"
      );
    } else {
      setCityError(false);
    }
  }, [selectValue]);

  const handleChangeCity = (elem: TOption) => {
    setSelectValue(elem);
    dispatch(updateSelectedCity(elem));
  };

  const handleClick = () => {
    if (selectValue.label) {
      dispatch(updateOnFreedomModal(modalInitialState));
      setShowModal(true);
      metricsForm("reachGoal", "Buy");
    }
  };

  return (
    <>
      <div
        className={cn("search-results", {
          "search-results-disabled": disabled,
        })}
      >
        <img className="search-result-image" src={Book} alt="" />
        <div className="search-results-content">
          <H variant="lg" color={disabled ? "disabled" : "blue"}>
            {title}
          </H>
          <div className="search-results-inputs">
            {components.map((item, index) => (
              <InputContainer
                key={item.label}
                label={item.label}
                color={item.disabled ? "disabled" : "blue"}
              >
                {item.isSelect ? (
                  <Select
                    options={cities}
                    placeholder={"Выберите город"}
                    disabled={disabled}
                    value={selectValue}
                    handleChange={handleChangeCity}
                    error={index === 0 ? cityError : false}
                  />
                ) : (
                  <TextInput isLock={true} disabled={item.disabled} />
                )}
              </InputContainer>
            ))}
          </div>
        </div>
        <div className="search-results-button">
          <Button
            label="Купить"
            color="primary"
            disabled={cityError || disabled}
            onClick={handleClick}
          />
        </div>
      </div>
      <Modal {...showModalSettings}>
        <ContactForm setShowModal={setShowModal} {...inputFormsValue} />
      </Modal>
    </>
  );
};

export default SearchResults;
