import React from 'react';
import ReactDOM from 'react-dom';
import Card from '@tamm/ui-lib-v2-card';
import Container from 'client/containers';
import { withTemplateHooks, IVariables } from '@tamm/app-composer';
import routePropTypes from '@tamm/app-composer/client/propTypes/route';
// import JourneyLandingTemplate from '@tamm/ui-lib-v2-journey-landing-template';
import BusinessDirectoryMap from '@tamm/ui-lib-v2-map';
import Select from '@tamm/ui-lib-v2-select';
import Sidebar from 'client/templates/Sidebar';
// import Label from '@tamm/ui-lib-v2-label';
import './index.less';

import thumbnailMapLight from '@tamm/ui-lib-v2-map/images/map-light.png';
import thumbnailMapDark from '@tamm/ui-lib-v2-map/images/map-dark.png';
import thumbnailMapSat from '@tamm/ui-lib-v2-map/images/map-sat.png';

/* istanbul ignore file */

let mapHelper: any;

/**
 * Landing template
 * @param       {Object} props
 * @returns     {JSX}
 */
function Landing(props: IVariables) {
  const { i18n, locale, token, natureList } = props;

  const items =
    locale === 'en'
      ? natureList &&
        [...natureList]
          .sort((a: any, b: any) =>
            a.attributes.NATURE_ACTIVITYEN > b.attributes.NATURE_ACTIVITYEN
              ? 1
              : -1,
          )
          .map((option: any) => ({
            id: option.attributes.NATURE_ACTIVITYEN,
            label: option.attributes.NATURE_ACTIVITYEN,
          }))
      : natureList &&
        [...natureList]
          .sort((a: any, b: any) =>
            a.attributes.NATURE_ACTIVITYEN > b.attributes.NATURE_ACTIVITYEN
              ? 1
              : -1,
          )
          .map((option: any) => ({
            id: option.attributes.NATURE_ACTIVITYEN,
            label: option.attributes.NATURE_ACTIVITYAR,
          }));

  const getActivityCode = () => {
    const { selectedHeatActivity } = props;

    if (selectedHeatActivity && selectedHeatActivity.length > 0) {
      const activityArray =
        selectedHeatActivity &&
        selectedHeatActivity.map(
          (a: any) =>
            `Activity_IDs like '%#${
              a.attributes.ACTIVITY_ID.charAt(0) === '0'
                ? a.attributes.ACTIVITY_ID.substr(1)
                : a.attributes.ACTIVITY_ID
            }#%'`,
        );
      return activityArray && activityArray.join(' OR ');
    }
    return '1<>1';
  };

  // const getRentIndex = async (point: any) => {
  //   const { locale } = props;
  //   if (mapHelper && point) {
  //     const rentIndexUrl: string =
  //       'https://arcgis.sdi.abudhabi.ae/agshost/rest/services/TAMM/RentBuyIndexes/MapServer/1';
  //     const query: any = {
  //       where: `CALENDAR_YEAR = 2018 AND YEARLY_QUARTER = 2`,
  //       outFields: ['*'],
  //       geometry: point,
  //     };
  //     const queryTask: any = new mapHelper.loadedModules.QueryTask({
  //       url: rentIndexUrl,
  //     });
  //     try {
  //       const results = await queryTask.execute(query);
  //       debugger;
  //       if (results && results.features.length > 0) {
  //         const areaName = results.features[0].attributes.DISTRICT_NAME;
  //         const el = document.createElement('div');
  //         const output = (
  //           <div>
  //             <div> Rent Index in {areaName}</div>
  //             <table className="">
  //               <tbody>
  //                 {results.features.map((feature: any) => {
  //                   return (
  //                     <tr>
  //                       <td>
  //                         {feature.attributes.CALENDAR_YEAR}/Q
  //                         {feature.attributes.YEARLY_QUARTER}
  //                       </td>
  //                       <td>{feature.attributes.UNIT_TYPE}</td>
  //                       <td>{feature.attributes.RENTAL_INDEX}</td>
  //                     </tr>
  //                   );
  //                 })}
  //               </tbody>
  //             </table>
  //           </div>
  //         );
  //         return output;
  //       }
  //     } catch (error) {
  //       console.error(error);
  //     }
  //   }
  //   return '';
  // };

  /**
   * Get Activity Names List
   * @param {Object} featureAttributes Feature Attributes
   * @returns {ReactElement}
   */
  const getActivityList = (featureAttributes: any) => {
    const values =
      locale === 'en'
        ? featureAttributes.Activity_Names
        : featureAttributes.Activity_Names_Ar;
    const splitter = locale === 'en' ? ',' : '،';
    return (
      <ul>
        {values.split(splitter).map((item: string) => {
          return (
            <li
              key={item}
              style={{
                listStyleType: 'square',
                listStylePosition: 'inside',
              }}
            >
              {item}
            </li>
          );
        })}
      </ul>
    );
  };

  const mapProps = {
    config: {
      esriApiUrl: '',
      esriCSS: '',
      CSPRestrictions: true,
      initialExtent: {
        center: [54.482373, 24.423722],
        scale: 1000000,
        tilt: 85,
        heading: 351,
      },
      defaultZoomScale: 1000,
      defaultExtentExpandFactor: 1.2,
      tokens: [
        {
          server: 'https://arcgis.sdi.abudhabi.ae/agshost/rest/services',
          token,
        },
      ],
      layers: [
        {
          title: 'Heatmaps',
          type: 'GroupLayer',
          visible: true,
          // visibilityMode: 'exclusive',
          layers: [
            {
              addToMap: true,
              visible: true,
              addToSearch: false,
              url:
                'https://arcgis.sdi.abudhabi.ae/agshost/rest/services/TAMM/CF_Commerce_And_Industry/MapServer/2',
              searchFields: ['NAMEENG'],
              displayField: 'NAMEENG',
              suggestionTemplate: '{NAMEENG}',
              outFields: ['*'],
              name: 'Activity Location',
              placeholder: 'Example: ABC',
              popupEnabled: true,
              popupTemplate: {
                title: 'Business Location',
                content: 'Name: {NAMEENG} ',
              },
              maxScale: 15000,
              definitionExpression: getActivityCode(),
              opacity: 0.8,
              renderer: {
                type: 'heatmap',
                colorStops: [
                  { color: 'rgba(22, 17, 56, 0)', ratio: 0 },
                  { color: '#FFDD00', ratio: 0.5 },
                  { color: '#FF6060', ratio: 1 },
                ],
                maxPixelIntensity: 20,
                minPixelIntensity: 0,
              },
            },
          ],
        },
        {
          title: 'Companies',
          type: 'GroupLayer',
          visible: true,
          // visibilityMode: 'exclusive',
          layers: [
            {
              addToMap: true,
              visible: true,
              addToSearch: false,
              url:
                'https://arcgis.sdi.abudhabi.ae/agshost/rest/services/TAMM/CF_Commerce_And_Industry/MapServer/2',
              searchFields: ['NAMEENG'],
              displayField: 'NAMEENG',
              suggestionTemplate: '{NAMEENG}',
              outFields: ['*'],
              name: 'Companies',
              placeholder: 'Example: ABC',
              minScale: 15000,
              hover: {
                enable: true,
                template: locale === 'en' ? '{NAMEENG}' : '{NAMEAR}',
              },
              renderer: {
                type: 'simple',
                symbol: {
                  type: 'simple-marker',
                  size: 10,
                  color: 'green',
                  outline: {
                    width: 0.5,
                    color: 'white',
                  },
                },
              },
              popupEnabled: true,
              popupTemplate: {
                title: i18n('map.popup.title'),
                outFields: ['*'],
                content: async (result: any) => {
                  const attr = result.graphic.attributes;
                  const el = document.createElement('div');
                  const card = (
                    <React.Fragment>
                      <div className="map-popup-content">
                        <Card.Body.Data
                          uiType={Card.Body.Data.UiType.HORIZONTAL}
                          items={[
                            {
                              label: i18n('map.popup.name'), // 'Name',
                              content:
                                locale === 'en' ? attr.NAMEENG : attr.NAMEAR,
                            },
                            {
                              label: i18n('map.popup.phone'), // 'Phone',
                              content: attr.PHONENUMBER,
                            },
                          ]}
                        />
                        <Card.Body.Separator />
                        <Card.Body.Data
                          uiType={Card.Body.Data.UiType.VERTICAL}
                          items={[
                            {
                              label: i18n('map.popup.activities'), // 'Name',
                              content: getActivityList(attr),
                            },
                          ]}
                        />
                      </div>
                      {/* {await getRentIndex(result.graphic.geometry)} */}
                    </React.Fragment>
                  );
                  ReactDOM.render(card, el);

                  return el;
                },
              },
              definitionExpression: getActivityCode(),
              // opacity: 0.8,
            },
          ],
        },
      ],
      sceneLayers: [
        {
          id: 'building_ad_history',
          title: 'Abu Dhabi Buildings',
          type: 'SceneLayer',
          visible: true,
          url:
            'https://arcgis.sdi.abudhabi.ae/agshost/rest/services/Hosted/building_ad_history/SceneServer',
          popupTemplate: {
            title: '{TexName}',
            content: 'Built in {Year} and max height is {MaxHeight}',
          },
          popupEnabled: true,
        },
      ],
      points: [],
      polygons: [],
      queries: [],
      button3D: {
        enable: false,
      },
      search: {
        enable: false,
        locationEnabled: false, // optional. default: true
        locator: {
          enable: true,
          sources: [
            {
              url:
                'https://geocode.arcgis.com/arcgis/rest/services/World/GeocodeServer',
              name: 'ArcGIS World Geocoding Service',
              placeholder: 'Enter an Address',
              countryCode: 'AE',
              resultSymbol: {
                type: 'simple-marker',
                color: 'blue',
                outline: {
                  color: '#171138',
                  width: 3,
                },
              },
              featureDetails: [
                {
                  icon: 'location',
                  field: 'StName',
                },
              ],
              intersections: [],
            },
            {
              url:
                'https://arcgis.sdi.abudhabi.ae/arcgis/rest/services/Pub/GC_Address_Locator_En/GeocodeServer',
              name: 'ADSSSA Locator',
              placeholder: 'Example: 10, Zayed The First St',
              countryCode: 'AE',
            },
          ],
        },
      },
      resultCard: {
        showCoordinates: false,
        showDistance: true,
      },
      basemapGallery: {
        enable: false,
        basemaps: [
          {
            url:
              locale === 'en'
                ? 'https://arcgis.sdi.abudhabi.ae/arcgis/rest/services/Pub/BaseMapEng_LightGray_WM/MapServer'
                : 'https://arcgis.sdi.abudhabi.ae/arcgis/rest/services/Pub/BaseMapAra_LightGray_WM/MapServer',
            title: 'Grey Map',
            thumbnailUrl: thumbnailMapLight,
          },
          {
            url:
              locale === 'en'
                ? 'https://arcgis.sdi.abudhabi.ae/arcgis/rest/services/Pub/BaseMapEng_DarkGray_WM/MapServer'
                : 'https://arcgis.sdi.abudhabi.ae/arcgis/rest/services/Pub/BaseMapAra_DarkGray_WM/MapServer',
            title: 'Dark Map',
            thumbnailUrl: thumbnailMapDark,
          },
          {
            url:
              'https://arcgis.sdi.abudhabi.ae/arcgis/rest/services/Pub/IMG_SAT_50CM_WM/MapServer',
            title: 'Satellite',
            thumbnailUrl: thumbnailMapSat,
          },
        ],
      },
      layerList: {
        enable: false,
      },
      popup: {
        enable: true,
      },
      home: {
        enable: true,
      },
      track: {
        enable: true,
      },
      directions: {
        enable: false,
        url:
          'https://arcgis.sdi.abudhabi.ae/portal/sharing/servers/e7f544bec49f4edd9f2885176d86b785/rest/services/World/Route/NAServer/Route_World',
      },
      legend: {
        enable: false,
      },
      assistedSearch: {
        enable: false,
        symbol: {
          type: 'simple-fill',
          style: 'none',
          outline: {
            color: [0, 0, 255],
            width: 1,
          },
        },
      },
      magicLens: {
        enable: false,
        radius: 100,
        enableAtZoomLevel: 8,
      },
      featureDetails: {
        enable: false,
      },
      filter: {
        enable: false,
      },
      mapScreenShot: {
        enable: false,
        font: '2rem Roboto, Noto Kufi Arabic',
        fillStyle: '#171138',
        fileName: 'ScreenShot.png',
      },
      thematicMaps: {
        enable: false,
      },
      hover: {
        enable: true,
      },
      preventDefault: {
        mapClick: false,
        searchComplete: false,
        searchClear: false,
        sideBar: true,
        sortResults: false,
        mapHover: false,
      },
    },
  };

  const onMapReady = async (mapHelp: any) => {
    mapHelper = mapHelp;

    setTimeout(() => {
      // eslint-disable-next-line no-unused-expressions
      mapHelper && mapHelper.Map && mapHelper.Map.switchEsriLocale();
    }, 1000);
  };

  const onChangeFunction = async (value: string, data: IVariables) => {
    await props.onChange(value, data);
    mapHelper.Map.createOperationalLayers();
  };

  return (
    <>
      <Container
        locale={props.locale}
        sidebar={
          <Sidebar
            currentStep={props.currentStep}
            currentSubStep={props.currentSubStep}
            i18n={props.i18n}
            steps={props.steps}
            stepsStatus={props.stepsStatus}
            showRelatedJourneyCard={props.showRelatedJourneyCard}
          />
        }
      >
        <div className="business-directory">
          <p className="business-directory__description">
            {i18n('business-directory.description')}
          </p>
          <section className="content-group">
            <div className="business-directory__hover-tray">
              <Select
                label={i18n('business-directory.tray-title')}
                {...props}
                items={items}
                value={props.selectedHeatCategory}
                placeholder={i18n('business-directory.placholder')}
                showSearch={false}
                onChange={(value: string) => onChangeFunction(value, props)}
              />
            </div>
            <div
              style={{
                width: '100%',
                height: '80rem',
              }}
              className="business-directory__map uil-margin-top-normal"
            >
              <BusinessDirectoryMap
                i18n={i18n}
                {...mapProps}
                onMapReady={onMapReady}
              />
            </div>
          </section>
          <p className="business-directory__description">
            {i18n('business-directory.distribution-source')}
          </p>
        </div>
      </Container>
    </>
  );
}

Landing.propTypes = {
  ...routePropTypes,
};

export default withTemplateHooks(Landing);
