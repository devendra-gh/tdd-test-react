import {
  getAttributeValueFromString,
  getAttrListFromPoweredBySource,
  processCmsResult,
} from 'server/utils/cmsResultProcessing';

const mockCMSData = {
  socialLinks: {
    en: [
      {
        link: 'http://test.test',
        label: 'test',
      },
    ],
    ar: [
      {
        link: 'http://test.test',
        label: 'test',
      },
    ],
  },
  emergencyNumbers: {
    en: {
      emergencyHeading: 'heading',
      emergencyLabel: 'label',
      numberText1: 'text',
      numberLink1:
        '<link text="number" linktype="tel" url="tel:number" anchor="" />',
    },
    ar: {
      emergencyHeading: 'heading',
      emergencyLabel: 'label',
      numberText1: 'text',
      numberLink1:
        '<link text="number" linktype="tel" url="tel:number" anchor="" />',
    },
  },
  poweredByLinks: {
    en: {
      source:
        '<div class="main-container poweredby">\n<div>\n<div>\n<label>\n<span>Powered by</span>\n<a href="#" class="icon-plus-rounded"></a>\n</label>\n</div>\n<div>\n<div class="logo-list">\n<ul>\n    <li>\n    <a href="https://www.adpolice.gov.ae/ar/pages/home.aspx" data-toggle="modal" data-target="#external-model">\n    <img class="img-responsive" alt="Powered Logo" src="-/media/Project/TAMM/Home/adcp/AD-Police.png" />\n    </a>\n    </li>\n</ul>\n</div>\n</div>\n</div>\n</div>',
    },
    ar: {
      source:
        '<div class="main-container poweredby">\n<div>\n<div>\n<label>\n<span>برعاية</span>\n<a href="#" class="icon-plus-rounded"></a>\n</label>\n</div>\n<div>\n<div class="logo-list">\n<ul>\n    <li>\n    <a href="https://www.adpolice.gov.ae/ar/pages/home.aspx">\n    <img class="img-responsive" alt="Powered Logo" src="-/media/Project/TAMM/Home/adcp/AD-Police.png" />\n    </a>\n    </li>\n    </ul>\n</div>\n</div>\n</div>\n</div>',
    },
  },
};

const mockCMSJourneyInfo = {
  en: {
    headerInfo: {
      logo: {
        desktopLogoPath: '/-/media/logo.svg',
        mobileLogoPath: '/-/media/mobile-Logo.svg',
      },
      link: '/en/example-path',
    },
  },
  ar: {
    headerInfo: {
      link: '/ar-AE/example-path',
    },
  },
};

jest.mock('server/utils/logger', () => ({
  getService: () => ({
    error: jest.fn(),
  }),
}));
jest.mock('config', () => ({
  cms: {
    tammUrl: 'tammUrl',
    tammWorkbenchUrl: 'tammWorkbenchUrl',
  },
}));

