import { handleDownload, handleEndProcess } from './functions';
// import { paymentSuccess } from '../../utils';
// import { downloadBusinessCertificate } from '../../services';

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
      instanceId: '1234567899',
      downloaded: ['a', 'b', 'c'],
      actions: {
        downloaded: {
          update: jest.fn(),
        },
        stepsStatus: {
          update: jest.fn(),
        },
      },
      history: {
        push: jest.fn(),
      },
    };
  });

  it('should call handleEndProcess', async () => {
    await handleEndProcess(props);
    expect(props.history.push).not.toBeCalled();
  });

  it('should call handleDownload', () => {
    const certificateName = 'receipt';

    handleDownload(certificateName)(props);
    expect(props.actions.downloaded.update).toHaveBeenCalled();
  });

  it('should call handleDownload 2', () => {
    props = {
      ...props,
      downloaded: ['a', 'b'],
    };
    const certificateName = 'receipt';
    handleDownload(certificateName)(props);
  });
});
