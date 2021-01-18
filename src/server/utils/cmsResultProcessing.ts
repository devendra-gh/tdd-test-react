import config from 'config';
import tammLogger from 'server/utils/logger';
import { includes, startsWith } from 'lodash';
import deepMap from 'server/utils/deepMap';

const { cms: cmsConfig } = config;

const VALID_ATTRIBUTE_LIST = ['text', 'alt', 'src', 'href'];

const logger = tammLogger.getService();

/**
 * Get attribute from DOM string
 * @param {string} attrName - attribute name
 * @param {string} str - DOM string
 * @returns {string}
 */
export function getAttributeValueFromString(attrName: string, str: string) {
  if (!attrName || !VALID_ATTRIBUTE_LIST.includes(attrName) || !str) {
    return '';
  }

  const regexp = new RegExp(`${attrName}="(.+?)"`, 'gm');
  const arr = str.match(regexp);
  let attrValue = '';

  if (arr && arr.length) {
    attrValue = arr[0].split('=')[1].replace(/"/g, '');
  }

  return attrValue;
}

/**
 * Get array from poweredBy DOM source
 * @param {string} str - DOM string
 * @returns {Array}
 */
export function getAttrListFromPoweredBySource(str: string) {
  if (!str) {
    return [];
  }

  return str
    .split('<li>')
    .filter(item => /href="[^#].+?"/.test(item))
    .map(item => ({
      title: getAttributeValueFromString('alt', item),
      image: `${cmsConfig.tammUrl}/${getAttributeValueFromString('src', item)}`,
      link: getAttributeValueFromString('href', item),
    }));
}

/**
 * Process cms result
 * @param {Object} cms
 * @param {Object} journeyInfo
 * @returns {Object}
 */
export function processCmsResult(cms: any, journeyInfo = {}) {
  const cmsObject = {
    ...cms,
    journeyInfo: deepMap(journeyInfo, (value: any) => {
      if (
        startsWith(value, '/en/') ||
        startsWith(value, '/ar-AE/') ||
        includes(value, '/-/media')
      ) {
        return `${cmsConfig.tammUrl}${value}`;
      }
      return value;
    }),
    tammUrl: cmsConfig.tammUrl,
    tammWorkbenchUrl: cmsConfig.tammWorkbenchUrl,
  };

  const {
    socialLinks = {},
    poweredByLinks = {},
    emergencyNumbers = {},
    metaPages = {},
  } = cmsObject;

  try {
    Object.keys(socialLinks).forEach(lang => {
      const socialLinksList = socialLinks[lang];
      const metaPagesList = metaPages[lang];
      const poweredByLinksObject = poweredByLinks[lang];
      const emergencyNumbersObject = emergencyNumbers[lang];

      /* process socialLinks */
      if (socialLinksList) {
        socialLinks[lang] = socialLinksList.filter(
          (item: any) => item.link && !/google.com$/.test(item.link),
        );
      }

      /* process emergencyNumbers */
      if (emergencyNumbersObject) {
        const emergencyNumbersResult: CMS.EmergencyNumbers = {
          emergencyHeading: emergencyNumbersObject.emergencyHeading,
          emergencyLabel: emergencyNumbersObject.emergencyLabel,
          items: [],
        };

        let counter = 1;
        while (emergencyNumbersObject[`numberText${counter}`]) {
          emergencyNumbersResult.items.push({
            label: emergencyNumbersObject[`numberText${counter}`],
            number: getAttributeValueFromString(
              'text',
              emergencyNumbersObject[`numberLink${counter}`],
            ),
          });

          counter += 1;
        }

        emergencyNumbers[lang] = { ...emergencyNumbersResult };
      }

      /* process poweredByLinks section */
      if (poweredByLinksObject) {
        poweredByLinks[lang] = getAttrListFromPoweredBySource(
          poweredByLinks[lang].source,
        );
      }

      /* process metaPages section */
      if (metaPagesList) {
        metaPages[lang] = metaPagesList.reduce(
          (meta: CMS.PageMeta, page: CMS.Page) => ({
            ...meta,
            [page.id.toLowerCase()]: page,
          }),
          {},
        );
      }
    });
  } catch (err) {
    logger.error('Failed to process cms', { err });
  }

  return cmsObject;
}
