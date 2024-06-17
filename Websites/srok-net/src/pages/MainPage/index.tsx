import React, { useEffect, useState } from "react";

import Advertisement from "src/components/UI/Advertisement";
import { SectionLayout } from "src/components/UI/SectionLayout/SectionLayout";
import { ContactUsForm } from "src/components/smart/Header/components/Modals/ContactUsForm";
import LoadingScreen from "src/components/smart/LoadingScreen";
import Modal from "src/components/smart/Modal";
import { useCalculator } from "src/pages/MainPage/hooks/useCalculator";
import { useDispatch } from "src/store";
import { useUpdateLawsInfoMutation } from "src/store/api/lawsInfoPageApi.api";
import { toggleInitialState } from "src/store/slices/CalculatorFiltration";
import { toggleLawsInfo } from "src/store/slices/CalculatorResult";
import { ICalculatorFiltrationState } from "src/utils/types/CalculatorFiltration.types";

import CalculationResult from "./components/CalculationResult";
import CalculatorSearch from "./components/CalculatorSearch";

const initialState: ICalculatorFiltrationState = {
  homeArrest: {
    title: "Домашний арест",
    isActive: false,
    values: [
      {
        id: 1,
        start: null,
        end: null,
      },
    ],
  },
  timeUnderArrest: {
    title: "Срок содержания под стражей",
    isActive: false,
    values: [
      {
        id: 1,
        start: null,
        end: null,
      },
    ],
  },
  rejectingCurrentDoings: {
    title: "Запрет определенных действий",
    isActive: false,
    values: [
      {
        id: 1,
        start: null,
        end: null,
      },
    ],
  },
  apilation: {
    isActive: false,
    years: "",
    month: "",
    apilationDate: null,
    detention: null,
  },
  punishmentType: {
    title: "",
    value: 0,
    isActive: false,
  },
};

const MainPage = () => {
  const dispatch = useDispatch();
  const { advertisementMainContent, showModalSettings, setShowModal } =
    useCalculator();

  const [result, setResult] = useState<boolean>(false);
  const [
    updateLawsInfo,
    {
      isSuccess: updateLawsInfoSuccess,
      isLoading: isLoadingLawsInfo,
      isError: updateLawsInfoError,
      data: updateLawsInfoData,
    },
  ] = useUpdateLawsInfoMutation();

  useEffect(() => {
    if (updateLawsInfoSuccess) {
      if (updateLawsInfoData) {
        dispatch(toggleLawsInfo(updateLawsInfoData?.data.laws));
      }
      setResult(true);
      dispatch(toggleInitialState(initialState));
    }

    if (updateLawsInfoError) {
      setResult(false);
    }
  }, [updateLawsInfoSuccess, updateLawsInfoError]);

  return (
    <>
      <SectionLayout title="Калькулятор">
        <CalculatorSearch
          updateLawsInfo={updateLawsInfo}
          isLoadingLawsInfo={isLoadingLawsInfo}
        />
        {isLoadingLawsInfo && (
          <div className="response-waiting" style={{ paddingTop: 100 }}>
            <LoadingScreen />
          </div>
        )}
        {result ? (
          <CalculationResult />
        ) : (
          <div className="advertising-content-container">
            {advertisementMainContent.map((item) => (
              <Advertisement
                key={item.title}
                title={item.title}
                onClick={item.onClick}
                text={item.text}
              />
            ))}
          </div>
        )}
      </SectionLayout>
      <Modal {...showModalSettings}>
        <ContactUsForm setShowModal={setShowModal} />
      </Modal>
    </>
  );
};

export default MainPage;
