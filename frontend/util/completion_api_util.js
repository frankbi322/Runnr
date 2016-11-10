export const createCompletion = (completion, success) => {
  $.ajax ({
    method: "POST",
    url: "/api/completions",
    data: completion,
    success
  });
};

export const fetchCompletions = (success) => {
  $.ajax({
    method: "GET",
    url: 'api/completions',
    success
  });
};

export const fetchCompletion = (id,success) => {
  $.ajax({
    method: "GET",
    url: `api/completions/${id}`,
    success
  });
};
