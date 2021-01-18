import { getTables } from './helpers';

// eslint-disable-next-line no-console
console.log = () => {};
console.info = () => {};
console.warn = () => {};
console.error = () => {};

describe('getTables', () => {
  const props = {
    i18n: jest.fn(),
    tables: [
      {
        columns: [
          {
            id: 'document',
            title: 'investorProtection.landingPage.table.column.document',
          },
          {
            align: 'end',
            id: 'description',
            title: 'investorProtection.landingPage.table.column.description',
          },
        ],
        items: [
          {
            description: 'investorProtection.landingPage.table.cardCopy',
            document: 'investorProtection.landingPage.table.eida',
            id: '0',
          },
          {
            description: 'investorProtection.landingPage.table.originalDoc',
            document: 'investorProtection.landingPage.table.dedDoc',
            id: '1',
          },
        ],
        title: 'investorProtection.landingPage.table.reqDocs',
      },
    ],
  };
  it('instance check', () => {
    expect(getTables).toBeInstanceOf(Function);
  });

  it('Should return array of tables', () => {
    const result = getTables(props);
    expect(result).toBeInstanceOf(Array);
  });
});
