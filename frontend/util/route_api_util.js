export const fetchAllRoutes = (success) => {
  $.ajax ({
    method: "GET",
    url: "/api/routes",
    success
  });
};

export const createRoute = (route,success)=> {
  debugger;
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
