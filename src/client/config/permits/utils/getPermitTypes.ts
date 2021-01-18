export const PERMIT_TYPE_ANNUAL = 'Annual';
export const PERMIT_TYPE_EVENT = 'Event';

export const DEFAULT_PERMIT_TYPE = PERMIT_TYPE_ANNUAL;

const permitTypes = {
  [PERMIT_TYPE_ANNUAL.toLowerCase()]: {
    id: PERMIT_TYPE_ANNUAL.toLowerCase(),
    label: 'global.annual',
    value: PERMIT_TYPE_ANNUAL,
  },
  [PERMIT_TYPE_EVENT.toLowerCase()]: {
    id: PERMIT_TYPE_EVENT.toLowerCase(),
    label: 'global.event',
    value: PERMIT_TYPE_EVENT,
  },
};
const getPermitTypes = () => {
  return Object.values(permitTypes);
};
export default getPermitTypes;
