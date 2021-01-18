import { IVariables } from '@tamm/app-composer';
import { noticeTypes } from '@tamm/app-composer/client/constants/types';
import { moeSteps } from 'client/config/steps';
import baseUrl from 'client/utils/baseUrl';
import functions from './functions';
import { PROCESS_NAME } from '../../../constants';
import { getDateFromTimeStamp } from '../../../utils/datetime';

const finalRegistration = [
  {
    path: '/economic-licence/final-registration', // path for router
    uniqueId: 'final-registration', // uniqueId for caching and other purposes
    template: 'notice', // template name, must be located in index of folder template/index
    title: 'finalRegistration.title', // title of the page, later it will be read from CMS
    props: {
      currentStep: 'final_registration',
      currentSubStep: 'final_registration',
      steps: moeSteps,
      stepsStatus: {
        'economic_name.ded_approval': 'finish',
        'economic_name.payment': 'finish',
        'economic_name.initial_approval': 'finish',
        economic_name: 'finish',
        initial_registration: 'finish',
        'economic_licence.submit_licence': 'finish',
        'economic_licence.ded_approval': 'finish',
        'economic_licence.payment': 'finish',
        economic_licence: 'finish',
      },
      type: noticeTypes.SUCCESS,
      title: 'notice.finalRegistration.title',
      text: 'notice.finalRegistration.text',
      sectionTitle: 'notice.finalRegistration.heading',
      sectionDescription: 'notice.finalRegistration.description',
      buttons: [
        {
          label: 'button.licence',
          onClick: (props: IVariables) => {
            window.open(
              `${baseUrl}/api/download/businessCertificateFromAdu?instanceId=${props.instanceId ||
                ''}&type=economicLicenceCn`,
              '_blank',
            );
          },
        },
      ],
      sectionButtons: [
        {
          label: 'button.goToMoe',
          onClick: () =>
            window.open(
              `https://services.economy.ae/m/Pages/ServiceCard.aspx?WFID=38`,
              '_blank',
            ),
          uiType: 'secondary',
        },
      ],
    },
    onPageInit: (props: IVariables) => {
      return {
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
      variables: ['cnNumber', 'submitDate', 'capId'],
    },
    state: {
      mapState: [
        'loggedIn',
        'businessKey',
        'instanceId',
        { list: functions.getMoeRequirements },
      ],
      mapDispatch: ['instanceId', 'businessKey'],
    },
  },
];

export default finalRegistration;
