export const fetchFriends = (success,id) => {
  $.ajax({
    method: 'GET',
    url: `api/${id}/friends`,
    data: id,
    success
  });
};
