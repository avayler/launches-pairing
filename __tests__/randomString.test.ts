import randomString from '../utilities/randomString';

describe('randomString utility function', () => {
  it('Verify that random value is of the correct length and is a string', () => {
    const length = 8;
    const value = randomString(length);

    expect(typeof value).toBe('string');
    expect(value).toHaveLength(length);
  });
});
