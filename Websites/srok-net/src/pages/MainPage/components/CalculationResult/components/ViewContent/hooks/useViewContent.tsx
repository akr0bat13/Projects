import { ResultComponent, StateComponent } from "../utils/ViewContent.types";

export const useViewContent = () => {
  const mockResultData: ResultComponent[] = [
    {
      title: "Срок зачета",
      date: "15.11.2026",
      fromApilation: 868,
    },
    {
      title: "Освобождение",
      date: "15.11.2026",
      fromApilation: 868,
    },
    {
      title: "ПТР",
      date: "15.11.2026",
      fromApilation: 868,
    },
    {
      title: "УДО",
      date: "15.11.2026",
      fromApilation: 868,
    },
    {
      title: "Колония-поселения",
      date: "15.11.2026",
      fromApilation: 868,
    },
    {
      title: "ИТР",
      date: "15.11.2026",
      fromApilation: 868,
    },
  ];

  const mockStateResult: StateComponent = {
    state: 159,
    part: 4,
    title: "Мошенничество",
    severity: "Тяжелое",
    punishment:
      "наказывается лишением свободы на срок до десяти лет, со штрафом в размере до одного миллиона рублей или в размере заработной платы или иного дохода осужденного за период до трех лет либо без такового и с ограничением свободы на срок до двух лет либо без такового.",
  };
  return { mockResultData, mockStateResult };
};
