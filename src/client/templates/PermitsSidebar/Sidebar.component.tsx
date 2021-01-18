import React from 'react';
import StepTracker from '@tamm/ui-lib-v2-step-tracker';
import RelevantEntity from '@tamm/ui-lib-v2-relevant-entity';
import RelatedJourneyCard from '@tamm/ui-lib-v2-related-journey-card';
import imagePath from 'client/utils/baseUrl';
import { IStep } from 'client/config/permits/steps';
import Icon from '@tamm/ui-lib-v2-icon';
import { BriefcaseOutline } from '@tamm/ui-lib-v2-icon/Icons';
import './Sidebar.less';

// import { steps, subSteps } from './steps';

type I18n = (key: string) => string;
const stepType: IStep[] = [];

interface ISidebar {
  i18n: I18n;
  currentStep: string;
  currentSubStep?: string;
  stepsStatus: Record<string, string>;
  steps: IStep[];
  hideSidebar?: boolean;
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
    hideSidebar,
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
      {hideSidebar ? (
        <>
          <h6
            style={{
              fontSize: '2rem',
              fontWeight: 'normal',
              marginBottom: '5px',
            }}
          >
            {i18n('aspectOfLife')}
          </h6>
          <h4>{i18n('manageYourBusiness')}</h4>
        </>
      ) : (
        <StepTracker
          currentStepIndex={currentStepIndex}
          currentSubStepIndex={currentSubStepIndex}
          expandedStepIndexes={[currentStepIndex]}
          i18n={i18n}
          steps={stepsList}
          title={i18n('sidebar.steps')}
        />
      )}
      <div style={{ height: 60 }} className="hidden-md" />
      <RelevantEntity
        address={i18n('departmentOfEconomicDevelopment.address')}
        email="info@adeconomy.ae"
        i18n={i18n}
        logo={`${imagePath}/images/DED-logo.png`}
        phones={['+971 2 815 8888']}
        publicServiceHours={i18n('departmentOfEconomicDevelopment.workingTime')}
        subTitle={i18n('departmentOfEconomicDevelopment')}
        title={i18n('relevant_entity')}
        verticalLogo={false}
        website="https://added.gov.ae"
      />
      {hideSidebar ? (
        <div style={{ marginTop: '60px' }}>
          <RelatedJourneyCard
            aspectOfLifeType="business-management"
            description={i18n('journeyCardDesc')}
            icon={() => <Icon source={BriefcaseOutline} />}
            label={i18n('manageYourBusiness')}
            onClick={() => {
              window.location.replace(
                `${
                  window.location.href.indexOf('stage.tamm') !== -1
                    ? 'https://stage.tamm.abudhabi/'
                    : 'https://www.tamm.abudhabi/'
                }journeys/manage-your-business`,
              );
            }}
            title={i18n('relatedJourney')}
          />
        </div>
      ) : (
        ''
      )}
    </div>
  );
}

Sidebar.defaultProps = {
  steps: stepType,
};

export default Sidebar;
