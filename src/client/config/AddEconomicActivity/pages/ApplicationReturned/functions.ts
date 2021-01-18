import { IVariables } from '@tamm/app-composer';
import bpm from 'client/services/bpm';
import moment from 'moment';
import { get } from 'lodash';
import { PROCESS_NAME_ADD_ECONOMIC_ACTIVITY } from '../../constants';

const onSubmit = async (props: IVariables) => {
  const { fileUploadData } = props;
  const docArray = [];

  const activitySupportingDoc = get(
    fileUploadData,
    'documents.activitySupportingDoc[0]',
  );
  docArray.push(activitySupportingDoc);

  await bpm.message(
    PROCESS_NAME_ADD_ECONOMIC_ACTIVITY,
    {
      businessKey: props.businessKey,
      messageName: 'msgSubmitDocument',
      variables: {
        submittedDate: moment().format('DD-MMM-YYYY'),
        documentsActivity: JSON.stringify(docArray),
      },
    },
    true,
  );
};

export default {
  onSubmit,
};
