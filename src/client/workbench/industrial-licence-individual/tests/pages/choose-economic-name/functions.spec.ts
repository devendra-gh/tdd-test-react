/* eslint-disable camelcase */
// import fetch from 'client/services/fetch';
import {
  init,
  f16_primaryButton_onClick,
  // f2_secondaryButton_onClick,
  // f3_onClose,
  f1_onClick,
  // f14_onClick,
  // f15_visible,
  // f7_onBlur,
  // call_f8_onChange,
  // call_f10_onSelectionChange,
  // f11_visible,
  // f9_visible,
  // call_f12_onSelectionChange,
  // f13_visible,
  call_f5_onChange,
  // call_f6_onChange,
} from '../../../pages/choose-economic-name/functions';

jest.mock('client/services/fetch');
jest.mock('client/services/bpm');
jest.mock('../../../sharedFunctions/serviceSteps', () => ({
  stepsLists: jest.fn(),
}));
jest.mock('../../../sharedFunctions/breadCrumLinks.ts', () => ({
  crumsList: jest.fn(() => []),
}));
jest.mock('../../../sharedFunctions/stepUtils', () => ({
  getSteps: jest.fn(),
}));
jest.mock('../../../sharedFunctions/services', () => ({
  autoFillBusinessNames: jest
    .fn()
    .mockImplementationOnce(() => {
      return 'test';
    })
    .mockImplementationOnce(() => {
      return false;
    }),
  getYamliSuggestions: jest
    .fn()
    .mockImplementationOnce(() => {
      return 'test';
    })
    .mockImplementationOnce(() => {
      return false;
    }),
  tradeNameCheck: jest
    .fn()
    .mockImplementationOnce(() => {
      return {
        checkedEconomicNameProperty: {
          nameAvailableInEnglish: '',
          nameAvailableInArabic: '',
        },
      };
    })
    .mockImplementationOnce(() => {
      return {
        checkedEconomicNameProperty: {
          nameAvailableInEnglish: 'test',
          nameAvailableInArabic: 'test',
          isSpecialNameEn: 'test',
          isSpecialNameAr: 'test',
          isProhibitedNameEn: 'test',
          isProhibitedNameAr: 'test',
        },
      };
    })
    .mockImplementationOnce(() => {
      return {
        checkedEconomicNameProperty: {
          nameAvailableInEnglish: 'test',
          nameAvailableInArabic: 'test',
          isSpecialNameEn: '',
          isSpecialNameAr: '',
          isProhibitedNameEn: '',
          isProhibitedNameAr: '',
        },
      };
    }),
  tradeNameSuggestion: jest.fn(),
}));

