export const RECEIVE_ROUTES = "RECEIVE_ROUTES";
// export const REQUEST_ROUTE = "REQUEST_ROUTE";
export const REQUEST_ROUTES = "REQUEST_ROUTES";
export const CREATE_ROUTE = "CREATE_ROUTE";
export const RECEIVE_SINGLE_ROUTE = "RECEIVE_SINGLE_ROUTE";
export const REQUEST_SINGLE_ROUTE = "REQUEST_SINGLE_ROUTE";
export const UPDATE_BOUNDS = "UPDATE_BOUNDS";

export const requestRoutes = () => ({
  type: REQUEST_ROUTES
});

// export const requestRoute = (id) => ({
//   type: REQUEST_ROUTE,
//   id
// });

export const receiveRoutes = (routes) => ({
  type: RECEIVE_ROUTES,
  routes
});

export const createRoute = (route) => ({
  type: CREATE_ROUTE,
  route
});

export const receiveSingleRoute = (route) => ({
  type: RECEIVE_SINGLE_ROUTE,
  route
});

export const requestSingleRoute = (id) => ({
  type: REQUEST_SINGLE_ROUTE,
  id
});

export const updateBounds = (bounds) => ({
  type: UPDATE_BOUNDS,
  bounds
});
