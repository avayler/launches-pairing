function classNames<T>(...args: T[]) {
  return args
    .reduce((className: string, value) => {
      if (typeof value === 'string' && value.trim() !== '') return `${className} ${value.trim()}`;
      return className;
    }, '')
    .trim()
    .replace(/\s{2,}/g, ' ');
}

export default classNames;
