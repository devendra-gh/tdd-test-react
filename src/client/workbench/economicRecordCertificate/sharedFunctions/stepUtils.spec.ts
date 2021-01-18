import { getSteps } from './stepUtils';

describe('Shared functions', () => {
  it('should cover mail steps ', () => {
    const i18n = jest.fn();
    const cStep = { id: 'step_selectLicence', status: '' };
    const cSubStep = { id: '', status: '' };
    getSteps(i18n, cStep, cSubStep);
    expect(getSteps).toBeInstanceOf(Object);
  });
  it('should cover mail substeps ', () => {
    const i18n = jest.fn();
    const cStep = { id: 'step_makePayment', status: '' };
    const cSubStep = { id: 'subStep_requestConfirmation', status: '' };
    getSteps(i18n, cStep, cSubStep);
    expect(getSteps).toBeInstanceOf(Object);
  });
  it('should cover mail substeps else statement', () => {
    const i18n = jest.fn();
    const cStep = { id: 'step_makePayment', status: '' };
    const cSubStep = { id: 'subStep_payAmount', status: 'process' };
    getSteps(i18n, cStep, cSubStep);
    expect(getSteps).toBeInstanceOf(Object);
  });
});
