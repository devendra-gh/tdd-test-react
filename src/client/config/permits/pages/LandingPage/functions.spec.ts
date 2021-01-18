import { IVariables } from '@tamm/app-composer';
import functions from './functions';
import {
  PERMIT_ADDITIONAL_SIGNBOARD,
  PERMIT_DRAWS,
  PERMIT_FOOD_TRUCK,
} from '../../utils/constants/permits';

// eslint-disable-next-line no-console
console.log = () => {};
console.info = () => {};
console.warn = () => {};
console.error = () => {};

describe('permit/pages/LandingPage/functions', () => {
  let props: IVariables;
  beforeEach(() => {
    props = {
      match: {
        params: {},
      },
      serviceType: PERMIT_ADDITIONAL_SIGNBOARD,
      locale: 'en',
      history: {
        push: jest.fn(),
      },
      permitInfo: {},
      actions: {
        permitInfo: {
          update: jest.fn(),
        },
        serviceType: {
          update: jest.fn(),
        },
        permitType: {
          update: jest.fn(),
        },
        urlServiceName: {
          update: jest.fn(),
        },
        locale: {
          locale: {
            update: jest.fn(),
          },
        },
      },
    };
  });
  // eslint-disable-next-line no-console
  console.log = () => {};
  console.info = () => {};
  console.warn = () => {};
  console.error = () => {};

  describe('onStart', () => {
    it('should properly call history.push', async () => {
      functions.onStart(props);
      expect(props.history.push).toBeCalled();
    });
    it('should properly call history.push for undertaking page', async () => {
      props.serviceType = PERMIT_DRAWS;
      functions.onStart(props);
      expect(props.history.push).toBeCalled();
    });
    it('for dummy or invalid serviceType', async () => {
      props.serviceType = 'test';
      expect(functions.onStart(props)).toBeFalsy();
    });
  });
  // eslint-disable-next-line no-console
  console.log = () => {};
  console.info = () => {};
  console.warn = () => {};
  console.error = () => {};

  describe('init', () => {
    it('should call urlServiceName', async () => {
      await functions.init(props);
      expect(props.actions.urlServiceName.update).toBeCalled();
    });
    it('locale undefined', async () => {
      props.locale = undefined;
      await functions.init(props);
      expect(props.actions.urlServiceName.update).toBeCalled();
    });
    it('set invalid or dummy serviceName', async () => {
      props.match.params.serviceName = 'test';
      await functions.init(props);
      expect(props.actions.urlServiceName.update).toBeCalled();
    });
    it('set valid serviceName', async () => {
      props.match.params.serviceName = PERMIT_FOOD_TRUCK;
      await functions.init(props);
      expect(props.actions.permitInfo.update).toBeCalled();
    });
  });
});
