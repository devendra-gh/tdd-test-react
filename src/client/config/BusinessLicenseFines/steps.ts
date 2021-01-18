export interface IStep {
  name: string;
  subSteps?: string[];
}

export const payFineSteps: IStep[] = [
  {
    name: 'payfines.steps.checkLicenceFines',
  },
  { name: 'payfines.steps.payment' },
  {
    name: 'payfines.steps.fineSummary',
  },
];

export const payFineSummarySteps: IStep[] = [
  {
    name: 'payfines.steps.checkLicenceFines',
  },
  { name: 'payfines.steps.payment' },
  {
    name: 'payfines.steps.fineSummary',
  },
];
