export const RECEIVE_OTHER_USERS = "RECEIVE_OTHER_USERS";
export const REQUEST_OTHER_USERS = "REQUEST_OTHER_USERS";

export const receiveOtherUsers = (users) => ({
  type: RECEIVE_OTHER_USERS,
  users
});

export const requestOtherUsers = () => ({
  type: REQUEST_OTHER_USERS
});
