export interface IStep {
  name: string;
  subSteps?: string[];
}

export const goldenServicesSteps: IStep[] = [
  { name: 'goldenServices.steps.addApplicationInformation' },
  { name: 'goldenServices.steps.makePayment' },
  { name: 'goldenServices.steps.appointmentSummary' },
];
