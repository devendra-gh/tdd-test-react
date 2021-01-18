import { IVariables } from '@tamm/app-composer';
import { noticeTypes } from '@tamm/app-composer/client/constants/types';
import { moeSteps } from 'client/config/steps';
import baseUrl from 'client/utils/baseUrl';
import functions from './functions';
import { PROCESS_NAME } from '../../../constants';
import { getDateFromTimeStamp } from '../../../utils/datetime';

const initialRegistration = [
  {
    path: '/economic-licence/initial-registration', // path for router
    uniqueId: 'initial-registration', // uniqueId for caching and other purposes
    template: 'notice', // template name, must be located in index of folder template/index
    title: 'initalRegistration.title', // title of the page, later it will be read from CMS
    props: {
      currentStep: 'initial_registration',
      currentSubStep: 'initial_registration',
      steps: moeSteps,
      stepsStatus: {
        'economic_name.ded_approval': 'finish',
        'economic_name.payment': 'finish',
        'economic_name.initial_approval': 'finish',
        economic_name: 'finish',
        initial_registration: 'finish',
      },
      type: noticeTypes.SUCCESS,
      title: 'notice.initalRegistration.title',
      text: 'notice.initalRegistration.text',
      sectionTitle: 'notice.initalRegistration.heading',
      sectionDescription: 'notice.initalRegistration.description',
      buttons: [
        {
          label: 'button.downloadCertificate',
          onClick: (props: IVariables) => {
            window.open(
              `${baseUrl}/api/download/businessCertificateFromAdu?instanceId=${props.instanceId ||
                ''}&type=economicLicenceTn`,
              '_blank',
            );
          },
          uiType: 'secondary',
        },
      ],
      sectionButtons: [
        {
          label: 'button.continueApp',
          onClick: functions.continueApp,
          uiType: 'primary',
        },
        {
          label: 'button.goToMoe',
          onClick: () =>
            window.open(
              `https://services.economy.ae/m/Pages/ServiceCard.aspx?WFID=77`,
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
            value: props.tnNumber,
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
      variables: ['tnNumber', 'submitDate', 'capId'],
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

export default initialRegistration;
