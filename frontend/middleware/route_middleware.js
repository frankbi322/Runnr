
import {REQUEST_ROUTES,CREATE_ROUTE,REQUEST_SINGLE_ROUTE,receiveRoutes,receiveSingleRoute,requestSingleRoute  } from '../actions/route_actions';


import { fetchAllRoutes, createRoute, fetchSingleRoute } from '../util/route_api_util';

const RouteMiddleware = ({getState, dispatch}) => next => action => {
  // console.log(action.type);
  switch(action.type){
    case REQUEST_ROUTES:
      const success = (data) =>dispatch(receiveRoutes(data));
      fetchAllRoutes(success);
      return next(action);
    case CREATE_ROUTE:
      const createSuccess = data => {
        dispatch(receiveSingleRoute(data));
      };
      createRoute(action.route,createSuccess);
      return next(action);
    case REQUEST_SINGLE_ROUTE:
      const fetchSuccess = data => {
        // console.log(data);
        dispatch(receiveSingleRoute(data));
      };

      fetchSingleRoute(action.id, fetchSuccess, ()=>console.log("error"));
    default:
      return next(action);
  }
};

export default RouteMiddleware;
