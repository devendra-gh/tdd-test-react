import { IVariables } from '@tamm/app-composer';
import bpm from 'client/services/bpm';
import fetch from 'client/services/fetch';
import { REPRESENTATIVE_TYPES } from 'client/config/utils/lookup';
import { MOA_PARTNER_STATUS } from 'client/config/utils/gcc';
import { moaWithoutNameSteps } from 'client/config/steps';
import {
  loadApplicationStateFromCamunda,
  getPartnersArray,
} from '../MoaConfirm/loadApplicationStateFromCamunda';

export const getNewSmartPassData = (
  props: IVariables,
  partners: IVariables[],
  smartPassData: any,
) => {
  const onlyPartners = partners.filter((p: IVariables) =>
    [
      REPRESENTATIVE_TYPES.OWNER.code,
      REPRESENTATIVE_TYPES.PARTNER.code,
      REPRESENTATIVE_TYPES.SPONSOR.code,
    ].includes(p.representativeType),
  );
  const newSmartPassData = onlyPartners.map((p: IVariables) => {
    const plainEID = p.idNumber.split('-').join('');
    const formatEID = plainEID.replace(
      /(\d{3})(\d{4})(\d{7})(\d{1})/,
      '$1-$2-$3-$4',
    );

    const loginPartnerID = props.user.IDN;
    let uuid = '00000000-83c0-4f53-ba6e-111111111111';
    if (loginPartnerID === plainEID || loginPartnerID === formatEID) {
      if (props.user['User Unique Identifier']) {
        uuid = props.user['User Unique Identifier'];
      }
    } else {
      const properArrData =
        typeof smartPassData === 'string'
          ? JSON.parse(smartPassData)
          : smartPassData;

      const alreadyExist = properArrData.find(
        (s: IVariables) => s.eid === formatEID,
      );
      if (alreadyExist && alreadyExist.uuid) {
        uuid = alreadyExist.uuid;
      }
    }

    return {
      uuid,
      spuuid: uuid,
      idType: 'EID',
      passportNumber: '',
      userType: 0,
      eid: formatEID,
      isApplicant: p.initialPartner === 'Yes',
    };
  });
  return newSmartPassData;
};

const getMoaHtml = async (
  props: IVariables,
  instanceId: string,
  businessKey: string,
) => {
  const res = await fetch('/pub/proxy/moa/getMoaHtml', 'POST', {
    instanceId: props.instanceId || instanceId,
    businessKey: props.businessKey || businessKey,
  });
  if (res.success) {
    props.actions.moa.update({
      ...props.moa,
      moaHTML: res.data,
    });
  }
};

const sendInvitesCall = (props: IVariables, partner: string = '') => {
  fetch('/pub/proxy/moa/sendInviteEmails', 'POST', {
    instanceId: props.instanceId,
    businessKey: props.businessKey,
    partner,
  });
};

const getTitle = async (props: IVariables) => {
  if (
    props.economicLicense &&
    props.economicLicense.licenceType &&
    props.economicLicense.licenceType.licenceType === 'tajer'
  ) {
    return 'global.title.tajer';
  }
  return 'global.title.allInOne';
};

const init = async (props: IVariables) => {
  await getMoaHtml(props, props.instanceId, props.businessKey);
  await loadApplicationStateFromCamunda(props);
};

const ownerMoaAgree = async (props: IVariables) => {
  const loginPartnerID = props.user.IDN;
  const updatedParners = getPartnersArray(props.partners).map((p: any) => {
    if (
      p.idNumber &&
      (loginPartnerID === p.idNumber ||
        loginPartnerID === p.idNumber.split('-').join(''))
    ) {
      if (
        [
          REPRESENTATIVE_TYPES.OWNER.code,
          REPRESENTATIVE_TYPES.PARTNER.code,
          REPRESENTATIVE_TYPES.SPONSOR.code,
        ].includes(p.representativeType)
      ) {
        return {
          ...p,
          moaAgreed: MOA_PARTNER_STATUS.AGREE,
          moaAgreedTime: Date.now(),
          initialPartner: 'Yes',
        };
      }
    }
    return { ...p };
  });

  const newSmartPassData = getNewSmartPassData(
    props,
    updatedParners,
    props.smartPassData,
  );

  await bpm.message('economicLicence', {
    businessKey: props.businessKey,
    messageName: 'ownerMoaApprove',
    variables: {
      partners: JSON.stringify(updatedParners),
      smartPassData: JSON.stringify(newSmartPassData),
      ownerMoaAgreed: 'Yes',
    },
  });

  if (newSmartPassData.length === 1) {
    // for soleLLC
    props.history.push('/economic-licence/submit-process');
    // await bpm.message('economicLicence', {
    //   businessKey: props.businessKey,
    //   messageName: 'moaApprove',
    //   variables: {
    //     partners: JSON.stringify(updatedParners),
    //     smartPassData: JSON.stringify(newSmartPassData),
    //     allPartnersMoaApproved: 'Yes',
    //   },
    // });
  } else {
    // for LLC
    await sendInvitesCall(props);
    props.history.push('/economic-licence/moa-approve');
  }
};

const ownerMoaDisAgree = async (props: IVariables) => {
  const loginPartnerID = props.user.IDN;
  const updatedParners = getPartnersArray(props.partners).map((p: any) => {
    if (
      p.idNumber &&
      (loginPartnerID === p.idNumber ||
        loginPartnerID === p.idNumber.split('-').join(''))
    ) {
      if (
        [
          REPRESENTATIVE_TYPES.OWNER.code,
          REPRESENTATIVE_TYPES.PARTNER.code,
          REPRESENTATIVE_TYPES.SPONSOR.code,
        ].includes(p.representativeType)
      ) {
        return {
          ...p,
          moaAgreed: MOA_PARTNER_STATUS.AGREE,
          moaAgreedTime: Date.now(),
        };
      }
    }
    return { ...p };
  });

  const newSmartPassData = getNewSmartPassData(
    props,
    updatedParners,
    props.smartPassData,
  );

  await bpm.message('economicLicence', {
    businessKey: props.businessKey,
    messageName: 'ownerMoaApprove',
    variables: {
      partners: JSON.stringify(updatedParners),
      smartPassData: JSON.stringify(newSmartPassData),
      ownerMoaAgreed: 'No',
    },
  });
  props.history.push('/economic-licence/submit');
};

export const getMoaSteps = (props: IVariables) => {
  return moaWithoutNameSteps;
};

export default {
  init,
  getTitle,
  getMoaHtml,
  ownerMoaAgree,
  ownerMoaDisAgree,
  getMoaSteps,
};
