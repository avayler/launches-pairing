import classNames from '../utilities/classNames';

describe('classNames utility function', () => {
  it('Verify that className string is constructed and is valid', () => {
    const className = classNames(' foo', 'bar ', ' baz ', '', ' ', null, undefined);
    expect(className).toEqual('foo bar baz');
  });
});
