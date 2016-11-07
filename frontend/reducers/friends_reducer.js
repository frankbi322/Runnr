import merge from 'lodash/merge';
import RECEIVE_FRIENDS from '../actions/follow_actions';

const FriendsReducer = (state={}, action)=> {
  switch (action.type) {
    case RECEIVE_FRIENDS:
      return action.friends;
    default:
      return state;
  }
};

export default FriendsReducer;
