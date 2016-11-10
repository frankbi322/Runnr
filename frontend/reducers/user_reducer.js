import merge from 'lodash/merge';
import {RECEIVE_OTHER_USERS, RECEIVE_USER} from '../actions/user_actions';

const UsersReducer = (state={},action) => {
  switch (action.type) {
    case RECEIVE_OTHER_USERS:
      return action.users;
    case RECEIVE_USER:
      return merge({},state,{[action.user.id]:action.user});
    default:
      return state;
  }
};

export default UsersReducer;
