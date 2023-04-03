import axios from 'axios';
import MockAdapter from 'axios-mock-adapter';
import { post } from '../../utils/api';

describe('post', () => {
    const url = 'http://example.com';
    const fields = ['field1', 'field2'];

    it('should return a successful response with data', async () => {
        const responseData = { docs: [{ id: 1, name: 'Test' }] };
        const mock = new MockAdapter(axios);
        mock.onPost(url).reply(200, responseData);

        const result = await post<typeof responseData['docs'][0]>(url, fields);

        expect(result.status).toBe(200);
        expect(result.data).toEqual(responseData);
        mock.restore();
    });

    it('should throw an error for a failed request', async () => {
        const mock = new MockAdapter(axios);
        mock.onPost(url).reply(500);

        await expect(post(url, fields)).rejects.toThrow();
        mock.restore();
    });
});
