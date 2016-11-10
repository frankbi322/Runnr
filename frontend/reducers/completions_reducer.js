import {RECEIVE_ALL_COMPLETIONS, RECEIVE_COMPLETION} from '../actions/completion_actions';
import merge from 'lodash/merge';

const CompletionsReducer = (oldState={},action) => {
  switch(action.type) {
    case RECEIVE_ALL_COMPLETIONS:
      return merge({},action.completions);
    case RECEIVE_COMPLETION:
      return merge({},oldState,{[action.completion.id]: action.completion});
    default:
    return oldState;
  }
};

export default CompletionsReducer;
