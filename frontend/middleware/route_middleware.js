
import {REQUEST_ROUTES,CREATE_ROUTE,REQUEST_SINGLE_ROUTE, UPDATE_BOUNDS,receiveRoutes,receiveSingleRoute,requestSingleRoute  } from '../actions/route_actions';
import {CREATE_COMMENT,receiveSingleComment} from '../actions/comment_actions';
import {createComment} from '../util/comment_api_util';
import { fetchAllRoutes, createRoute, fetchSingleRoute } from '../util/route_api_util';

const RouteMiddleware = ({getState, dispatch}) => next => action => {
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
        dispatch(receiveSingleRoute(data));
      };

      fetchSingleRoute(action.id, fetchSuccess, ()=>console.log("error"));
      return next(action);
    case CREATE_COMMENT:
      const commentSuccess = data => {
        dispatch(receiveSingleComment(data));
      };
      createComment(action.comment,commentSuccess);
      return next(action);
    case UPDATE_BOUNDS:
      return next(action);
    default:
      return next(action);
  }
};

export default RouteMiddleware;
