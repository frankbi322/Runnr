import {merge} from 'lodash';
import {hashHistory} from 'react-router';
import {CREATE_FOLLOW, DELETE_FOLLOW, RECEIVE_ALL_FOLLOWS, RECEIVE_SINGLE_FOLLOW} from '../actions/follow_actions';


const FollowsReducer = (oldState = {}, action) => {
  Object.freeze(oldState);
  switch (action.type) {
    case RECEIVE_ALL_FOLLOWS:
      return merge({}, action.follows);
    case RECEIVE_SINGLE_FOLLOW:
      return merge({},oldState,{[action.follow.id]:action.follow})
    case DELETE_FOLLOW:
      let newState = merge({},oldState);
      delete newState[action.follow.id];
      return newState;
    default:
      return oldState;
  }
};

export default FollowsReducer;
