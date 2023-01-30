require('dotenv').config();
import type { NextApiRequest, NextApiResponse } from 'next';
import { createMocks, RequestMethod } from 'node-mocks-http';
import axios from 'axios';
import launchesHandler from '../pages/api/launches/top';

const axiosPost = jest.spyOn(axios, 'post');

const mockRequestResponse = <T extends unknown>(method: RequestMethod = 'GET') =>
  createMocks<NextApiRequest, NextApiResponse<T>>({ method });

describe('/api/launches API endpoint', () => {
  it('Verify that the top endpoint calls SpaceX api', async () => {
    // Make the mock return the custom axios response
    const { req, res } = mockRequestResponse<Launch[]>();
    await launchesHandler(req, res);
    const data = res._getJSONData() as Launch[];

    // Verify the axios post method is called once
    expect(axiosPost).toBeCalledTimes(1);
    // Verify the response status code and message
    expect(res.statusCode).toBe(200);
    expect(res.statusMessage).toEqual('OK');
    expect(data).toBeDefined();
  });

  it('Verify that the top endpoint returns an array of the top 10 SpaceX launches', async () => {
    const imagePattern = /^https:\/\/images[0-9]{1,}[.]imgbox[.]com[\/_0-9a-zA-Z]{1,}[.](?:jpg|png)$/;
    // Make the mock return the custom axios response
    const { req, res } = mockRequestResponse<Launch[]>();
    await launchesHandler(req, res);
    const data = res._getJSONData() as Launch[];

    // Verify the response data is an array with 10 items
    expect(Array.isArray(data)).toBe(true);
    expect(data).toHaveLength(10);

    // Verify the data structure of each launch
    for (let i = 0; i < data.length; i++) {
      const launch = data[i];

      // Verify the launch properties have values
      expect(launch).toBeDefined();
      expect(launch.id).toBeTruthy();
      expect(launch.name).toBeTruthy();
      expect(launch.core).toBeTruthy();
      expect(launch.date).toBeTruthy();
      expect(launch.image_url).toBeTruthy();
      expect(launch.success).toBeDefined();
      expect(launch.payloads).toBeDefined();

      if (!launch.success) expect(launch.failureReason).toBeTruthy();
      else expect(launch.failureReason).toBeFalsy();

      // Verify the launch property values have the correct types and structure
      expect(new Date(launch.date)).toBeInstanceOf(Date);
      expect(launch.image_url).toMatch(imagePattern);
      expect(typeof launch.id).toBe('string');
      expect(typeof launch.name).toBe('string');
      expect(typeof launch.core).toBe('string');
      expect(typeof launch.date).toBe('string');
      expect(typeof launch.image_url).toBe('string');
      expect(typeof launch.success).toBe('boolean');
      expect(Array.isArray(launch.payloads)).toBe(true);

      // Verify the payload properties have values and the correct types
      if (launch.payloads.length > 0) {
        for (let i = 0; i < launch.payloads.length; i++) {
          const payload = launch.payloads[i];

          expect(payload).toBeDefined();
          expect(payload.id).toBeTruthy();
          expect(payload.type).toBeTruthy();
          expect(typeof payload.id).toBe('string');
          expect(typeof payload.type).toBe('string');
        }
      }
    }
  });
});
