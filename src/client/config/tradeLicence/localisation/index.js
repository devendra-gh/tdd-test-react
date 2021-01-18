import { LOCALE } from '@tamm/app-composer';
import en from './en.json';
import ar from './ar.json';

const english = { ...en };
const arabic = { ...ar };

const translations = {
  [LOCALE.EN]: english,
  [LOCALE.AR]: arabic,
};

export default translations;
