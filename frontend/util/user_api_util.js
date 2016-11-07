export const fetchOtherUsers = (success, id) => {
  $.ajax ({
    method: "GET",
    url: `api/${id}/other_users`,
    success
  });
};

export const fetchFriends = (success, id) => {
  $.ajax ({
    method: "GET",
    url: `api/${id}/friends`,
    data: id,
    success
  });
};
