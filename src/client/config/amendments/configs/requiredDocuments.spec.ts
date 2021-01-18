import index from './requiredDocuments';
import legalForms from '../constants/legalForms';

// eslint-disable-next-line no-console
console.log = () => {};
console.info = () => {};
console.warn = () => {};
console.error = () => {};

describe('amendments/configs/requiredDocuments', () => {
  let conditionalBehaviourFields;

  it('should export requiredDocuments', () => {
    expect(index).toBeInstanceOf(Object);
  });

  it('should export requiredDocuments with conditionalBehaviour', () => {
    Object.values(index).forEach((types: any) => {
      Object.values(types).forEach((rules: any) => {
        conditionalBehaviourFields = Object.values(rules).filter(
          (field: any) => typeof field.conditionalBehaviour === 'function',
        );
        conditionalBehaviourFields.forEach((field: any) => {
          // @ts-ignore
          field.conditionalBehaviour({ legalForms });
        });
      });
    });
  });
});
