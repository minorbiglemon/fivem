const capitaliseString = (string) => string.charAt(0).toUpperCase() + string.slice(1);
const stringToId = (string) => string.replace(/\s+/g, '-').toLowerCase();

export {
  capitaliseString,
  stringToId
};
