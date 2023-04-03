export const formatDate = (dateString: string, timeZone: string = 'GMT'): string => {
    const date = new Date(dateString);
    const options: Intl.DateTimeFormatOptions = {
        year: 'numeric',
        month: 'short',
        day: 'numeric',
        hour: 'numeric',
        minute: 'numeric',
        second: 'numeric',
        hour12: false,
        timeZone: timeZone
    };
    return new Intl.DateTimeFormat(undefined, options).format(date);
};
