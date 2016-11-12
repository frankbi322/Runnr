import {merge} from 'lodash';
import {hashHistory} from 'react-router';
import {REMOVE_FOLLOW, RECEIVE_ALL_FOLLOWS, RECEIVE_SINGLE_FOLLOW} from '../actions/follow_actions';


const FollowsReducer = (oldState = {}, action) => {
  Object.freeze(oldState);
  switch (action.type) {
    case RECEIVE_ALL_FOLLOWS:
      return merge({}, action.follows);
    case RECEIVE_SINGLE_FOLLOW:
      const targetFollow = oldState[action.follow.id];
      return merge({},oldState,{[action.follow.id]:action.follow});
    case REMOVE_FOLLOW:
      let newState = merge({}, oldState);
      delete newState[action.follow.id];
      return newState;
    default:
      return oldState;
  }
};

export default FollowsReducer;
