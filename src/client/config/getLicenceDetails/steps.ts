export interface IStep {
  name: string;
  subSteps?: string[];
}

export const getLicenceDetailsSteps: IStep[] = [
  { name: 'getLicenceDetails.steps.enterLicenceNumber' },
  { name: 'getLicenceDetails.steps.licenceDetails' },
];
