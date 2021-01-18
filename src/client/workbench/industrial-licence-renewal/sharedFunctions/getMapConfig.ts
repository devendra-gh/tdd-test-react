const onClickMapPin = (props: any) => {
  return (data: any) => {
    console.info('-----onClickMapPin-----', props, data);
    // props.actions.exampleValue.update('Updated value');
    const {
      attributes,
      geometry: {
        centroid: { latitude, longitude },
      },
    } = data;
    props.actions.locationDetails.update(attributes);
    props.actions.latitude.update(latitude);
    props.actions.longitude.update(longitude);
    console.info('-----Updated-----');
  };
};

export default function getMapConfig() {
  // call the function with call_ for accessing the props
  const call_config = (props: any) => {
    return {
      esriApiUrl: '',
      esriCSS: '',
      CSPRestrictions: true,
      initialExtent: {
        center: [54.482373, 24.423722],
        scale: 1000000,
        tilt: 85,
        heading: 351,
      },
      queries: [],
      home: {
        enable: true,
      },
      popup: {
        enable: true,
      },
      track: {
        enable: true,
      },
      button3D: {
        enable: true,
      },
      basemapGallery: {
        enable: true,
        basemaps: [
          {
            url:
              'https://arcgis.sdi.abudhabi.ae/arcgis/rest/services/Pub/BaseMapEng_LightGray_WM/MapServer',
            title: 'Grey Map',
            thumbnailUrl: '',
          },
          {
            url:
              'https://arcgis.sdi.abudhabi.ae/arcgis/rest/services/Pub/BaseMapEng_DarkGray_WM/MapServer',
            title: 'Dark Map',
            thumbnailUrl: '',
          },
          {
            url:
              'https://arcgis.sdi.abudhabi.ae/arcgis/rest/services/Pub/IMG_SAT_50CM_WM/MapServer',
            title: 'Satellite',
            thumbnailUrl: '',
          },
        ],
      },
      layerList: {
        enable: true,
      },
      legend: {
        enable: true,
      },
      assistedSearch: {
        enable: true,
      },
      hover: {
        enable: true,
      },
      bufferSearch: {
        enable: true,
        minRadius: 1,
        maxRadius: 20,
      },
      search: {
        enable: true,
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
                {
                  button: 'Select',
                  onClick: onClickMapPin(props),
                },
              ],
              intersections: [
                {
                  name: 'District',
                  url:
                    'https://arcgis.sdi.abudhabi.ae/arcgis/rest/services/Pub/Generic_Search/MapServer/6',
                },
                {
                  name: 'Plots',
                  url:
                    'https://arcgis.sdi.abudhabi.ae/arcgis/rest/services/Pub/Generic_Search/MapServer/10',
                },
              ],
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
      mapPin: {
        enable: true,
        title: 'Map Pin',
        description: 'This is a custom map pin',
      },
      layers: [
        {
          title: 'Plots',
          type: 'GroupLayer',
          visible: false,
          visibilityMode: 'independent',
          layers: [
            {
              addToMap: true,
              visible: false,
              addToSearch: true,
              url:
                'https://arcgis.sdi.abudhabi.ae/arcgis/rest/services/Pub/Generic_Search/MapServer/10',
              searchFields: ['PLOTID'],
              displayField: 'PLOTID',
              outFields: ['*'],
              name: 'Plots',
              featureDetails: [
                {
                  button: 'This is my home!',
                  onClick: onClickMapPin(props),
                },
                {
                  icon: '',
                  field: 'COMMUNITYENG',
                  label: 'Community',
                },
              ],
              placeholder: 'Example: 123',
              legendEnabled: false,
              popupEnabled: true,
              renderer: {
                type: 'simple',
                symbol: {
                  type: 'simple-fill',
                  color: 'rgba(200,200,200,0.5)',
                  outline: null,
                },
              },
              popupTemplate: {
                title: '{PLOTID}',
                content: 'Plot ID: {PLOTID}',
              },
            },
          ],
        },
      ],
      sceneLayers: [],
    };
  };

  return call_config;
}
