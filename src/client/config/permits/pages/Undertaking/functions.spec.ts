import functions from './functions';
import {
  PERMIT_CATEGORY_ADDITIONAL_AD,
  PERMIT_CATEGORY_PROMOTIONAL_AD,
} from '../../utils/constants/permitCategories';
import {
  PERMIT_CAFE,
  PERMIT_AIR_AD,
  PERMIT_DRAWS,
} from '../../utils/constants/permits';

// eslint-disable-next-line no-console
console.log = () => {};
console.info = () => {};
console.warn = () => {};
console.error = () => {};

describe('src/client/config/permits/pages/Undertaking/functions', () => {
  let props: any;
  let e: any;
  const defaultUndertaking = {
    undertaking: {
      isApproved: false,
      showErrors: false,
    },
  };
  beforeEach(() => {
    props = {
      match: { params: { serviceName: PERMIT_DRAWS } },
      serviceType: PERMIT_DRAWS,
      permitType: PERMIT_CATEGORY_PROMOTIONAL_AD,
      permitInfo: {
        [`${PERMIT_DRAWS}`]: {
          name: PERMIT_DRAWS,
          category: PERMIT_CATEGORY_PROMOTIONAL_AD,
          undertaking: {
            ...defaultUndertaking.undertaking,
          },
        },
        [`${PERMIT_AIR_AD}`]: {
          name: PERMIT_AIR_AD,
          category: PERMIT_CATEGORY_ADDITIONAL_AD,
          ...defaultUndertaking,
        },
        [`${PERMIT_CAFE}`]: {
          name: PERMIT_CAFE,
          category: PERMIT_CATEGORY_ADDITIONAL_AD,
          ...defaultUndertaking,
        },
      },
      history: {
        reset: jest.fn(),
        push: jest.fn(),
      },
      actions: {
        permitInfo: {
          reset: jest.fn(),
          update: jest.fn(),
        },
        serviceType: {
          update: jest.fn(),
        },
        permitType: {
          update: jest.fn(),
        },
      },
    };
  });
  it('onInit should be instance of function', () =>
    expect(functions.onInit).toBeInstanceOf(Function));
  it('onInit function should be called  with serviceName as querystring parameter that has undertaking', () => {
    functions.onInit(props);
    expect(props.history.push).not.toBeCalled();
  });
  it('onInit function should be called  with new querystring parameter', () => {
    props.match.params.serviceName = PERMIT_AIR_AD;
    props.permitType = PERMIT_CATEGORY_ADDITIONAL_AD;
    props.permitInfo = {
      ...props.permitInfo,
      [`${PERMIT_DRAWS}`]: {
        ...props.permitInfo[`${PERMIT_DRAWS}`],
        undertaking: {
          ...props.permitInfo[`${PERMIT_DRAWS}`].undertaking,
          isApproved: true,
        },
      },
    };
    functions.onInit(props);
    expect(props.history.push).toHaveBeenCalled();
  });
  it('onInit function should be called  with no querystring parameter and serviceType ', () => {
    props.match.params.serviceName = '';
    props.serviceType = '';
    functions.onInit(props);
  });
  it('onInit function should be called  with no querystring parameter but redux serviceType', () => {
    props.match.params.serviceName = '';
    props.serviceType = PERMIT_AIR_AD;
    functions.onInit(props);
    expect(props.history.push).toHaveBeenCalled();
  });
  it('onInit function should be called  with no querystring parameter but random serviceType', () => {
    props.match.params.serviceName = '';
    props.serviceType = 'test';
    functions.onInit(props);
  });
  it('handleToggleCheckbox should be instance of function', () =>
    expect(functions.handleToggleCheckbox).toBeInstanceOf(Function));
  it('handleToggleCheckbox should update permitInfo', () => {
    functions.handleToggleCheckbox(props);
    expect(props.actions.permitInfo.update).toHaveBeenCalled();
  });
  it('handleToggleCheckbox should be instance of function', () =>
    expect(functions.onCancelClick).toBeInstanceOf(Function));
  it('handleToggleCheckbox should update permitInfo', () => {
    functions.onCancelClick(e, props);
    expect(props.actions.permitInfo.update).toHaveBeenCalled();
  });
  it('onSubmit should be instance of function', () =>
    expect(functions.onSubmit).toBeInstanceOf(Function));

  it('onSubmit should show validation error', () => {
    // functions.handleToggleCheckbox(props);
    functions.onSubmit(e, props);
    expect(props.actions.permitInfo.update).toBeCalled();
  });
  it('onSubmit redirect to application-details page', () => {
    props.permitInfo = {
      [`${PERMIT_DRAWS}`]: {
        undertaking: {
          isApproved: true,
          showErrors: false,
        },
      },
    };

    functions.onSubmit(e, props);
    expect(props.history.push).toBeCalled();
  });
});
