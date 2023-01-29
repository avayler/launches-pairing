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
    const { container } = render(<Home preloadData={launchData} apiUrl={url} />);
    const cards = container.querySelectorAll('.card');

    expect(container).toMatchSnapshot();
    expect(cards).toHaveLength(launchData.length);

    for (let i = 0; i < cards.length; i++) {
      const { name, date, core, image_url, success, payloads, failureReason } = launchData[i] as Launch;
      const card = cards[i];
      const cardImage = card.querySelector('img');
      const cardBody = card.querySelector('.card_body');
      const cardFooter = card.querySelector('.card_footer');

      expect(cardImage).not.toBeNull();
      // expect(cardImage.getAttribute('src')).toMatch(encodeURI(image_url));
      expect(cardImage).toHaveAttribute('alt', name);

      expect(cardBody).not.toBeNull();
      // expect(cardBody).toContain(name.toUpperCase());
      // expect(cardBody).toContain(date);
      expect(cardFooter).not.toBeNull();
      // expect(cardFooter).toContain(success ? 'Successfull' : 'Failure');

      // for (let j = 0; j < payloads.length; j++) {
      //   expect(card).toContain(payloads[j].id);
      //   expect(card).toContain(payloads[j].type);
      // }
    }
  });
});
