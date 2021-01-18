import { IVariables } from '@tamm/app-composer';
import evaluateRules from './evaluateRules';

// eslint-disable-next-line no-console
console.log = () => {};
console.info = () => {};
console.warn = () => {};
console.error = () => {};

describe('amendments/pages/Category', () => {
  // let props: any;
  it('should export all props', () => {
    const props: IVariables = {
      legalForm: 'establishment',
      licenseType: 'instantLicense',
      currentCategory: 'ownership',
      licenceDetails: {
        partners: [
          {
            status: 'add',
          },
        ],
      },
    };

    evaluateRules(props);
  });

  it('should export all props else statement', () => {
    const props: IVariables = {
      legalForm: 'soleProprietorshipLLC',
      licenseType: 'instantLicense',
      currentCategory: 'ownership',
      licenceDetails: {
        partners: [
          {
            status: 'add',
            nationality: 'United Arab Emirates',
            sharePercentage: '100',
          },
        ],
      },
    };
    const type: string = 'single';

    evaluateRules(props, type);
  });

  it('should export all props else statement', () => {
    const props: IVariables = {
      legalForm: 'establishment',
      licenseType: '',
      currentCategory: 'ownership',
      licenceDetails: {
        partners: [
          {
            status: 'add',
            nationality: 'United Arab Emirates',
            sharePercentage: '100',
          },
        ],
      },
    };
    const type: string = 'single';

    evaluateRules(props, type);
  });
});
