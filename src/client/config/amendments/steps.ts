export interface IStep {
  name: string;
  subSteps?: string[];
  id?: string;
}

export const steps: IStep[] = [
  {
    name: 'process.selectLicenceNumber',
  },
  {
    name: 'process.selectAmendmentType',
  },
  {
    id: 'amendments',
    name: 'process.makeAmendment',
  },
  {
    name: 'process.getDEDApproval',
  },
  {
    name: 'process.makePayment',
  },
  {
    name: 'process.downloadLicence',
  },
];

export default steps;
