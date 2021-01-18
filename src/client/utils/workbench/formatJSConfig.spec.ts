import formatJSConfig from './formatJSConfig';

describe('formatJSConfig', () => {
  let data: any;
  let defaultConfig: any;

  beforeEach(() => {
    data = {
      defaults: {
        title: 'TestApp',
      },
      initialState: {},
      dictionary: {
        en: {},
        ar: {},
      },
      symbols: [{ id: '1' }],
      pages: [
        {
          title: 'Page',
          props: {
            definitions: [{ type: 'symbol', props: { symbol: { id: '1' } } }],
          },
        },
      ],
      hero: [
        {
          title: 'Hero',
        },
      ],
      sidebar: false,
      version: '1',
    };

    defaultConfig = {
      header: {
        template: 'header',
        breadcrumbs: [
          {
            label: 'home',
            link: '#',
          },
        ],
        props: {},
      },
      footer: {
        template: 'footer',
        state: {
          mapState: ['user'],
        },
      },
    };
  });

  it('is function', () => expect(formatJSConfig).toBeInstanceOf(Function));

  it('should format', () => {
    const config = formatJSConfig(data, defaultConfig);

    expect(config).toEqual(expect.any(Object));
  });

  it('should format without defaultConfig', () => {
    delete data.pages;
    delete data.version;
    const config = formatJSConfig(data);

    expect(config).toEqual(expect.any(Object));
  });

  it('should format with hero', () => {
    const config = formatJSConfig(data, defaultConfig);

    expect(config.config.header.props.hero).toEqual(expect.any(Array));
  });

  it('should format without hero', () => {
    data.hero = false;
    const config = formatJSConfig(data, defaultConfig);

    expect(config.config.header.props.hero).toEqual(false);
  });

  it('should format with sidebar', () => {
    data.sidebar = [{ key: 'value' }];
    const config = formatJSConfig(data, defaultConfig);

    expect(config.config.header.props.hero).toEqual(expect.any(Array));
  });
});
