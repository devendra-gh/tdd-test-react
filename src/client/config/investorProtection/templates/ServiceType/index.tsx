import React from 'react';
import { withTemplateHooks, IVariables } from '@tamm/app-composer';
import routePropTypes from '@tamm/app-composer/client/propTypes/route';
import FormTemplate from '@tamm/ui-lib-v2-form-template';
import Sidebar from 'client/templates/Sidebar';
import Container from 'client/containers';

function ServiceType(props: IVariables) {
  const { i18n } = props;

  return (
    <>
      <Container
        locale={props.locale}
        sidebar={
          <Sidebar
            currentStep={props.currentStep}
            i18n={i18n}
            steps={props.steps}
            stepsStatus={props.stepsStatus}
          />
        }
      >
        <div className="">
          <h3
            className="syb-title"
            style={{ marginBottom: '2rem', color: '#161038' }}
          >
            {i18n(props.subTitle)}
          </h3>

          <p style={{ color: '#3f3e45' }}>{i18n(props.description)}</p>
        </div>
        <div style={{ height: '20px' }} />
        <div className="service-type-radio-group">
          <FormTemplate
            formData={{}}
            i18n={i18n}
            inputGroups={props.getFormGroups(props)}
            submitButton={{
              label: i18n('button.proceed'),
              onClick: () => {
                props.onSubmit(props);
              },
              withArrow: true,
            }}
            cancelLink={{
              href: props.cancelLink,
            }}
          />
        </div>
        <div style={{ margin: '60px' }} />
      </Container>
    </>
  );
}

ServiceType.propTypes = {
  ...routePropTypes,
};

export default withTemplateHooks(ServiceType);
