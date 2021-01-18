// list of substeps ids
export interface IStep {
  name: string;
  subSteps?: string[];
}

export const minimumSteps: IStep[] = [];
const steps: IStep[] = [];

export default steps;
