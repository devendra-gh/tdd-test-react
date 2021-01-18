import { handleDownload, handleEndProcess } from './functions';
import { paymentSuccess, addAnalytics } from '../../utils';
import { downloadBusinessCertificate } from '../../services';
import { PATH_HOME } from '../../routes';

jest.mock('../../utils', () => ({
  paymentSuccess: jest.fn(),
  addAnalytics: jest.fn(),
}));

jest.mock('../../services', () => ({
  downloadBusinessCertificate: jest.fn(),
}));

// eslint-disable-next-line no-console
console.log = () => {};
console.info = () => {};
console.warn = () => {};
console.error = () => {};

describe('Payment Success', () => {
  let props: any;
  beforeEach(() => {
    props = {
      history: {
        push: jest.fn(),
      },
      instanceId: '1234567899',
      downloaded: {
        concat: jest.fn(),
      },
      actions: {
        downloaded: {
          update: jest.fn(),
        },
      },
    };
  });
  it('should successfully handle download for given certificateName', () => {
    handleDownload('receipt')(props);
    const { instanceId } = props;
    const certificateName = 'receipt';
    const type = 'issueCommercialRegisterCertificate';
    expect(downloadBusinessCertificate).toHaveBeenCalledWith({
      instanceId,
      certificateName,
      type,
    });
    expect(paymentSuccess).not.toHaveBeenCalled();
    expect(addAnalytics).toHaveBeenCalled();
  });

  it('handle the function', async () => {
    await handleEndProcess(props);
    expect(props.history.push).not.toHaveBeenCalledWith(PATH_HOME);
  });
});
