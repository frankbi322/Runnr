export const RECEIVE_OTHER_USERS = "RECEIVE_OTHER_USERS";
export const REQUEST_OTHER_USERS = "REQUEST_OTHER_USERS";
export const RECEIVE_USER = "RECEIVE_USER";
export const UPDATE_USER = "UPDATE_USER";

export const receiveOtherUsers = (users) => ({
  type: RECEIVE_OTHER_USERS,
  users
});

export const requestOtherUsers = () => ({
  type: REQUEST_OTHER_USERS
});

export const updateUser = (user) => ({
  type: UPDATE_USER,
  user
});

export const receiveUser = user => ({
  type: RECEIVE_USER,
  user
});
