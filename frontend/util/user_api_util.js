export const fetchOtherUsers = (success) => {
  $.ajax ({
    method: "GET",
    url: "/api/users",
    success
  });
};

export const fetchFriends = (success, id) => {
  $.ajax ({
    method: "GET",
    url: `api/users/${id}/friends`,
    data: id,
    success
  });
};

// `api/users/${id}/other_users`,
