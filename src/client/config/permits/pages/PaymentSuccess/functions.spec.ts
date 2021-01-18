import bpm from 'client/services/bpm';
import { IVariables } from '@tamm/app-composer';
import functions from './functions';
import {
  PERMIT_AIR_AD,
  PERMIT_FOOD_TRUCK,
} from '../../utils/constants/permits';
import getSteps from '../../utils/getSteps';
import { STEP_4_1, STEP_4 } from '../../steps';

jest.mock('client/services/bpm', () => ({
  message: jest
    .fn()
    .mockReturnValueOnce(
      Promise.resolve({
        success: true,
        data: {
          id: 1,
          businessKey: 'test key',
        },
      }),
    )
    .mockReturnValueOnce(Promise.reject(new Error('test error'))),
}));

global.console = { ...global.console, log: jest.fn() };
global.window = Object.create(window);

// eslint-disable-next-line no-console
console.log = () => {};
console.info = () => {};
console.warn = () => {};
console.error = () => {};

describe('payment success functions', () => {
  let props: any;
  let bpmUrl: string;

  beforeEach(() => {
    window.open = jest.fn();
    bpmUrl = 'http://test-bpm-url';
    props = {
      businessKey: 'test key',
      capId: 'test',
      DEDLicenseNumber: 'testNumber',
      processComplete: true,
      serviceType: PERMIT_AIR_AD,
      permitInfo: {
        [PERMIT_AIR_AD]: {},
        [PERMIT_FOOD_TRUCK]: { permitDetails: { permitType: 'test' } },
      },
      actions: {
        permitInfo: {
          reset: jest.fn(),
        },
        instanceId: {
          reset: jest.fn(),
        },
        permitType: {
          reset: jest.fn(),
        },
        serviceType: {
          reset: jest.fn(),
        },
        companyType: {
          reset: jest.fn(),
        },
        companyDetails: {
          reset: jest.fn(),
        },
        stepsStatus: {
          reset: jest.fn(),
        },
        processComplete: {
          update: jest.fn(),
        },
      },
    };
  });

  it('should be instance of function', () =>
    expect(functions.onClick).toBeInstanceOf(Function));

  it('should successfully send message with bpm', async () => {
    const onClickFunction = functions.onClick(bpmUrl);
    await onClickFunction(props);
    expect(bpm.message).toHaveBeenCalled();
  });

  it('should fail to send message with bpm', async () => {
    let url: string = 'https://stage.tamm.abudhabi/';
    Object.defineProperty(window, 'location', {
      value: {
        href: url,
      },
    });
    const onClickFunction = functions.onClick(bpmUrl);
    await onClickFunction(props);
    url = 'https://google.com/';
    Object.defineProperty(window, 'location', {
      value: {
        href: url,
      },
    });
    const onClickFunction2 = functions.onClick(bpmUrl);
    await onClickFunction2(props);
  });

  it('should call documentDownload', async () => {
    functions.documentDownload(props);
  });

  it('should call documentDownload with null values', async () => {
    props.capId = '';
    props.DEDLicenseNumber = '';
    functions.documentDownload(props);
  });

  it('should call processCompleteCheck', () => {
    functions.processCompleteCheck(props);
    expect(functions.processCompleteCheck).toBeInstanceOf(Function);
  });

  it('should call getStepStatus', () => {
    props.steps = getSteps(props);
    functions.getStepStatus(props);
    expect(functions.getStepStatus).toBeInstanceOf(Function);

    props.serviceType = PERMIT_FOOD_TRUCK;
    props.processComplete = false;
    expect(functions.getStepStatus(props)).toBeInstanceOf(Object);

    props.processComplete = true;
    expect(functions.getStepStatus(props)).toBeInstanceOf(Object);
  });
  // eslint-disable-next-line no-console
  console.log = () => {};
  console.info = () => {};
  console.warn = () => {};
  console.error = () => {};

  describe('should call getCurrentStep', () => {
    let tempProps: IVariables;
    beforeEach(() => {
      tempProps = {
        ...props,
        processComplete: false,
        serviceType: PERMIT_AIR_AD,
      };
    });
    it('For singlestep without processComplete', () => {
      const result = functions.getCurrentStep(tempProps);
      expect(result).toEqual(STEP_4);
    });
    it('For singlestep with processComplete', () => {
      tempProps = {
        ...tempProps,
        processComplete: !tempProps.processComplete,
      };
      const result = functions.getCurrentStep(tempProps);
      expect(result).toEqual('');
    });
    it('For multistep', () => {
      tempProps.serviceType = PERMIT_FOOD_TRUCK;
      const result = functions.getCurrentStep(tempProps);
      expect(result).toEqual(STEP_4_1);
    });
  });
});
