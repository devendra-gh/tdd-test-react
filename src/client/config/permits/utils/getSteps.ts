import { IVariables } from '@tamm/app-composer';
import steps, { steps1 } from '../steps';
import checkIfMultiStepPermit from './checkIfMultiStepPermit';

const getSteps = (data: IVariables) => {
  return checkIfMultiStepPermit(data) ? steps1 : steps;
};
export default getSteps;
