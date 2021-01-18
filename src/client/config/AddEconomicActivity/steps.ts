export interface IStep {
  name: string;
  subSteps?: string[];
}

export const addEconomicActivitySteps: IStep[] = [
  { name: 'addEconomicActivity.addActivity' },
  { name: 'addEconomicActivity.getDEDApproval' },
];
