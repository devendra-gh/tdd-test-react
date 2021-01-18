// list of substeps ids
export interface IStep {
  name: string;
  subSteps?: string[];
}
export const FORM_STEP_1 = 'step1.title';
export const FORM_STEP_2 = 'step2.title';
export const FORM_STEP_3 = 'step3.title';

export const minimumSteps: IStep[] = [
  { name: FORM_STEP_1 },
  { name: FORM_STEP_3 },
];
const steps: IStep[] = [
  { name: FORM_STEP_1 },
  {
    name: FORM_STEP_2,
  },
  { name: FORM_STEP_3 },
];

export default steps;
