import React, { useState } from 'react';
import Button from '@tamm/ui-lib-v2-button';
import Container from 'client/containers';
import {
  withTemplateHooks,
  IVariables,
  IRouteVariables,
} from '@tamm/app-composer';
import routePropTypes from '@tamm/app-composer/client/propTypes/route';
import Table from '@tamm/ui-lib-v2-table';
import './welcome.less';
import SearchInput from '@tamm/ui-lib-v2-search-input';
import Select from '@tamm/ui-lib-v2-select';

/* istanbul ignore file */

interface HomeInterface extends IRouteVariables {
  applications: IVariables[];
  i18n: (key: string) => string;
  title: string;
  buttons: {
    onClick: (props: IVariables) => void;
    label: string;
    uiType: '"primary" | "secondary" | "tertiary" | "ghost" | undefined';
    withArrow: boolean;
  }[];
}

/**
 * Home template
 * @param       {Object} props
 * @returns     {JSX}
 */
const Home = (props: HomeInterface) => {
  const { i18n } = props;
  let { applications } = props;
  const [selectedFilter, setSelectedFilter] = useState('all');
  const [search, setSearch] = useState('');

  if (selectedFilter === 'issued') {
    applications = applications.filter(
      i => i.commercialLicenseStatus === 'Issued',
    );
  }

  if (selectedFilter === 'inProgress') {
    applications = applications.filter(
      i => i.commercialLicenseStatus !== 'Issued',
    );
  }

  if (search) {
    applications = applications.filter(
      i =>
        i.tradeNameEn &&
        i.tradeNameAr &&
        (i.tradeNameEn.indexOf(search) !== -1 ||
          i.tradeNameAr.indexOf(search) !== -1),
    );
  }

  const renderApplications = (apps: IVariables, data: IVariables) => {
    return (
      apps &&
      apps.map((application: any) => {
        const {
          tradeNameEn,
          tradeNameAr,
          extraInfo,
          commercialLicenseStatus,
        } = application;
        const link = `/trade-name-reservation/continue-process?instanceId=${extraInfo.processInstanceId}&businessKey=${extraInfo.businessKey}`;
        return {
          tradeName: (
            <div className="tradenameDisableClass">
              {tradeNameEn} / {tradeNameAr}
            </div>
          ),
          action: (
            <div className="action-buttons">
              <Button
                aria-label="action-button"
                label={
                  commercialLicenseStatus === 'Issued'
                    ? data.i18n('button.licence')
                    : data.i18n('continue')
                }
                onClick={() => data.history.push(link)}
                size="medium"
                uiType="ghost"
                withArrow
              />
            </div>
          ),
        };
      })
    );
  };

  const applicationsRows = renderApplications(applications, props);

  return (
    <Container>
      <div style={{ marginBottom: '4rem' }}>
        {props.buttons.map(btn => (
          <Button
            aria-label={btn.label}
            label={props.i18n(btn.label)}
            onClick={() => btn.onClick(props)}
            // uiType={btn.uiType}
            withArrow={btn.withArrow}
          />
        ))}
      </div>
      {props.applications.length ? (
        <div className="applications-list">
          <div>
            <h3 className="applications-list__title">
              {i18n('list_on_going_apps')}
            </h3>
          </div>
          <div className="applications-list__search">
            <SearchInput
              aria-label="search_input"
              label={i18n('activities.searchLabel')}
              onChange={e => setSearch(e)}
              size="default"
              value={search}
            />
            <Select
              items={[
                {
                  id: 'all',
                  label: i18n('all'),
                },
                {
                  id: 'inProgress',
                  label: i18n('in_progress'),
                },
                {
                  id: 'issued',
                  label: i18n('issued'),
                },
              ]}
              isStatic
              label={i18n('status')}
              multi={false}
              onChange={e => setSelectedFilter(e)}
              size="default"
              value={selectedFilter}
              aria-label="select_dropdown"
            />
          </div>
          <div className="applications-list__table">
            <Table
              i18n={i18n}
              size="default"
              title=""
              columns={[
                {
                  id: 'tradeName',
                  title: i18n('both_economicname'),
                },
                {
                  hideFor: ['sm'],
                  id: 'action',
                  title: i18n('action'),
                },
              ]}
              items={applicationsRows}
            />
          </div>
        </div>
      ) : (
        <div />
      )}
    </Container>
  );
};

Home.propTypes = {
  ...routePropTypes,
};

export default withTemplateHooks(Home);
