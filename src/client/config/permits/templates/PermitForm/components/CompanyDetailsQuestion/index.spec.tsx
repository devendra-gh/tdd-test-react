import React from 'react';
import { shallow, mount } from 'enzyme';
import { checkValidationField } from 'client/config/utils/checkValidation';
import CompanyDetailsQuestion, { checkLicenseDetails } from './index';

jest.mock('client/config/utils/checkValidation', () => ({
  checkValidationField: jest.fn(),
  validateSharePercentage: jest.fn(),
  validationTypes: {
    CN_NUMBER: '',
  },
}));

// eslint-disable-next-line no-console
console.log = () => {};
console.info = () => {};
console.warn = () => {};
console.error = () => {};

describe('Company details question for type DED', () => {
  let props: any;

  beforeEach(() => {
    props = {
      values: {},
      serviceType: 'Air Ad',
      handleChange: jest.fn(),
      handleCompanyTypeChange: jest.fn(),
      handleRepresentativeTypeChange: jest.fn(),
      companyType: 'DED',
      i18n: (value: string) => value,
      fetchLicenseDetails: jest.fn().mockReturnValue({}).mockReturnValue({
        businessLicCity: 'Abu Dhabi',
        businessNameEng: 'Test Inc',
        businessNameArb: 'Test Inc Ar',
      }),
      companyTypes: ['DED'],
      startShowingErrors: false,
    };
  });

  it('should successfully render the company details form for type DED', () => {
    const component = shallow(<CompanyDetailsQuestion {...props} />);
    expect(component).toMatchSnapshot();
  });

  it('should return null when the service type is not provided', () => {
    props.serviceType = '';
    const component = shallow(<CompanyDetailsQuestion {...props} />);
    expect(component.type()).toEqual(null);
  });

  it('should fetch branch details from license number on blur', () => {
    props.values = { licenseNo: 'CN-1234567' };
    const component = mount(<CompanyDetailsQuestion {...props} />);
    const licenseInput = component
      .find({ name: 'contactDetails.licenseNo' })
      .at(0);
    const allProps = licenseInput.props();
    const { onBlur } = allProps;
    onBlur();
    expect(props.fetchLicenseDetails).toHaveBeenCalled();
  });

  it('should not fetch branch details from empty license number on blur', () => {
    const component = mount(<CompanyDetailsQuestion {...props} />);
    const licenseInput = component
      .find({ name: 'contactDetails.licenseNo' })
      .at(0);
    const allProps = licenseInput.props();
    const { onBlur } = allProps;
    onBlur();
    expect(props.fetchLicenseDetails).not.toHaveBeenCalled();
  });

  it('should call the callback function with the license details', async () => {
    const fetchLicenseDetails = jest.fn().mockReturnValue({
      businessLicCity: 'Abu Dhabi',
      businessNameEng: 'Test Inc',
      businessNameArb: 'Test Inc Ar',
    });
    const handleChange = jest.fn();
    const licenseNumber = 'CN-13444';
    await checkLicenseDetails(licenseNumber, fetchLicenseDetails, handleChange);
    expect(handleChange).toHaveBeenCalledWith({
      location: 'Abu Dhabi',
      businessNameEn: 'Test Inc',
      businessNameAr: 'Test Inc Ar',
      licenseValid: true,
    });
  });

  it('should call the callback function with the empty details on invalid license', async () => {
    const fetchLicenseDetails = jest.fn().mockReturnValue(undefined);
    const handleChange = jest.fn();
    const licenseNumber = 'CN-13444';
    await checkLicenseDetails(licenseNumber, fetchLicenseDetails, handleChange);
    expect(handleChange).toHaveBeenCalledWith({
      location: '',
      businessNameEn: '',
      businessNameAr: '',
      licenseValid: false,
    });
  });

  it('should use sane defaults for business details', async () => {
    let fetchLicenseDetails = jest.fn().mockReturnValue({
      businessLicCity: 'Abu Dhabi',
      businessNameArb: 'Test Inc Ar',
    });
    const handleChange = jest.fn();
    const licenseNumber = 'CN-13444';
    await checkLicenseDetails(licenseNumber, fetchLicenseDetails, handleChange);
    expect(handleChange).toHaveBeenCalledWith({
      location: 'Abu Dhabi',
      businessNameEn: 'Test Inc Ar',
      businessNameAr: 'Test Inc Ar',
      licenseValid: true,
    });
    fetchLicenseDetails = jest.fn().mockReturnValue({
      businessLicCity: 'Abu Dhabi',
      businessNameEng: 'Test Inc Ar',
    });
    await checkLicenseDetails(licenseNumber, fetchLicenseDetails, handleChange);
    expect(handleChange).toHaveBeenCalledWith({
      location: 'Abu Dhabi',
      businessNameEn: 'Test Inc Ar',
      businessNameAr: 'Test Inc Ar',
      licenseValid: true,
    });
    fetchLicenseDetails = jest.fn().mockReturnValue({});
    await checkLicenseDetails(licenseNumber, fetchLicenseDetails, handleChange);
    expect(handleChange).toHaveBeenCalledWith({
      location: '',
      businessNameEn: '',
      businessNameAr: '',
      licenseValid: true,
    });
  });
});

