export const FETCH_FOLLOWS = "FETCH_FOLLOWS";
export const FETCH_FOLLOW = "FETCH_FOLLOW";
export const CREATE_FOLLOW = "CREATE_FOLLOW";
export const DELETE_FOLLOW = "DELETE_FOLLOW";
export const REQUEST_FOLLOWS = "REQUEST_FOLLOWS";
export const RECEIVE_ALL_FOLLOWS = "RECEIVE_ALL_FOLLOWS";
export const RECEIVE_SINGLE_FOLLOW = "RECEIVE_SINGLE_FOLLOW";
export const REMOVE_FOLLOW = "REMOVE_FOLLOW";

export const fetchFollows = () => ({
  type: FETCH_FOLLOWS
});

export const fetchFollow = (id) => ({
  type: FETCH_FOLLOW,
  id
});

export const createFollow = (follow) => ({
  type: CREATE_FOLLOW,
  follow
});

export const deleteFollow = (follow) => ({
  type: DELETE_FOLLOW,
  follow
});

export const requestFollows = (id) => ({
  type: REQUEST_FOLLOWS,
  id
});

export const receiveAllFollows = (follows) => ({
  type: RECEIVE_ALL_FOLLOWS,
  follows
});

export const receiveSingleFollow = (follow) => ({
  type: RECEIVE_SINGLE_FOLLOW,
  follow
});

export const removeFollow = follow => ({
  type: REMOVE_FOLLOW,
  follow
});
