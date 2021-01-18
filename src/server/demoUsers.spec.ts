import demoUsers from './demoUsers';

describe('server/demoUsers', () => {
  it('should be Object', () => {
    expect(demoUsers).toBeInstanceOf(Object);
  });
});
