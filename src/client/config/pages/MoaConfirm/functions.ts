import { IVariables } from '@tamm/app-composer';
import bpm from 'client/services/bpm';
import { REPRESENTATIVE_TYPES } from 'client/config/utils/lookup';
import fetch from 'client/services/fetch';
import { MOA_PARTNER_STATUS } from 'client/config/utils/gcc';
import { get } from 'lodash';
import { currentUtcDate } from 'client/config/utils/utcTimeConverter';
import {
  loadApplicationStateFromCamunda,
  getPartnersArray,
} from './loadApplicationStateFromCamunda';
import { getNewSmartPassData } from '../MoaGenerate/functions';

const qs = require('querystring');

const second = 1;
const minute = 60 * second;
const hour = 60 * minute;
export const REMINDER_IN_SECONDS: number = 24 * hour;

export const isPartnerReminderOpen = (lastRemindTime: any) => {
  if (lastRemindTime) {
    const lastReminderDate: Date = new Date(lastRemindTime);
    const currentDate: Date = currentUtcDate();
    const DiffidenceInSeconds: number =
      (currentDate.getTime() - lastReminderDate.getTime()) / 1000;

    if (DiffidenceInSeconds > REMINDER_IN_SECONDS) {
      return true;
    }
    return false;
  }
  return true;
};

const checkAllPartnersAgreedToMoa = (partners: IVariables): boolean => {
  const onlyPartners = partners.filter((partner: IVariables) =>
    [
      REPRESENTATIVE_TYPES.OWNER.code,
      REPRESENTATIVE_TYPES.PARTNER.code,
      REPRESENTATIVE_TYPES.SPONSOR.code,
    ].includes(partner.representativeType),
  );

  let allAgree: boolean = true;
  if (onlyPartners.length) {
    onlyPartners.map((partner: IVariables) => {
      if (!(partner.moaAgreed === MOA_PARTNER_STATUS.AGREE)) {
        allAgree = false;
      }
      return partner;
    });
  }
  return allAgree;
};

const reInvite = async (props: IVariables, destinationEmail: string = '') => {
  let isAlreadyInvited = false;
  const currentDate: Date = currentUtcDate();
  const updatedPartners = getPartnersArray(props.partners).map(
    (partner: any) => {
      if (partner.emailAddress === destinationEmail) {
        if (partner.lastRemindTime) {
          isAlreadyInvited = true;
        }
        return { ...partner, lastRemindTime: currentDate };
      }
      return { ...partner };
    },
  );
  props.actions.partners.update([...updatedPartners]);

  fetch('/pub/proxy/moa/sendInviteEmails', 'POST', {
    instanceId: props.instanceId,
    businessKey: props.businessKey,
    partner: destinationEmail,
    currentTime: isAlreadyInvited ? currentDate : '',
  });

  const allPartnerAgree: boolean = checkAllPartnersAgreedToMoa(updatedPartners);

  const newSmartPassData = getNewSmartPassData(
    props,
    updatedPartners,
    props.smartPassData,
  );

  await bpm.message('economicLicence', {
    businessKey: props.businessKey,
    messageName: 'moaApprove',
    variables: {
      partners: JSON.stringify(updatedPartners),
      smartPassData: JSON.stringify(newSmartPassData),
      allPartnersMoaApproved: allPartnerAgree ? 'Yes' : 'No',
    },
  });
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
      moaModalShow: false,
    });
  }
};

const init = async (props: IVariables) => {
  const queryParams = qs.parse(props.location.search);
  const instanceId: any = get(queryParams, 'id', '');
  // get business details from camunda and check if partnerId exists
  if (!(props.user && props.user.IDN)) {
    if (!props.instanceId && instanceId) {
      const forceRedirect = `${props.location.pathname}${props.location.search}`;
      localStorage.setItem('forceRedirect', forceRedirect);
    }
    props.history.push('/login');
  } else {
    const data = await loadApplicationStateFromCamunda(props);
    await getMoaHtml(props, data.instanceId, data.businessKey);

    const partners = getPartnersArray(props.partners);
    const newSmartPassData = getPartnersArray(props.smartPassData);
    if (
      ['', 'No'].includes(data.allPartnersMoaApproved) &&
      partners.length > 0 &&
      newSmartPassData.length > 1 // this applys only to the LLC
    ) {
      const allPartnerAgree = checkAllPartnersAgreedToMoa(partners);
      if (allPartnerAgree) {
        await bpm.message('economicLicence', {
          businessKey: props.businessKey,
          messageName: 'moaApprove',
          variables: {
            partners: JSON.stringify(partners),
            smartPassData: JSON.stringify(newSmartPassData),
            allPartnersMoaApproved: 'Yes',
          },
        });
      }
    }
  }
};

const doesAgree = async (props: IVariables, agree: boolean) => {
  const loginPartnerID = props.user.IDN;
  const currentDate = currentUtcDate();
  const updatedPartners = getPartnersArray(props.partners).map((p: any) => {
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
          moaAgreed: agree
            ? MOA_PARTNER_STATUS.AGREE
            : MOA_PARTNER_STATUS.DISAGREE,
          moaAgreedTime: currentDate,
        };
      }
    }
    return { ...p };
  });
  props.actions.moa.update({
    ...props.moa,
    moaModalShow: false,
  });
  props.actions.partners.update(updatedPartners);

  const allPartnerAgree = checkAllPartnersAgreedToMoa(updatedPartners);

  const newSmartPassData = getNewSmartPassData(
    props,
    updatedPartners,
    props.smartPassData,
  );

  await bpm.message('economicLicence', {
    businessKey: props.businessKey,
    messageName: 'moaApprove',
    variables: {
      partners: JSON.stringify(updatedPartners),
      smartPassData: JSON.stringify(newSmartPassData),
      allPartnersMoaApproved: allPartnerAgree ? 'Yes' : 'No',
    },
  });

  if (!allPartnerAgree) {
    props.actions.moa.update({
      ...props.moa,
      moaModalShow: false,
    });
  }
  await loadApplicationStateFromCamunda(props);
  await getMoaHtml(props, props.instanceId, props.businessKey);
};

const showMoa = async (props: IVariables) => {
  props.actions.moa.update({
    ...props.moa,
    moaModalShow: !props.moa.moaModalShow,
  });
};

export default {
  init,
  doesAgree,
  showMoa,
  reInvite,
};
