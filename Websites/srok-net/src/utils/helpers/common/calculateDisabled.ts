import { MockSectionActs } from "src/pages/MainPage/utils/mockSectionActs";

export const calculateDisabled = (
  state: string,
  part: string,
  mockSectionActs: MockSectionActs
) => {
  if (!state) {
    return false;
  } else if (mockSectionActs[state]?.length === 0) {
    return true;
  } else {
    return !!mockSectionActs[state]?.includes(Number(part));
  }
};
