import React, { useState, useEffect } from 'react';
import { includes } from 'lodash';
import { IVariables } from '@tamm/app-composer';

/**
 * TermsConditionsGroup component
 * @param {Object} props
 * @returns {JSX}
 */
function TermsConditionsGroup(props: IVariables) {
  const [conditions, setConditions] = useState([]);

  const { licenceType, locale } = props;

  const activities = props.activities
    .map((i: IVariables) => i.activityCode)
    .join(',');

  useEffect(() => {
    const fetchData = async () => {
      const items = await props.fetchAttachments(
        activities,
        props.legalType,
        'Condition',
      );
      setConditions(items);
    };

    if (includes(['tajer', 'allInOne'], licenceType) && activities) {
      fetchData();
    }
  }, [licenceType, props.activities]);

  return (
    <p>
      {includes(['tajer', 'allInOne'], licenceType) &&
        activities &&
        conditions.length > 0 && (
          <ul style={{ padding: 0, marginBottom: '3rem' }}>
            {conditions.map((item: IVariables, key: number) => (
              <li key={String(key)}>
                {locale === 'en'
                  ? `${item.RequirementDescEn} ${item.AuthorityEn}`
                  : `${item.RequirementDescAr} ${item.AuthorityAr}`}
              </li>
            ))}
          </ul>
        )}
    </p>
  );
}

TermsConditionsGroup.defaultProps = {
  activities: [],
};

export default TermsConditionsGroup;
