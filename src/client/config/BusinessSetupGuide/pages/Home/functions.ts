import { IVariables } from '@tamm/app-composer';

import { categoriesAr, categoriesEn } from '../../data';

/**
 *
 * @param {IVariables} props
 * @returns {*}
 */
const init = async (props: IVariables) => {
  // console.info('---init---', props);

  Object.assign(props, { ...props, categoriesAr });
  Object.assign(props, { ...props, categoriesEn });
};

/**
 *
 * @param {IVariables} props
 * @returns {*}
 */
const onPageInit = (props: IVariables) => {
  // console.info('---onPageInit---', props);
  return {
    testField: 'Test Field',
  };
};

export default {
  init,
  onPageInit,
};
