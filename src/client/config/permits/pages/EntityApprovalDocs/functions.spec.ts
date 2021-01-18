import { IVariables } from '@tamm/app-composer';
import bpm from 'client/services/bpm';
import permitConfigs from 'client/config/permits/permitConfigs';
import functions from './functions';
import { PERMIT_FOOD_TRUCK } from '../../utils/constants/permits';

const serviceType = PERMIT_FOOD_TRUCK;
const PermitConfigs: IVariables = permitConfigs;
const { entityApprovalForm } = PermitConfigs[serviceType];

jest.mock('client/services/bpm');
// eslint-disable-next-line no-console
console.log = () => {};
console.info = () => {};
console.warn = () => {};
console.error = () => {};

describe('pages/EntityApprovalDocs/functions', () => {
  let props: IVariables;
  let mockBpm: any;
  beforeEach(() => {
    props = {
      serviceType,
      businessKey: 'test-key',
      permitInfo: {
        [serviceType]: {
          entityApproval: {
            isApproved: true,
            documents: {},
          },
        },
      },
      history: [],
      actions: {
        permitInfo: {
          update: jest.fn(),
        },
      },
    };
    mockBpm = bpm.message;
  });
  it('onBackClick should be a function', () => {
    expect(functions.onBackClick).toBeInstanceOf(Function);
  });
  it('onBackClick should be a function', () => {
    functions.onBackClick(props);
    expect(props.history).toContain(`/${serviceType}/entity/approval`);
  });
  it('onSubmit should call props.history.push', async () => {
    mockBpm.mockImplementation(() => {
      return Promise.resolve({});
    });
    const docsArray: IVariables = {};
    entityApprovalForm.documents.forEach((document: IVariables) => {
      docsArray[document.name] = [{ name: 'dummy-pdf' }];
    });
    props.permitInfo[serviceType].entityApproval.documents = docsArray;
    await functions.onSubmit(props);
    expect(props.history).toContain(`/${serviceType}/waiting`);
  });
  it('onSubmit cover else path', async () => {
    mockBpm.mockImplementation(() => {
      return Promise.resolve({});
    });
    await functions.onSubmit(props);
    expect(props.history).toEqual([]);
  });
  it('handleToggleCheckbox', () => {
    functions.handleToggleCheckbox(props);
    expect(props.actions.permitInfo.update).toBeCalled();
  });
});
