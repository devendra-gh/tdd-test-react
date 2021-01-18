import { handleRedirectLink, getDateFromTimeStamp } from './functions';

// moc data
// const currentDay = new Date().getDate();
// const currentMonth = new Date().getMonth();
// const currentYear = new Date().getFullYear();

const props = {
  history: {
    push: jest.fn(),
  },
};

// eslint-disable-next-line no-console
console.log = () => {};
console.info = () => {};
console.warn = () => {};
console.error = () => {};

describe('common helper functions', () => {
  it('should call function for timestamp', () => {
    const values = getDateFromTimeStamp('27/02/2019', 'Do MMM YYYY', [
      'DD MM YYYY',
    ]);
    expect(values).toEqual('27th Feb 2019');
  });
  it('should call function for timestamp', () => {
    const values = getDateFromTimeStamp('02/27/2019', 'Do MMM YYYY', [
      'DD MM YYYY',
    ]);
    expect(values).toEqual('27th Feb 2019');
  });
  it('should call function for timestamp', () => {
    getDateFromTimeStamp();
  });
  it('validate the the redirect funtion', async () => {
    await handleRedirectLink(props, '');
    expect(props.history.push).toHaveBeenCalled();
  });
});
