import { get } from 'lodash';
import fetch from 'client/services/fetch';

const getTransliteration = async (word: string) => {
  const payload = await fetch(`/pub/proxy/getYamliSuggestions?word=${word}`);

  return get(payload, 'data.suggestions', {});
};

export default getTransliteration;
