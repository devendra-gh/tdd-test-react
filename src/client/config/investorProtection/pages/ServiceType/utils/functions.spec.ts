import result from 'client/config/pages/Common/Licence/EconomicLicenceApproved';
import functions from './functions';

const props = {
  onChange: jest.fn(),
  history: {
    push: jest.fn(),
  },
  form: {
    userType: 1,
  },
  i18n: jest.fn(),
  actions: {
    form: {
      update: jest.fn(),
    },
    steps: {
      update: jest.fn(),
    },
    currentStep: {
      update: jest.fn(),
    },
    stepsStatus: {
      update: jest.fn(() => ({})),
    },
  },
};
// eslint-disable-next-line no-console
console.log = () => {};
console.info = () => {};
console.warn = () => {};
console.error = () => {};

describe('init', () => {
  it('should export init function', () => {
    expect(functions.init).toBeInstanceOf(Function);
  });
  it('should call update fn of currentStep', () => {
    functions.init(props);
    expect(props.actions.currentStep.update).toHaveBeenCalled();
  });
});

// eslint-disable-next-line no-console
console.log = () => {};
console.info = () => {};
console.warn = () => {};
console.error = () => {};

describe('onChange', () => {
  it('should call onChange', () => {
    expect(functions.onChange).toBeInstanceOf(Function);
  });
  it('should call onChange 2', () => {
    functions.onChange('type', 'value', props);
    expect(props.actions.form.update).toHaveBeenCalled();
  });
});

// eslint-disable-next-line no-console
console.log = () => {};
console.info = () => {};
console.warn = () => {};
console.error = () => {};

describe('onSubmit', () => {
  it('should export onSubmit function', () => {
    expect(functions.onSubmit).toBeInstanceOf(Function);
  });
  it('should call push fn of history', () => {
    functions.onSubmit(props);
    expect(props.history.push).toHaveBeenCalled();
  });
});

// eslint-disable-next-line no-console
console.log = () => {};
console.info = () => {};
console.warn = () => {};
console.error = () => {};

describe('getFormGroups', () => {
  it('should export getFormGroups function', () => {
    expect(functions.getFormGroups).toBeInstanceOf(Function);
  });
  it('should return res of length', () => {
    const res = functions.getFormGroups(props);
    res[0].fields[0].onChange({ target: { value: 'test' } });

    expect(result).toHaveLength(1);
    expect(props.onChange).toHaveBeenCalled();
  });
});
