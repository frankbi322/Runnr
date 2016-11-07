import {requestFriends} from '../actions/follow_actions';
import {createFollow,deleteFollow} from '../util/following_api_util';
import {CREATE_FOLLOW,DELETE_FOLLOW} from '../actions/follow_actions';

const FollowsMiddleware = ({getState,dispatch}) => next => action => {
  switch(action.type){
    case CREATE_FOLLOW:
      const success = (id)=> dispatch(requestFriends(id));
      createFollow(action.follow,success);
      return next(action);
    case DELETE_FOLLOW:
      const deleteSuccess = (id) => dispatch(requestFriends(id));
      deleteFollow(action.follow,deleteSuccess);
      return next(action);
    default:
    return next(action);
  }
};

export default FollowsMiddleware;
