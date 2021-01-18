import { steps, moeSteps } from "client/config/steps";
import { IVariables } from "@tamm/app-composer";

const checkMoeStep = (licenceType: string) => {
  if (licenceType === "branchForeign" || licenceType === "branchGCC")
    return true;
  else return false;
};

const getStep = (state: IVariables) => {
  const {
    economicLicense: {
      licenceType: { licenceType }
    }
  } = state;
  if (checkMoeStep(licenceType)) return moeSteps;
  else return steps;
};

export default { getStep };
