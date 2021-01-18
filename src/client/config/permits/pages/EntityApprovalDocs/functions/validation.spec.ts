import {
  PERMIT_FOOD_TRUCK,
  PERMIT_AIR_AD,
} from 'client/config/permits/utils/constants/permits';
import permitConfigs from 'client/config/permits/permitConfigs';
import { IVariables } from '@tamm/app-composer';
import validation from './validation';

const serviceType = PERMIT_FOOD_TRUCK;
const PermitConfigs: IVariables = permitConfigs;
const { entityApprovalForm } = PermitConfigs[serviceType];
// eslint-disable-next-line no-console
console.log = () => {};
console.info = () => {};
console.warn = () => {};
console.error = () => {};

describe('Validation', () => {
  let props: any;

  beforeEach(() => {
    props = {
      i18n: jest.fn(val => val),
      serviceType,
      permitInfo: {
        [serviceType]: {
          entityApproval: {
            isApproved: true,
            showError: false,
            documents: {},
          },
        },
      },
      actions: {
        permitInfo: {
          update: jest.fn(),
        },
      },
    };
  });

  it('should validate possitive flow', () => {
    const docsArray: IVariables = {};
    entityApprovalForm.documents.forEach((document: IVariables) => {
      docsArray[document.name] = [{ name: 'dummy-pdf' }];
    });
    props.permitInfo[serviceType].entityApproval.documents = docsArray;
    expect(validation(props)).toBeTruthy();
  });
  it('should validate negative flow', () => {
    expect(validation(props)).toBeFalsy();
  });
  it('should validate negative flow', () => {
    props.serviceType = 'test';
    expect(validation(props)).toBeFalsy();
  });
  it('should validate negative flow', () => {
    props.serviceType = PERMIT_AIR_AD;
    expect(validation(props)).toBeFalsy();
  });
  it('should validate negative flow', () => {
    props.permitInfo[serviceType].entityApproval.documents = [1, 2, 3];
    expect(validation(props)).toBeFalsy();
  });
});
