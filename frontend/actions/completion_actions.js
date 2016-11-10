export const CREATE_COMPLETION = "CREATE_COMPLETION";
export const RECEIVE_COMPLETION = "RECEIVE_COMPLETION";
export const RECEIVE_ALL_COMPLETIONS = "RECEIVE_ALL_COMPLETIONS";
export const FETCH_COMPLETIONS = "FETCH_COMPLETIONS";
export const FETCH_COMPLETION = "FETCH_COMPLETION";

export const createCompletion = (completion) => ({
  type: CREATE_COMPLETION,
  completion
});

export const receiveCompletion = distance => ({
  type: RECEIVE_COMPLETION,
  distance
});

export const receiveAllCompletions = completions => ({
  type: RECEIVE_ALL_COMPLETIONS,
  completions
});

export const fetchCompletions = () => ({
  type: FETCH_COMPLETIONS
});

export const fetchCompletion = id => ({
  type: FETCH_COMPLETION,
  id
});
