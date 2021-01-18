import { IVariables } from '@tamm/app-composer';
import { merge, get } from 'lodash';
import { isGCC } from 'client/config/utils/gcc';
import fetch from 'client/services/fetch';

const getActivities = (
  props: IVariables,
  licenceType: string,
  ownership: IVariables,
  isECommerce = false,
) => {
  return async (category: string, page = 1, searchTerm = null) => {
    const checkECommerce = () => {
      if (!isECommerce) {
        props.actions.activities.update({
          isLoading: true,
          totalItems: 0,
          items: [],
        });
      }
    };
    checkECommerce();

    const { locale } = props;
    const { activityCategory, activitySubCategory } = props.economicLicense;

    // eslint-disable-next-line no-unused-vars
    let nationality: string;
    let nationalityCat: string;
    // const { ownership } = props.economicLicense;

    const checkOwnershipOwner = () => {
      if (
        (ownership.owner && ownership.owner.length > 0) ||
        (ownership.partner && ownership.partner.length > 0)
      ) {
        nationality = 'ARE';
        nationalityCat = 'local';
        if (ownership.owner.length > 0) {
          ownership.owner.forEach((owner: any) => {
            if (owner.nationality !== 'ARE' && nationalityCat !== 'expat') {
              if (nationalityCat === 'local' && isGCC(nationalityCat)) {
                nationality = owner.nationality;
                nationalityCat = 'gcc';
              }
              if (!isGCC(nationalityCat)) {
                nationality = owner.nationality;
                nationalityCat = 'expat';
              }
              nationality = owner.nationality;
            }
          });
        }
        if (ownership.partner.length) {
          ownership.partner.forEach((owner: any) => {
            if (owner.nationality !== 'ARE' && nationalityCat !== 'expat') {
              if (nationalityCat === 'local' && isGCC(nationalityCat)) {
                nationality = owner.nationality;
                nationalityCat = 'gcc';
              }
              if (!isGCC(nationalityCat)) {
                nationality = owner.nationality;
                nationalityCat = 'expat';
              }
              nationality = owner.nationality;
            }
          });
        }
      }
    };
    checkOwnershipOwner();

    if (licenceType) {
      const requestConfig = {
        searchType: 'BY FIELD',
        // nationalityCode: user['Nationality EN'],
        // legalType: 'Establishment',
        // gender: user.Gender,
        configurationList: [
          {
            operator: 'and',
            pageNumber: String(page),
            pageSize: '12',
          },
        ],
      };

      let filter: IVariables;

      const checkLicenceType = () => {
        switch (licenceType) {
          case 'branch':
            filter = {
              searchType: 'BY FIELD',
              searchBy: [
                {
                  Field: 'not allowed for frc',
                  Value: 'N',
                },
              ],
            };
            break;
          case 'instant':
            filter = {
              searchType: 'BYFIELD_INSTANT',
              searchBy: [
                {
                  Field: 'sub nature',
                  Value: category || props.categories[0].nameEn,
                },
              ],
            };
            break;
          case 'tajer':
            filter = {
              searchType: 'BY FIELD',
              searchBy: [
                {
                  Field: 'lease optional',
                  Value: 'checked',
                },
              ],
            };
            break;
          case 'mubdia':
            filter = {
              searchBy: [
                {
                  Field: 'creativity activity',
                  Value: 'Y',
                },
              ],
              legalType: 'Establishment',
              nationalityCode: 'ARE',
              gender: 'Female',
            };
            break;
          case 'tech':
            filter = {
              searchBy: [
                {
                  Field: 'nature activity en',
                  Value: 'tech',
                },
              ],
            };
            break;
          case 'allInOne':
            filter = {
              searchBy: [],
            };
            break;
          default: {
            const tmpSearch = [];
            if (activityCategory !== '') {
              tmpSearch.push({
                field: `nature activity ${locale}`,
                value: activityCategory,
              });
            }
            if (activitySubCategory !== '') {
              tmpSearch.push({
                field: `sub nature ${locale}`,
                value: activitySubCategory,
              });
            }
            filter = {
              searchBy: [...tmpSearch],
            };
          }
        }
      };
      checkLicenceType();

      const checkSearchTerm = () => {
        if (searchTerm) {
          // console.info('SEARCH BY', filter.searchBy);
          filter.searchBy = [
            ...filter.searchBy,
            {
              Field: `activity name ${locale}`,
              Value: searchTerm,
            },
          ];
        }

        if (isECommerce) {
          filter.searchBy = [
            {
              Field: 'sub nature activity en',
              Value: 'e-Commerce',
            },
          ];
        }
      };
      checkSearchTerm();

      // if (nationality !== '') filter.nationalityCode = nationality;

      const getPayload = async () => {
        try {
          const payload = await fetch(
            '/pub/proxy/getActivities',
            'POST',
            merge({}, requestConfig, filter),
          );
          const activities = get(payload, 'data.result.activityinfoData', []);

          if (isECommerce) {
            return activities;
          }

          const [, , fromRow] = activities[0].responseInfo.match(
            /Row : (\d+) From : (\d+) \| Page : (\d+) From : (\d+)/,
          );

          props.actions.activities.update({
            isLoading: false,
            totalItems: fromRow,
            items: activities,
          });
        } catch (e) {
          if (isECommerce) {
            return [];
          }
          props.actions.activities.update({
            isLoading: false,
            totalItems: 0,
            items: [],
          });
        }

        return false;
      };
      getPayload();
    }
  };
};

export default getActivities;
