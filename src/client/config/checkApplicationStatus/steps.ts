export interface IStep {
  name: string;
  subSteps?: string[];
}

export const checkApplicationSteps: IStep[] = [
  { name: 'checkApplicationStatus.step.1' },
  { name: 'checkApplicationStatus.step.2' },
];
