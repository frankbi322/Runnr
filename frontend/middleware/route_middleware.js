
import {REQUEST_ROUTES,CREATE_ROUTE,REQUEST_SINGLE_ROUTE,receiveRoutes,receiveSingleRoute,requestSingleRoute  } from '../actions/route_actions';


import { fetchAllRoutes, createRoute, fetchSingleRoute } from '../util/route_api_util';

const RouteMiddleware = ({getState, dispatch}) => next => action => {

  switch(action.type){
    case REQUEST_ROUTES:
      const success = (data) =>dispatch(receiveRoutes(data));
      fetchAllRoutes(success);
      return next(action);
    case CREATE_ROUTE:
      const createSuccess = data => {
        debugger;
        dispatch(receiveSingleRoute(data));
      };
      debugger;
      createRoute(action.route,createSuccess);
      return next(action);
    case REQUEST_SINGLE_ROUTE:
      const fetchSuccess = data => dispatch(receiveSingleRoute(data));
      fetchSingleRoute(action.id, fetchSuccess);
    default:
      return next(action);
  }
};

export default RouteMiddleware;
