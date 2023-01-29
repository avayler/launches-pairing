import launchData from '../data/launches-test.json';
import Card from '../components/Card';
import show, { mount } from '../utilities/show';

describe('show utility function', () => {
  it('Verify that function can show and hide a node', async () => {
    const launch = launchData[0];
    const shown = show(true, <Card {...launch} />);
    const hidden = show(false, <Card {...launch} />);
    const unmounted = show(false, <Card {...launch} />, true);

    expect(shown).not.toBeNull();
    expect(hidden).not.toBeNull();
    expect(unmounted).toBeNull();

    expect(shown.props).toEqual({ children: <Card {...launch} /> });

    expect(hidden.type).toBeInstanceOf(Function);
    expect(hidden.type.name).toBe('Hidden');
    expect(hidden.props).toEqual({ children: <Card {...launch} /> });
  });
});

describe('mount utility function', () => {
  it('Verify that function can mount and unmount a node', async () => {
    const launch = launchData[0];
    const mounted = mount(true, <Card {...launch} />);
    const unmounted = mount(false, <Card {...launch} />);

    expect(mounted).not.toBeNull();
    expect(unmounted).toBeNull();

    expect(mounted.props).toEqual({ children: <Card {...launch} /> });
  });
});
