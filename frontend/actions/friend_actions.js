export const RECEIVE_FRIENDS = "RECEIVE_FRIENDS";
export const REQUEST_FRIENDS = "REQUEST_FRIENDS";

export const requestFriends = (id) => ({
  type: REQUEST_FRIENDS,
  id
});

export const receiveFriends = (friends) => ({
  type: RECEIVE_FRIENDS,
  friends
});
