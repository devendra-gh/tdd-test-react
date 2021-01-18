import React from 'react';
import StepTracker from '@tamm/ui-lib-v2-step-tracker';
import RelevantEntity from '@tamm/ui-lib-v2-relevant-entity';
import RelatedJourneyCard from '@tamm/ui-lib-v2-related-journey-card';
import { IStep } from 'client/config/steps';
import './Sidebar.less';
import baseUrl from 'client/utils/baseUrl';
import { RELATED_JOURNEY_CARD } from '../../routes';

type I18n = (key: string) => string;

interface ISidebar {
  i18n: I18n;
  currentStep: string;
  currentSubStep?: string;
  showTracker?: boolean;
  stepsStatus: Record<string, string>;
  steps: IStep[];
  showRelatedJourneyCard?: boolean;
  showSteps?: boolean;
}

function createSteps(
  steps: IStep[],
  i18n: I18n,
  stepsStatus: Record<string, string>,
): object[] {
  return steps.map((step: IStep) => {
    const stepInfo: { label: string; substeps?: object; status?: string } = {
      label: i18n(step.name),
    };
    if (stepsStatus[step.name]) stepInfo.status = stepsStatus[step.name];
    if (step.subSteps)
      stepInfo.substeps = step.subSteps.map((subStep: string) => {
        const subStepInfo: { label: string; status?: string } = {
          label: i18n(subStep),
        };
        if (stepsStatus[`${step.name}.${subStep}`])
          subStepInfo.status = stepsStatus[`${step.name}.${subStep}`];
        return subStepInfo;
      });

    return stepInfo;
  });
}

function Sidebar(props: ISidebar) {
  const {
    i18n,
    steps,
    stepsStatus,
    currentStep,
    currentSubStep,
    showRelatedJourneyCard,
    // showSteps,
  } = props;
  const currentStepIndex: number = steps.findIndex(
    el => el.name === currentStep,
  );
  let currentSubStepIndex: number = -1;
  if (
    currentSubStep &&
    steps[currentStepIndex] &&
    steps[currentStepIndex].subSteps
  ) {
    // @ts-ignore
    currentSubStepIndex = steps[currentStepIndex].subSteps.indexOf(
      currentSubStep,
    );
  }
  const stepsList = createSteps(steps, i18n, stepsStatus);

  return (
    <div className="sidebar">
      <h6
        style={{
          fontSize: '20px',
          fontWeight: 'normal',
          marginBottom: '5px',
          color: '#161038',
        }}
      >
        {i18n('aspectOfLife')}
      </h6>
      <h4 style={{ marginBottom: '6rem', fontSize: '24px', color: '#161038' }}>
        {i18n('manage_business')}
      </h4>
      {stepsList.length > 0 ? (
        <>
          <StepTracker
            currentStepIndex={currentStepIndex}
            currentSubStepIndex={currentSubStepIndex}
            expandedStepIndexes={[currentStepIndex]}
            i18n={i18n}
            steps={stepsList}
            title={i18n('sidebar.steps')}
          />
          <div style={{ height: 60 }} className="hidden-md" />
        </>
      ) : null}
      <RelevantEntity
        address={i18n('departmentOfEconomicDevelopment.address')}
        email="info@adeconomy.ae"
        i18n={i18n}
        logo={`${baseUrl}/images/DED-logo.png`}
        officeHours={i18n('departmentOfEconomicDevelopment.workingTime')}
        phones={['+971 2 815 8888']}
        subTitle={i18n('departmentOfEconomicDevelopment')}
        title={i18n('relevant_entity')}
        verticalLogo={false}
        website="https://added.gov.ae"
      />
      <div style={{ height: 60 }} className="hidden-md" />
      {showRelatedJourneyCard ? (
        <RelatedJourneyCard
          aspectOfLifeType="business-management"
          icon={undefined}
          onClick={() => {
            window.location.href = `${window.location.origin}${RELATED_JOURNEY_CARD}`;
          }}
          description={i18n('relatedJourneyDescription')}
          label={i18n('relatedJourneyLabel')}
          title={i18n('relatedJourneyTitle')}
        />
      ) : null}
    </div>
  );
}

export default Sidebar;
