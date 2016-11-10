export const createComment = (comment,success) => {
  $.ajax({
    method: "POST",
    url: "api/comments",
    data: comment,
    success
  });
};

export const deleteComment = (comment,success) => {
  $.ajax({
    method: "DELETE",
    url: `api/comments/${comment.id}`,
    success
  });
};

export const fetchComments = (success) => {
  $.ajax({
    method: "GET",
    url: "api/comments",
    success
  });
};

export const fetchComment = (id, success) => {
  $.ajax({
    method: "GET",
    url: `api/comments/${id}`,
    success
  });
};
