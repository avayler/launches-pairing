import randomString from '../utilities/randomString';

describe('randomString utility function', () => {
  it('Verify that randomString value is valid', () => {
    const length = 8;
    const value = randomString(length);
    expect(value).toHaveLength(length);
  });
});
