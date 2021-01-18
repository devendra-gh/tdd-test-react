import { IVariables } from '@tamm/app-composer';
import index from './index';

jest.mock('./functions');

// eslint-disable-next-line no-console
console.log = () => {};
console.info = () => {};
console.warn = () => {};
console.error = () => {};

describe('Result/index', () => {
  const props: IVariables = {
    formCompanyDetails: {
      legalForm: 'legalForm',
      location: 'location',
    },
    formSelectActivity: {
      activities: undefined,
      activity: 'activityCode',
    },
    actions: {
      resultState: { update: jest.fn() },
    },
    history: {
      push: jest.fn(),
    },
  };
  it('should export object', () => {
    expect(index).toBeInstanceOf(Object);
  });

  it('Check steps', () => {
    index[0].state.mapState.forEach((item: any) => {
      if (typeof item === 'object') {
        const steps = item.steps({
          businessLicenseProcedureSteps: 'businessLicenseProcedureSteps',
        });
        expect(steps).toBe('businessLicenseProcedureSteps');
      }
    });
  });

  it('init should redirect and return if no activity in redux', () => {
    index[0].init(props);
    expect(props.history.push).toBeCalled();
  });

  it('init should redirect and return if no selectedActivity can be found', () => {
    props.formSelectActivity.activities = [
      { activityCode: 'activityCodeOther' },
    ];
    index[0].init(props);
    expect(props.history.push).toBeCalled();
  });

  it('init should call resultState.update if selectedActivity is found', () => {
    props.formSelectActivity.activities = [{ activityCode: 'activityCode' }];
    index[0].init(props);
    expect(props.actions.resultState.update).toBeCalled();
  });
});
