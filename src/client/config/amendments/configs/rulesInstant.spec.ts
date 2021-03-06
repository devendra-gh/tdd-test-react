import index from './rulesInstant';
import { ADD } from '../constants';

// eslint-disable-next-line no-console
console.log = () => {};
console.info = () => {};
console.warn = () => {};
console.error = () => {};

describe('amendments/configs/rulesInstant', () => {
  let props: any;
  let onlyIfFields;

  it('should export rulesInstant', () => {
    expect(index).toBeInstanceOf(Object);
  });

  it('should export rulesInstant with status ADD', () => {
    props = {
      ...props,
      licenceDetails: {
        partners: [
          {
            status: ADD,
          },
        ],
      },
    };
    Object.values(index).forEach((legalForms: any) => {
      Object.values(legalForms).forEach((categories: any) => {
        Object.values(categories).forEach((types: any) => {
          Object.values(types).forEach((rules: any) => {
            onlyIfFields = Object.values(rules).filter(
              (field: any) => typeof field.onlyIf === 'function',
            );
            onlyIfFields.forEach((field: any) => {
              // @ts-ignore
              field.onlyIf(props);
            });
          });
        });
      });
    });
  });
});
