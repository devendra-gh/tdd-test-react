import formatState from './formatState';

describe('formatState', () => {
  let props: any;
  let definitions: any;

  beforeEach(() => {
    props = {
      testKey: 'Test Value',
    };

    definitions = [
      {
        componentId: '12345678',
        type: 'text',
        props: {
          variant: 'h1',
          // eslint-disable-next-line no-template-curly-in-string
          content: '${testKey}',
        },
      },
    ];
  });

  it('is function', () => expect(formatState).toBeInstanceOf(Function));

  it('should format', () => {
    const newDefinitions = formatState(definitions, props);

    expect(newDefinitions[0].props.content).toEqual(props.testKey);
  });
});
