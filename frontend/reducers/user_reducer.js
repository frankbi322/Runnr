import merge from 'lodash/merge';
import {RECEIVE_OTHER_USERS} from '../actions/user_actions';

const UsersReducer = (state={},action) => {
  switch (action.type) {
    case RECEIVE_OTHER_USERS:
      return action.users;
    default:
      return state;
  }
};

export default UsersReducer;
