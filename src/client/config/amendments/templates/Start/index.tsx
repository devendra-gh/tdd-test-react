import React from 'react';
import routePropTypes from '@tamm/app-composer/client/propTypes/route';
import { withTemplateHooks, IVariables } from '@tamm/app-composer';
import Container from 'client/containers';

import JourneyLandingTemplate from '@tamm/ui-lib-v2-journey-landing-template';

import Sidebar from 'client/templates/Sidebar';

/**
 * Start template
 * @param       {Object} props
 * @returns     {JSX}
 */
function Start(props: IVariables) {
  const {
    i18n,
    locale,
    currentStep,
    currentSubStep,
    onStart,
    // showSidebar,
    stepsStatus,
  } = props;

  const process = {
    selectLicenceNumberEN: 'Select licence number',
    selectLicenceNumberAR: 'اختر رقم الرخصة',

    selectLicenceNumberDescEN:
      'Select the economic licence that you what to amend.',
    selectLicenceNumberDescAR: 'حدد الرخصة الاقتصادية التي تريد تعديلها',

    selectAmendmentTypeEN: 'Select amendment type',
    selectAmendmentTypeAR: 'اختر نوع التعديل',

    selectAmendmentTypeDescEN:
      'Select which aspect of the economic licence you wish to amend.',
    selectAmendmentTypeDescAR:
      'حدد أي جانب من جوانب الترخيص الاقتصادي ترغب في تعديله',

    makeAmendmentEN: 'Make amendments',
    makeAmendmentAR: 'إدخال تعديلات',

    makeAmendmentDescEN:
      'Make changes, upload documents, verify contact applicant information, and add statistical information.',
    makeAmendmentDescAR:
      'إدخال التغييرات وتحميل المستندات والتحقق من بيانات التواصل مع مقدم الطلب وإضافة المعلومات الإحصائية.',

    getDEDApprovalEN: 'Get DED Approval',
    getDEDApprovalAR: 'احصل على موافقة دائرة التنمية الاقتصادية',

    getDEDApprovalDescEN:
      'Submit your application for approval from the Department of Economic Development',
    getDEDApprovalDescAR: 'قدم طلبك للموافقة عليه من دائرة التنمية الاقتصادية',

    makePaymentEN: 'Payment',
    makePaymentAR: 'دفع المطلوب',

    makePaymentDescEN: 'Review the fees and pay the necessary amount.',
    makePaymentDescAR: 'الاطلاع على المبلغ المطلوب وسداده.',

    downloadLicenceEN: 'Download licence',
    downloadLicenceAR: 'إصدار الرخصة',

    downloadLicenceDescEN:
      'View progress and download the updated licence and the other documents once completed.',
    downloadLicenceDescAR:
      'اعرض التغييرات وقم بإصدار الرخصة الحديثة والملفات الأخرى فور اكتمالها.',
  };

  return (
    <Container
      locale={locale}
      sidebar={
        <Sidebar
          currentStep={currentStep}
          currentSubStep={currentSubStep}
          i18n={i18n}
          steps={[]}
          stepsStatus={stepsStatus}
          // showSidebar={showSidebar}
        />
      }
    >
      <JourneyLandingTemplate
        description={i18n('start.description')}
        helpfulBlock={{
          // onFieldChange: function noRefCheck() {},
          // onSubmit: function noRefCheck() {},
          telephoneField: {
            countries: [
              {
                code: 971,
                name: 'UAE',
              },
            ],
          },
        }}
        process={
          locale === 'en'
            ? {
                steps: [
                  {
                    description: process.selectLicenceNumberDescEN,
                    label: process.selectLicenceNumberEN,
                  },
                  {
                    description: process.selectAmendmentTypeDescEN,
                    label: process.selectAmendmentTypeEN,
                  },
                  {
                    description: process.makeAmendmentDescEN,
                    label: process.makeAmendmentEN,
                  },
                  {
                    description: process.getDEDApprovalDescEN,
                    label: process.getDEDApprovalEN,
                  },
                  {
                    description: process.makePaymentDescEN,
                    label: process.makePaymentEN,
                  },
                  {
                    description: process.downloadLicenceDescEN,
                    label: process.downloadLicenceEN,
                  },
                ],
                title: i18n('process.title'),
              }
            : {
                steps: [
                  {
                    description: process.selectLicenceNumberDescAR,
                    label: process.selectLicenceNumberAR,
                  },
                  {
                    description: process.selectAmendmentTypeDescAR,
                    label: process.selectAmendmentTypeAR,
                  },
                  {
                    description: process.makeAmendmentDescAR,
                    label: process.makeAmendmentAR,
                  },
                  {
                    description: process.getDEDApprovalDescAR,
                    label: process.getDEDApprovalAR,
                  },
                  {
                    description: process.makePaymentDescAR,
                    label: process.makePaymentAR,
                  },
                  {
                    description: process.downloadLicenceDescAR,
                    label: process.downloadLicenceAR,
                  },
                ],
                title: i18n('process.title'),
              }
        }
        startLogin={{
          buttonLabel: i18n('landingPage.buttonStart'),
          description: i18n('landingPage.desc'),
          title: i18n('title.licenceAmendments'),
          onClick: () => onStart(props),
        }}
        title={i18n('start.title')}
      />
    </Container>
  );
}

Start.propTypes = {
  ...routePropTypes,
};

export default withTemplateHooks(Start);
