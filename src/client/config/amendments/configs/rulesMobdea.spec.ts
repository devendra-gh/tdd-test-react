import index from './rulesMobdea';

// eslint-disable-next-line no-console
console.log = () => {};
console.info = () => {};
console.warn = () => {};
console.error = () => {};

describe('amendments/configs/rulesMobdea', () => {
  let onlyIfFields;

  it('should export rulesMobdea', () => {
    expect(index).toBeInstanceOf(Object);
  });

  it('should export rulesMobdea with onlyIfFields', () => {
    Object.values(index).forEach((legalForms: any) => {
      Object.values(legalForms).forEach((categories: any) => {
        Object.values(categories).forEach((types: any) => {
          Object.values(types).forEach((rules: any) => {
            onlyIfFields = Object.values(rules).filter(
              (field: any) => typeof field.onlyIf === 'function',
            );
            onlyIfFields.forEach((field: any) => {
              // @ts-ignore
              field.onlyIf();
            });
          });
        });
      });
    });
  });
});
