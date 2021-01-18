import React from 'react';
import { IVariables } from '@tamm/app-composer';
import Table from '@tamm/ui-lib-v2-table';
import permitConfigs from 'client/config/permits/permitConfigs';
import '../../PermitForm.less';

const Requirements = (props: IVariables) => {
  const { serviceType, i18n } = props;

  if (!serviceType) {
    return null;
  }

  const buildDetails = (details: any) => {
    if (Array.isArray(details)) {
      return details.map((detail: string, i: number) => {
        return (
          // eslint-disable-next-line react/no-array-index-key
          <React.Fragment key={i}>
            {i18n(detail)}
            <br />
          </React.Fragment>
        );
      });
    }
    return i18n(details);
  };

  const PermitConfigs: { [key: string]: any } = permitConfigs;
  const permitConfig = PermitConfigs[serviceType];
  return (
    <div className="marginT40">
      <Table
        i18n={i18n}
        columns={[
          { id: 'req', title: i18n('requirement.title') },
          { id: 'details', title: i18n('requirement.details') },
        ]}
        headerHidden={false}
        items={permitConfig.permitRequirements.map(
          (requirement: IVariables) => ({
            ...requirement,
            req: i18n(requirement.req),
            details: buildDetails(requirement.details),
          }),
        )}
        selectable={false}
        //uiType="compact"
      />
      <div className="marginT40" />
    </div>
  );
};

export default Requirements;
