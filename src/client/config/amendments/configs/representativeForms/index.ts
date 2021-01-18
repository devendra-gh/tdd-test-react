import { IVariables } from '@tamm/app-composer';
import heirs from './heirs';
import localAgents from './localAgents';
import managers from './managers';
import representatives from './representatives';
import partners from './partners';
import partnersCompany from './partnersCompany';
import { profileTypes } from '../../constants';

const amendmentsConfigs: IVariables = {
  heirs: {
    [profileTypes.INDIVIDUAL]: heirs,
  },
  localAgents: {
    [profileTypes.INDIVIDUAL]: localAgents,
  },
  managers: {
    [profileTypes.INDIVIDUAL]: managers,
  },
  representatives: {
    [profileTypes.INDIVIDUAL]: representatives,
  },
  partners: {
    [profileTypes.INDIVIDUAL]: partners,
    [profileTypes.COMPANY]: partnersCompany,
  },
};

export default amendmentsConfigs;
