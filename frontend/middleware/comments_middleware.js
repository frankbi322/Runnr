import {FETCH_COMMENTS, FETCH_COMMENT, CREATE_COMMENT, receiveComments, receiveSingleComment} from '../actions/comment_actions';
import {createComment, fetchComments, fetchComment} from '../util/comment_api_util';
import { hashHistory } from 'react-router';

const CommentsMiddleware = ({getState,dispatch}) => next => action => {
  let success;
  let receiveAllCommentsSuccess = comments => dispatch(receiveComments(comments));
  let receiveSingleCommentSuccess = comment => {
    dispatch(receiveSingleComment(comment));
};

  switch (action.type) {
    // case CREATE_COMMENT:
    //   createComment(action.comment,receiveSingleCommentSuccess);
    //   return next(action);
    case FETCH_COMMENTS:
      fetchComments(receiveAllCommentsSuccess);
      return next(action);
    case FETCH_COMMENT:
      fetchComment(action.id, receiveSingleCommentSuccess);
      return next(action);
    default:
      return next(action);
  }
};

export default CommentsMiddleware;
