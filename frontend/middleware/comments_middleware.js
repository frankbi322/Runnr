import {CREATE_COMMENT} from '../actions/comment_actions';
import {createComment} from '../util/comment_api_util';
import { receiveSingleRoute } from '../actions/route_actions';

const CommentsMiddleware = ({getState,dispatch}) => next => action => {
  switch (action.type) {
    case CREATE_COMMENT:
      const success = (id) => dispatch(receiveSingleRoute(id));
      createComment(action.comment,success);
        return next(action);
      default:
        return next(action);
  }
};

export default CommentsMiddleware;
