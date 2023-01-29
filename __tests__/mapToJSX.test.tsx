import launchData from '../data/launches-test.json';
import Card from '../components/Card';
import mapToJSX from '../utilities/mapToJSX';

describe('mapToJSX utility function', () => {
  it('Verify that function returns an array of react elements', async () => {
    const elements = mapToJSX(launchData, Card);

    expect(elements).toHaveLength(launchData.length);
    for (let i = 0; i < elements.length; i++) {
      const element = elements[i];
      const launch = launchData[i];

      expect(element.type).toBeInstanceOf(Function);
      expect(element.type.name).toBe('Card');
      expect(element.props).toEqual(launch);
    }
  });
});
