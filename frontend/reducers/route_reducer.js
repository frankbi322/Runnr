
import { RECEIVE_ROUTES,REQUEST_ROUTES,CREATE_ROUTE,RECEIVE_SINGLE_ROUTE,REQUEST_SINGLE_ROUTE, UPDATE_BOUNDS } from '../actions/route_actions';
import merge from 'lodash/merge';
import {RECEIVE_SINGLE_COMMENT} from '../actions/comment_actions';


const RoutesReducer = (state = {}, action) => {
  Object.freeze(state);
  switch(action.type) {
    case RECEIVE_ROUTES:
      return action.routes;
    case RECEIVE_SINGLE_ROUTE:
      return merge({}, state, {[action.route.id]:action.route});
    case RECEIVE_SINGLE_COMMENT:
      const targetRoute = state[action.comment.route.id];
      const copiedRoute = merge({},targetRoute);
      copiedRoute.comments.push(action.comment);
      debugger;
      return merge({},state,{[copiedRoute.id]:copiedRoute});
      // return merge({},state,{[action.comment.route.id]:action.comment.route});
    case UPDATE_BOUNDS:
      return merge({}, state, {bounds: action.bounds});
    default:
      return state;
  }
};

export default RoutesReducer;
