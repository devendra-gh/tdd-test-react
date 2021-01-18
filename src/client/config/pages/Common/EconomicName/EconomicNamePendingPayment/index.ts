import { REQUIRES_LOGIN } from '@tamm/app-composer/client/constants/requires';
import { IVariables } from '@tamm/app-composer';
import functions from './functions';
import { PROCESS_NAME } from '../../../../constants';
import { getDateFromTimeStamp } from '../../../../utils/datetime';

const payment = [
  {
    path: '/economic-name/payment', // path for router
    uniqueId: 'economic-name-pending-payment', // uniqueId for caching and other purposes
    template: 'summary', // template name, must be located in index of folder template/index
    title: 'global.economicName', // title of the page, later it will be read from CMS
    props: {
      currentStep: 'economic_name',
      currentSubStep: 'payment',
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
      onPageInit: (props: IVariables) => {
        const { locale } = props;
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
      stepsStatus: {
        'economic_name.ded_approval': 'finish',
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
      mapState: [
        'loggedIn',
        'businessKey',
        'paymentLink',
        'tradenameFees',
        {
          // list: functions.findPaymentSummary,
          // totalSection: functions.findPaymentSummaryTotal,
          steps: functions.getStep,
        },
      ],
      mapDispatch: ['stepsStatus'],
    },
    requires: [REQUIRES_LOGIN],
  },
];

export default payment;
