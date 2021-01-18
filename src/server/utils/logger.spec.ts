import TammLogger from '@tamm/logger';

jest.mock('@tamm/logger', () =>
  jest.fn(() => ({
    getMiddleware: jest.fn(),
  })),
);
jest.mock('config', () => ({
  projectName: 'projectName',
  log: {
    level: 'level',
    directory: 'directory',
    types: ['type'],
  },
}));

describe('logger', () => {
  let mockLogger: any;

  it('should call TammLogger() and getMiddleware() with correct params', () => {
    // eslint-disable-next-line global-require
    mockLogger = require('./logger');

    mockLogger.getMiddleware();

    expect(TammLogger).toHaveBeenCalledWith({
      projectName: 'projectName',
      log: {
        level: 'level',
        directory: 'directory',
        types: ['type'],
      },
    });
    expect(mockLogger.default.getMiddleware).toHaveBeenCalled();
  });
});
