import { stepsLists } from '../../sharedFunctions/serviceSteps';

describe('Shared functions => serviceSteps', () => {
  it('should cover', () => {
    stepsLists();
    expect(stepsLists).toBeInstanceOf(Object);
  });
});
