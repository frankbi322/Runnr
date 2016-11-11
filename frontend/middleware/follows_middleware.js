import {createFollow,deleteFollow,fetchFollows,fetchFollow} from '../util/following_api_util';
import {CREATE_FOLLOW,DELETE_FOLLOW, FETCH_FOLLOWS, FETCH_FOLLOW, receiveAllFollows, receiveSingleFollow, removeFollow} from '../actions/follow_actions';

const FollowsMiddleware = ({getState,dispatch}) => next => action => {
  let success;
  let error = e => console.log(e.responseJSON);
  let receiveAllFollowsSuccess = follows => dispatch(receiveAllFollows(follows));
  let receiveSingleFollowSuccess = follow => dispatch(receiveSingleFollow(follow));
  let removeFollowSuccess = follow => dispatch(removeFollow(follow));

  switch(action.type){
    case CREATE_FOLLOW:
      createFollow(action.follow,receiveSingleFollowSuccess);
      return next(action);
    case DELETE_FOLLOW:
      debugger;
      deleteFollow(action.id,removeFollowSuccess);
      return next(action);
    case FETCH_FOLLOWS:
      fetchFollows(receiveAllFollowsSuccess);
      return next(action);
    case FETCH_FOLLOW:
      fetchFollow(action.id,receiveSingleFollowSuccess);
      return next(action);
    default:
      return next(action);
  }
};

export default FollowsMiddleware;
