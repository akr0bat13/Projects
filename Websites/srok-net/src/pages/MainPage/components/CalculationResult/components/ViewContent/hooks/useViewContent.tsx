import { ResultComponent } from "../utils/ViewContent.types";

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

  return { mockResultData };
};
