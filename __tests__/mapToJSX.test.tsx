import launchData from '../data/launches-test.json';
import LaunchCard from '../components/Launch';
import mapToJSX from '../utilities/mapToJSX';

describe('mapToJSX utility function', () => {
  it('Verify that function returns an array of react elements', async () => {
    const elements = mapToJSX(launchData, LaunchCard);

    expect(elements).toHaveLength(launchData.length);
    // Verify that each element is a react element with the correct props and type
    for (let i = 0; i < elements.length; i++) {
      const element = elements[i];
      const launch = launchData[i];

      expect(element.type).toBeInstanceOf(Function);
      expect(element.type.name).toBe('Launch');
      expect(element.props).toEqual(launch);
    }
  });
});
