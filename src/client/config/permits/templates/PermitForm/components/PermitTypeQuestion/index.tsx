import React from 'react';
import { IVariables } from '@tamm/app-composer';
import FormTemplate from '@tamm/ui-lib-v2-form-template';
import PermitConfigs from 'client/config/permits/permitConfigs';

const permitCategories: { [key: string]: any[] } = {};
const permitConfigs: { [key: string]: any } = PermitConfigs;

Object.keys(PermitConfigs).forEach((permit: string) => {
  const {
    [permit]: { category, name },
  } = permitConfigs;

  let categories = permitCategories[category];
  if (!categories) {
    categories = [];
  }

  categories.push({
    id: name,
    label: name,
  });

  permitCategories[category] = categories;
});

export default (props: IVariables) => {
  // const { permitType, handleChange, selectedServiceType, i18n } = props;
  // if (!permitType) {
  //   return null;
  // }

  // const categoryPermits = permitCategories[permitType];

  return (
    <FormTemplate
      formData={{}}
      // i18n={i18n}
      id="permitType"
      inputGroups={[
        {
          fields: [
            // {
            //   'aria-label': 'field.serviceType.info',
            //   elementType: 'select',
            //   items: categoryPermits.map((sType: IVariables) => ({
            //     id: sType.id,
            //     label: i18n(`service.${sType.label}`),
            //   })),
            //   label: i18n('field.serviceType.info'),
            //   name: 'select',
            //   value: selectedServiceType,
            //   showSearch: false,
            //   onChange: handleChange,
            // },
          ],
          // name: i18n('title.selectServiceType'),
          // twoColumns: true,
        },
      ]}
    />
    //   <Select
    //   items={categoryPermits}
    //   value={selectedServiceType}
    //   label="Select Permit"
    //   placeholder="Select Permit Type"
    //   onChange={handleChange}
    // />
  );
};
