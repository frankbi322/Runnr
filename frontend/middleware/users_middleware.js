import { RECEIVE_OTHER_USERS, REQUEST_OTHER_USERS, UPDATE_USER, RECEIVE_USER, receiveUser, requestOtherUsers, receiveOtherUsers } from '../actions/user_actions';
import {fetchOtherUsers, updateUser} from '../util/user_api_util';

const UsersMiddleware = ({getState, dispatch}) => next => action => {
  switch (action.type) {
    case REQUEST_OTHER_USERS:
      const success = data => dispatch(receiveOtherUsers(data));
        fetchOtherUsers(success);
      return next(action);
    case UPDATE_USER:
      const updateSuccess = user => dispatch(receiveUser(user));
      updateUser(updateSuccess);
      return next(action);
    default:
      return next(action);
  }
};

export default UsersMiddleware;
