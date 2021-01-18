import React from 'react';
import { IVariables } from '@tamm/app-composer';
import Table from '@tamm/ui-lib-v2-table';
import RadioGroup from '@tamm/ui-lib-v2-radio-group';
import { noRefCheck } from 'client/config/BusinessLicenseProcedure/utils';

function ActivityTable(props: IVariables) {
  const { i18n, formSelectActivity, locale } = props;
  const { activities, activity, showTable } = formSelectActivity;

  const onChange = (type: string, value: string) =>
    props.onChange(type, value, props);

  const getRadio = (activityCode: string) => {
    const businessActivity =
      activities &&
      activities.find((x: IVariables) => x.activityCode === activityCode);
    return (
      businessActivity && (
        <RadioGroup.Radio
          checked={businessActivity.activityCode === activity}
          onChange={() => onChange('activity', businessActivity.activityCode)}
          label={
            locale === 'en'
              ? businessActivity.activity
              : businessActivity.activityAr
          }
        />
      )
    );
  };

  return (
    <>
      {showTable && (
        <div className="table-container">
          <Table
            i18n={i18n}
            columns={[
              {
                id: 'checkbox',
                title: i18n('table.header.activityName'),
                render: (a: IVariables, activityCode: string, c: IVariables) =>
                  getRadio(activityCode),
              },
              {
                align: 'end',
                id: 'no',
                title: i18n('table.header.activityNumber'),
              },
            ]}
            items={
              activities &&
              activities.map((businessActivity: IVariables) => ({
                id: businessActivity.activityCode,
                no: businessActivity.activityCode,
              }))
            }
            onClick={noRefCheck}
            size="default"
            title={i18n('table.header.listOfActivities')}
          />
        </div>
      )}
    </>
  );
}

export default ActivityTable;
