import { REQUIRES_LOGIN } from '@tamm/app-composer/client/constants/requires';
import { noticeTypes } from '@tamm/app-composer/client/constants/types';
import { IVariables } from '@tamm/app-composer';
import functions from './functions';
import { PROCESS_NAME } from '../../../../constants';
import { getDateFromTimeStamp } from '../../../../utils/datetime';

const result = [
  {
    path: '/economic-licence/submit/success', // path for router
    uniqueId: 'economic-name-approved', // uniqueId for caching and other purposes
    template: 'notice', // template name, must be located in index of folder template/index
    title: 'global.economicName', // title of the page, later it will be read from CMS

    props: {
      type: noticeTypes.SUCCESS,
      title: 'notice.economicName.approved.title',
      text: 'notice.economicName.approved.text',
      licenceSubTitle: 'submitLicence.continueAndSubmit.title',
      showMultipleDocumentUpload: true,
      isSubmitLicenceNeeded: true,
      fetchAttachments: functions.fetchAttachments,
      legalType: '1',
      termsAndConditions: {
        title: 'termsAndConditions.title',
        description: '',
        label: 'termsAndConditions.label',
      },
      licenceButton: {
        label: 'submit',
        onClick: functions.onClick,
        uiType: 'primary',
      },
      inputField: {
        title: 'tawtheeqNo.ttile',
        label: 'tawtheeqNo.label',
        defaultValue: '',
        placeholder: '',
        help: 'tawtheeqNo.hint',
      },
      buttons: [
        {
          label: 'button.downloadCertificate',
          onClick: functions.documentDownload,
          uiType: 'primary',
        },
        // {
        //   label: "button.next",
        //   onClick: functions.onClick,
        //   uiType: "secondary"
        // }
      ],
      inputOnBlur: functions.onBlur,
      inputOnChange: functions.inputOnChange,
    },
    onPageInit: async (props: IVariables) => {
      const activityDetails = props.activities
        ? JSON.parse(props.activities)
        : [];
      const mappedActivityCode: IVariables = functions.formatActivities(
        activityDetails,
      );
      props.actions.economicLicenceActivities.update(mappedActivityCode);
      const conditionsData = await functions.fetchConditions(
        mappedActivityCode,
        props.businessLegalFormCode,
      );
      props.actions.economicLicenceConditions.update(conditionsData);
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
      variables: [
        'tnNumber',
        'capId',
        'expectedRevenue',
        'expectedPaidCapital',
        'tawtheeq',
        'activities',
        'submitDate',
        'businessLegalFormCode',
        'reservationPeriod',
      ],
    },
    state: {
      mapState: [
        'loggedIn',
        'economicLicenceActivities',
        'tawtheeqNumber',
        'instanceId',
        {
          steps: functions.getStep,
          stepsStatus: functions.getStepStatus,
          currentStep: functions.getCurrentStep,
          currentSubStep: functions.getCurrentSubStep,
          onFileUpload: functions.uploadFile,
          onRemoveFile: functions.removeFile,
          documents: functions.getDocuments,
          conditions: functions.getConditions,
          tawtheeqStatus: functions.getTawtheeqStatus,
          tawtheeqValue: functions.getTawtheeqValue,
        },
        'businessKey',
      ],
      mapDispatch: [
        'stepsStatus',
        'economicLicenceDocuments',
        'economicLicenceActivities',
        'economicLicenceConditions',
        'tawtheeqNumber',
      ],
    },
    requires: [REQUIRES_LOGIN],
  },
];

export default result;
