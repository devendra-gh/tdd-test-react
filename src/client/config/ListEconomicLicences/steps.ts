export interface IStep {
  name: string;
}

const steps: IStep[] = [
  {
    name: 'makePayment',
  },
  {
    name: 'downloadCertificate',
  },
];

export default steps;
