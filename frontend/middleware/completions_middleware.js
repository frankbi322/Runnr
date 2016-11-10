import {createCompletion,fetchCompletions,fetchCompletion} from '../util/completion_api_util';
import {CREATE_COMPLETION, FETCH_COMPLETIONS, FETCH_COMPLETION, receiveCompletion, receiveAllCompletions} from '../actions/completion_actions';

const CompletionsMiddleware = ({getState,dispatch}) => next => action => {
  let success;
  let error = e => console.log(e.responseJSON);
  let receiveAllCompletionsSuccess = completions => dispatch(receiveAllCompletions(completions));
  let receiveCompletionSuccess = distance => {
    dispatch(receiveCompletion(distance));
  };

  switch(action.type){
    case CREATE_COMPLETION:
      createCompletion(action.completion, receiveCompletionSuccess);
      return next(action);
    case FETCH_COMPLETIONS:
      fetchCompletions(receiveAllCompletionsSuccess);
      return next(action);
    case FETCH_COMPLETION:
      fetchCompletion(action.id,receiveCompletionSuccess);
      return next(action);
    default:
      return next(action);
  }
};

export default CompletionsMiddleware;
