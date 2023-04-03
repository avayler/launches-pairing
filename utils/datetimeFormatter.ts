export const formatDate = (dateString: string, timeZone: string = 'en-GB'): string => {
    const date = new Date(dateString);
    const options: Intl.DateTimeFormatOptions = {
        year: 'numeric',
        month: 'short',
        day: 'numeric',
        hour: 'numeric',
        minute: 'numeric',
        second: 'numeric',
        hour12: true,
        timeZone: 'Europe/London'
    };
    return new Intl.DateTimeFormat(timeZone, options).format(date);
}

