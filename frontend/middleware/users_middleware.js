import { RECEIVE_OTHER_USERS, REQUEST_OTHER_USERS, requestOtherUsers, receiveOtherUsers } from '../actions/user_actions';
import {fetchOtherUsers} from '../util/user_api_util';

const UsersMiddleware = ({getState, dispatch}) => next => action => {
  switch (action.type) {
    case REQUEST_OTHER_USERS:
      const success = data => dispatch(receiveOtherUsers(data));
        fetchOtherUsers(success);
      return next(action);
    default:
      return next(action);
  }
};

export default UsersMiddleware;
