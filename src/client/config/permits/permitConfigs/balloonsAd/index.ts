import { IVariables } from '@tamm/app-composer';
import {
  validationTypes,
  validateStartDate,
  validateEndDate,
  validateShowDate,
} from 'client/config/utils/checkValidation';

import moment, { Moment } from 'moment';
import genericConfig from '../genericConfig';
import { manipulatePhone, getContact } from '../functions';
import { PERMIT_CATEGORY_ADDITIONAL_AD } from '../../utils/constants/permitCategories';
import { PERMIT_BALLOONS_AD } from '../../utils/constants/permits';

const balloonsAdPermit = {
  ...genericConfig,
  name: PERMIT_BALLOONS_AD,
  category: PERMIT_CATEGORY_ADDITIONAL_AD,
  landingPage: {
    serviceDescription: {
      title: 'balloons.serviceDescription',
      conditions: ['balloons.requiredLicences'],
    },
    documents: [
      'balloons.requiredDocument1',
      'balloons.requiredDocument2',
      'balloons.requiredDocument3',
      'balloons.requiredDocument4',
    ],
    fees: ['balloons.fee1'],
  },
  permitRequirements: [
    {
      req: 'global.permitDescription',
      id: '0',
      details: 'balloons.permitDescription',
    },
    {
      req: 'global.requiredLicences',
      id: '1',
      details: 'balloons.requiredLicences',
    },
    {
      req: 'balloons.requirement1',
      id: '2',
      details: 'balloons.details1',
    },
    {
      req: 'balloons.validity',
      id: '3',
      details: 'balloons.validityDate',
    },
  ],

  formFields: {
    permitDetails: {
      name: 'title.addPermitDetails',
      stateKey: 'permitDetails',
      twoColumns: true,
      fields: [
        {
          label: 'balloons.fieldStartDate',
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
          },
          customDisabledDate: (currentDate: Moment, reduxState: IVariables) =>
            validateStartDate(currentDate, reduxState.permitDetails.endDate),
        },
        {
          'aria-label': 'draws.fieldendDate',
          label: 'draws.fieldendDate',
          elementType: 'datePicker',
          value: (values: IVariables) => {
            return values.permitDetails.endDate
              ? new Date(values.permitDetails.endDate)
              : null;
          },
          name: 'endDate',
          onChange: (data: IVariables) => ({ endDate: data.value }),
          validationConfig: {
            type: validationTypes.REQUIRED,
          },
          customDisabledDate: (currentDate: Moment, reduxState: IVariables) =>
            validateEndDate(currentDate, reduxState.permitDetails.startDate),
        },
        {
          'aria-label': 'field.adLocation',
          label: 'field.adLocation',
          elementType: 'input',
          name: 'location',
          placeholder: '',
          validationConfig: {
            type: validationTypes.REQUIRED,
          },
        },
        {
          'aria-label': 'field.adDetails',
          elementType: 'textarea',
          label: 'field.adDetails',
          placeholder: '',
          name: 'description',
          size: 'small',
          onChange: (data: IVariables) => ({
            description: data.value.target.value,
          }),
          validationConfig: {
            type: validationTypes.REQUIRED,
          },
        },
      ],
    },

    balloons: {
      stateKey: 'balloons',
      customComponent: 'MultifieldForm',
      incrementButtonLabel: 'button.addBalloon',
      deleteLabel: 'button.removeShowDate',

      hasIncrementButton: true,
      fields: [
        {
          twoColumns: true,
          name: (count: number) => `Balloons${count}`,
          label: (count: number) => `Balloons ${count}`,
          validationConfig: {
            type: validationTypes.REQUIRED,
          },
          defaultValue: {
            BalloonsQuantity: 1,
          },
          onChange: (values: IVariables) => {
            let {
              value: { ShowDates },
            } = values;
            const { index } = values;
            if (ShowDates && ShowDates.value) {
              ShowDates = moment(ShowDates.value);
            }
            const balloonValues = {
              ...values.value,
              ShowDates,
            };
            return {
              [`Balloons${index + 1}`]: balloonValues,
            };
          },
          subFields: [
            {
              'aria-label': 'balloons.balloonsQuantity',
              elementType: 'inputNumber',
              value: () => null,
              label: 'balloons.balloonsQuantity',
              name: 'BalloonsQuantity',
              defaultValue: 1,
              validationConfig: {
                type: validationTypes.REQUIRED,
              },
              min: 1,
            },
            {
              label: 'balloons.showDates',
              elementType: 'datePicker',
              name: 'ShowDates',
              value: (value: Date) => (value ? new Date(value) : null),
              customDisabledDate: (
                currentDate: Moment,
                reduxState: IVariables,
              ) =>
                validateShowDate(
                  currentDate,
                  reduxState.permitDetails.startDate,
                  reduxState.permitDetails.endDate,
                ),
            },
          ],
        },
      ],
    },

    applicantContact: genericConfig.formFields.applicantContact,
    documents: {
      name: 'title.addAttachments',
      twoColumns: true,
      stateKey: 'documents',
      customComponent: 'FileUploads',
      fields: [
        {
          'aria-label': 'balloons.fieldAdDetailedLetter',
          elementType: 'fileUpload',
          name: 'advertisementDetailLetter',
          accept: ['application/pdf'],
          label: 'balloons.fieldAdDetailedLetter',
          maxSize: 2e6,
          help: 'global.uploadHelp',
          validationConfig: {
            type: validationTypes.REQUIRED_FILE,
          },
        },
        {
          'aria-label': 'balloons.fieldGCAAapproval',
          elementType: 'fileUpload',
          name: 'gcaaApproval',
          accept: ['application/pdf'],
          label: 'balloons.fieldGCAAapproval',
          maxSize: 2e6,
          help: 'global.uploadHelp',
          validationConfig: {
            type: validationTypes.REQUIRED_FILE,
          },
        },
        {
          'aria-label': 'balloons.fieldCivilDefenseApproval',
          elementType: 'fileUpload',
          name: 'civilDefenceApproval',
          accept: ['application/pdf'],
          label: 'balloons.fieldCivilDefenseApproval',
          maxSize: 2e6,
          help: 'global.uploadHelp',
          validationConfig: {
            type: validationTypes.REQUIRED_FILE,
          },
        },
        // {
        //   'aria-label': 'balloons.fieldCopyofLicense',
        //   elementType: 'fileUpload',
        //   name: 'copyofLicense',
        //   accept: ['application/pdf'],
        //   label: 'balloons.fieldCopyofLicense',
        //   help: 'global.uploadHelp',
        //   maxSize: 2e6,
        //   validationConfig: {
        //     type: validationTypes.REQUIRED,
        //   },
        // },
      ],
    },
    permitEstimatedFees: {
      ...genericConfig.formFields.permitEstimatedFees,
      calculateEstimatedFees: (values: IVariables) => {
        return [
          {
            // title: `Permit Fees Per Day (${values.perUnitFees} AED * ${values.balloons.length} Days)`,
            title: 'global.permitFees',
            amount: values.perUnitFees * values.balloons.length,
          },
        ];
      },
    },
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

  aduServiceKey: PERMIT_BALLOONS_AD,

  metaTags: {
    en: {
      title: 'Request for Issuing Balloons Advertisements Permit',
      description:
        "Through this service, you can obtain a permit to promote the company's products or services using balloons and airships",
      url:
        'https://www.tamm.abudhabi/en/tamm-ded/balloons-ad-permit-in-abu-dhabi?lang=en',
      keywords:
        'balloons ads permit, balloons advertising permit, balloons advertisement permit, balloons permit, permit for balloons ads, permit for balloons advertisement, permit for balloons advertising, balloons abu dhabi, balloons abudhabi, abudhabi balloons, abudhabi balloons permit, permits in abu dhabi, abu dhabi permits',
      short_description: 'Obtain a permit for balloons advertisements',
      meta_description:
        'Submit request for issuing balloons advertisements permit in Abu Dhabi via TAMM website or by visiting our service centers',
    },
    ar: {
      title: 'طلب إصدار تصريح إعلانات المناطيد',
      description:
        'من خلال هذه الخدمة، يمكنك الحصول على تصريح الترويج لمنتجات أو خدمات الشركة باستخدام المناطيد',
      url:
        'https://www.tamm.abudhabi/en/tamm-ded/balloons-ad-permit-in-abu-dhabi?lang=ar',
      keywords:
        'تصريح إعلانات المناطيد ابوظبي، تصريح إعلانات المناطيد، تصريح إعلانات المناطيد دائرة التنمية الاقتصادية - أبوظبي، تصريح اقتصادي، تصريح اقتصادي ابوظبي، تصاريح اقتصادية، تصاريح اقتصادية ابوظبي، تصريح أعمال، تصريح أعمال ابوظبي، تصاريح أعمال، تصاريح أعمال ابوظبي، تصريح اقتصادي دائرة التنمية الاقتصادية - أبوظبي، تصاريح اقتصادية دائرة التنمية الاقتصادية - أبوظبي، تصريح أعمال دائرة التنمية الاقتصادية - أبوظبي، تصاريح أعمال دائرة التنمية الاقتصادية - أبوظبي، خدمات دائرة التنمية الاقتصادية - أبوظبي، تصاريح اقتصادية الإمارات، تصاريح أعمال الإمارات',
      short_description: 'احصل على تصريح إعلانات المناطيد',
      meta_description:
        'من خلال هذه الخدمة المقدمة من دائرة التنمية الاقتصادية - أبوظبي، يمكنك الحصول على تصريح الترويج لمنتجات أو خدمات الشركة باستخدام المناطيد',
    },
  },

  formSubmitDetails: (serviceDetails: IVariables, props: IVariables) => {
    const { companyDetails } = props;
    const {
      permitDetails,
      applicantContact,
      documents,
      balloons,
    } = serviceDetails;

    return {
      serviceName: PERMIT_BALLOONS_AD,
      DEDLicenseNumber: companyDetails.licenseNo,
      contact: JSON.stringify(getContact(props)),
      advertisementDetails: permitDetails.description,
      advertisementLocation: permitDetails.location,
      advertiseStartDate: moment(permitDetails.startDate).format('DD/MM/YYYY'),
      advertiseEndDate: moment(permitDetails.endDate).format('DD/MM/YYYY'),
      proName: (applicantContact.name || '').replace(/\d/, '').replace('.', ''),
      proMobileNumber: manipulatePhone(applicantContact.phone),
      proEmail: applicantContact.email,
      customerComment: '',
      balloons: JSON.stringify(
        balloons.map((balloon: IVariables) => ({
          ...balloon,
          BalloonsDetails: '-',
          BalloonsAddress: '-',
          Note: '-',
          ShowDates: moment(balloon.ShowDates).format('DD/MM/YYYY'),
        })),
      ),
      documents: JSON.stringify(
        Object.values(documents).reduce(
          (fileArray: any, file: any = []) => fileArray.concat(file),
          [],
        ),
      ),
    };
  },
};

export const name = PERMIT_BALLOONS_AD;

export default balloonsAdPermit;
