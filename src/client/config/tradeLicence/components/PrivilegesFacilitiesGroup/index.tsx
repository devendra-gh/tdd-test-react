import React, { useState, useEffect } from 'react';
import { IVariables } from '@tamm/app-composer';
import { PRIVILEGES_FACILITIES_FIELD } from 'client/config/utils/lookup';

import Grid from '@tamm/ui-lib-v2-grid';
import Select from '@tamm/ui-lib-v2-select';
import { CheckCircle1Filled, Delete2Filled } from '@tamm/ui-lib-v2-icon/Icons';
import Icon from '@tamm/ui-lib-v2-icon';

import './PrivilegesFacilitiesGroup.less';

const { Row, Col } = Grid;

/**
 * PrivilegesFacilitiesGroup component
 * @param {Object} props
 * @returns {JSX}
 */
function PrivilegesFacilitiesGroup(props: IVariables) {
  const [isLoading, setIsLoading] = useState(false);
  const [operations, setOperations] = useState([]);
  const [locationActivityItems, setLocationActivityItems] = useState<any[]>([]);

  const { i18n, locale, value } = props;

  useEffect(() => {
    const fetchData = async () => {
      setOperations([]);
      setIsLoading(true);

      const payload = await props.authorizedOperations(props.businessLocation);

      setOperations(payload);
      setIsLoading(false);
    };

    if (props.businessLocation) {
      fetchData();
    }
  }, [props.businessLocation]);

  useEffect(() => {
    const fetchData = async () => {
      setLocationActivityItems([]);

      const payload = await props.getLocationActivities(props.businessLocation);

      setLocationActivityItems(payload);
    };

    if (props.businessLocation) {
      fetchData();
    }
  }, [props.businessLocation, props.activities]);

  return (
    <div className="PrivilegesFacilitiesGroup">
      {isLoading && <div>Loading...</div>}
      <Row gutter={20} flex>
        {operations.map((item: IVariables, key: number) => (
          <Col key={String(key)} xs={12} md={3}>
            <div style={{ display: 'flex' }}>
              {item.Authorization === 'a' && (
                <Icon
                  source={CheckCircle1Filled}
                  className="PrivilegesFacilitiesGroup__icon-success"
                />
              )}
              {item.Authorization === 'l' && (
                <Icon
                  source={Delete2Filled}
                  className="PrivilegesFacilitiesGroup__icon-error"
                />
              )}
              {locale === 'en' ? item.Operations : item.OperationsAr}
            </div>
          </Col>
        ))}
      </Row>
      {props.businessLocation && (
        <div className="ui-lib-margin-t_lg">
          <Row flex>
            <Col xl={3} md={12} xs={12}>
              <Select
                i18n={i18n}
                showSearch
                placeholder={i18n('select')}
                items={locationActivityItems.map((item: IVariables) => ({
                  id: item.issuePlaceCode,
                  label: locale === 'en' ? item.nameEn : item.nameAr,
                }))}
                label={i18n(
                  `privilegesFacilities.${
                    PRIVILEGES_FACILITIES_FIELD[props.businessLocation]
                  }`,
                )}
                value={value}
                onChange={props.onChange}
              />
            </Col>
          </Row>
        </div>
      )}
    </div>
  );
}

PrivilegesFacilitiesGroup.propTypes = {};

export default PrivilegesFacilitiesGroup;
