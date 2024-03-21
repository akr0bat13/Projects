import { MockSectionActs } from "src/pages/MainPage/utils/mockSectionActs";

export const calculateDisabled = (
  state: string,
  part: string,
  mockSectionActs: MockSectionActs
) => {
  // eslint-disable-next-line no-debugger
  debugger;
  if (!state) {
    return false;
  } else if (mockSectionActs[state]?.length === 0) {
    return true;
  } else {
    return !!mockSectionActs[state]?.includes(Number(part));
  }
};