describe('cmsResultProcessing', () => {
  let mockCmsResult: any;

  beforeAll(() => {
    mockCmsResult = processCmsResult(mockCMSData, mockCMSJourneyInfo);
  });

  it('should process cms-object when cms is null', () => {
    expect(processCmsResult(null)).toEqual({
      journeyInfo: {},
      tammUrl: 'tammUrl',
      tammWorkbenchUrl: 'tammWorkbenchUrl',
    });
  });

  it('should process cms-object and return proper socialLinks', () => {
    expect(mockCmsResult.socialLinks).toEqual({
      en: [
        {
          link: 'http://test.test',
          label: 'test',
        },
      ],
      ar: [
        {
          link: 'http://test.test',
          label: 'test',
        },
      ],
    });
  });

  it('should process cms-object and return proper emergencyNumbers', () => {
    expect(mockCmsResult.emergencyNumbers).toEqual({
      en: {
        emergencyHeading: 'heading',
        emergencyLabel: 'label',
        items: [
          {
            label: 'text',
            number: 'number',
          },
        ],
      },
      ar: {
        emergencyHeading: 'heading',
        emergencyLabel: 'label',
        items: [
          {
            label: 'text',
            number: 'number',
          },
        ],
      },
    });
  });

  it('should process cms-object and return proper poweredByLinks', () => {
    expect(mockCmsResult.poweredByLinks).toEqual({
      en: [
        {
          title: 'Powered Logo',
          image: 'tammUrl/-/media/Project/TAMM/Home/adcp/AD-Police.png',
          link: 'https://www.adpolice.gov.ae/ar/pages/home.aspx',
        },
      ],
      ar: [
        {
          title: 'Powered Logo',
          image: 'tammUrl/-/media/Project/TAMM/Home/adcp/AD-Police.png',
          link: 'https://www.adpolice.gov.ae/ar/pages/home.aspx',
        },
      ],
    });
  });

  it('should process input with getAttributeValueFromString', () => {
    const input =
      '<a href="https://www.adpolice.gov.ae/ar/pages/home.aspx" data-toggle="modal" data-target="#external-model">\n    <img class="img-responsive" alt="Powered Logo" src="-/media/Project/TAMM/Home/adcp/AD-Police.png" />';

    const href = getAttributeValueFromString('href', input);
    const alt = getAttributeValueFromString('alt', input);
    const src = getAttributeValueFromString('src', input);

    expect(href).toEqual('https://www.adpolice.gov.ae/ar/pages/home.aspx');
    expect(alt).toEqual('Powered Logo');
    expect(src).toEqual('-/media/Project/TAMM/Home/adcp/AD-Police.png');
  });

  it('should process input with getAttributeValueFromString when attribute is not exist', () => {
    const input =
      '<a href="https://www.adpolice.gov.ae/ar/pages/home.aspx" data-toggle="modal" data-target="#external-model">\n    <img class="img-responsive" alt="Powered Logo" src="-/media/Project/TAMM/Home/adcp/AD-Police.png" />';
    const awesomeAttr = getAttributeValueFromString('awesomeAttr', input);

    expect(awesomeAttr).toEqual('');
  });

  it('should process input with getAttributeValueFromString when input does not include attribute', () => {
    const input =
      '<a data-group="https://www.adpolice.gov.ae/ar/pages/home.aspx" data-toggle="modal" data-target="#external-model">\n    <img class="img-responsive" data-type="Powered Logo" />';
    const awesomeAttr = getAttributeValueFromString('alt', input);

    expect(awesomeAttr).toEqual('');
  });

  it('should process input with getAttributeValueFromString when input is empty', () => {
    const input = '';
    const href = getAttributeValueFromString('href', input);

    expect(href).toEqual('');
  });

  it('should process input with getAttrListFromPoweredBySource', () => {
    const input =
      '<li>\n    <a href="https://www.adpolice.gov.ae/ar/pages/home.aspx" data-toggle="modal" data-target="#external-model">\n    <img class="img-responsive" alt="Powered Logo" src="-/media/Project/TAMM/Home/adcp/AD-Police.png" />\n    </a>\n    </li>\n    <li>\n    <a href="https://www.adha.ae/ar/Pages/default.aspx" data-toggle="modal" data-target="#external-model">\n    <img class="img-responsive" alt="Powered Logo" src="-/media/Project/TAMM/Home/adcp/AD-Housing.png" />\n    </a>\n    </li>\n';

    const poweredByLinksResult = getAttrListFromPoweredBySource(input);

    expect(poweredByLinksResult).toEqual([
      {
        title: 'Powered Logo',
        image: 'tammUrl/-/media/Project/TAMM/Home/adcp/AD-Police.png',
        link: 'https://www.adpolice.gov.ae/ar/pages/home.aspx',
      },
      {
        title: 'Powered Logo',
        image: 'tammUrl/-/media/Project/TAMM/Home/adcp/AD-Housing.png',
        link: 'https://www.adha.ae/ar/Pages/default.aspx',
      },
    ]);
  });

  it('should process input with getAttrListFromPoweredBySource when input is empty', () => {
    const input = '';
    const poweredByLinksResult = getAttrListFromPoweredBySource(input);

    expect(poweredByLinksResult).toEqual([]);
  });
});
