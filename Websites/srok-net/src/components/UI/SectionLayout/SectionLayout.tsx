import { FC, ReactNode } from "react";
import "./SectionLayout.scss";

import { H } from "src/components/UI/Text/H";

import Substrate from "../Substrate";

interface SectionLayoutProps {
  title: string;
  children: ReactNode;
}

export const SectionLayout: FC<SectionLayoutProps> = ({ title, children }) => {
  return (
    <Substrate sx={{ padding: "30px 0" }}>
      <div className="section-layout-root">
        <H color="blue" variant="hd">
          {title}
        </H>
        {children}
      </div>
    </Substrate>
  );
};
