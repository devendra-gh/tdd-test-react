import { LOCALE } from '@tamm/app-composer';
import { assignIn } from 'lodash';
import globalEn from '../../localisation/en.json';
import globalAr from '../../localisation/ar.json';
import en from './en.json';
import ar from './ar.json';

const translations = {
  [LOCALE.EN]: assignIn(en, globalEn),
  [LOCALE.AR]: assignIn(ar, globalAr),
};

export default translations;
