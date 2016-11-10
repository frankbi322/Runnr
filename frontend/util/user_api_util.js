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

export const fetchUser = (id, success) => {
  $.ajax({
    method: "GET",
    url: `api/users/${id}`,
    success
  });
};

export const updateUser = (success, user) => {
  $.ajax ({
    method: "PATCH",
    url: `api/users/${user.id}`,
    data: {user},
    success
  });
};


// `api/users/${id}/other_users`,
