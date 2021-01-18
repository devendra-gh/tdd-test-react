// list of substeps ids
export interface IStep {
  name: string;
  description?: string;
  subSteps?: string[];
}
export const STEP_1 = 'steps.step1';
export const STEP_2 = 'steps.step2';
export const STEP_3 = 'steps.step3';
export const STEP_4 = 'steps.step4';

export const STEP_1_DESCRIPTION = 'steps.step1.description';
export const STEP_2_DESCRIPTION = 'steps.step2.description';
export const STEP_3_DESCRIPTION = 'steps.step3.description';
export const STEP_4_DESCRIPTION = 'steps.step4.description';

export const STEP_1_1 = 'steps.step1.1';
export const STEP_2_1 = 'steps.step2.1';
export const STEP_3_1 = 'steps.step3.1';
export const STEP_4_1 = 'steps.step4.1';
export const STEP_4_1_1 = 'steps.step4.1.1';
export const STEP_4_1_2 = STEP_2;
export const STEP_4_1_3 = 'steps.step4.1.3';
export const STEP_4_1_4 = 'steps.step4.1.4';

export const STEP_1_1_DESCRIPTION = 'steps.step1.1.description';
export const STEP_2_1_DESCRIPTION = 'steps.step2.1.description';
export const STEP_3_1_DESCRIPTION = 'steps.step3.1.description';
export const STEP_4_1_DESCRIPTION = 'steps.step4.1.description';

const steps: IStep[] = [
  {
    name: STEP_1,
    description: STEP_1_DESCRIPTION,
  },
  {
    name: STEP_2,
    description: STEP_2_DESCRIPTION,
  },
  {
    name: STEP_3,
    description: STEP_3_DESCRIPTION,
  },
  {
    name: STEP_4,
    description: STEP_4_DESCRIPTION,
  },
];
export const steps1: IStep[] = [
  {
    name: STEP_1_1,
    description: STEP_1_1_DESCRIPTION,
  },
  {
    name: STEP_2_1,
    description: STEP_2_1_DESCRIPTION,
  },
  {
    name: STEP_3_1,
    description: STEP_3_1_DESCRIPTION,
  },
  {
    name: STEP_4_1,
    description: STEP_4_1_DESCRIPTION,
    subSteps: [STEP_4_1_1, STEP_4_1_2, STEP_4_1_3, STEP_4_1_4],
  },
];

export default steps;
