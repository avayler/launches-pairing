import { formatDate } from '../../utils/datetimeFormatter';

describe('formatDate', () => {
    it('formats a date in the correct format', () => {
        const date = '2022-04-05T10:30:00.000Z';
        const expectedFormattedDate = 'Apr 5, 2022';
        const formattedDate = formatDate(date);
        expect(formattedDate).toContain(expectedFormattedDate);
    });

    it('formats a date in a different timezone', () => {
        const date = '2022-04-05T10:30:00.000Z';
        const expectedFormattedDateTime = 'Apr 5, 2022, 16:00:00';
        const formattedDate = formatDate(date, 'IST');
        expect(formattedDate).toBe(expectedFormattedDateTime);
    });
});
