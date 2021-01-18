import React from 'react';
import StepTracker from '@tamm/ui-lib-v2-step-tracker';
import RelevantEntity from '@tamm/ui-lib-v2-relevant-entity';
import imagePath from 'client/utils/baseUrl';
import { IStep } from 'client/config/amendments/steps';
import RelatedJourneyCard from '@tamm/ui-lib-v2-related-journey-card';
import Icon from '@tamm/ui-lib-v2-icon';
import { BriefcaseOutline } from '@tamm/ui-lib-v2-icon/Icons';
// import { steps, subSteps } from './steps';

/* istanbul ignore file */

type I18n = (key: string) => string;

interface ISidebar {
  i18n: I18n;
  currentStep: string;
  currentSubStep?: string;
  stepsStatus: Record<string, string>;
  steps: IStep[];
  showSidebar: boolean;
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
  const { i18n, steps, stepsStatus, currentStep, currentSubStep } = props;
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
      <h6 className="sidebar-heading">{i18n('aspectOfLife')}</h6>
      <h4 className="sidebar-sub-heading">{i18n('manageYourBusiness')}</h4>
      <div className="sidebar-extra-height-6" />
      {props.showSidebar && (
        <>
          <StepTracker
            currentStepIndex={currentStepIndex}
            currentSubStepIndex={currentSubStepIndex}
            expandedStepIndexes={[currentStepIndex]}
            i18n={i18n}
            steps={stepsList}
            title={i18n('sidebar.steps')}
          />
          <div className="sidebar-hidden-height-4" />
        </>
      )}
      <RelevantEntity
        address={i18n('departmentOfEconomicDevelopment.address')}
        i18n={i18n}
        logo={`${imagePath}/images/DED-logo.png`}
        phones={['+971 2 815 8888']}
        officeHours={i18n('departmentOfEconomicDevelopment.officeHours')}
        publicServiceHours={i18n('departmentOfEconomicDevelopment.workingTime')}
        subTitle={i18n('departmentOfEconomicDevelopment')}
        title={i18n('relevant_entity')}
        verticalLogo={false}
        website="www.adeconomy.ae"
      />
      {!props.showSidebar && (
        <>
          <div className="sidebar-extra-height-6" />
          <RelatedJourneyCard
            aspectOfLifeType="business-management"
            description={i18n('relatedJourny_description')}
            icon={() => <Icon source={BriefcaseOutline} />}
            label={i18n('manage_your_business')}
            onClick={() => {
              window.location.replace(
                `${
                  window.location.href.indexOf('stage.tamm') !== -1
                    ? 'https://stage.tamm.abudhabi/'
                    : 'https://www.tamm.abudhabi/'
                }journeys/manage-your-business`,
              );
            }}
            title={i18n('relevant_journey')}
          />
        </>
      )}
    </div>
  );
}

export default Sidebar;
