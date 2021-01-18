/* eslint-disable complexity */
import { IVariables } from '@tamm/app-composer';
import bpm from 'client/services/bpm';
import { get } from 'lodash';

const qs = require('querystring');

export const getPartnersArray = (partners: any) => {
  if (!partners) {
    return [];
  }
  if (typeof partners === 'string') {
    return JSON.parse(partners);
  }
  return partners;
};

export const compareEID = (first: string, second: string) => {
  if (first === second) {
    return true;
  }
  const plainFirst = first.split('-').join('');
  const plainSecond = second.split('-').join('');
  if (plainFirst === plainSecond) {
    return true;
  }
  return false;
};

export const loadApplicationStateFromCamunda = async (props: IVariables) => {
  const queryParams = qs.parse(props.location.search);
  const instanceId: any = get(queryParams, 'id', props.instanceId || '');
  const businessKey: any = get(queryParams, 'key', props.businessKey || '');
  if (instanceId === '' || businessKey === '') {
    props.history.push('/');
  }

  const processState = {
    processName: 'economicLicence',
    variables: [
      'partners',
      'businessLegalFormCode',
      'smartPassData',
      'licenceType',
      'allPartnersMoaApproved',
    ],
  };
  const data: IVariables = await bpm.getVariables(instanceId, processState);

  const allPartnersMoaApproved =
    data.data.allPartnersMoaApproved && data.data.allPartnersMoaApproved.value
      ? data.data.allPartnersMoaApproved.value
      : '';

  // eslint-disable-next-line
  const partners = JSON.parse(data.data.partners.value) || [];
  props.actions.partners.update([...partners]);

  // eslint-disable-next-line

  const smartPassData = JSON.parse(data.data.smartPassData.value) || [];
  props.actions.smartPassData.update([...smartPassData]);

  // update businessKey & instance ID for partners
  if (!props.instanceId) {
    props.actions.instanceId.update(instanceId);
  }
  if (!props.businessKey) {
    props.actions.businessKey.update(businessKey);
  }

  // update license type if not defined
  const { economicLicense } = props;
  if (
    !(
      economicLicense &&
      economicLicense.licenceType &&
      economicLicense.licenceType.licenceType
    )
  ) {
    props.actions.economicLicense.update({
      ...props.economicLicense,
      licenceType: {
        licenceType: data.data.licenceType.value,
      },
    });
  }

  return {
    instanceId,
    businessKey,
    allPartnersMoaApproved,
  };
};
