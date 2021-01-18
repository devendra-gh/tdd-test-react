import React from 'react';
import { IVariables } from '@tamm/app-composer';
import Alert from '@tamm/ui-lib-v2-alert';
import Table from '@tamm/ui-lib-v2-table';

import { includes, capitalize } from 'lodash';
import { isGCC } from 'client/config/utils/gcc';
import {
  partnersValidation,
  getCountry,
  getLicenseType,
} from 'client/config/utils/lookup';
import { ownerValidation } from 'client/config/pages/EconomicLicence/functions/getRepresentatives';

import './Table.less';

function OwnershipTable(props: IVariables) {
  const {
    i18n,
    ownership,
    items,
    type,
    optional,
    locale,
    onDelete,
    onEdit,
    legalForm,
    licenceType,
    validate,
    disableActions,
  } = props;

  const getColumns = () => {
    return [
      {
        id: locale === 'en' ? 'nameEn' : 'nameAr',
        title: i18n(type === 'owner' ? 'global.businessName' : 'global.name'),
      },
      {
        id: 'type',
        title: i18n('global.type'),
      },
      {
        id: 'idNumber',
        title: i18n('global.idNumber'),
        horizontal: ['sm', 'md'],
      },
      {
        id: 'phoneNumber',
        title: i18n('global.phoneNumber'),
        horizontal: ['sm', 'md'],
      },
      {
        id: 'nationality',
        title: i18n('input.nationality.label'),
        horizontal: ['sm', 'md'],
      },
      {
        id: 'sharePercentage',
        title: i18n('global.share'),
        horizontal: ['sm', 'md', 'lg'],
      },
      {
        id: 'actions',
        title: i18n('global.actions'),
        horizontal: ['sm', 'md', 'lg'],
      },
    ];
  };

  const columns = getColumns();

  if (!items || !type) return null;

  const minPartners = legalForm === 'PJSCPublic' ? 5 : 2;

  const ownerValid: IVariables =
    type === 'owner' ? ownerValidation(items, legalForm, licenceType) : {};

  const ownerVisible = () => {
    if (
      props.licenceType === 'branch' &&
      props.branchDetails.branch === 'branchUAE'
    ) {
      return includes(
        ['1', '34', '20'],
        props.branchDetails.parentCompanyLegalForm,
      );
    }

    return (
      props.licenceType === 'branch' ||
      includes(
        ['establishment', 'soleProprietorshipLLC', 'PJSCSoleProp'],
        legalForm,
      )
    );
  };

  const partnersVisible = () => {
    if (
      props.licenceType === 'branch' &&
      props.branchDetails.branch === 'branchUAE'
    ) {
      return !includes(
        ['1', '34', '20'],
        props.branchDetails.parentCompanyLegalForm,
      );
    }

    if (props.licenceType === 'branch') {
      return false;
    }

    return !includes(
      ['establishment', 'soleProprietorshipLLC', 'PJSCSoleProp'],
      legalForm,
    );
  };

  const partnersValid: IVariables =
    type === 'partner'
      ? partnersValidation(
          items,
          minPartners,
          props.legalForm,
          props.licenceType,
        )
      : {};

  const localAgentValid = () => {
    const licenceTypeLocal = getLicenseType(
      props.licenceType,
      props.branchDetails.branch,
    );

    if (includes(['branchGCC'], licenceTypeLocal)) {
      return !props.branchDetails.isGCC;
    }
    if (includes(['branchForeign'], licenceTypeLocal)) {
      return true;
    }

    return (
      legalForm === 'establishment' &&
      ownership.owner &&
      ownership.owner.length > 0 &&
      ownership.owner[0].nationality &&
      !isGCC(ownership.owner[0].nationality)
    );
  };

  const localeCapitalized =
    locale && `${locale.substr(0, 1).toUpperCase()}${locale.substr(1, 1)}`;

  const getNameRenderedItems = (item: IVariables) => {
    return item.contactType !== 'company'
      ? `${item.firstNameEn} ${item.middleNameEn || ''} ${item.lastNameEn}`
      : `${item[`businessName${localeCapitalized}`] || ''}`;
  };

  const getContactTypeRenderedItems = (item: IVariables) => {
    let status = item.emiratesId;

    if (item.contactType === 'company') {
      status = item.licenseNumber;
    } else if (item.type === 'visitor') {
      status = item.uid;
    }

    return status;

    // return item.contactType === 'company'
    //   ? item.licenseNumber
    //   : item.type === 'visitor'
    //   ? item.uid
    //   : item.emiratesId;
  };

  const renderOwnershipTableLink = (item: IVariables, index: number) => {
    return (
      <>
        {!disableActions && (
          <>
            <button
              type="button"
              className="OwnershipTable__link"
              onClick={() => {
                onEdit(type, { ...item, index });
              }}
            >
              {i18n('global.edit')}
            </button>
            &nbsp;
            <button
              type="button"
              className="OwnershipTable__link"
              onClick={() => {
                onDelete(type, index);
              }}
            >
              {i18n('global.delete')}
            </button>
          </>
        )}
      </>
    );
  };

  const renderedItems = items.map((item: IVariables, index: number) => {
    const row: IVariables = {};
    columns.forEach((column: IVariables) => {
      let content: any = '';

      if (column.id.indexOf('name') === 0) {
        content = getNameRenderedItems(item);
      } else if (column.id === 'type') {
        content = capitalize(
          item.contactType !== 'company' ? item.type : item.contactType,
        );
      } else if (column.id === 'idNumber') {
        content = getContactTypeRenderedItems(item);
      } else if (column.id === 'sharePercentage') {
        content = `${item[column.id]}%`;
      } else if (column.id === 'nationality') {
        content = getCountry(item[column.id], props.countries);
      } else if (column.id === 'actions') {
        content = renderOwnershipTableLink(item, index);
      } else {
        content = item[column.id];
      }

      row[column.id] = content;
      row.id = row.idNumber || '';
    });
    return row;
  });

  const renderOwnerVisibleAlert = () => {
    return (
      validate &&
      type === 'owner' &&
      ownerVisible() &&
      !ownerValid.isValid && (
        <div className="ui-lib-margin-t_md ui-lib-margin-b_xl">
          {!ownerValid.requiredPass && (
            <div className="ui-lib-margin-b_xs">
              <Alert message={i18n('owner_required')} status="error" />
            </div>
          )}
          {!ownerValid.fieldsPass && (
            <div className="ui-lib-margin-b_xs">
              <Alert message={i18n('owner_missing_fields')} status="error" />
            </div>
          )}
          {!ownerValid.moaPass && (
            <div className="ui-lib-margin-b_xs">
              <Alert message={i18n('only_owner_can_create')} status="error" />
            </div>
          )}
        </div>
      )
    );
  };

  const renderEstablishmentAlert = () => {
    return (
      validate &&
      type === 'manager' &&
      !includes(['establishment'], legalForm) &&
      items.length === 0 && (
        <div className="ui-lib-margin-t_md ui-lib-margin-b_xl">
          <Alert message={i18n('manager_required')} status="error" />
        </div>
      )
    );
  };

  const renderLocalAgentAlert = () => {
    return (
      validate &&
      type === 'localAgent' &&
      localAgentValid() &&
      items.length === 0 && (
        <div className="ui-lib-margin-t_md ui-lib-margin-b_xl">
          <Alert message={i18n('localAgent_required')} status="error" />
        </div>
      )
    );
  };

  const renderPartnersVisibleAlert = () => {
    return (
      validate &&
      type === 'partner' &&
      partnersVisible() &&
      !partnersValid.isValid && (
        <div className="ui-lib-margin-t_md ui-lib-margin-b_xl">
          {!partnersValid.requiredPass && (
            <div className="ui-lib-margin-b_xs">
              <Alert message={i18n('partner_required')} status="error" />
            </div>
          )}
          {!partnersValid.totalSharePass && (
            <div className="ui-lib-margin-b_xs">
              <Alert message={i18n('partner_totalShare')} status="error" />
            </div>
          )}
          {!partnersValid.localSharePass && (
            <div className="ui-lib-margin-b_xs">
              <Alert message={i18n('partner_localeShare')} status="error" />
            </div>
          )}
          {!partnersValid.minPartnersPass && (
            <div className="ui-lib-margin-b_xs">
              <Alert
                message={i18n(`partner_minPartners_${minPartners}`)}
                status="error"
              />
            </div>
          )}
          {!partnersValid.moaPass && (
            <div className="ui-lib-margin-b_xs">
              <Alert
                message={i18n(`you_should_added_partner`)}
                status="error"
              />
            </div>
          )}
        </div>
      )
    );
  };

  return (
    <div className="OwnershipTable">
      <Table
        i18n={i18n}
        columns={columns}
        items={renderedItems}
        title={`${i18n(`global.${type}`)} ${
          optional ? `(${i18n('optional')})` : ''
        }`}
        size="default"
      />

      {renderedItems.length === 0 && (
        <p style={{ paddingTop: 10, textAlign: 'center' }}>
          {i18n(`ownership.table.${type}`)}{' '}
          <span
            className="createButton"
            role="button"
            tabIndex={-1}
            onClick={() => {
              props.onToggleModal(type);
            }}
            onKeyPress={() => {}}
          >
            {i18n('ownership.table.clickHere')}
          </span>
          .
        </p>
      )}

      <div>
        {renderOwnerVisibleAlert()}

        {renderEstablishmentAlert()}

        {renderLocalAgentAlert()}

        {renderPartnersVisibleAlert()}
      </div>
    </div>
  );
}

export default OwnershipTable;
