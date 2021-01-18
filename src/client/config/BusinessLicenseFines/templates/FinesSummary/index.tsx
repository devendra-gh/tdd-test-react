import React from 'react';
import PropTypes from 'prop-types';
import {
  withTemplateHooks,
  IVariables,
  IRouteVariables,
} from '@tamm/app-composer';
import routePropTypes from '@tamm/app-composer/client/propTypes/route';
import Table from '@tamm/ui-lib-v2-table';
import Container from 'client/containers';
import Sidebar from 'client/templates/Sidebar';
import Total from '@tamm/ui-lib-v2-total';
import Button from '@tamm/ui-lib-v2-button';
import './Summary.less';
import { IStep } from 'client/config/steps';
import { IFeeItem } from 'client/config/BusinessLicenseFines/types';
import Loading from 'client/templates/Loading';

interface ISumamry extends IRouteVariables {
  [name: string]: any;
  i18n: (key: string, config?: IVariables) => string;
  title: string;
  subTitle: string;
  description: string;
  locale: string;
  currentStep: string;
  currentSubStep: string;
  steps: IStep[];
  isFineSummary: boolean;
  feeItemsTab: any;

  stepsStatus: Record<string, string>;
  buttons: {
    onClick: (props: IVariables) => void;
    label: string;
    uiType: 'primary' | 'secondary' | 'tertiary' | 'ghost' | undefined;
    alignIcon: 'end' | 'start' | undefined;
    withArrow: boolean;
  }[];
  columns: any;
  totalSection: number;
}

/**
 * Summary template
 * @param {Object} props
 * @returns {JSX}
 */
const SummaryTemplate = (props: ISumamry) => {
  const { totalFee, i18n, locale, feeData } = props;
  if (props.formBusinessLicenceFine.isLoading) {
    return <Loading />;
  }
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
        <div className="">
          {props.subTitle && (
            <h3 className="syb-title" style={{ marginBottom: '2rem' }}>
              {props.i18n(props.subTitle)}
            </h3>
          )}
          {props.description && (
            <p style={{ color: '#000' }}>{props.i18n(props.description)}</p>
          )}
        </div>
        <div className="summary">
          <Table
            i18n={i18n}
            columns={[
              {
                id: 'des',
                title: i18n('payfines.label.description'),
              },
              {
                id: 'fee',
                title: i18n('payfines.label.fee'),
                align: 'end',
              },
            ]}
            disabledSelectionVisible
            headerHidden={false}
            items={
              feeData &&
              feeData.constructor === Array &&
              feeData.map((i: IFeeItem) => ({
                des: locale === 'en' ? i.FINE_DESC_EN : i.FINE_DESC_AR,
                fee: i18n('payfines.value.aed', { amount: i.FINE_AMT }),
              }))
            }
            size="default"
            title={i18n(props.title)}
          />
          <div className="summary__group">
            <Total
              i18n={props.i18n}
              isValueFirst={false}
              unit={props.i18n('payfines.label.aed')}
              value={Number(totalFee)}
            />
          </div>
          <div className="summary__group btn-group">
            {props.buttons &&
              props.buttons.constructor === Array &&
              props.buttons.map(btn => (
                <div
                  key={`key-${btn.label}`}
                  className={`button-group ${locale}`}
                >
                  <Button
                    aria-label={btn.label}
                    label={props.i18n(btn.label)}
                    onClick={() => btn.onClick(props)}
                    uiType={btn.uiType}
                    alignIcon={btn.alignIcon}
                    withArrow={btn.withArrow}
                  />
                </div>
              ))}
          </div>
        </div>
      </Container>
    </>
  );
};

SummaryTemplate.prototypes = {
  ...routePropTypes,
  title: PropTypes.string.isRequired,
  subTitle: PropTypes.string,
  description: PropTypes.string,
  button: PropTypes.instanceOf(Object).isRequired,
};

export default withTemplateHooks(SummaryTemplate);
