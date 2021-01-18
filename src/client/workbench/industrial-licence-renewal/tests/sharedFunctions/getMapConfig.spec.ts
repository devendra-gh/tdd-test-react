import getMapConfig from '../../sharedFunctions/getMapConfig';

describe('Shared functions => getMapConfig', () => {
  it('should cover', () => {
    const props = {
      actions: {
        locationDetails: {
          update: jest.fn(),
        },
        latitude: {
          update: jest.fn(),
        },
        longitude: {
          update: jest.fn(),
        },
      },
    };
    const mapInstance = getMapConfig()(props);
    expect(mapInstance).toBeInstanceOf(Object);
    const data = {
      attributes: '',
      geometry: {
        centroid: { latitude: 12.3, longitude: 21.23 },
      },
    };
    mapInstance?.search?.locator?.sources?.[0]?.featureDetails?.[1].onClick?.(
      data,
    );
  });
});
