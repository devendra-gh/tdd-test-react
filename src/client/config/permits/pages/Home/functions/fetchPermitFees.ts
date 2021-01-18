import * as permits from 'client/config/permits/utils/constants/permits';
import {
  PERMIT_TYPE_ANNUAL,
  PERMIT_TYPE_EVENT,
} from 'client/config/permits/utils/getPermitTypes';
import {
  MACHINE_TYPE_BUBBLE_GUM,
  MACHINE_TYPE_DOLL_LIFT,
  MACHINE_TYPE_HOT_DRINKS,
  MACHINE_TYPE_ICE_MAKERS,
  MACHINE_TYPE_VENDING,
} from 'client/config/permits/utils/getMachineTypes';

// Will change this with ded API and hence will be fixed.
// eslint-disable-next-line complexity
const fetchPermitFees = async (serviceType: string) => {
  let fees: any;
  switch (serviceType) {
    case permits.PERMIT_PROPAGANDA_AD_BOARD:
      fees = { perUnitFees: 100 };
      break;
    case permits.PERMIT_ADDITIONAL_SIGNBOARD:
      fees = { perUnitFees: 150 };
      break;
    case permits.PERMIT_BANNER_AD:
    case permits.PERMIT_PAPER_AD:
      fees = { perUnitFees: 250 };
      break;
    case permits.PERMIT_CAFE:
      fees = { baseFees: 500 };
      break;
    case permits.PERMIT_AWNINGS_AD:
    case permits.PERMIT_BALLOONS_AD:
    case permits.PERMIT_TEMP_KIOSK_AD:
    case permits.PERMIT_PAPER_PUBLISHING_AD:
      fees = { perUnitFees: 500 };
      break;
    case permits.PERMIT_ELECTRONIC_SIGNBOARD:
      fees = {};
      break;
    case permits.PERMIT_VENDING_MACHINE:
    case permits.PERMIT_ATM_AD:
    case permits.PERMIT_AUTOMATIC_PAYMENT_AD:
      fees = { perUnitFees: 1000 };
      break;
    case permits.PERMIT_PRIZE_DISPLAY_FORMAT:
      fees = { perUnitFees: 1500 };
      break;
    case permits.PERMIT_AIR_AD:
      fees = { perUnitFees: 2000 };
      break;
    case permits.PERMIT_VEHICLES_AD:
      fees = {
        perUnitFees: [
          { type: 'Medium', amount: 1000, text: 'vehicles.medium' },
          { type: 'Heavy', amount: 1500, text: 'vehicles.heavy' },
          { type: 'Light', amount: 500, text: 'vehicles.light' },
          { type: 'Movable Ad', amount: 3000, text: 'vehicles.movable' },
        ],
      };
      break;
    case permits.PERMIT_DRAWS:
    case permits.PERMIT_SEASONAL_PROMOTION:
      fees = {
        baseFees: 200,
        // otherFees: [{ title: 'fees.mainCommercialLicence', amount: 1500 }],
        perUnitFees: 1500,
      };
      break;
    case permits.PERMIT_CLEARANCE:
    case permits.PERMIT_SALES:
      fees = {
        baseFees: 200,
        otherFees: [{ title: 'fees.mainLicenceFees', amount: 500 }],
        perUnitFees: 500,
      };
      break;
    case permits.PERMIT_FIXED_AD_SIGNBOARD:
      fees = {
        perUnitFees: { fixed: 5000, variable: 100 },
      };
      break;
    case permits.PERMIT_VARIOUS_MACHINES_AD:
      fees = {
        perUnitFees: {
          [MACHINE_TYPE_BUBBLE_GUM]: { amount: 200 },
          [MACHINE_TYPE_DOLL_LIFT]: { amount: 500 },
          [MACHINE_TYPE_HOT_DRINKS]: { amount: 500 },
          [MACHINE_TYPE_ICE_MAKERS]: { amount: 500 },
          [MACHINE_TYPE_VENDING]: { amount: 500 },
        },
      };
      break;
    case permits.PERMIT_FOOD_TRUCK:
      fees = {
        perUnitFees: {
          [PERMIT_TYPE_ANNUAL]: { amount: 3000 },
          [PERMIT_TYPE_EVENT]: { amount: 500 },
        },
      };
      break;
    case permits.PERMIT_MOBILE_CAR:
      fees = {
        perUnitFees: 3000,
      };
      break;
    default:
      break;
  }
  return fees;
};
export default fetchPermitFees;
