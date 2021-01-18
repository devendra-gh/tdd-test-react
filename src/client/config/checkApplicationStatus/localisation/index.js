import { LOCALE } from '@tamm/app-composer';
import en from './en.json';
import ar from './ar.json';
import newEn from './localisation-v2/en.json';
import newAr from './localisation-v2/ar.json';

const english = { ...en, ...newEn };
const arabic = { ...ar, ...newAr };

const translations = {
  [LOCALE.EN]: english,
  [LOCALE.AR]: arabic,
};

export default translations;
