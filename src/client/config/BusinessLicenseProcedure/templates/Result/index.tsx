import React, { useEffect } from 'react';
import { withTemplateHooks, IVariables } from '@tamm/app-composer';
import Container from 'client/containers';
import Sidebar from 'client/templates/Sidebar';
import Table from '@tamm/ui-lib-v2-table';
import Form from '@tamm/ui-lib-v2-form';
import Button from '@tamm/ui-lib-v2-button';
import Loading from '../../components/Loading';
import { noRefCheck } from '../../utils';

function Result(props: IVariables) {
  const {
    i18n,
    subTitle,
    description,
    locale,
    resultState,
    getDownloadLicenseProcedureDoc,
  } = props;

  const { requirements, fees, loading, selectedActivity } = resultState;

  useEffect(() => {
    props.getInitialState(props);
  }, []);

  return (
    <Container
      locale={props.locale}
      sidebar={
        <Sidebar
          currentStep={props.currentStep}
          currentSubStep={props.currentSubStep}
          i18n={i18n}
          stepsStatus={props.stepsStatus}
          steps={props.steps}
        />
      }
    >
      <div className="">
        <h3
          className="syb-title"
          style={{ marginBottom: '2rem', color: '#161038' }}
        >
          {i18n(subTitle)}
        </h3>
        <p style={{ color: '#3f3e45' }}>{i18n(description)}</p>
      </div>
      <div style={{ height: '40px' }} />
      {loading && <Loading />}
      {!loading && selectedActivity && (
        <>
          <Table
            i18n={i18n}
            columns={[
              {
                id: 'name',
                title: i18n('table.header.activityName'),
                render: () =>
                  locale === 'en'
                    ? selectedActivity.activity
                    : selectedActivity.activityAr || '',
              },
              {
                id: 'total',
                title: i18n('table.header.totalFees'),
                align: 'end',
                render: () =>
                  i18n('global.aed', {
                    amount:
                      fees && fees.length
                        ? fees.reduce(
                            (accumulator: number, currentValue: IVariables) =>
                              accumulator + currentValue.feeAmount,
                            0,
                          )
                        : '',
                  }),
              },
            ]}
            items={[
              {
                id: '1',
                label: '',
              },
            ]}
            onClick={noRefCheck}
            onSelectionChange={noRefCheck}
            size="default"
            title={i18n('table.heading.licenceSummary')}
          />
          <div style={{ height: '40px' }} />
          {fees && !!fees.length && (
            <Table
              i18n={i18n}
              columns={[
                {
                  id: 'description',
                  title: i18n('table.header.feeDescription'),
                },
                {
                  id: 'fee',
                  title: i18n('table.header.estimatedFee'),
                  align: 'end',
                },
              ]}
              items={
                fees &&
                fees.map((fee: IVariables) => ({
                  description: locale === 'en' ? fee.feeDescEn : fee.feeDescAr,
                  id: locale === 'en' ? fee.feeDescEn : fee.feeDescAr,
                  fee: i18n('global.aed', { amount: fee.feeAmount }),
                  selected: false,
                }))
              }
              onClick={noRefCheck}
              size="default"
              title={i18n('table.heading.feeSummary')}
            />
          )}
          <div style={{ height: '40px' }} />
          {requirements && !!requirements.length && (
            <Table
              i18n={i18n}
              columns={[
                {
                  id: 'description',
                  title: i18n('table.header.requirement'),
                },
                {
                  id: 'type',
                  title: i18n('table.header.requirementType'),
                },
                {
                  id: 'authority',
                  title: i18n('table.header.authority'),
                },
              ]}
              items={
                requirements &&
                requirements.map((requirement: IVariables) => ({
                  description:
                    locale === 'en'
                      ? requirement.requirementDescEn
                      : requirement.requirementDescAr,
                  id: requirement.requirementId,
                  type:
                    locale === 'en'
                      ? requirement.requirementTypeEn
                      : requirement.requirementTypeAr,
                  authority:
                    locale === 'en'
                      ? requirement.authorityEn
                      : requirement.authorityAr,
                  selected: false,
                }))
              }
              onClick={noRefCheck}
              size="default"
              title={i18n('table.heading.requirements')}
            />
          )}
          <div
            style={{
              display: 'flex',
              width: '120px',
              justifyContent: 'space-between',
              marginTop: '40px',
              marginBottom: '40px',
            }}
          >
            <Button
              aria-label="print"
              label={i18n('button.print')}
              onClick={() => window.print()}
              uiType="secondary"
            />
            <span style={{ marginRight: '1rem', marginLeft: '1rem' }} />
            <Button
              aria-label="download"
              label={i18n('button.download')}
              onClick={() => getDownloadLicenseProcedureDoc(props)}
              uiType="secondary"
            />
          </div>
        </>
      )}
      <div style={{ height: '40px' }} />

      <Form
        backButton={{
          label: props.i18n('button.back'),
          withArrow: true,
          alignIcon: 'start',
          uiType: 'secondary',
          onClick: () =>
            props.history.push('/business-licence-procedure/search-activities'),
        }}
      />
      <div style={{ height: '40px' }} />
    </Container>
  );
}

export default withTemplateHooks(Result);
// export default Result;
