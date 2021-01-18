// list of substeps ids
export interface IStep {
  name: string;
  subSteps?: string[];
}

const steps: IStep[] = [
  { name: 'trade_name', subSteps: ['submit_name', 'waiting_approval'] },
  {
    name: 'trade_licence',
    subSteps: ['submit_licence', 'waiting_approval', 'result'],
  },
];

export default steps;
