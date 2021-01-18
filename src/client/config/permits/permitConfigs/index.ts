import airAdPermit from './airAd';
import additionalSignboardPermit from './additionalSignboard';
// import electronicSignboardPermit, {
//   name as electronicSignboardName,
// } from './electronicSignboard';
import fixedAdSignboardPermit from './fixedAdSignboard';
import propagandaAdBoardPermit from './propagandaAdBoard';
import bannerAdPermit from './bannerAd';
import drawsPermit from './draws';
import salesPermit from './sales';
import seasonalPromotionsPermit from './seasonalPromotions';
import balloonsAdPermit from './balloonsAd';
import paperAdPermit from './paperAd';
import paperPublishingAdPermit from './paperPublishingAd';
import clearancePermit from './clearance';
import awningsAdPermit from './awningsAd';
import prizeDisplayPlatformPermit from './prizeDisplayPlatform';
import vehiclesAdPermit from './vehiclesAd';
import vendingMachineAdPermit from './vendingMachineAd';
import ATMAdPermit from './ATMAd';
import variousMachinesAdPermit from './variousMachinesAd';
import automaticPaymentAdPermit from './automaticPaymentAd';
import cafePermit from './cafe';
import foodTruckPermit from './foodTruckPermit';
import mobileCarPermit from './mobileCarPermit';
import temporaryKioskAdPermit from './temporaryKioskAd';
import * as permits from '../utils/constants/permits';

const configs = {
  [permits.PERMIT_TEMP_KIOSK_AD]: temporaryKioskAdPermit,
  [permits.PERMIT_AIR_AD]: airAdPermit,
  [permits.PERMIT_PROPAGANDA_AD_BOARD]: propagandaAdBoardPermit,
  [permits.PERMIT_BANNER_AD]: bannerAdPermit,
  [permits.PERMIT_SALES]: salesPermit,
  [permits.PERMIT_SEASONAL_PROMOTION]: seasonalPromotionsPermit,
  [permits.PERMIT_BALLOONS_AD]: balloonsAdPermit,
  [permits.PERMIT_DRAWS]: drawsPermit,
  [permits.PERMIT_CLEARANCE]: clearancePermit,
  [permits.PERMIT_AWNINGS_AD]: awningsAdPermit,
  [permits.PERMIT_ADDITIONAL_SIGNBOARD]: additionalSignboardPermit,
  // electronicSignboardPermit,
  [permits.PERMIT_FIXED_AD_SIGNBOARD]: fixedAdSignboardPermit,
  [permits.PERMIT_PRIZE_DISPLAY_FORMAT]: prizeDisplayPlatformPermit,
  [permits.PERMIT_VEHICLES_AD]: vehiclesAdPermit,
  [permits.PERMIT_VENDING_MACHINE]: vendingMachineAdPermit,
  [permits.PERMIT_VARIOUS_MACHINES_AD]: variousMachinesAdPermit,
  [permits.PERMIT_ATM_AD]: ATMAdPermit,
  [permits.PERMIT_AUTOMATIC_PAYMENT_AD]: automaticPaymentAdPermit,
  [permits.PERMIT_PAPER_AD]: paperAdPermit,
  [permits.PERMIT_PAPER_PUBLISHING_AD]: paperPublishingAdPermit,
  [permits.PERMIT_CAFE]: cafePermit,
  [permits.PERMIT_FOOD_TRUCK]: foodTruckPermit,
  [permits.PERMIT_MOBILE_CAR]: mobileCarPermit,
};

export default configs;
