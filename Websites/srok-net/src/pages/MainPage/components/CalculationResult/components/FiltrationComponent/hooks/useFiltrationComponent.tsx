interface IPreventiveMeasureProps {
  title: string;
  value: string;
}

export const useFiltrationComponent = () => {
  const preventiveMeasure: IPreventiveMeasureProps[] = [
    {
      title: "Домашний арест",
      value: "name",
    },
    {
      title: "Срок содержания под стражей",
      value: "name",
    },
    {
      title: "Запрет определенных действий",
      value: "name",
    },
  ];
  return { preventiveMeasure };
};
