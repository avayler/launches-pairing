import { formatDate } from '../../utils/datetimeFormatter';
import {date} from './__mocks__/datetimeFormatter.mock'

describe('formatDate', () => {
    it('formats a date in the correct format', () => {
        const expectedFormattedDate = 'Apr 5, 2022';
        const formattedDate = formatDate(date);
        expect(formattedDate).toContain(expectedFormattedDate);
    });

    it('formats a date in a different timezone', () => {
        const expectedFormattedDateTime = 'Apr 5, 2022, 16:00:00';
        const formattedDate = formatDate(date, 'IST');
        expect(formattedDate).toBe(expectedFormattedDateTime);
    });
});
