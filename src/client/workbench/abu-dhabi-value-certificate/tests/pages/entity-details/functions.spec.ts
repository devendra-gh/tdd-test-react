/* eslint-disable camelcase */
import {
  init,
  call_f1_onClick,
  call_f2_onClick,
  call_f3_onClick,
  call_f4_onClick,
  call_f5_onClick,
  call_f6_onClick,
  call_f7_onClick,
  call_f8_onClick,
  call_f9_onClick,
  call_f10_onClick,
  f11_onClick,
  f12_onClick,
  f13_onClick,
} from '../../../pages/entity-details/functions';

jest.mock('client/services/bpm');

jest.mock('../../../sharedFunctions/utils.ts', () => ({
  checkEntitySelected: jest.fn(),
}));

jest.mock('../../../sharedFunctions/stepUtils.ts', () => ({
  getSteps: jest.fn(),
}));

describe('pages/entity-details/functions', () => {
  let props: any;
  beforeEach(() => {
    props = {
      i18n: jest.fn(i => i),
      locale: 'en',
      history: {
        push: jest.fn(),
      },
      selectedEntities: {
        ardent: 'test',
        bakertilly: 'test',
        deloitte: 'test',
        ey: 'test',
        protiviti: 'test',
        mazars: 'test',
        crowe: 'test',
        mbc: 'test',
        pkf: 'test',
        tag: 'test',
      },

      actions: {
        steps: {
          update: jest.fn(),
        },
        currentSubStepIndex: {
          update: jest.fn(),
        },
        isEntityNotSelected: {
          update: jest.fn(),
        },
        selectedEntities: {
          update: jest.fn(),
        },
        ardentSelected: {
          update: jest.fn(),
        },
        bakertillySelected: {
          update: jest.fn(),
        },
        deloitteSelected: {
          update: jest.fn(),
        },
        eySelected: {
          update: jest.fn(),
        },
        protivitiSelected: {
          update: jest.fn(),
        },
        mazarsSelected: {
          update: jest.fn(),
        },
        croweSelected: {
          update: jest.fn(),
        },
        mbcSelected: {
          update: jest.fn(),
        },
        pkfSelected: {
          update: jest.fn(),
        },
        tagSelected: {
          update: jest.fn(),
        },
        provitiSelected: {
          update: jest.fn(),
        },
        entityPayload: {
          update: jest.fn(),
        },
      },
      bpm: {
        sendMessage: jest.fn(),
      },
    };
  });

  describe('init functions', () => {
    it('should call', () => {
      init(props);
    });
  });

  describe('call_f1_onClick functions', () => {
    it('should call', () => {
      const event = {
        target: {
          checked: true,
        },
      };
      call_f1_onClick(props)(event);
    });
  });

  describe('call_f2_onClick functions', () => {
    it('should call', () => {
      const event = {
        target: {
          checked: true,
        },
      };
      call_f2_onClick(props)(event);
    });
  });

  describe('call_f3_onClick functions', () => {
    it('should call', () => {
      const event = {
        target: {
          checked: true,
        },
      };
      call_f3_onClick(props)(event);
    });
  });

  describe('call_f4_onClick functions', () => {
    it('should call', () => {
      const event = {
        target: {
          checked: true,
        },
      };
      call_f4_onClick(props)(event);
    });
  });

  describe('call_f5_onClick functions', () => {
    it('should call', () => {
      const event = {
        target: {
          checked: true,
        },
      };
      call_f5_onClick(props)(event);
    });
  });

  describe('call_f6_onClick functions', () => {
    it('should call', () => {
      const event = {
        target: {
          checked: true,
        },
      };
      call_f6_onClick(props)(event);
    });
  });

  describe('call_f7_onClick functions', () => {
    it('should call', () => {
      const event = {
        target: {
          checked: true,
        },
      };
      call_f7_onClick(props)(event);
    });
  });

  describe('call_f8_onClick functions', () => {
    it('should call', () => {
      const event = {
        target: {
          checked: true,
        },
      };
      call_f8_onClick(props)(event);
    });
  });

  describe('call_f9_onClick functions', () => {
    it('should call', () => {
      const event = {
        target: {
          checked: true,
        },
      };
      call_f9_onClick(props)(event);
    });
  });

  describe('call_f10_onClick functions', () => {
    it('should call', () => {
      const event = {
        target: {
          checked: true,
        },
      };
      call_f10_onClick(props)(event);
    });
  });

  describe('f11_onClick functions', () => {
    it('should call', () => {
      f11_onClick(props);
    });
  });

  describe('f12_onClick functions', () => {
    it('should call', () => {
      f12_onClick(props);
    });
  });

  describe('f13_onClick functions', () => {
    it('should call', () => {
      f13_onClick(props);
    });
  });
});
