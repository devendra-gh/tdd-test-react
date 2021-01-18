import fetch from 'client/services/fetch';
import { permitType } from '../utils/constants';

export const fetchRequirementsInquiry = async (serviceName: string) => {
  return fetch('/api/proxy/permitRequirementsInquiry', 'POST', {
    permitType: permitType[serviceName].id,
  });
};
