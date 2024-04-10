import { useSelector } from "src/store";
import { calculatorFiltrationApilation } from "src/store/slices/CalculatorFiltration/calculatorFiltration.selectors";
import { calculatorResult } from "src/store/slices/CalculatorResult/CalculatorResult.selectors";

import { ResultComponent } from "../utils/ViewContent.types";

export const useViewContent = () => {
  const { calculatorInfo } = useSelector(calculatorResult);
  const isApilation = useSelector(calculatorFiltrationApilation);
  const wordVarant = isApilation.isActive ? "аппеляции" : "приговора";
  const resultData: ResultComponent[] = [
    {
      title: "Количество дней, зачтенных в срок отбывания наказания",
      date: calculatorInfo.max_term,
    },
    {
      title: "Дата освобождения",
      date: calculatorInfo.release.date,
      fromApilation: {
        subtitle: `Количество дней до даты освобождения с даты ${wordVarant}`,
        data: calculatorInfo.release.credit,
      },
    },
    {
      title: "Дата с которой можно подавать на принудительные трудовые работы",
      date: calculatorInfo.ptr.date,
      fromApilation: {
        subtitle: `Количество дней c даты ${wordVarant} до даты с которой можно подавать на ПТР`,
        data: calculatorInfo.ptr.credit,
      },
    },
    {
      title: "Дата с которой можно подавать на условно досрочное освобождение",
      date: calculatorInfo.udo.date,
      fromApilation: {
        subtitle: `Количество дней c даты ${wordVarant} до даты с которой можно подавать на УДО`,
        data: calculatorInfo.udo.credit,
      },
    },
    {
      title: "Дата с которой можно подавать на колонию поселения",
      date: calculatorInfo.colony.date,
      fromApilation: {
        subtitle: `Количество дней c даты ${wordVarant} до даты с которой можно подавать на колонию поселения`,
        data: calculatorInfo.colony.credit,
      },
    },
    {
      title: "Дата с которой можно подавать на исправительные трудовые работы",
      date: calculatorInfo.itr.date,
      fromApilation: {
        subtitle: `Количество дней c даты ${wordVarant} до даты с которой можно подавать на ИТР`,
        data: calculatorInfo.itr.credit,
      },
    },
  ];

  return { resultData };
};
