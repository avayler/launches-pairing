import { JSXElementConstructor } from 'react';
import randomString from './randomString';

// mapToJSX function
// This function takes an array of objects and maps them to a JSX Element spreading
// the object as props on the element.
// @param items: an array of properties to be mapped.
// @param component: the functional / class component in which to map to.
const mapToJSX = <P extends {}>(items: P[], Component: JSXElementConstructor<P>) =>
  items.map((item) => <Component key={randomString(8)} {...item} />);

export default mapToJSX;
