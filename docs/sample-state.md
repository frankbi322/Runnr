{
  currentUser: {
    id: 1,
    email: "test@test.com",
    firstName: "Frank",
    lastName: "Bi",
    friends: [],
    comments: [],
    routes: [],
    runs: []
  },
  forms: {
    signUp: {errors: []},
    logIn: {errors: []},
    createRoute: {errors:[]},
    saveRoute: {errors: []},
    createComment: {errors: []}
  },
  routes: {
    1: {
      name: "test route",
      author_id: 1,
      coords: [[100,100],[200,200],[300,300],[400,400]]
    }
  },
  runs: {
    1: {
      name: "test run",
      route_id: 1,
      date: "01/01/2016"
      user_id: 1
    }
  }
}
