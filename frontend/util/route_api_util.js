export const fetchAllRoutes = (success) => {
  $.ajax ({
    method: "GET",
    url: "/api/routes",
    success
  });
};

export const createRoute = (route,success)=> {
  $.ajax ({
    method: "POST",
    url: "/api/routes",
    data: route,
    success,
    error: (e) => console.log(e)
  });
};

export const fetchSingleRoute = (id,success) => {
  $.ajax({
    method: "GET",
    url: `.api/routes/${id}`,
    success
  });
};

export const completeRoute = (route, user, success) => {
  $.ajax({
    method: "POST",
    url: "api/completions",
    data: route, user,
    success

  })
}
