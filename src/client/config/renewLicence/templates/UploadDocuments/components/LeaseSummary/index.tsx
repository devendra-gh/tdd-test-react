import React, { useEffect } from 'react';
import { withTemplateHooks, IVariables } from '@tamm/app-composer';
import Table from '@tamm/ui-lib-v2-table';

// this from component repalces noc document - that was initially preset along with the tawtheeq file upload
const LeaseSummary = (props: IVariables) => {
  const { i18n, locale, leaseInfo = null } = props;

  const initialformData = leaseInfo ? JSON.parse(leaseInfo) : null;

  const items: any[] = initialformData
    ? [
        {
          section: i18n('submit.field.label.city'),
          details: initialformData.tenantDetails.city[locale],
          id: '1',
        },
        {
          section: i18n('submit.field.label.island'),
          details: initialformData.isLand,
          id: '2',
        },
        {
          section: i18n('submit.field.label.secArea'),
          details: initialformData.secondaryArea,
          id: '3',
        },
        {
          section: i18n('submit.field.label.buildingOwnerName'),
          details: initialformData.plotOwnerName,
          id: '4',
        },
        {
          section: i18n('submit.field.label.unitNumber'),
          details:
            initialformData.propertyDetails.unitDetails.registrationNumber,
          id: '5',
        },
        {
          section: i18n('submit.field.label.specificLocation'),
          details: initialformData.specificLocation,
          id: '6',
        },
        {
          section: i18n('submit.field.label.tenantName'),
          details: initialformData.tenantDetails.name[locale],
          id: '7',
        },
        {
          section: i18n('submit.field.label.landLocation'),
          details: initialformData.landLocation,
          id: '8',
        },
        {
          section: i18n('submit.field.label.landArea'),
          details: initialformData.landArea,
          id: '9',
        },
        {
          section: i18n('submit.field.label.zone'),
          details: initialformData.propertyDetails.zone[locale],
          id: '10',
        },
        {
          section: i18n('submit.field.label.sector'),
          details: initialformData.propertyDetails.sector[locale],
          id: '11',
        },
      ]
    : [];

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <>
      {initialformData && (
        <>
          <Table
            i18n={i18n}
            columns={[
              {
                id: 'section',
                title: i18n('activityCode.title'),
              },
              {
                align: 'left',
                id: 'details',
                title: i18n('activity.title'),
              },
            ]}
            headerHidden={false}
            items={items}
            title={i18n('activity.activityCode.title')}
            size="small"
          />
          <div style={{ height: '40px' }} />
        </>
      )}
    </>
  );
};

export default withTemplateHooks(LeaseSummary);
