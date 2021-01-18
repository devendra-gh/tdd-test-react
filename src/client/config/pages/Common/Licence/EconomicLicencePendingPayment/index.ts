import { REQUIRES_LOGIN } from '@tamm/app-composer/client/constants/requires';
import { noticeTypes } from '@tamm/app-composer/client/constants/types';
import { IVariables } from '@tamm/app-composer';
import functions from './functions';
import { PROCESS_NAME } from '../../../../constants';
import { getDateFromTimeStamp } from '../../../../utils/datetime';

const result = [
  {
    path: '/economic-licence/payment', // path for router
    uniqueId: 'economic-licence-payment-summary', // uniqueId for caching and other purposes
    template: 'summary', // template name, must be located in index of folder template/index
    title: 'global.economicLicence', // title of the page, later it will be read from CMS
    props: {
      // currentStep: 'economic_licence',
      currentSubStep: 'payment',
      type: noticeTypes.INFO,
      title: 'notice.economiclicence.pendingPayment.title',
      subTitle: 'notice.economiclicence.pendingPayment.title',
      description: 'notice.economiclicence.pendingPayment.description',
      buttons: [
        {
          label: 'button.pay',
          onClick: functions.onClick,
          withArrow: true,
        },
      ],
    },
    onPageInit: (props: IVariables) => {
      const { locale } = props;
      // props.licenceFees = JSON.stringify([{feeDescEn: "test-case-1", FeeAmount: 2001}, {feeDescEn: "test-case-2", FeeAmount: 2002}, {feeDescEn: "test-case-3", FeeAmount: 2003}])
      // console.log('PROPS', props);
      const licenceFees = props.licenceFees
        ? JSON.parse(props.licenceFees)
        : [];
      // props.actions.icaApproved.update();
      // props.actions.icaApproved.update(props.icaApproved);
      return {
        list: (reservationPeriod: string = '') => [
          {
            columns: [
              {
                id: 'description',
                title: locale === 'en' ? 'Description' : 'الوصف',
              },
              {
                id: 'price',
                title: locale === 'en' ? 'Price' : 'السعر',
                align: 'end',
              },
            ],
            headerHidden: false,
            items:
              licenceFees && licenceFees.length
                ? licenceFees.map((li: any, index: number) => ({
                    id: index,
                    // description: `${li.authorityEn} - ${li.feeDescEn}`,
                    description: li.feeDescEn,
                    price:
                      locale === 'en'
                        ? `AED ${functions.formatValue(li.FeeAmount)}`
                        : `درهم ${functions.formatValue(li.FeeAmount)}`,
                  }))
                : [{ id: 0, description: '', price: 0 }],
            title: locale === 'en' ? 'Payment summary' : 'ملخص المدفوعات',
            uiType: 'default',
          },
        ],
        totalSection:
          licenceFees && licenceFees.length
            ? licenceFees.reduce((a: any, b: any) => {
                return a + b.FeeAmount;
              }, 0)
            : 0,
        tags: [
          {
            label: 'notice.refNo',
            value: props.cnNumber,
          },
          {
            label: 'notice.submit',
            value: getDateFromTimeStamp(props.submitDate),
          },
        ],
      };
    },
    fromProcessState: {
      processName: PROCESS_NAME,
      variables: [
        'licenceFees',
        'paymentLink',
        'icaApproved',
        'licenceType',
        'submitDate',
      ],
    },
    state: {
      mapState: [
        'loggedIn',
        'steps',
        'businessKey',
        'licenceFees',
        'paymentLink',
        'icaApproved',
        'economicLicense',
        {
          // list: functions.findPaymentSummary,
          // totalSection: functions.findPaymentSummaryTotal,
          // currentStep: props.icaApproved !== '' && props.icaApproved !== 'Approved' ? false : functions.getCurrentStep,
          currentStep: functions.getCurrentStep,
          steps: functions.getStep,
          stepsStatus: functions.getStepStatus,
          // list: functions.findPaymentSummary,
          // totalSection: functions.findPaymentSummaryTotal,
        },
      ],
      mapDispatch: ['stepsStatus', 'icaApproved'],
    },
    requires: [REQUIRES_LOGIN],
  },
];

export default result;
