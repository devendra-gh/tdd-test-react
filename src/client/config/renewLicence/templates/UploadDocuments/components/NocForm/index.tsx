import React, { useEffect } from 'react';
import { withTemplateHooks, IVariables } from '@tamm/app-composer';
import FormTemplate from '@tamm/ui-lib-v2-form-template';
import './index.less';
import { isEmail, isMobile } from 'client/config/utils/validations';
import { formatTelephoneNumber } from 'client/config/renewLicence/utils/common';

/* istanbul ignore file */

// this from component repalces noc document - that was initially preset along with the tawtheeq file upload
const NocForm = (props: IVariables) => {
  const {
    i18n,
    onNocFormChange,
    nocForm,
    startShowingErrors,
    leaseInfo = null,
  } = props;
  const initialformData = leaseInfo ? JSON.parse(leaseInfo) : null;
  const onChange = (values: IVariables) => onNocFormChange(values, props);
  useEffect(() => {
    window.scrollTo(0, 0);
    if (initialformData) {
      onChange({
        officialMobile: formatTelephoneNumber(initialformData.officalMobile),
        officialEmail: initialformData.officalEmail,
      });
    }
  }, []);
  const inputGroups = [
    {
      name: '',
      twoColumns: true,
      fields: [
        {
          name: 'proName',
          elementType: 'input',
          label: i18n('submit.field.label.proName'),
          value: nocForm.proName,
          disabled: () => true,
        },
        {
          elementType: 'inputTelephone',
          name: 'inputTelephone',
          'aria-label': 'input telephone',
          label: i18n('submit.field.label.proMobNo'),
          value: formatTelephoneNumber(nocForm.proMobileNumber),
          onSelect: (value: string) => onChange({ proMobileNumber: value }),
          countries: [
            {
              name: i18n('countries.uae'),
              code: 971,
            },
          ],
          code: 971,
          validate: () =>
            startShowingErrors &&
            !isMobile((nocForm.proMobileNumber || '').replace(/\s/g, '')) &&
            i18n('validationMessage.mobile'),
        },
        {
          name: 'proEmail',
          elementType: 'input',
          label: i18n('submit.field.label.proEmail'),
          value: nocForm.proEmail,
          onChange: (value: string) => onChange({ proEmail: value }),
          validate: () =>
            startShowingErrors &&
            !isEmail(nocForm.proEmail) &&
            i18n('validationMessage.email'),
        },
      ],
    },
    {
      name: '',
      twoColumns: true,
      fields: [
        {
          label: i18n('submit.field.label.officialMobile'),
          elementType: 'inputTelephone',
          name: 'inputTelephone',
          value: nocForm.officialMobile,
          validate: () =>
            startShowingErrors &&
            !isMobile((nocForm.officialMobile || '').replace(/\s/g, '')) &&
            i18n('validationMessage.mobile'),
          onSelect: (value: string) => {
            onChange({ officialMobile: value });
          },
          countries: [
            {
              name: i18n('countries.uae'),
              code: 971,
            },
          ],
          code: 971,
        },
        {
          name: 'officialEmail',
          elementType: 'input',
          label: i18n('submit.field.label.officialEmail'),
          value: nocForm.officialEmail,
          onChange: (value: string) => onChange({ officialEmail: value }),
          validate: () =>
            startShowingErrors &&
            !isEmail(nocForm.officialEmail) &&
            i18n('validationMessage.email'),
        },
      ],
    },
    {
      name: '',
      fields: [
        {
          name: 'officialEmail',
          key: 'last-checkbox',
          elementType: 'checkbox',
          label: i18n('submit.field.label.acceptAll'),
          checked: nocForm.acceptAll,
          onChange: () => onChange({ acceptAll: !nocForm.acceptAll }),
          validate: () =>
            startShowingErrors &&
            !nocForm.acceptAll &&
            i18n('validationMessage.required'),
        },
      ],
    },
  ];
  return (
    <div className="noc-form">
      <h3 className="noc-form__heading">
        {i18n('heading.enterLeaseInformantion')}
      </h3>
      <FormTemplate
        formData={{}}
        i18n={i18n}
        id="noc-form"
        name="noc-form"
        inputGroups={inputGroups}
      />
      <div style={{ height: '40px' }} />
    </div>
  );
};
export default withTemplateHooks(NocForm);
