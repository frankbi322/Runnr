import {merge} from 'lodash';
import {CREATE_COMMENT} from '../actions/comment_actions';

const CommentsReducer = (state = {}, action) => {
  Object.freeze(state);
  switch (action.type) {
    default:
    return state;
  }
};

export default CommentsReducer;
