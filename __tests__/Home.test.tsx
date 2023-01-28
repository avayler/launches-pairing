/**
 * @jest-environment jsdom
 */

require('dotenv').config();
import React from 'react';
import { render, waitFor } from '@testing-library/react';
import axios from 'axios';
import launchData from '../data/launches-test.json';
import Home from '../pages';

const { SPACEX_API_BASEURL, SPACEX_API_LAUNCHES_SLUG } = process.env;
const url = `${SPACEX_API_BASEURL}${SPACEX_API_LAUNCHES_SLUG}/query`;
const axiosGet = jest.spyOn(axios, 'get');

describe('Home Page', () => {
  it('Verify that Home page renders a list of Card components', async () => {
    const { container } = render(<Home preloadData={launchData} apiUrl={url} />);
    // expect(container).toMatchSnapshot();
    const cards = container.querySelectorAll('.card');
    expect(cards).toHaveLength(10);
    // await waitFor(() => expect(axiosGet).toHaveBeenCalledTimes(1));
  });
});
