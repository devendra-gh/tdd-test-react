import index from './index';

// eslint-disable-next-line no-console
console.log = () => {};
console.info = () => {};
console.warn = () => {};
console.error = () => {};

describe('amendments/configs/representativeForms/heirs', () => {
  let conditionalBehaviourFields;
  let valueFields;
  let customDisabledDateFields;
  let values: any;
  let formValues: any;

  it('should export heirs', () => {
    expect(index).toBeInstanceOf(Object);
  });

  it('should properly call conditionalBehaviour for form fields', () => {
    conditionalBehaviourFields = index.form.fields.filter(
      field => typeof field.conditionalBehaviour === 'function',
    );
    conditionalBehaviourFields.forEach(field => {
      // @ts-ignore
      field.conditionalBehaviour();
    });
  });

  it('should properly call conditionalBehaviour for details fields', () => {
    conditionalBehaviourFields = index.details.fields.filter(
      field => typeof field.conditionalBehaviour === 'function',
    );
    conditionalBehaviourFields.forEach(field => {
      // @ts-ignore
      field.conditionalBehaviour();
    });
  });

  it('should properly call conditionalBehaviour for details fields with values', () => {
    values = {
      type: 'Resident',
    };

    conditionalBehaviourFields = index.details.fields.filter(
      field => typeof field.conditionalBehaviour === 'function',
    );
    conditionalBehaviourFields.forEach((field: any) => {
      // @ts-ignore
      field.conditionalBehaviour(values);
    });
  });

  it('should properly call value for details fields with formValues', () => {
    formValues = {
      bDate: '08-03-2020',
    };
    valueFields = index.details.fields.filter(
      field => typeof field.value === 'function',
    );
    valueFields.forEach(field => {
      // @ts-ignore
      field.value(formValues);
    });
  });

  it('should properly call value for details fields with empty formValues', () => {
    formValues = {
      bDate: '',
    };
    valueFields = index.details.fields.filter(
      field => typeof field.value === 'function',
    );
    valueFields.forEach(field => {
      // @ts-ignore
      field.value(formValues);
    });
  });

  it('should properly call customDisabledDate', () => {
    customDisabledDateFields = index.details.fields.filter(
      field => typeof field.customDisabledDate === 'function',
    );
    customDisabledDateFields.forEach(field => {
      // @ts-ignore
      field.customDisabledDate();
    });
  });
});
