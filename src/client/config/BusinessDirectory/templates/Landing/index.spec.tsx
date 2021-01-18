import React from 'react';
import { render, cleanup } from '@testing-library/react';
import { MemoryRouter } from 'react-router';
import '@testing-library/jest-dom/extend-expect';
import { Viewport, ViewportProvider } from '@tamm/ui-lib-v2-viewport';
import Home from './index';

jest.mock('@tamm/app-composer', () => ({
  withTemplateHooks: (component: any) => component,
}));

describe('config/templates/Home', () => {
  let props: any;

  beforeEach(() => {
    props = {
      match: {},
      location: {},
      history: {
        push: jest.fn(),
      },
      locale: {
        switch: jest.fn(),
      },
      natureList: [
        {
          attributes: {
            NATURE_ACTIVITYEN: 'PROJECT INVESTMENTS',
            NATURE_ACTIVITYAR: 'الاستثمارات في المشاريع',
          },
        },
        {
          attributes: {
            NATURE_ACTIVITYEN: 'ANIMAL HUSBANDRY',
            NATURE_ACTIVITYAR: 'تربية الحيوانات',
          },
        },
        {
          attributes: {
            NATURE_ACTIVITYEN: 'MANAGEMENT AND OPERATION OFFICES',
            NATURE_ACTIVITYAR: 'مكاتب الإدارة والتشغيل',
          },
        },
        {
          attributes: {
            NATURE_ACTIVITYEN: 'PRINTING, PUBLISHING AND RELATED SERVICE',
            NATURE_ACTIVITYAR: 'الطباعة والنشر  والخدمات المتعلقه بها',
          },
        },
        {
          attributes: {
            NATURE_ACTIVITYEN:
              'ORGANIZATIONAL SERVICES (EVENTS - CONFERENCES - EXHIBITIONS - CEREMONIES)',
            NATURE_ACTIVITYAR:
              'خدمات تنظيم (الفعاليات - المؤتمرات - المعارض والمناسبات)',
          },
        },
        {
          attributes: {
            NATURE_ACTIVITYEN: 'TELECOMMUNICATIONS',
            NATURE_ACTIVITYAR: 'الاتصالات',
          },
        },
        {
          attributes: {
            NATURE_ACTIVITYEN: 'EXTRACTION ACTIVITIES (EXPLORATION)',
            NATURE_ACTIVITYAR: 'الأنشطة الاستخراجية (البحث والتنقيب)',
          },
        },
        {
          attributes: {
            NATURE_ACTIVITYEN: 'SOCIAL AND CULTURAL SERVICES',
            NATURE_ACTIVITYAR: 'الخدمات الاجتماعية والثقافية',
          },
        },
        {
          attributes: {
            NATURE_ACTIVITYEN: 'TRAINING CENTERS AND INSTITUTES',
            NATURE_ACTIVITYAR: 'المراكز والمعاهد  التدريبية',
          },
        },
        {
          attributes: {
            NATURE_ACTIVITYEN: 'ADVOCATE OFFICES',
            NATURE_ACTIVITYAR: 'مكاتب المحاماة',
          },
        },
        {
          attributes: {
            NATURE_ACTIVITYEN: 'RENT SERVICES',
            NATURE_ACTIVITYAR: 'خدمات التأجير',
          },
        },
        {
          attributes: {
            NATURE_ACTIVITYEN: 'BEAUTY',
            NATURE_ACTIVITYAR: 'التجميل',
          },
        },
        {
          attributes: {
            NATURE_ACTIVITYEN: 'PUBLIC AUCTION HALLS',
            NATURE_ACTIVITYAR: 'صالات المزاد العلني',
          },
        },
        {
          attributes: {
            NATURE_ACTIVITYEN: 'LANDSCAPING SERVICES',
            NATURE_ACTIVITYAR: 'خدمات التجميل والتنسيق للمواقع',
          },
        },
        {
          attributes: {
            NATURE_ACTIVITYEN: 'AGENCIES',
            NATURE_ACTIVITYAR: 'الوكالات',
          },
        },
        {
          attributes: {
            NATURE_ACTIVITYEN: 'LABORATORIES',
            NATURE_ACTIVITYAR: 'المختبرات',
          },
        },
        {
          attributes: {
            NATURE_ACTIVITYEN:
              'MAINTENANCE, INSTALLATION AND CONTRACTING WORKS',
            NATURE_ACTIVITYAR: 'أعمال المقاولات والصيانه والتركيبات',
          },
        },
        {
          attributes: {
            NATURE_ACTIVITYEN: 'ANIMAL SHELTERING SERVICES',
            NATURE_ACTIVITYAR: 'خدمات إيواء الحيوانات',
          },
        },
        {
          attributes: {
            NATURE_ACTIVITYEN: 'MEDIA AND ADVERTISING SERVICES',
            NATURE_ACTIVITYAR: 'الخدمات الاعلانية والاعلامية',
          },
        },
        {
          attributes: {
            NATURE_ACTIVITYEN: 'AUDITING OFFICES',
            NATURE_ACTIVITYAR: 'مكاتب تدقيق الحسابات',
          },
        },
        {
          attributes: {
            NATURE_ACTIVITYEN:
              'GOVERNMENT LIAISON OFFICES AND INTERNATIONAL ORGANIZATIONS',
            NATURE_ACTIVITYAR: 'مكاتب الارتباط الحكومي والمنظمات الدولية',
          },
        },
        {
          attributes: {
            NATURE_ACTIVITYEN: 'CEREMONY AND PARTY AND HALLS',
            NATURE_ACTIVITYAR: 'صالات الافراح والمناسبات',
          },
        },
        {
          attributes: {
            NATURE_ACTIVITYEN: 'DECORATION WORKS',
            NATURE_ACTIVITYAR: 'أعمال تنفيذ الديكور',
          },
        },
        {
          attributes: {
            NATURE_ACTIVITYEN: 'WASTE TREATMENT',
            NATURE_ACTIVITYAR: 'معالجة النفايات',
          },
        },
        {
          attributes: {
            NATURE_ACTIVITYEN: 'CREATIVE ACTIVITIES',
            NATURE_ACTIVITYAR: 'أنشطة مبدعة',
          },
        },
        {
          attributes: {
            NATURE_ACTIVITYEN: 'EDUCATIONAL TRAVEL SERVICES',
            NATURE_ACTIVITYAR: 'خدمات تنظيم الرحلات التربوية',
          },
        },
        {
          attributes: {
            NATURE_ACTIVITYEN: 'OTHER SERVICES',
            NATURE_ACTIVITYAR: 'الخدمات الاخرى',
          },
        },
        {
          attributes: {
            NATURE_ACTIVITYEN: 'HAJJ AND UMRAH SERVICES',
            NATURE_ACTIVITYAR: 'خدمات تنظيم رحلات الحج والعمرة',
          },
        },
        {
          attributes: {
            NATURE_ACTIVITYEN: 'LEATHER PRODUCTS REPAIRING AND CLEANING',
            NATURE_ACTIVITYAR: 'اصلاح وتنظيف المنتجات الجلدية',
          },
        },
        {
          attributes: {
            NATURE_ACTIVITYEN: 'BAKERIES AND SWEETS',
            NATURE_ACTIVITYAR: 'المخابز والحلويات',
          },
        },
        {
          attributes: {
            NATURE_ACTIVITYEN:
              'OIL AND GAS EXTRACTION AND THE RELEVANT SERVICES',
            NATURE_ACTIVITYAR: 'استخراج النفط والغاز والخدمات ذات العلاقة',
          },
        },
        {
          attributes: {
            NATURE_ACTIVITYEN: 'BUILDING CLEANING AND OTHER CLEANING SERVICES',
            NATURE_ACTIVITYAR: 'خدمات تنظيف المباني والتنظيفات الاخرى',
          },
        },
        {
          attributes: {
            NATURE_ACTIVITYEN: 'TEXTILE AND CARPET CLEANING SERVICES',
            NATURE_ACTIVITYAR: 'خدمات غسيل المنسوجات والسجاد',
          },
        },
        {
          attributes: {
            NATURE_ACTIVITYEN: 'CARGO SERVICES',
            NATURE_ACTIVITYAR: 'خدمات الشحن',
          },
        },
        {
          attributes: {
            NATURE_ACTIVITYEN: 'MONEY TRANSPORT AND BANK SECURITY SERVICES',
            NATURE_ACTIVITYAR: 'خدمات أمن البنوك ونقل الاموال',
          },
        },
        {
          attributes: {
            NATURE_ACTIVITYEN: 'MARKETING SERVICES',
            NATURE_ACTIVITYAR: 'الخدمات التسويقية',
          },
        },
        {
          attributes: {
            NATURE_ACTIVITYEN: 'CINEMAS AND THEATERS',
            NATURE_ACTIVITYAR: 'صالات العرض السينمائية والمسارح',
          },
        },
        {
          attributes: {
            NATURE_ACTIVITYEN: 'REPRESENTATION OFFICES',
            NATURE_ACTIVITYAR: 'مكاتب التمثيل',
          },
        },
        {
          attributes: {
            NATURE_ACTIVITYEN: 'KEY DUPLICATION SERVICES',
            NATURE_ACTIVITYAR: 'نسخ المفاتيح',
          },
        },
        {
          attributes: {
            NATURE_ACTIVITYEN:
              'RESTAURANTS, CAFETERIAS, CATERING AND MEAL PREPARATION SERVICES.',
            NATURE_ACTIVITYAR:
              'المطاعم  والكافتيريات وخدمات التموين اعداد الوجبات',
          },
        },
        {
          attributes: {
            NATURE_ACTIVITYEN: 'BANKS AND FINANCIAL SERVICES',
            NATURE_ACTIVITYAR: 'المصارف والخدمات المالية',
          },
        },
        {
          attributes: {
            NATURE_ACTIVITYEN: 'FORUMS AND BUSINESSMEN COUNCILS',
            NATURE_ACTIVITYAR: 'المنتديات ومجالس رجال الاعمال',
          },
        },
        {
          attributes: {
            NATURE_ACTIVITYEN: 'SECURITY AND GUARDING SERVICES',
            NATURE_ACTIVITYAR: 'خدمات الامن والحراسة',
          },
        },
        {
          attributes: {
            NATURE_ACTIVITYEN:
              'SERVICES (CONSULTANCY - DESIGN AND RESEARCH CENTER)',
            NATURE_ACTIVITYAR: 'خدمات (الاستشارات  - التصميم ومراكز الابحاث)',
          },
        },
        {
          attributes: {
            NATURE_ACTIVITYEN: 'SPORTS CLUBS AND RELEVANT SERVICES',
            NATURE_ACTIVITYAR: 'الاندية الرياضية والخدمات المتعلقه بها',
          },
        },
        {
          attributes: {
            NATURE_ACTIVITYEN: 'TOURISM',
            NATURE_ACTIVITYAR: 'السياحة',
          },
        },
        {
          attributes: {
            NATURE_ACTIVITYEN: 'INSURANCE SERVICES',
            NATURE_ACTIVITYAR: 'خدمات التأمين',
          },
        },
        {
          attributes: {
            NATURE_ACTIVITYEN: 'FUNERALS AND RELATED SERVICES',
            NATURE_ACTIVITYAR: 'الجنازات ومايتصل بها',
          },
        },
        {
          attributes: {
            NATURE_ACTIVITYEN: 'REAL ESTATE SERVICES',
            NATURE_ACTIVITYAR: 'الخدمات العقارية',
          },
        },
        {
          attributes: {
            NATURE_ACTIVITYEN: 'TAXATION SERVICES',
            NATURE_ACTIVITYAR: 'الخدمات الضريبية',
          },
        },
        {
          attributes: {
            NATURE_ACTIVITYEN: 'TECHNICAL AND OCCUPATIONAL INSPECTION SERVICES',
            NATURE_ACTIVITYAR: 'خدمات الفحص الفني والمهني',
          },
        },
        {
          attributes: {
            NATURE_ACTIVITYEN: 'WORKSHOP AND PAINTING WORKS',
            NATURE_ACTIVITYAR: 'أعمال الورش والطلاء',
          },
        },
        {
          attributes: {
            NATURE_ACTIVITYEN: 'STORAGE',
            NATURE_ACTIVITYAR: 'التخزين',
          },
        },
        {
          attributes: {
            NATURE_ACTIVITYEN: 'REPAIRING AND MAINTENANCE',
            NATURE_ACTIVITYAR: 'الاصلاح والصيانة',
          },
        },
        {
          attributes: {
            NATURE_ACTIVITYEN: 'TRANSPORTATION SERVICES',
            NATURE_ACTIVITYAR: 'خدمات النقل',
          },
        },
        {
          attributes: {
            NATURE_ACTIVITYEN: 'LABOR SUPPLY OFFICES',
            NATURE_ACTIVITYAR: 'مكاتب تزويد العمالة',
          },
        },
        {
          attributes: {
            NATURE_ACTIVITYEN: 'MEDICAL AND VETERINARY SERVICES',
            NATURE_ACTIVITYAR: 'الخدمات الطبية والبيطرية',
          },
        },
        {
          attributes: {
            NATURE_ACTIVITYEN: 'BROKERAGE SERVICES',
            NATURE_ACTIVITYAR: 'خدمات الوساطة',
          },
        },
        {
          attributes: {
            NATURE_ACTIVITYEN: 'RETAIL',
            NATURE_ACTIVITYAR: 'البيع بالتجزئة',
          },
        },
        {
          attributes: {
            NATURE_ACTIVITYEN: 'TAJER ABUDHABI ACTIVITIES',
            NATURE_ACTIVITYAR: 'أنشطة تاجر أبوظبي',
          },
        },
        {
          attributes: {
            NATURE_ACTIVITYEN: 'INDUSTRY',
            NATURE_ACTIVITYAR: 'الصناعة',
          },
        },
        {
          attributes: {
            NATURE_ACTIVITYEN: 'TRADE CENTERS',
            NATURE_ACTIVITYAR: 'المراكز التجارية',
          },
        },
        {
          attributes: {
            NATURE_ACTIVITYEN: 'NATURAL RESERVES',
            NATURE_ACTIVITYAR: 'المحميات',
          },
        },
        {
          attributes: {
            NATURE_ACTIVITYEN: 'EDUCATION',
            NATURE_ACTIVITYAR: 'التعليم',
          },
        },
        {
          attributes: {
            NATURE_ACTIVITYEN: 'HANDICRAFTS',
            NATURE_ACTIVITYAR: 'الأعمال الحرفية الفنية',
          },
        },
        {
          attributes: {
            NATURE_ACTIVITYEN: 'TAILORING',
            NATURE_ACTIVITYAR: 'تفصيل وخياطة المنسوجات',
          },
        },
        {
          attributes: {
            NATURE_ACTIVITYEN: 'FLOORING AND FURNITURE INSTALLATION',
            NATURE_ACTIVITYAR: 'تركيب الأثاث والارضيات',
          },
        },
        {
          attributes: {
            NATURE_ACTIVITYEN: 'PARKS AND RECREATIONAL ACTIVITIES',
            NATURE_ACTIVITYAR: 'الحدائق والخدمات الترفيهية',
          },
        },
        {
          attributes: {
            NATURE_ACTIVITYEN: 'MINING AND METAL PROCESSING',
            NATURE_ACTIVITYAR: 'تعدين  ومعالجة المعادن',
          },
        },
        {
          attributes: {
            NATURE_ACTIVITYEN: 'PHOTOGRAPHY',
            NATURE_ACTIVITYAR: 'التصوير',
          },
        },
        {
          attributes: {
            NATURE_ACTIVITYEN: 'WASTE COLLECTION WORKS',
            NATURE_ACTIVITYAR: 'أعمال تجميع النفايات',
          },
        },
        {
          attributes: {
            NATURE_ACTIVITYEN:
              'VEHICLE AND MOTORCYCLE TRADING AND SERVICES (ELECTRIC - MOTOR - WATER)',
            NATURE_ACTIVITYAR:
              'خدمات وتجارة  المركبات والدراجات (الكهربائية - النارية - المائية)',
          },
        },
        {
          attributes: {
            NATURE_ACTIVITYEN: 'SMALL PRODUCER ACTIVITIES',
            NATURE_ACTIVITYAR: 'أنشطة صغار المنتجين',
          },
        },
        {
          attributes: {
            NATURE_ACTIVITYEN: 'AGRICULTURE',
            NATURE_ACTIVITYAR: 'الزراعة',
          },
        },
        {
          attributes: {
            NATURE_ACTIVITYEN: 'WHOLESALE',
            NATURE_ACTIVITYAR: 'التجارة بالجملة',
          },
        },
        {
          attributes: {
            NATURE_ACTIVITYEN: 'PEOPLE OF DETERMINATION ACTIVITIES',
            NATURE_ACTIVITYAR: 'أنشطة اصحاب الهمم',
          },
        },
      ],
      i18n: (key: string) => key,
      actions: {
        locale: {
          switch: jest.fn(),
        },
        breadcrumbs: {
          update: jest.fn(),
        },
        title: {
          update: jest.fn(),
        },
        hero: {
          update: jest.fn(),
        },
      },
      loggedIn: false,
    };
  });

  afterEach(cleanup);

  test('renders a message', () => {
    render(
      <MemoryRouter>
        <ViewportProvider>
          <Viewport sm md lg xl>
            <Home {...props} />
          </Viewport>
        </ViewportProvider>
      </MemoryRouter>,
    );
  });
});
