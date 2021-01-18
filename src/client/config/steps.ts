export interface IStep {
  name: string;
  subSteps?: string[];
}

export const steps: IStep[] = [
  {
    name: 'economic_name',
    subSteps: [
      'ded_approval',
      'payment',
      'initial_approval',
      'download_certificate',
    ],
  },
  {
    name: 'economic_licence',
    subSteps: ['ded_approval', 'payment', 'download_certificate'],
  },
];

export const withoutNameSteps: IStep[] = [
  { name: 'ded_approval' },
  { name: 'ica_payment' },
  { name: 'initial_approval' },
  { name: 'payment' },
  { name: 'download_certificate' },
];

export const moaWithoutNameSteps: IStep[] = [
  { name: 'moa_approval' },
  { name: 'ded_approval' },
  { name: 'ica_payment' },
  { name: 'initial_approval' },
  { name: 'payment' },
  { name: 'download_certificate' },
];

export const instantLicenceSteps: IStep[] = [
  {
    name: 'economic_licence',
    subSteps: ['payment', 'download_certificate'],
  },
];

export const moeSteps: IStep[] = [
  {
    name: 'economic_name',
    subSteps: ['ded_approval', 'payment', 'initial_approval'],
  },
  { name: 'initial_registration' },
  {
    name: 'economic_licence',
    subSteps: ['submit_licence', 'ded_approval', 'payment'],
  },
  { name: 'final_registration' },
];

export const economicNameSteps: IStep[] = [
  { name: 'ded_approval' },
  { name: 'payment' },
  { name: 'initial_approval' },
  { name: 'download_certificate' },
];
