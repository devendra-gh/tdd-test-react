import index from './index';

// eslint-disable-next-line no-console
console.log = () => {};
console.info = () => {};
console.warn = () => {};
console.error = () => {};

describe('amendments/configs/representativeForms/partnersCompany', () => {
  let conditionalBehaviourFields;
  let valueFields;
  let conditionalDisableFields;
  let formValues: any;

  it('should export partnersCompany', () => {
    expect(index).toBeInstanceOf(Object);
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

  it('should properly call value for details fields', () => {
    valueFields = index.details.fields.filter(
      field => typeof field.value === 'function',
    );
    valueFields.forEach(field => {
      // @ts-ignore
      field.value();
    });
  });

  it('should properly call conditionalDisable for details fields with formValues', () => {
    formValues = {
      type: 'citizen',
    };
    conditionalDisableFields = index.details.fields.filter(
      field => typeof field.conditionalDisable === 'function',
    );
    conditionalDisableFields.forEach(field => {
      // @ts-ignore
      field.conditionalDisable(formValues);
    });
  });
});
