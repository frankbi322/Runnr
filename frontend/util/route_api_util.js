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
    success
  });
};

export const fetchSingleRoute = (id,success) => {
  $.ajax({
    method: "GET",
    url: `.api/routes/${id}`,
    success
  });
};
