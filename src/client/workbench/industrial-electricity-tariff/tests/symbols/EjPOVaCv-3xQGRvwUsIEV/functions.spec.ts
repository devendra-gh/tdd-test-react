/* eslint-disable camelcase */
import { call_f1_onChange } from '../../../symbols/EjPOVaCv-3xQGRvwUsIEV/functions';

jest.useFakeTimers();

describe('Symbols function', () => {
  it('should return object 1', () => {
    global.window = Object.create(window);
    Object.defineProperty(window, 'URL', {
      value: {
        createObjectURL: jest.fn(),
        // revokeObjectURL: jest.fn(),
      },
    });

    const props = {
      showSideBar: true,
      record: {
        document: 'test',
        documentName: 'test',
      },
    };
    call_f1_onChange(props)(props);
    expect(call_f1_onChange).toBeInstanceOf(Object);
    expect(setTimeout).toHaveBeenCalledTimes(1);
  });

  it('should return object 2', () => {
    global.window = Object.create(window);
    Object.defineProperty(window, 'URL', {
      value: {
        createObjectURL: jest.fn(),
      },
    });

    Object.defineProperty(window, 'navigator', {
      value: {
        msSaveOrOpenBlob: jest.fn(),
      },
    });

    const props = {
      showSideBar: true,
      record: {
        document: 'test',
        documentName: 'test',
      },
    };
    call_f1_onChange(props)(props);
    expect(call_f1_onChange).toBeInstanceOf(Object);
  });
});
