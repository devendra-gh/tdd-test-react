import { IVariables } from '@tamm/app-composer';
import { PATH_INVESTOR_FORM } from '../../../routes';
import { userTypes } from './constants';

const init = (props: IVariables) => {
  props.actions.steps.update([
    { name: 'step.selectServie.label' },
    { name: 'step.servieDetails.label' },
    { name: 'step.viewStatus.label' },
  ]);
  props.actions.currentStep.update('step.selectServie.label');
  props.actions.stepsStatus.update({});
};

const onChange = (type: string, value: string, props: IVariables) => {
  props.actions.form.update({ ...props.form, [type]: value });
};

const onSubmit = (props: IVariables) => {
  props.history.push(PATH_INVESTOR_FORM);
};

const getFormGroups = (props: IVariables) => {
  const { form } = props;
  const { i18n } = props;

  const userType = {
    fields: [
      {
        'aria-label': 'radio',
        name: 'radio.0',
        value: form.userType,
        elementType: 'radio',
        align: 'horizontal',
        defaultValue: '',
        labelStyle: 'default',
        disabled: false,
        groupLabel: '',
        items: userTypes.map(({ label, value }) => ({
          label: i18n(label),
          value,
          checked: value === form.userType,
        })),
        onChange: (value: any) => {
          props.onChange('userType', value.target.value, props);
        },
        uiType: 'default',
      },
    ],
  };

  const allGroups = [];
  allGroups.push(userType);
  return allGroups;
};

export default {
  init,
  onChange,
  onSubmit,
  getFormGroups,
};
