import {REQUEST_FRIENDS, receiveFriends} from '../actions/friend_actions';
import {fetchFriends} from '../util/friend_api_util';

const FriendsMiddleware = ({getState,dispatch}) => next => action => {
  switch (action.type) {
    case REQUEST_FRIENDS:
      const success = data => dispatch(receiveFriends(data));
      fetchFriends(success,action.id);
      return next(action);
    default:
      return next(action);
  }
};

export default FriendsMiddleware;
