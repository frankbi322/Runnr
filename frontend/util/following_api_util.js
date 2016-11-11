export const createFollow = (follow, success) => {
  $.ajax ({
    method: "POST",
    url: "/api/follows",
    data: follow,
    success
  });
};

export const deleteFollow = (id,success) => {
  $.ajax ({
    method: "DELETE",
    url: `/api/follows/${id}`,
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
