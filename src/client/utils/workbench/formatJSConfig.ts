import { IVariables } from '@tamm/app-composer';
import deepMap from './deepMap';

const replaceSymbols = (obj: any, symbols = []) => {
  const symbolsIds: any[] = symbols?.map((symbol: any) => symbol.id) || [];
  return deepMap(obj, (value: any) => {
    if (symbolsIds.includes(value)) {
      return symbols.find((i: any) => i.id === value);
    }

    return value;
  });
};
// eslint-disable-next-line complexity
const formatJSConfig = (
  config: IVariables,
  defaultConfig?: IVariables,
  translations?: IVariables,
) => {
  const data: any = config || {};
  const { pages = [], version, dictionary } = data;

  const newConfig = {
    ...(defaultConfig || {}),
    ...data,

    version: version || Math.round(Math.random() * 100000),
  };

  if (
    newConfig.header &&
    newConfig.header.props &&
    Object.prototype.hasOwnProperty.call(newConfig, 'hero')
  ) {
    if (newConfig.hero !== false) {
      newConfig.hero = replaceSymbols(newConfig.hero, newConfig.symbols);
      newConfig.header.props.hero = [...newConfig.hero];
      newConfig.header.state = {
        mapState: [
          ...(newConfig.hero[0]?.state?.mapState || []),
          'user',
          'locale',
          'title',
          'breadcrumbs',
        ],
        mapDispatch: [
          ...(newConfig.hero[0]?.state?.mapDispatch || []),
          'user',
          'locale',
        ],
      };
      delete newConfig.hero;
    } else {
      newConfig.header.props.hero = false;
    }
  }

  let newPages = [...pages];

  if (
    Object.prototype.hasOwnProperty.call(newConfig, 'sidebar') &&
    newConfig.sidebar !== false
  ) {
    newConfig.sidebar = newConfig.sidebar.map((el: any) => ({
      ...el,
      props: {
        ...(el.props || {}),
        ...(el.type === 'symbol'
          ? {
              symbol: newConfig.symbols.find(
                (i: IVariables) => i.id === el.props.symbol,
              ),
            }
          : {}),
      },
      layout: 'sidebar',
    }));
    newPages = newPages.map((page: any) => ({
      ...page,
      props: {
        ...page.props,
        definitions: [...(page.props.definitions || []), ...newConfig.sidebar],
      },
      layout: !newConfig.sidebarLeft ? 'sidebar' : 'sidebarLeft',
    }));
  }

  newPages = replaceSymbols(
    replaceSymbols(newPages, newConfig.symbols),
    newConfig.symbols,
  );

  return {
    config: { ...newConfig, pages: newPages },
    translations: {
      en: { ...translations?.en, ...dictionary?.en },
      ar: { ...translations?.ar, ...dictionary?.ar },
    },
  };
};

export default formatJSConfig;
