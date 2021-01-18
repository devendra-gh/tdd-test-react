export interface IStep {
  name: string;
}

const steps: IStep[] = [
  {
    name: 'selectLicence',
  },
  {
    name: 'makePayment',
  },
  {
    name: 'applicationSummary',
  },
];

export default steps;
