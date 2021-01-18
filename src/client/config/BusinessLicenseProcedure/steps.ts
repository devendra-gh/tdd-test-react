// list of substeps ids
export interface IStep {
  name: string;
  subSteps?: string[];
}

export const steps: IStep[] = [
  { name: 'businessLicenseProcedure.step1.title' },
  { name: 'businessLicenseProcedure.step2.title' },
  { name: 'businessLicenseProcedure.step3.title' },
];

export default steps;

export const noRefCheck = () => undefined;
