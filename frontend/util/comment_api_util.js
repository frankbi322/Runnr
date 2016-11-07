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
