import React, { useEffect, useState } from "react";

import HowItWorks from "src/components/UI/HowItWorks";
import { SectionLayout } from "src/components/UI/SectionLayout/SectionLayout";
import LoadingScreen from "src/components/smart/LoadingScreen";
import { useDispatch } from "src/store";
import { useUpdateLawsInfoMutation } from "src/store/api/lawsInfoPageApi.api";
import { toggleLawsInfo } from "src/store/slices/CalculatorResult";
import { updateNotification } from "src/utils/helpers/updateNotification";

import CalculationResult from "./components/CalculationResult";
import CalculatorSearch from "./components/CalculatorSearch";

const MainPage = () => {
  const dispatch = useDispatch();

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
    }

    if (updateLawsInfoError) {
      setResult(false);
      updateNotification("error", "Произошла ошибка, попробуйте еще раз");
    }
  }, [updateLawsInfoSuccess, updateLawsInfoError]);

  return (
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
        <HowItWorks styleConteiner={{ marginTop: 100 }} />
      )}
    </SectionLayout>
  );
};

export default MainPage;
