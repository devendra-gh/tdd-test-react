import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import Button from '@tamm/ui-lib-v2-button';
import { withTemplateHooks, IVariables } from '@tamm/app-composer';
import routePropTypes from '@tamm/app-composer/client/propTypes/route';
import types, { noticeTypes } from '@tamm/app-composer/client/constants/types';
import Container from 'client/containers';
import './Questioner.less';
import FormTemplate from 'client/config/components/Form';
import WizardSummary from 'client/config/components/WizardSummary';
import ConfirmationModal from '@tamm/ui-lib-v2-confirmation-modal';

const BASE_URL = '/questioner';

const LOCALIZATION = {
  submit: 'Next',
};

const moveToStep = (id: number, history: any) => {
  history.push(`${BASE_URL}/${id}`);
};

const getNextStep: any = (steps: any, answers: any, stepIndex: any) => {
  const nextStepIndex: number = stepIndex + 1;
  const nextStep = steps[nextStepIndex];
  if (!steps) {
    return false;
  }

  if (!nextStep || nextStepIndex >= steps.length) {
    return 'summary';
  }

  if (!nextStep.visible || (nextStep.visible && nextStep.visible(answers))) {
    return nextStepIndex + 1;
  }

  return actions.getNextStep(steps, answers, nextStepIndex);
};

const goBackToStep = (
  stepIndex: any,
  questionsFlatList: any,
  answers: IVariables,
  onChangeHandler: any,
  history: any,
) => {
  const newAnswers: any = {};
  questionsFlatList.forEach((question: any) => {
    if (answers[question.name]) {
      newAnswers[question.name] =
        stepIndex >= question.stepIndex ? answers[question.name] : null;
    }
  });
  const prevStepIndex = stepIndex + 1;
  onChangeHandler(newAnswers);
  actions.moveToStep(prevStepIndex, history);
};

const getQuestionsFlatList = (fields: any, stepIndex?: any) => {
  let flatList: any[] = [];
  fields.forEach((field: any, index: any) => {
    if (!field.fields) {
      flatList.push({
        ...field,
        ...(stepIndex >= 0 ? { stepIndex } : { stepIndex: index }),
      });
    } else {
      flatList = [
        ...flatList,
        ...actions.getQuestionsFlatList(field.fields, index),
      ];
    }
  });
  return flatList;
};
const getAnswer = (question: any, answer: any) => {
  if (answer.constructor === Object) {
    return Object.keys(answer).join(' - ');
  }
  if (question.type === 'radio' || question.type === 'select') {
    return question.options.find((option: any) => option.value === answer)
      .label;
  }
  return answer;
};

const renderAnswers = (
  questionsFlatList: any,
  answers: IVariables,
  currentStepIndex: number,
  history: any,
  onChangeHandler: any,
  completedQuestions: IVariables,
  i18n: Function,
) => {
  return (
    <div className="p-4 questionnaire">
      {currentStepIndex > 0 && (
        <h5>{i18n('questionnaire.previous_answers')}</h5>
      )}
      {completedQuestions
        .map((question: any, index: number) => (
          <div className="questionnaire__answer">
            <div className="questionnaire__answer-order">{++index}</div>
            <div className="questionnaire__answer-content">
              <div className="questionnaire__answer-content-title">
                {i18n(question.title)}
              </div>
              <div className="questionnaire__answer-content-text">
                {i18n(getAnswer(question, answers[question.name]))}
              </div>
            </div>
            <button
              type="button"
              className="questionnaire__answer-button"
              onClick={() =>
                actions.goBackToStep(
                  question.stepIndex,
                  questionsFlatList,
                  answers,
                  onChangeHandler,
                  history,
                )
              }
            >
              {i18n('common.change')}
            </button>
          </div>
        ))
        // )
        .reverse()}
    </div>
  );
};

/**
 * validate rule againest answer.
 * @param {Object} rule Rule .
 * @param {string} answer answer.
 * @returns {Array} .
 */
