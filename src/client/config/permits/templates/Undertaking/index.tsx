import React from 'react';
import Button from '@tamm/ui-lib-v2-button';
import Container from 'client/containers';
import { withTemplateHooks, IVariables } from '@tamm/app-composer';
import routePropTypes from '@tamm/app-composer/client/propTypes/route';
import ServiceTemplate from '@tamm/ui-lib-v2-service-template';
import Form from '@tamm/ui-lib-v2-form';
import Checkbox from '@tamm/ui-lib-v2-checkbox';
import permitConfigs from 'client/config/permits/permitConfigs';
import Link from '@tamm/ui-lib-v2-link';
import { PATH_LANDING } from '../../utils/constants/pageRoutes';
import './Undertaking.less';

/**
 * Undertaking template
 * @param       {Object} props
 * @returns     {JSX}
 */
const Undertaking = (props: IVariables) => {
  const PermitConfigs: { [key: string]: any } = permitConfigs;
  const {
    i18n,
    serviceType,
    onSubmit,
    handleToggleCheckbox,
    permitInfo,
    onCancelClick,
  } = props;
  const serviceConfig = PermitConfigs[serviceType];
  const { title, subTitle, conditions } = serviceConfig.undertakings;
  const { isApproved, showError } = permitInfo[serviceType].undertaking;
  const name = 'isApproved';
  return (
    <Container>
      <Form name={props.name} id={props.name}>
        <Form.Fieldset>
          <ServiceTemplate title={i18n(title)} description={i18n(subTitle)} />
          <div>
            {conditions && conditions.length > 0 && (
              <ul className="PermitForm__form-tac-ui">
                {conditions.map((condition: string, key: number) => (
                  <li key={String(key)}>{i18n(condition)}</li>
                ))}
              </ul>
            )}
          </div>
          <Checkbox
            checked={isApproved}
            label={i18n('undertaking.agree')}
            onChange={e => {
              handleToggleCheckbox(props);
            }}
            name={name}
            validateStatus={showError && !isApproved ? 'error' : ''}
          />
          <div>
            <Button
              aria-label={i18n('continue')}
              label={i18n('continue')}
              onClick={e => {
                onSubmit(e, props);
              }}
            />
            <Link
              aria-label={i18n('cancel')}
              className="PermitForm__button-cancel"
              disabled={false}
              href={`/${serviceType}${PATH_LANDING}`}
              label={i18n('cancel')}
              tammHref="/"
              onClick={e => {
                onCancelClick(e, props);
              }}
              type={undefined}
            />
          </div>
        </Form.Fieldset>
      </Form>
    </Container>
  );
};

Undertaking.propTypes = {
  ...routePropTypes,
};

export default withTemplateHooks(Undertaking);
