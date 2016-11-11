import {merge} from 'lodash';
import {CREATE_COMMENT, RECEIVE_COMMENTS, RECEIVE_SINGLE_COMMENT} from '../actions/comment_actions';

const CommentsReducer = (oldState = {}, action) => {
  Object.freeze(oldState);
  switch (action.type) {
    case RECEIVE_COMMENTS:
      return action.comments;
      // return merge({}, action.comments);
    // case RECEIVE_SINGLE_COMMENT:
    //   debugger;
    //   return merge({}, oldState,{[action.comment.id]:action.comment});
      // const nextState = merge({},oldState);
      // return nextState;
    default:
      return oldState;
  }
};

export default CommentsReducer;