function validateRule(rule: IVariables, answer: any) {
  switch (rule.operator) {
    case '>':
      return answer > rule.value;
    case '<':
      return answer < rule.value;
    case '>=':
      return answer >= rule.value;
    case '<=':
      return answer <= rule.value;
    case '=':
      if (Number(rule.value)) {
        return Number(rule.value) === answer;
      }
      return rule.value === answer;
    /*
        case 'after':
          return moment(rule.value, 'YYYY-MM-DD') < moment(answer, 'YYYY-MM-DD');
        case 'before':
          return moment(rule.value, 'YYYY-MM-DD') > moment(answer, 'YYYY-MM-DD');
        */
    case 'in':
      return rule.value.indexOf(answer) >= 0;
    /*
        case 'not_in':
          return !(rule.value.indexOf(answer) >= 0);
        */
    case 'between':
      return rule.value[0] <= answer && rule.value[1] >= answer;
    default:
      return false;
  }
}

const isOutcomeShouldDisplay: any = (
  outcome: IVariables,
  answers: IVariables,
) => {
  return (
    (outcome.rules &&
      outcome.rules.every((rule: IVariables) =>
        validateRule(rule, answers[rule.question]),
      )) ||
    (outcome.display && outcome.display(answers))
  );
};

const renderResult: any = (outcomes: any, summary: any, i18n: any) => {
  return (
    <>
      {/* <h3 className="questionnaire__label">{i18n(summary.description)}</h3> */}
      {outcomes.map((outcome: any) => {
        return (
          // <div className="questionnaire__question-content">
          //   <h3>{i18n(outcome.title)}</h3>
          //   <p>{i18n(outcome.description)}</p>
          <Button
            label={i18n('button.dashBoard')}
            uiType="secondary"
            withArrow
            onClick={outcome.onClick}
          />
          // </div>
        );
      })}
    </>
  );
};

const calculateOutcome: any = (outcomes: IVariables[], answers: IVariables) => {
  return outcomes.filter((outcome: any) =>
    actions.isOutcomeShouldDisplay(outcome, answers),
  );
};

const getCloseModalHandler = (setShowCancelModel: any) => () =>
  setShowCancelModel(false);
const getConfirmModalHandler = (history: any) => () => {
  history.push('/');
};

const renderForm = (
  currentStep: any,
  formData: any,
  onChange: any,
  onSubmit: any,
  onCancelHandler: any,
  goBack: any,
  stepIndex: any,
  props: any,
) => {
  const { i18n } = props;
  const form = {
    formData,
    onChange,
    fields: currentStep.fields.map((field: any) => ({
      ...field,
      title: `${stepIndex + 1}. ${i18n(field.title)}`,
    })),
  };

  return (
    <div className="questionnaire__form">
      <FormTemplate
        {...props}
        form={form}
        localization={LOCALIZATION}
        onSubmit={onSubmit}
        onBack={stepIndex ? goBack : false}
        onCancel={onCancelHandler}
        questionnaire
      />
    </div>
  );
};
/**
 * Questionnaire template
 * @param       {Object} props
 * @returns     {JSX}
 */
