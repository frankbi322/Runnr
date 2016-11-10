
import { RECEIVE_CURRENT_USER, LOGOUT, RECEIVE_ERRORS } from '../actions/session_actions';
import {RECEIVE_COMPLETION} from '../actions/completion_actions';
import merge from 'lodash/merge';

const _nullUser = Object.freeze({
  currentUser: null,
  errors: []
});

const SessionReducer = (state = _nullUser, action) => {
  Object.freeze(state);
  switch(action.type) {
    case RECEIVE_CURRENT_USER:
      const currentUser = action.currentUser;
      return merge({}, _nullUser, {
        currentUser
      });
    case LOGOUT:
      return merge({}, _nullUser);
    case RECEIVE_ERRORS:
      const errors = action.errors;
      return merge({}, _nullUser, {
        errors
      });
    case RECEIVE_COMPLETION:
      const nextState = merge({},state);
      nextState.currentUser.total_completions++;
      nextState.currentUser.total_distance += action.distance;
      return nextState;
    default:
      return state;
  }
};

export default SessionReducer;
