import React from 'react';
import { IVariables } from '@tamm/app-composer';
// import Select from '@tamm/ui-lib-v2-select';
import FormTemplate from '@tamm/ui-lib-v2-form-template';

import PermitConfigs from '../../../../permitConfigs';

const permitCategories: any[] = [];
const permitConfigs: { [key: string]: any } = PermitConfigs;

Object.keys(PermitConfigs).forEach((permit: string) => {
  const {
    [permit]: { category },
  } = permitConfigs;

  permitCategories[category] = '';
});

const CategoryQuestion = (props: IVariables) => {
  // const { handleChange, selectedCategory, i18n, disablePermit } = props;

  // const items = Object.keys(permitCategories).map(category => ({
  //   id: category,
  //   label: i18n(`category.${category}`),
  // }));

  return (
    <React.Fragment>
      <FormTemplate
        formData={{}}
        // i18n={i18n}
        id="category"
        inputGroups={[
          {
            fields: [
              // {
              //   'aria-label':
              //     'Please select your permit type from drop-down list below',
              //   elementType: 'select',
              //   items,
              //   label: i18n('field.permitType.info'),
              //   name: 'select',
              //   value: selectedCategory,
              //   showSearch: false,
              //   onChange: handleChange,
              //   disabled: () => disablePermit,
              // },
            ],
            // name: i18n('title.selectPermitType'),
            // twoColumns: true,
          },
        ]}
      />
    </React.Fragment>
  );
};

export default CategoryQuestion;