function Questionnaire(props: IVariables) {
  const { questions, history, outcomes, summary, i18n, location } = props;
  // const nextPage = "/";
  const [showCancelModel, setShowCancelModel] = useState(false);
  const [outcomeDispatched, setOutcomeDispatched] = useState(false);
  const { formData, onChange, steps } = questions;

  const answers = props.questionnaireData;
  const shouldShowSummary = props.match.params.formIndex === 'summary';
  const stepIndex = props.match.params.formIndex
    ? parseInt(props.match.params.formIndex, 10) - 1
    : 0;
  const currentStep = steps[stepIndex];
  const onChangeHandler = (values: any) => questions.onChange(props, values);
  const onCancelHandler = () => setShowCancelModel(true);
  const questionsFlatList = actions.getQuestionsFlatList(steps);

  const outcomesResult = shouldShowSummary
    ? actions.calculateOutcome(outcomes, answers)
    : false;

  const onSubmit = () => {
    const nextStep: any = actions.getNextStep(steps, answers, stepIndex);
    actions.moveToStep(nextStep, history);
  };

  if (shouldShowSummary && props.onOutcome && !outcomeDispatched) {
    props.onOutcome(outcomesResult, props);
    setOutcomeDispatched(true);
  }

  const completedQuestions = questionsFlatList.filter(
    (question: any, index: number) =>
      answers[question.name] &&
      (shouldShowSummary ? steps.length : stepIndex) > question.stepIndex,
  );

  const stepNumber = completedQuestions.length;

  const completedQues = completedQuestions[completedQuestions.length - 1];
  const prevStepIndex = completedQues ? completedQues.stepIndex : 0;

  const goBack = () =>
    actions.goBackToStep(
      prevStepIndex,
      questionsFlatList,
      answers,
      onChangeHandler,
      history,
    );

  useEffect(() => {
    const doc = document.documentElement;
    const top = (window.pageYOffset || doc.scrollTop) - (doc.clientTop || 0);
    console.log('window', top);
    if (top > 330) window.scrollTo({ top: 320 });
  }, [stepNumber]);
  return (
    <>
      <Container locale={props.locale}>
        <div className="questioner-wrapper" id="questionerId">
          {/* {shouldShowSummary
          ? actions.renderResult(outcomesResult, summary, i18n)
          : actions.renderForm(
              currentStep,
              formData,
              onChange,
              onSubmit,
              onCancelHandler,
              goBack,
              stepNumber,
              props
            )} */}
          {shouldShowSummary ? (
            <div className="">
              <WizardSummary
                i18n={i18n}
                items={props.summaryList}
                title={props.summaryTitle}
                text={props.summaryText}
              />
              <div className="questionnaire__button-group">
                <Button
                  aria-label="back"
                  label={i18n('common.back')}
                  onClick={() =>
                    actions.goBackToStep(
                      prevStepIndex,
                      questionsFlatList,
                      answers,
                      onChangeHandler,
                      history,
                    )
                  }
                  uiType="secondary"
                  alignIcon="start"
                  withArrow
                />
                <Button
                  aria-label="Next"
                  label={i18n(props.summaryButtonLabel)}
                  onClick={() => {
                    props.onSubmit(formData, props);
                    // history.push(nextPage);
                  }}
                  withArrow
                />
                <button
                  type="button"
                  className="questionnaire__cancel-button"
                  onClick={onCancelHandler}
                >
                  {i18n('common.cancel')}
                </button>
                {actions.renderResult(outcomesResult, summary, i18n)}
              </div>
            </div>
          ) : (
            actions.renderForm(
              currentStep,
              formData,
              onChange,
              onSubmit,
              onCancelHandler,
              goBack,
              stepNumber,
              props,
            )
          )}
          <div className="questionnaire__block">
            {actions.renderAnswers(
              questionsFlatList,
              answers,
              shouldShowSummary ? steps.length : stepIndex,
              history,
              onChangeHandler,
              completedQuestions,
              i18n,
            )}
          </div>
          {showCancelModel && (
            <ConfirmationModal
              cancelText={i18n('global.no')}
              confirmText={i18n('global.yes')}
              containerId="questionerId"
              description={i18n('questionnaire.summary.modal.body')}
              onCancel={() => setShowCancelModel(false)}
              onConfirm={() => props.onCancel(history)}
              title={i18n('questionnaire.summary.modal.title')}
            />
          )}
        </div>
      </Container>
    </>
  );
}

Questionnaire.propTypes = {
  ...routePropTypes,
  /** Type of notice, will determine icon and layout */
  type: PropTypes.oneOf(types.NOTICE_TYPES),
  /** Title */
  title: PropTypes.string.isRequired,
  questions: PropTypes.string.isRequired,
  history: PropTypes.array.isRequired,
  outcomes: PropTypes.array.isRequired,
  summary: PropTypes.shape({}),
  subSteps: PropTypes.arrayOf(PropTypes.object),
};

Questionnaire.defaultProps = {
  title: '',
  questions: [],
  summary: {},
};

export const actions = {
  getQuestionsFlatList,
  renderResult,
  calculateOutcome,
  renderForm,
  moveToStep,
  getNextStep,
  goBackToStep,
  isOutcomeShouldDisplay,
  renderAnswers,
};

export default withTemplateHooks(Questionnaire);
