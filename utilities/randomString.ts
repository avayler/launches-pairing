// Generate a random string of a determined length
const randomString = (length = 8) => (Math.random() + 1).toString(36).substring(length);
export default randomString;
