/* eslint-disable react/no-danger */
import React from 'react';
import Button from '@tamm/ui-lib-v2-button';
import Container from 'client/containers';
import { withTemplateHooks, IVariables } from '@tamm/app-composer';
import routePropTypes from '@tamm/app-composer/client/propTypes/route';
import Sidebar from 'client/templates/Sidebar';
import MoaPartner from 'client/config/components/MoaPartner';
import AlertNotification from '@tamm/ui-lib-v2-alert';

import './Moa.less';

/**
 * Home template
 * @param       {Object} props
 * @returns     {JSX}
 */
function Moa(props: IVariables) {
  const { i18n, currentSubStep } = props;
  return (
    <>
      <Container
        locale={props.locale}
        sidebar={
          props.currentStep ? (
            <Sidebar
              currentStep={props.currentStep}
              currentSubStep={props.currentSubStep}
              i18n={props.i18n}
              steps={props.steps}
              stepsStatus={props.stepsStatus}
            />
          ) : (
            false
          )
        }
      >
        <div className="Moa">
          <div className="Moa__generate">
            {props.title && <h5>{i18n(props.title)}</h5>}
            {props.subTitle && (
              <div className="Moa__generate-subTitle">
                {i18n(props.subTitle)}
              </div>
            )}
            {currentSubStep !== 'moa_generate' && (
              <Button
                aria-label="button-primary"
                icon={null}
                size="medium"
                type="button"
                uiType="secondary"
                name="generateMoa"
                onClick={() => props.showMoa(props)}
                label={i18n('view_moa')}
              />
            )}
          </div>
        </div>

        {currentSubStep === 'moa_generate' && (
          <>
            <div>
              {props.moa.moaHTML && (
                <div>
                  <div className="Moa__pdf">
                    <div
                      className="moaServerHtml"
                      dangerouslySetInnerHTML={{
                        __html: props.moa.moaHTML,
                      }}
                    />
                  </div>
                  <div className="Moa_notice">
                    <div style={{ height: 20 }} />
                    <div>
                      <AlertNotification
                        message={i18n('moa_notice')}
                        status="warning"
                      />
                    </div>
                  </div>
                  <div className="Moa__agree-buttons">
                    <div />
                    <Button
                      aria-label="button-primary"
                      disabled={false}
                      icon={null}
                      size="medium"
                      type="button"
                      uiType="primary"
                      name="ownerMoaAgree"
                      onClick={() => props.ownerMoaAgree(props)}
                      label={i18n('approve')}
                    />
                    <Button
                      aria-label="button-primary"
                      disabled={false}
                      icon={null}
                      size="medium"
                      type="button"
                      uiType="primary"
                      name="ownerMoaDisAgree"
                      onClick={() => props.ownerMoaDisAgree(props)}
                      label={i18n('reject')}
                    />
                    <div />
                  </div>
                </div>
              )}
            </div>
          </>
        )}

        {currentSubStep === 'moa_approval' && (
          <div>
            <MoaPartner allProps={props} />
          </div>
        )}
        <div style={{ height: 100 }} />
      </Container>
    </>
  );
}

Moa.propTypes = {
  ...routePropTypes,
};

export default withTemplateHooks(Moa);
