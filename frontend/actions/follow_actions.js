export const CREATE_FOLLOW = "CREATE_FOLLOW";
export const DELETE_FOLLOW = "DELETE_FOLLOW";
export const REQUEST_FRIENDS = "REQUEST_FRIENDS";
export const RECEIVE_FRIENDS = "RECEIVE_FRIENDS";

export const createFollow = (follow) => ({
  type: CREATE_FOLLOW,
  follow
});

export const deleteFollow = (follow) => ({
  type: DELETE_FOLLOW,
  follow
});

export const requestFriends = (id) => ({
  type: REQUEST_FRIENDS,
  id
});

export const receiveFriends = (friends) => ({
  type: RECEIVE_FRIENDS,
  friends
});
