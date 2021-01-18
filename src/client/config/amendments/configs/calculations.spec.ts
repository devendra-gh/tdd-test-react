import { operatorConditions, attributeConditions } from './calculations';
import { GCC, UAE, DELETE, ADD } from '../constants';

// eslint-disable-next-line no-console
console.log = () => {};
console.info = () => {};
console.warn = () => {};
console.error = () => {};

describe('amendments/configs/calculations', () => {
  const a: number = 2;
  const b: number = 3;
  let operatorFields;
  let items: any;

  // eslint-disable-next-line no-console
  console.log = () => {};
  console.info = () => {};
  console.warn = () => {};
  console.error = () => {};

  describe('operatorConditions', () => {
    it('should export operatorConditions', () => {
      expect(operatorConditions).toBeInstanceOf(Object);
    });

    it('should export operatorConditions with number', () => {
      operatorFields = Object.values(operatorConditions).filter(
        (field: any) => typeof field === 'function',
      );
      operatorFields.forEach((field: any) => {
        // @ts-ignore
        field(a, b);
      });
    });
  });

  // eslint-disable-next-line no-console
  console.log = () => {};
  console.info = () => {};
  console.warn = () => {};
  console.error = () => {};

  describe('attributeConditions', () => {
    it('should export attributeConditions', () => {
      expect(attributeConditions).toBeInstanceOf(Object);
    });

    it('should export attributeConditions with item status ADD and nationality UAE', () => {
      items = [
        {
          status: ADD,
          nationality: UAE,
        },
      ];

      operatorFields = Object.values(attributeConditions).filter(
        (field: any) => typeof field === 'function',
      );
      operatorFields.forEach((field: any) => {
        // @ts-ignore
        field(items);
      });
    });

    it('should export attributeConditions with item status ADD and nationality GCC', () => {
      items = [
        {
          status: ADD,
          nationality: GCC,
        },
      ];

      operatorFields = Object.values(attributeConditions).filter(
        (field: any) => typeof field === 'function',
      );
      operatorFields.forEach((field: any) => {
        // @ts-ignore
        field(items);
      });
    });

    it('should export attributeConditions with item status DELETE', () => {
      items = [
        {
          status: DELETE,
        },
      ];

      operatorFields = Object.values(attributeConditions).filter(
        (field: any) => typeof field === 'function',
      );
      operatorFields.forEach((field: any) => {
        // @ts-ignore
        field(items);
      });
    });

    it('should export attributeConditions with item paidUpCapital and tawtheeqNum', () => {
      items = {
        paidUpCapital: '100',
        tawtheeqNum: '1',
      };

      operatorFields = Object.keys(attributeConditions)
        .filter(key =>
          ['mustHavePaidUpCapital', 'mustHaveLocation'].includes(key),
        )
        .reduce((obj: any, key) => {
          /* eslint-disable no-param-reassign */
          obj[key] = attributeConditions[key];
          return obj;
        }, {});

      operatorFields = Object.values(operatorFields).filter(
        (field: any) => typeof field === 'function',
      );

      operatorFields.forEach((field: any) => {
        // @ts-ignore
        field(items);
      });
    });
  });
});
