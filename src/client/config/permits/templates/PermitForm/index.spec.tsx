import React, { FunctionComponent } from 'react';
import { shallow } from 'enzyme';
import { IVariables } from '@tamm/app-composer';
import PermitForm from './index';
import { PERMIT_CATEGORY_ADDITIONAL_AD } from '../../utils/constants/permitCategories';

jest.mock('@tamm/app-composer', () => ({
  withTemplateHooks: (component: FunctionComponent) => component,
}));

const stateKey1 = 'permitDetails';
const permitType = 'airAdPermit';

const testPermitForm = {
  [stateKey1]: {
    label: 'label 1',
  },
};

const testPermits = {
  [permitType]: testPermitForm,
};

// eslint-disable-next-line no-console
console.log = () => {};
console.info = () => {};
console.warn = () => {};
console.error = () => {};

describe('Permit Form', () => {
  let props: any;

  beforeEach(() => {
    props = {
      form: {
        onChange: jest.fn(),
      },
      permitForm: testPermitForm,
      permitType,
      permits: testPermits,
      i18n: jest.fn(),
      onSubmit: jest.fn(),
      handleCategoryChange: jest.fn(),
      commonFieldConfig: {
        startDateLabel: 'Test label',
      },
      serviceType: PERMIT_CATEGORY_ADDITIONAL_AD,
      companyType: 'DED',
      handleServiceTypeChange: jest.fn(),
      handleCompanyDetailsChange: jest.fn(),
      handleCompanyTypeChange: jest.fn(),
      handlePermitFormChange: jest.fn(),
      getPermitCompanyTypes: jest.fn(),
      fetchLicenseDetails: jest.fn(),
      handleRepresentativeTypeChange: jest.fn(),
      actions: {
        validation: {
          reset: jest.fn(),
          update: jest.fn(),
        },
        companyDetails: {
          update: jest.fn(),
        },
      },
      validation: jest.fn(x => true),
      permitInfo: {
        airAdPermit: {
          companyTypes: {
            0: 'FZ',
          },
          permitDetails: {
            startDate: '',
            location: '',
            description: '',
          },
          applicantContact: {
            name: 'name',
            email: 'email',
            phone: 'mobile',
          },
          documents: {},
        },
      },
      companyDetails: {
        formValidated: false,
        licenseNo: '',
        licenseValid: false,
        location: '',
      },
      permitSubmitting: 'test',
      locale: 'testlocale',
      permitServerError: '',
    };
  });

  it('should render successfully', () => {
    const component = shallow(<PermitForm {...props} />);
    expect(component).toMatchSnapshot();
  });
  it('should render successfully', () => {
    props.user = { type: 'SOP3' };
    const component = shallow(<PermitForm {...props} />);
    expect(component).toMatchSnapshot();
  });
  it('should render successfully', () => {
    props.user = { type: 'SOP1' };
    const component = shallow(<PermitForm {...props} />);
    expect(component).toMatchSnapshot();
  });
  it('should render successfully', () => {
    props.permitErrorMessage = '<a>';
    const component = shallow(<PermitForm {...props} />);
    expect(component).toMatchSnapshot();
  });

  it('should render alert message', () => {
    props.permitServerError = 'error';
    const component = shallow(<PermitForm {...props} />);
    expect(component).toMatchSnapshot();
  });
  it('should call CompanyDetailsQuestion handle change', () => {
    const component = shallow(<PermitForm {...props} />);
    const CompanyDetails = component.find('CompanyDetailsQuestion');
    const allProps: any = CompanyDetails.props();
    const {
      handleChange,
      handleCompanyTypeChange,
      handleRepresentativeTypeChange,
    } = allProps;
    handleChange();
    expect(props.handleCompanyDetailsChange).toHaveBeenCalled();
    handleCompanyTypeChange();
    expect(props.handleCompanyTypeChange).toHaveBeenCalled();
    handleRepresentativeTypeChange();
    expect(props.handleRepresentativeTypeChange).toHaveBeenCalled();
  });

  it('should call PermitTypeForm handle change', () => {
    const component = shallow(<PermitForm {...props} />);
    const CompanyDetails = component.find('PermitTypeForm');
    const allProps: any = CompanyDetails.props();
    const { handleChange } = allProps;
    handleChange();
    expect(props.handlePermitFormChange).toHaveBeenCalled();
  });

  it('should call onSubmit validation true', () => {
    const component = shallow(<PermitForm {...props} />);
    const CompanyDetails = component.find('PermitTypeForm');
    const allProps: any = CompanyDetails.props();
    const { onSubmit } = allProps;
    onSubmit();
    expect(props.onSubmit).toBeCalled();
  });
  it('should call onSubmit validation false', () => {
    props.validation = (x: IVariables) => false;
    const component = shallow(<PermitForm {...props} />);
    const CompanyDetails = component.find('PermitTypeForm');
    const allProps: any = CompanyDetails.props();
    const { onSubmit } = allProps;
    onSubmit();
    expect(onSubmit).toBeInstanceOf(Function);
  });
});
