import React from 'react';
import StepTracker from '@tamm/ui-lib-v2-step-tracker';
import './Sidebar.less';

/* istanbul ignore file */

export interface IStep {
  name: string;
  subSteps?: string[];
}
// import { steps, subSteps } from './steps';

type I18n = (key: string) => string;

interface ISidebar {
  i18n: I18n;
  currentStep: string;
  currentSubStep?: string;
  stepsStatus: Record<string, string>;
  steps: IStep[];
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
    if (step.subSteps && step.subSteps.length > 0)
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
      {/* <h6
        style={{
          fontSize: '2rem',
          fontWeight: 'normal',
          marginBottom: '.5rem',
        }}
      >
        {i18n('aspectOfLife')}
      </h6>
      <a href="#">
        <h4 style={{ textDecoration: 'underline', marginBottom: '6rem' }}>
          {i18n('businessLaunch')}
        </h4>
      </a> */}
      <StepTracker
        currentStepIndex={currentStepIndex}
        currentSubStepIndex={currentSubStepIndex}
        expandedStepIndexes={[currentStepIndex]}
        i18n={i18n}
        steps={stepsList}
        title={i18n('sidebar.steps')}
      />
      <div style={{ height: 60 }} className="hidden-md" />
      {/* <RelevantEntity
        address={i18n('departmentOfEconomicDevelopment.address')}
        i18n={i18n}
        logo={`${baseName}/images/DED-logo.png`}
        phones={['+971 2 815 8888']}
        publicServiceHours={i18n('departmentOfEconomicDevelopment.workingTime')}
        subTitle={i18n('departmentOfEconomicDevelopment')}
        title={i18n('relevant_entity')}
        verticalLogo={false}
        website="www.adeconomy.ae"
      /> */}
    </div>
  );
}

Sidebar.defaultProps = {
  steps: [],
};

export default Sidebar;
