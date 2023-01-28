/**
 * @jest-environment jsdom
 */

import React from 'react';
import { render } from '@testing-library/react';
import launchData from '../data/launches-test.json';
import Card from '../components/Card';
import mapToJSX from '../utilities/mapToJSX';

describe('mapToJSX utility function', () => {
  it('Verify that function renders a list of Card components', async () => {
    const elements = mapToJSX(launchData, Card);
    const { container } = render(<>{elements}</>);
    const cards = container.querySelectorAll('.card');

    expect(elements).toHaveLength(launchData.length);
    expect(cards).toHaveLength(launchData.length);

    for (let i = 0; i < cards.length; i++) {
      const { name, date, core, image_url, success, payloads, failureReason } = launchData[i] as Launch;
      const card = cards[i];
    }
  });
});
