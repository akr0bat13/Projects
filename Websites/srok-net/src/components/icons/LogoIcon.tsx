import { FC } from "react";

import { IconType } from "./types/icon.types";

const LogoIcon: FC<IconType> = (props) => {
  const { fill } = props;
  return (
    <svg
      width="107"
      height="62"
      viewBox="0 0 107 62"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M1.65846 0L4.6853 0.970288C5.03055 1.08096 5.38732 1.19514 5.75542 1.31294L5.75546 1.31296L5.75548 1.31296C10.7808 2.92124 17.9151 5.20446 26.5958 8.44476C30.5638 9.92593 35.5159 11.8611 40.5989 15.8861C44.7865 19.2021 48.9731 23.8604 52.8549 30.6899C56.796 23.8506 61.0458 19.1895 65.2936 15.8739C70.4444 11.8534 75.4615 9.92083 79.4851 8.44039C88.2902 5.20063 95.5265 2.91783 100.625 1.30957C100.998 1.19178 101.36 1.0776 101.71 0.966936L104.721 0.0156144L105.288 3.28418C106.125 8.11317 106.584 14.4216 106.33 20.7314C106.077 26.9994 105.11 33.5392 102.927 38.6828C98.8811 48.2103 89.4511 53.9208 79.9387 57.2783C70.3142 60.6755 59.9093 61.9149 52.8697 61.9998C52.8409 62.0001 52.8122 62 52.7836 61.9995C45.8383 61.9122 35.585 60.6709 26.0991 57.2742C16.7093 53.9118 7.40811 48.1939 3.42124 38.6682C1.27038 33.5292 0.317859 26.9945 0.0689429 20.7295C-0.181628 14.4229 0.271252 8.11751 1.09596 3.29156L1.65846 0Z"
        fill={fill || "#0C64C5"}
      />
    </svg>
  );
};

export default LogoIcon;