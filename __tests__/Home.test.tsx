/**
 * @jest-environment jsdom
 */

require('dotenv').config();
import '@testing-library/jest-dom';
import React from 'react';
import { render } from '@testing-library/react';
import launchData from '../data/launches-test.json';
import Home from '../pages';

const { SPACEX_API_BASEURL, SPACEX_API_LAUNCHES_SLUG } = process.env;
const url = `${SPACEX_API_BASEURL}${SPACEX_API_LAUNCHES_SLUG}/query`;

describe('Home page component', () => {
  it('Verify that Home page renders a list of Card components', async () => {
    const { container } = render(<Home preloadData={launchData as Launch[]} apiUrl={url} />);
    const cards = container.querySelectorAll('.card');
    expect(cards).toHaveLength(launchData.length);
  });
});
