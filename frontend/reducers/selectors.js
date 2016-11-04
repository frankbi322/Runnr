export const selectRoute = ({ routes }, id) => routes[id] || {};

export const asArray = ({ routes = [] }) => Object.keys(routes).map(key => routes[key]);
