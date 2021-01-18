import { IVariables } from '@tamm/app-composer';
import { continueProcess } from './functions';
import { getEmiratesId } from '../../utils';

const querystring = require('query-string');

jest.mock('query-string');
jest.mock('../../utils', () => ({
  getEmiratesId: jest.fn(),
}));

// eslint-disable-next-line no-console
console.log = () => {};
console.info = () => {};
console.warn = () => {};
console.error = () => {};

describe('Continue Process', () => {
  let props: IVariables;
  beforeEach(() => {
    props = {
      user: {
        IDN: '789221234434',
      },
      actions: {
        businessKey: { update: jest.fn() },
        instanceId: { update: jest.fn() },
      },
    };
  });

  it('should update businesskey and instanceId when present in query params and emirates Id match', async () => {
    querystring.parse = jest
      .fn()
      .mockReturnValue({ businessKey: '1234', instanceId: '12345' });

    (getEmiratesId as jest.Mock).mockResolvedValue('789221234434');

    await continueProcess(props);
    expect(props.actions.businessKey.update).toHaveBeenCalled();
    expect(props.actions.instanceId.update).toHaveBeenCalled();
  });

  it('should not update businessKey or instanceId when not in query params', async () => {
    querystring.parse = jest.fn().mockReturnValue({});

    await continueProcess(props);
    expect(props.actions.businessKey.update).not.toHaveBeenCalled();
    expect(props.actions.instanceId.update).not.toHaveBeenCalled();
  });

  it('should not update businessKey or instanceId when emiratesId do not match', async () => {
    querystring.parse = jest
      .fn()
      .mockReturnValue({ businessKey: '1234', instanceId: '12345' });

    (getEmiratesId as jest.Mock).mockResolvedValue('789221234435');

    await continueProcess(props);
    expect(props.actions.businessKey.update).not.toHaveBeenCalled();
    expect(props.actions.instanceId.update).not.toHaveBeenCalled();
  });
});
