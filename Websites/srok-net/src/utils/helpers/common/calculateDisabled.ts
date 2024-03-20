import { MockSectionActs } from "src/pages/MainPage/utils/mockSectionActs";

export const calculateDisabled = (
  part: string,
  state: string,
  mockSectionActs: MockSectionActs
) => {
  if (mockSectionActs[state] && mockSectionActs[state].length === 0) {
    return false;
  } else {
    return !(part && state && mockSectionActs[state]?.includes(Number(part)));
  }
};