// eslint-disable-next-line no-console
console.log = () => {};
console.info = () => {};
console.warn = () => {};
console.error = () => {};

describe('Company details question for type other companies', () => {
  let props: any;

  beforeEach(() => {
    props = {
      values: {},
      serviceType: 'Air Ad',
      handleChange: jest.fn(),
      handleCompanyTypeChange: jest.fn(),
      handleRepresentativeTypeChange: jest.fn(),
      companyType: 'DED',
      i18n: (value: string) => value,
      fetchLicenseDetails: jest.fn().mockReturnValue({}).mockReturnValue({
        businessLicCity: 'Abu Dhabi',
        businessNameEng: 'Test Inc',
        businessNameArb: 'Test Inc Ar',
      }),
      companyTypes: ['DED', 'FC', 'FZ', 'NL', 'ADGE'],
      companyNameENField: {
        onChange: jest.fn(),
      },
    };
  });

  it('should successfully render the company details form for other companies', () => {
    const component = shallow(<CompanyDetailsQuestion {...props} />);
    expect(component).toMatchSnapshot();
  });

  it('should successfully render the company details form for type ADGE', () => {
    props.companyType = 'ADGE';
    const component = shallow(<CompanyDetailsQuestion {...props} />);
    expect(component).toMatchSnapshot();
  });

  it('companyType radio group should work', () => {
    const component = mount(<CompanyDetailsQuestion {...props} />);
    const companyTypeField = component
      .find({ name: 'field.companyType' })
      .at(0);
    const allProps = companyTypeField.props();
    const { onChange } = allProps;
    onChange({ target: { id: '0' } });
    expect(props.handleCompanyTypeChange).toHaveBeenCalled();
  });

  it('should call validate when licenseNo field is changed', () => {
    const component = mount(<CompanyDetailsQuestion {...props} />);
    const licenseNo = component
      .find({ name: 'contactDetails.licenseNo' })
      .at(0);
    const allProps = licenseNo.props();
    const { validate, onChange } = allProps;
    validate();
    expect(checkValidationField).toHaveBeenCalled();
    onChange();
    expect(props.handleChange).toHaveBeenCalled();
  });

  it('should call validate when contactlicenseNo field is changed', () => {
    props.companyType = 'FC';
    const component = mount(<CompanyDetailsQuestion {...props} />);
    const contactlicenseNo = component
      .find({ name: 'contactDetails.contactlicenseNo' })
      .at(0);
    const allProps = contactlicenseNo.props();
    const { validate, onChange } = allProps;
    validate();
    expect(checkValidationField).toHaveBeenCalled();
    onChange();
    expect(props.handleChange).toHaveBeenCalled();
  });

  it('should call validate when nationality field is changed', () => {
    props.companyType = 'FC';
    const component = mount(<CompanyDetailsQuestion {...props} />);
    const nationality = component
      .find({ name: 'contactDetails.nationality' })
      .at(0);
    const allProps = nationality.props();
    const { validate, onChange } = allProps;
    validate();
    expect(checkValidationField).toHaveBeenCalled();
    onChange();
    expect(props.handleChange).toHaveBeenCalled();
  });

  it('should call validate when mobileNo field is changed', () => {
    props.companyType = 'FC';
    const component = mount(<CompanyDetailsQuestion {...props} />);
    const mobileNo = component.find({ name: 'contactDetails.mobileNo' }).at(0);
    const allProps = mobileNo.props();
    const { validate, onSelect } = allProps;
    validate();
    expect(checkValidationField).toHaveBeenCalled();
    onSelect();
    expect(props.handleChange).toHaveBeenCalled();
  });

  it('should call validate when email field is changed', () => {
    props.companyType = 'FC';
    const component = mount(<CompanyDetailsQuestion {...props} />);
    const email = component.find({ name: 'contactDetails.email' }).at(0);
    const allProps = email.props();
    const { validate, onChange } = allProps;
    validate();
    expect(checkValidationField).toHaveBeenCalled();
    onChange();
    expect(props.handleChange).toHaveBeenCalled();
  });

  it('should call validate when englishName field is changed', () => {
    props.companyType = 'FC';
    const component = mount(<CompanyDetailsQuestion {...props} />);
    const englishName = component
      .find({ name: 'contactDetails.englishName' })
      .at(0);
    const allProps = englishName.props();
    const { validate, onChange } = allProps;
    validate();
    expect(checkValidationField).toHaveBeenCalled();
    onChange();
    expect(props.handleChange).toHaveBeenCalled();
  });

  it('should call validate when arabicName field is changed', () => {
    props.companyType = 'FC';
    const component = mount(<CompanyDetailsQuestion {...props} />);
    const arabicName = component
      .find({ name: 'contactDetails.arabicName' })
      .at(0);
    const allProps = arabicName.props();
    const { validate, onChange } = allProps;
    validate();
    expect(checkValidationField).toHaveBeenCalled();
    onChange();
    expect(props.handleChange).toHaveBeenCalled();
  });

  it('should call validate when legalForm field is changed', () => {
    props.companyType = 'NL';
    const component = mount(<CompanyDetailsQuestion {...props} />);
    const legalForm = component
      .find({ name: 'contactDetails.legalForm' })
      .at(0);
    const allProps = legalForm.props();
    const { validate, onChange } = allProps;
    validate();
    expect(checkValidationField).toHaveBeenCalled();
    onChange();
    expect(props.handleChange).toHaveBeenCalled();
  });

  it('should call validate when repType field is changed', () => {
    props.companyType = 'FC';
    const component = mount(<CompanyDetailsQuestion {...props} />);
    const repType = component.find({ name: 'contactDetails.repType' }).at(0);
    const allProps = repType.props();
    const { validate, onChange } = allProps;
    validate();
    expect(checkValidationField).toHaveBeenCalled();
    onChange();
    expect(props.handleRepresentativeTypeChange).toHaveBeenCalled();
  });

  it('should call validate when sharePercentage field is changed', () => {
    props.companyType = 'FC';
    const component = mount(<CompanyDetailsQuestion {...props} />);
    const sharePercentage = component
      .find({ name: 'contactDetails.partnerSharePercentage' })
      .at(0);
    const allProps = sharePercentage.props();
    const { validate, onChange, disabled } = allProps;
    expect(disabled()).toBe(true);
    validate();
    expect(checkValidationField).toHaveBeenCalled();
    onChange({ target: { value: '49' } });
    expect(props.handleChange).toHaveBeenCalled();
  });

  it('sharePercentage field should be enabled if repType is 2', () => {
    props.companyType = 'FC';
    props.values = { representativeType: '2' };
    const component = mount(<CompanyDetailsQuestion {...props} />);
    const sharePercentage = component
      .find({ name: 'contactDetails.partnerSharePercentage' })
      .at(0);
    const allProps = sharePercentage.props();
    const { disabled } = allProps;
    expect(disabled()).toBe(false);
  });

  it('should call validate when emirate field is changed', () => {
    props.companyType = 'NL';
    const component = mount(<CompanyDetailsQuestion {...props} />);
    const emirate = component.find({ name: 'contactDetails.emirate' }).at(0);
    const allProps = emirate.props();
    const { validate, onChange } = allProps;
    validate();
    expect(checkValidationField).toHaveBeenCalled();
    onChange();
    expect(props.handleChange).toHaveBeenCalled();
  });

  it('should call validate when allGcc field is changed', () => {
    props.companyType = 'FC';
    const component = mount(<CompanyDetailsQuestion {...props} />);
    const allGcc = component.find({ name: 'contactDetails.allGcc' }).at(0);
    const allProps = allGcc.props();
    const { onClick } = allProps;
    onClick({ target: { checked: false } });
    expect(props.handleChange).toHaveBeenCalled();
  });
});
