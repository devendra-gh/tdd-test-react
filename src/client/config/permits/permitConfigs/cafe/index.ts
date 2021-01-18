import { IVariables } from '@tamm/app-composer';
import {
  validationTypes,
  validateStartDate,
} from 'client/config/utils/checkValidation';

import moment, { Moment } from 'moment';
import genericConfig from '../genericConfig';
import { manipulatePhone, getContact } from '../functions';
import { PERMIT_CATEGORY_ADDITIONAL_AD } from '../../utils/constants/permitCategories';
import { PERMIT_CAFE } from '../../utils/constants/permits';
import { getCities } from '../../utils';

const cafePermit = {
  ...genericConfig,
  name: PERMIT_CAFE,
  category: PERMIT_CATEGORY_ADDITIONAL_AD,
  landingPage: {
    serviceDescription: {
      title: 'cafe.serviceDescription',
      conditions: [
        'cafe.condition1',
        'cafe.condition2',
        'cafe.condition3',
        'cafe.condition4',
        'cafe.condition5',
        'cafe.condition6',
        'cafe.condition7',
      ],
    },
    documents: ['cafe.documentsDesc'],
    fees: ['cafe.fee1'],
  },
  permitRequirements: [
    {
      req: 'global.permitDescription',
      id: '0',
      details: 'cafe.Description',
    },
    {
      req: 'global.requiredLicences',
      id: '1',
      details: 'cafe.requiredLicences',
    },
    {
      req: 'cafe.requirement1',
      id: '2',
      details: 'cafe.details1',
    },
    {
      req: 'cafe.requirement2',
      id: '3',
      details: 'cafe.validityDate',
    },
    {
      req: 'cafe.requiredConditions',
      id: '4',
      details: [
        'cafe.condition1',
        'cafe.condition2',
        'cafe.condition3',
        'cafe.condition4',
        'cafe.condition5',
        'cafe.condition6',
        'cafe.condition7',
      ],
    },
  ],
  formFields: {
    permitDetails: {
      name: 'title.addPermitDetails',
      stateKey: 'permitDetails',
      twoColumns: true,
      fields: [
        {
          label: 'cafe.fieldStartDate',
          elementType: 'datePicker',
          value: (values: IVariables) => {
            return values.permitDetails.startDate
              ? new Date(values.permitDetails.startDate)
              : null;
          },
          name: 'startDate',
          onChange: (data: IVariables) => ({ startDate: data.value }),
          validationConfig: {
            type: validationTypes.REQUIRED,
            label: 'cafe.fieldStartDate',
          },
          customDisabledDate: (currentDate: Moment, reduxState: IVariables) =>
            validateStartDate(currentDate),
        },
        {
          'aria-label': 'global.fieldEndDate',
          label: 'global.fieldEndDate',
          elementType: 'datePicker',
          value: (values: IVariables) => {
            return values.permitDetails.startDate
              ? new Date(
                  new Date(values.permitDetails.startDate).getTime() +
                    365 * 86400000,
                )
              : null;
          },
          name: 'endDate',
          disabled: () => true,
        },
        {
          'aria-label': 'cafe.city',
          elementType: 'select',
          label: 'cafe.city',
          name: 'city',
          validate: true,
          showSearch: false,
          items: getCities(),
          onChange: (data: IVariables) => ({
            city: data.value,
          }),
          validationConfig: {
            type: validationTypes.REQUIRED,
          },
        },
      ],
    },

    applicantContact: genericConfig.formFields.applicantContact,
    permitEstimatedFees: genericConfig.formFields.permitEstimatedFees,
    termsConditions: {
      name: 'title.termsAndConditions',
      stateKey: 'termsConditions',
      customComponent: 'TermsConditions',
      fields: [
        {
          'aria-label': 'global.termsAndConditions',
          elementType: 'checkBox',
          name: 'approve',
          label: 'global.termsAndConditions',
          validationConfig: {
            type: validationTypes.REQUIRED,
          },
        },
      ],
    },
  },

  aduServiceKey: PERMIT_CAFE,

  metaTags: {
    en: {
      title: 'Request for Issuing Café Permit',
      description:
        'Through this service, you can obtain a permit to serve shisha in the Café.',
      url:
        'https://www.tamm.abudhabi/en/tamm-ded/cafe-permit-in-abu-dhabi?lang=en',
      keywords:
        'cafe permit, cafe permits, cafe permit in abu dhabi, cafe permits in abu dhabi, cafes permit in abu dhabi, cafes, cafeteria',
      short_description: 'Obtain a permit for Café',
      meta_description:
        'Apply for cafe permit in Abu Dhabi via TAMM website. Get quick approval for cafe permits directly from the Department of Economic Development.',
    },
    ar: {
      title: 'طلب إصدار تصريح مقهى',
      description:
        'من خلال هذه الخدمة، يمكنك الحصول على تصريح لتقديم الشيشة في المقهى.',
      url:
        'https://www.tamm.abudhabi/en/tamm-ded/cafe-permit-in-abu-dhabi?lang=ar',
      keywords:
        'تصريح مقهى ابوظبي، تصريح مقهى، تصريح مقهى دائرة التنمية الاقتصادية - أبوظبي، تصريح اقتصادي، تصريح اقتصادي ابوظبي، تصريح تقديم شيشة ابوظبي، تصريح تقديم شيشة، تصريح تقديم شيشة دائرة التنمية الاقتصادية - أبوظبي، تصريح تقديم شيشة في مقهى ابوظبي، تصريح تقديم شيشة في مقهى، تصريح تقديم شيشة في مقهى دائرة التنمية الاقتصادية - أبوظبي، تصريح تقديم شيشة في المطعم ابوظبي، تصريح تقديم شيشة في المطعم، تصريح تقديم شيشة في المطعم دائرة التنمية الاقتصادية - أبوظبي، تصاريح اقتصادية، تصاريح اقتصادية ابوظبي، تصريح أعمال، تصريح أعمال ابوظبي، تصاريح أعمال، تصاريح أعمال ابوظبي، تصريح اقتصادي دائرة التنمية الاقتصادية - أبوظبي، تصاريح اقتصادية دائرة التنمية الاقتصادية - أبوظبي، تصريح أعمال دائرة التنمية الاقتصادية - أبوظبي، تصاريح أعمال دائرة التنمية الاقتصادية - أبوظبي، خدمات دائرة التنمية الاقتصادية - أبوظبي، تصاريح اقتصادية الإمارات، تصاريح أعمال الإمارات',
      short_description: 'احصل على تصريح مقهى',
      meta_description:
        'من خلال هذه الخدمة المقدمة من دائرة التنمية الاقتصادية - أبوظبي، يمكنك الحصول على تصريح لتقديم الشيشة في المقهى.',
    },
  },

  formSubmitDetails: (serviceDetails: IVariables, props: IVariables) => {
    const { companyDetails } = props;
    const { permitDetails, applicantContact } = serviceDetails;

    return {
      serviceName: PERMIT_CAFE,
      DEDLicenseNumber: companyDetails.licenseNo,
      contact: JSON.stringify(getContact(props)),
      city: permitDetails.city,
      advertiseStartDate: moment(permitDetails.startDate).format('DD/MM/YYYY'),
      advertiseEndDate: moment(permitDetails.startDate)
        .add(365, 'days')
        .format('DD/MM/YYYY'),
      proName: (applicantContact.name || '').replace(/\d/, '').replace('.', ''),
      proMobileNumber: manipulatePhone(applicantContact.phone),
      proEmail: applicantContact.email,
    };
  },
};

export const name = PERMIT_CAFE;

export default cafePermit;
