export const selectRoute = ({ routes }, id) => routes[id] || {};

export const asArray = ({ routes = [] }) => Object.keys(routes).map(key => routes[key]);

export const followsArray = ({ follows = [] }) => Object.keys(follows).map(key => follows[key]);
