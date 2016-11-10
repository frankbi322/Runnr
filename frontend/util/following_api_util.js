export const createFollow = (follow, success) => {
  $.ajax ({
    method: "POST",
    url: "/api/follows",
    data: follow,
    success
  });
};

export const deleteFollow = (follow,success) => {
  $.ajax ({
    method: "DELETE",
    url: "/api/follows/1",
    data: follow,
    success
  });
};

export const fetchFollows = (success) => {
  $.ajax ({
    method: "GET",
    url: 'api/follows',
    success
  });
};

export const fetchFollow = (id,success) => {
  $.ajax ({
    method: "GET",
    url: `api/follows/${id}`,
    success
  });
};
