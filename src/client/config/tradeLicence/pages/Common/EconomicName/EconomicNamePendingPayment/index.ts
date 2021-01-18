import { REQUIRES_LOGIN } from '@tamm/app-composer/client/constants/requires';
import { IVariables } from '@tamm/app-composer';
import { economicNameSteps } from 'client/config/steps';
import functions from './functions';
import { PROCESS_NAME } from '../../../../constants';
import { getDateFromTimeStamp } from '../../../../utils/datetime';
import { PATH_PAYMENT } from '../../../../routes';
import { getAnalyticsData } from '../../../../utils/analytics';

const payment = [
  {
    path: PATH_PAYMENT, // path for router
    uniqueId: 'economic-name-pending-payment', // uniqueId for caching and other purposes
    template: 'summary', // template name, must be located in index of folder template/index
    title: 'global.economicName', // title of the page, later it will be read from CMS
    props: {
      title: 'notice.economicName.pendingPayment.title',
      subTitle: 'payment',
      description: 'notice.economicName.pendingPayment.text',
      buttons: [
        {
          label: 'button.pay',
          onClick: functions.onClick,
          uiType: 'primary',
          withArrow: true,
        },
      ],
      currentStep: 'payment',
      stepsStatus: {
        ded_approval: 'finish',
      },
      steps: economicNameSteps,
      onPageInit: (props: IVariables) => {
        const { locale } = props;
        getAnalyticsData('sla', {
          applicationStatus: 'pending payment',
          serviceStatus: 'success',
        });
        const tradenameFees = props.tradenameFees
          ? JSON.parse(props.tradenameFees)
          : [];
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
                tradenameFees && tradenameFees.length
                  ? tradenameFees.map((li: any, index: number) => ({
                      id: index,
                      // description: `${li.authorityEn} - ${li.feeDescEn}`,
                      description:
                        locale === 'en' ? li.feeDescEn : li.feeDescAr,
                      price:
                        locale === 'en'
                          ? `AED ${functions.formatValue(li.FeeAmount)}`
                          : `درهم ${functions.formatValue(li.FeeAmount)}`,
                    }))
                  : [{ id: 0, description: '', price: 0 }],
              title: locale === 'en' ? 'Payment Summary' : 'ملخص المدفوعات',
              uiType: 'default',
            },
          ],
          totalSection:
            tradenameFees && tradenameFees.length
              ? tradenameFees.reduce((a: any, b: any) => {
                  return a + b.FeeAmount;
                }, 0)
              : 0,
          tags: [
            {
              label: 'notice.refNo',
              value: props.tnNumber,
            },
            {
              label: 'notice.submit',
              value: getDateFromTimeStamp(props.submitDate),
            },
          ],
        };
      },
    },
    fromProcessState: {
      processName: PROCESS_NAME,
      variables: [
        'paymentLink',
        'reservationPeriod',
        'tradenameFees',
        'tnNumber',
        'submitDate',
      ],
    },
    state: {
      mapState: ['loggedIn', 'businessKey', 'paymentLink', 'tradenameFees'],
      mapDispatch: ['stepsStatus'],
    },
    requires: [REQUIRES_LOGIN],
  },
];

export default payment;
