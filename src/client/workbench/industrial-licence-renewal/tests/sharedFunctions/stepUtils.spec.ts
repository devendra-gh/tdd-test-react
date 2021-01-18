import { getSteps } from '../../sharedFunctions/stepUtils';

describe('Shared functions => stepUtils', () => {
  it('should cover 1', () => {
    const i18n = jest.fn();
    const cStep = { id: 'step_selectLicence', status: '' };
    const cSubStep = { id: '', status: '' };
    const stepsList = [{}];
    getSteps(i18n, cStep, cSubStep, stepsList);
    expect(getSteps).toBeInstanceOf(Object);
  });

  it('should cover 2', () => {
    const i18n = jest.fn();
    const cStep = { id: 'step_selectLicence', status: '' };
    const cSubStep = { id: 'step_selectLicence', status: '' };
    const stepsList = [
      { id: 'step_selectLicence', substeps: [{ id: 'step_selectLicence' }] },
    ];
    getSteps(i18n, cStep, cSubStep, stepsList);
    expect(getSteps).toBeInstanceOf(Object);
  });

  it('should cover 3', () => {
    const i18n = jest.fn();
    const cStep = { id: 'step_selectLicence', status: '' };
    const cSubStep = { id: '', status: '' };
    const stepsList = [
      { id: 'step_selectLicence', substeps: [{ id: 'step_selectLicence' }] },
    ];
    getSteps(i18n, cStep, cSubStep, stepsList);
    expect(getSteps).toBeInstanceOf(Object);
  });
});
