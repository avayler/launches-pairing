/**
 * @jest-environment jsdom
 */

require('dotenv').config();
import '@testing-library/jest-dom';
import React from 'react';
import { render } from '@testing-library/react';
import launchData from '../data/launches-test.json';
import LaunchCard from '../components/Launch';
import { act } from 'react-dom/test-utils';
import SimpleGrid from '../components/SimpleGrid';

const withContext = <P extends Launch>(props: P) => (
  <SimpleGrid>
    {({ activeId, setActiveId }) => (
      <LaunchCard {...props} showStatus={activeId === props.id} onButtonClick={setActiveId} />
    )}
  </SimpleGrid>
);

describe('Launch component', () => {
  it('Verify that Card component renders and initial state is correct', async () => {
    const launch = launchData[0] as Launch;
    const { container } = render(withContext(launch));

    const card = container.querySelector('.card');
    const header = container.querySelector('.header');
    const image = container.querySelector('img');
    const button = container.querySelector('button');

    expect(card).not.toBeNull();
    expect(card).not.toHaveClass('status_success');
    expect(card).not.toHaveClass('status_failure');

    expect(header).not.toBeNull();
    expect(header).toHaveClass('header');
    expect(header).not.toHaveClass('status_success');
    expect(header).not.toHaveClass('status_failure');

    expect(image).not.toBeNull();
    expect(image.getAttribute('src')).toMatch(launch.image_url);
    expect(image).toHaveAttribute('alt', launch.name);

    expect(button).not.toBeNull();
    expect(button).toHaveClass('button');

    if (launch.success) expect(button).toHaveClass('status_success');
    else expect(button).toHaveClass('status_failure');
  });

  it('Verify that Card component renders with correct text', async () => {
    const launch = launchData[0] as Launch;
    const { getByText } = render(withContext(launch));

    expect(getByText(launch.name)).not.toBeNull();
    expect(getByText(new Date(launch.date).toLocaleString())).not.toBeNull();
    expect(getByText(launch.core)).not.toBeNull();

    if (launch.details !== undefined) expect(getByText(launch.details)).toBeNull();
    for (let i = 0; i < launch.payloads.length; i++) {
      const payload = launch.payloads[i];
      expect(getByText(payload.type)).not.toBeNull();
      expect(getByText(payload.id)).not.toBeNull();
    }
  });

  it('Verify that Card component can change state', () => {
    const launch = launchData[0] as Launch;
    const { container, getByText } = render(withContext(launch));

    const card = container.querySelector('.card');
    const header = container.querySelector('.header');
    const button = container.querySelector('button');
    const statusClassName = launch.success ? 'status_success' : 'status_failure';
    const statusText = launch.success ? 'Was successful' : 'Was a failure';
    const statusDetails = launch.details || launch.failureReason || 'There is currently no details available';

    act(() => button.click());

    expect(card).toHaveClass(statusClassName);
    expect(header).toHaveClass(statusClassName);
    expect(button).not.toHaveClass(statusClassName);

    expect(getByText(statusText)).not.toBeNull();
    expect(getByText(statusDetails)).not.toBeNull();
  });
});
