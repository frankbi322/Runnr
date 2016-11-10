export const FETCH_COMMENTS = "FETCH_COMMENTS";
export const FETCH_COMMENT = "FETCH_COMMENT";
export const CREATE_COMMENT = "CREATE_COMMENT";
export const DELETE_COMMENT = "DELETE_COMMENT";
export const RECEIVE_SINGLE_COMMENT = "RECEIVE_SINGLE_COMMENT";
export const RECEIVE_COMMENTS = "RECEIVE_COMMENTS";

export const fetchComments = () => ({
  type: FETCH_COMMENTS
});

export const fetchComment = (id) => ({
  type: FETCH_COMMENT,
  id
});

export const createComment = (comment) => ({
  type: CREATE_COMMENT,
  comment
});

export const deleteComment = (id) => ({
  type: DELETE_COMMENT,
  id
});

export const receiveComments = comments => ({
  type: RECEIVE_COMMENTS,
  comments
});

export const receiveSingleComment = comment => ({
  type: RECEIVE_SINGLE_COMMENT,
  comment
});
