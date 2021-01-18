import functions from './functions';

// eslint-disable-next-line no-console
console.log = () => {};
console.info = () => {};
console.warn = () => {};
console.error = () => {};

describe('pages/EconomicNameWaitingApproval', () => {
  it('should properly call getStep with branchForeign', () => {
    const state = {
      economicLicense: {
        licenceType: { licenceType: 'branchForeign' },
      },
    };
    const data = functions.getStep(state);
    expect(data).toMatchObject([
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
    ]);
  });

  it('should properly call getStep with branchGCC', () => {
    const state = {
      economicLicense: {
        licenceType: { licenceType: 'branchGCC' },
      },
    };
    const data = functions.getStep(state);
    expect(data).toMatchObject([
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
    ]);
  });

  it('should properly call getStep with other Licences', () => {
    const state = {
      economicLicense: {
        licenceType: { licenceType: 'instant' },
      },
    };
    const data = functions.getStep(state);
    expect(data).toMatchObject([
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
    ]);
  });
});
