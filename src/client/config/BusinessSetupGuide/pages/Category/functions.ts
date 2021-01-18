import { IVariables } from '@tamm/app-composer';

import { categoryByLinkAr, categoryByLinkEn } from '../../data';

/**
 *
 * @param {IVariables} props
 * @returns {*}
 */
const init = async (props: IVariables) => {
  // console.info('---init---', props);

  const {
    match: {
      params: { categoryName },
    },
  } = props;

  Object.assign(props, {
    ...props,
    categoryAr: categoryByLinkAr(categoryName),
    categoryEn: categoryByLinkEn(categoryName),
  });
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
