import React from 'react';
import { IVariables } from '@tamm/app-composer';
import Table from '@tamm/ui-lib-v2-table';
import Form from '@tamm/ui-lib-v2-form';
import '../../PermitForm.less';
import Total from '@tamm/ui-lib-v2-total';
import { calculateSum } from 'client/config/permits/utils/common';
import ServiceTemplate from '@tamm/ui-lib-v2-service-template';

const EstimatedFees = (props: IVariables) => {
  const { inputGroups, i18n } = props;
  const inputGroup = inputGroups[0];
  let items = inputGroup.calculateBaseEstimatedPrice(inputGroup.values);
  if (inputGroup.values.perUnitFees !== undefined) {
    const variableItems: [] = inputGroup.calculateEstimatedFees(
      inputGroup.values,
    );
    if (
      variableItems !== undefined &&
      variableItems !== null &&
      variableItems.length !== 0
    )
      items = items.concat(variableItems);
  }

  if (items === undefined || items === null || items.length === 0) {
    items = [{ id: '0', title: 'global.permitFees', amount: 0 }];
  }
  const getFeesLabels = (feesDetails: IVariables) => {
    const { suffix, title, prefix } = feesDetails;
    if (suffix !== null && suffix !== undefined) {
      return `${i18n(title)} ${i18n(suffix)}`;
    }
    if (prefix !== null && prefix !== undefined) {
      return `${i18n(`global.${prefix.toLowerCase()}`)} ${i18n(title)}`;
    }
    return i18n(title);
  };
  return (
    <div className="marginT40">
      <Form.Fieldset
        className="marginB0"
        title={inputGroup.name}
        key={`${inputGroup.groupKey}.${inputGroup.stateKey}`}
      >
        <ServiceTemplate description={i18n('estimatedFees.description')} />
        <Table
          i18n={i18n}
          columns={inputGroup.columns.map((column: IVariables) => ({
            ...column,
            title: i18n(column.title),
          }))}
          headerHidden={false}
          items={items.map((item: IVariables) => ({
            ...item,
            title: getFeesLabels(item),
            amount: `${i18n('global.aed')} ${parseFloat(item.amount).toFixed(
              2,
            )}`,
          }))}
          selectable={false}
        />
        <div className="marginT20" />
        <div className="summary__group marginB0">
          <Total
            isValueFirst={false}
            unit={i18n('global.aed')}
            value={calculateSum(items, 'amount')}
          />
        </div>
      </Form.Fieldset>
    </div>
  );
};

export default EstimatedFees;