describe('pages/choose-economic-name/functions', () => {
  let props: any;
  // let mockFetch: any;
  beforeEach(() => {
    props = {
      user: {
        'First Name EN': 'test',
        'Full Name AR': 'test',
        IDN: 'test',
        'Nationality EN': 'test',
        Type: 'SOP2',
      },
      i18n: jest.fn(i => i),
      history: {
        push: jest.fn(),
      },
      fetch: jest.fn().mockImplementation(() => {
        Promise.resolve();
      }),
      bpm: {
        sendMessage: jest.fn(() => {
          return {
            success: true,
            data: {
              success: true,
            },
          };
        }),
        startProcess: jest.fn(() => {
          return {
            success: true,
            data: {
              success: true,
            },
          };
        }),
      },
      tableEconomicNameItems: [
        {
          serial: '12345',
          nameEn: 'test',
          nameAr: 'tset',
        },
      ],
      englishPreferedName: 'test',
      arabicPreferedName: 'test',
      basket: [1, 2],
      analytics: {
        addEvent: jest.fn(),
      },
      actions: {
        showSidebar: {
          update: jest.fn(),
        },
        currentStepIndex: {
          update: jest.fn(),
        },
        currentSubStepIndex: {
          update: jest.fn(),
        },
        expandedStepIndexes: {
          update: jest.fn(),
        },
        steps: {
          update: jest.fn(),
        },
        autogenerateChecked: {
          update: jest.fn(),
        },
        economicNameDisabled: {
          update: jest.fn(),
        },
        economicNameEngDisabled: {
          update: jest.fn(),
        },
        economicNameArbDisabled: {
          update: jest.fn(),
        },
        checkAvailabilityBtnDisabled: {
          update: jest.fn(),
        },
        arabicPreferedName: {
          update: jest.fn(),
        },
        englishPreferedName: {
          update: jest.fn(),
        },
        showNameSuggestions: {
          update: jest.fn(),
        },
        economicNameSubmitCheckLoader: {
          update: jest.fn(),
        },
        economicNameCheckLoader: {
          update: jest.fn(),
        },
        tableEconomicNameItems: {
          update: jest.fn(),
        },
        englishPreferedNameValidStatus: {
          update: jest.fn(),
        },
        englishPreferedNameHelpMsg: {
          update: jest.fn(),
        },
        arabicPreferedNameValidStatus: {
          update: jest.fn(),
        },
        arabicPreferedNameHelpMsg: {
          update: jest.fn(),
        },
        loading: {
          update: jest.fn(),
        },
        isCancelModalOpen: {
          update: jest.fn(),
        },
        breadCrumItems: {
          update: jest.fn(),
        },
        resetState: jest.fn(),
      },
    };

    // mockFetch.mockImplementation(() => {
    //   return Promise.resolve({
    //     success: true,
    //     message: 'Success',
    //     data: [],
    //   });
    // });
  });

  describe('init functions', () => {
    it('should properly call', async () => {
      await init(props);
    });
  });

  // describe('f1_primaryButton_onClick functions', () => {
  //   it('should properly call', async () => {
  //     await f1_primaryButton_onClick(props);
  //   });
  // });

  describe('f1_onClick functions', () => {
    it('should properly call', async () => {
      await f1_onClick(props);
    });

    it('should properly call 2', async () => {
      await f1_onClick(props);
    });
  });

  // describe('f3_onClose functions', () => {
  //   it('should properly call', async () => {
  //     await f3_onClose(props);
  //   });
  // });

  describe('call_f5_onChange functions', () => {
    it('should properly call', async () => {
      await call_f5_onChange(props);
    });
  });

  // describe('f14_onClick functions', () => {
  //   it('should properly call', async () => {
  //     await f14_onClick(props);
  //   });
  // });

  // describe('f15_visible functions', () => {
  //   it('should properly call', async () => {
  //     await f15_visible(props);
  //   });
  // });

  // describe('f7_visible functions', () => {
  //   it('should properly call', async () => {
  //     await f7_onBlur(props);
  //   });
  // });

  // describe('call_f8_onChange functions', () => {
  //   it('should properly call', async () => {
  //     await call_f8_onChange(props);
  //   });
  // });

  // describe('call_f10_onSelectionChange functions', () => {
  //   it('should properly call', async () => {
  //     await call_f10_onSelectionChange(props)(['12345']);
  //   });
  //   it('should properly call 2', async () => {
  //     await call_f10_onSelectionChange(props)(['test']);
  //   });
  // });

  // describe('f11_visible functions', () => {
  //   it('should properly call', async () => {
  //     await f11_visible(props);
  //   });
  // });

  // describe('f9_visible functions', () => {
  //   it('should properly call', async () => {
  //     await f9_visible(props);
  //   });
  // });

  // describe('f13_visible functions', () => {
  //   it('should properly call', async () => {
  //     await f13_visible(props);
  //   });
  // });

  // describe('f2_secondaryButton_onClick functions', () => {
  //   it('should properly call', async () => {
  //     await f2_secondaryButton_onClick(props);
  //   });

  //   it('should properly call 2', async () => {
  //     await f2_secondaryButton_onClick(props);
  //   });

  //   it('should properly call 3', async () => {
  //     props = {
  //       ...props,
  //       autogenerateChecked: 'test',
  //     };

  //     await f2_secondaryButton_onClick(props);
  //   });
  // });

  // describe('call_f12_onSelectionChange functions', () => {
  //   it('should properly call', async () => {
  //     await call_f12_onSelectionChange(props);
  //   });
  // });

  // describe('call_f6_onChange functions', () => {
  //   it('should properly call fallback', async () => {
  //     props = {
  //       ...props,
  //       englishPreferedName: '',
  //       arabicPreferedName: '',
  //     };
  //     await call_f6_onChange(props)('test');
  //   });

  //   it('should properly call with is englishPreferedName', async () => {
  //     await call_f6_onChange(props)('test');
  //   });

  //   it('should properly call is isSpecialNameEn', async () => {
  //     await call_f6_onChange(props)('test');
  //   });

  //   it('should properly call is isNot SpecialNameEn', async () => {
  //     await call_f6_onChange(props)('test');
  //   });
  // });
});
