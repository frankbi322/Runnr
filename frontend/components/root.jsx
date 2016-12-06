import React from 'react';
import { Provider } from 'react-redux';

// react router
import { Router, Route, IndexRoute, hashHistory } from 'react-router';

// react components
import App from './app';
import SessionFormContainer from './session_form/session_form_container';
import CreateFormContainer from './route_form/create_form_container';
import RouteDetailContainer from './routes/route_detail_container';
import SearchContainer from './search/search_container';
import DashboardContainer from './search/dashboard_container';
import CommentFormContainer from './routes/comment_form_container';
import ProfileContainer from './profile/profile_container';
import FriendsContainer from './friends/friends_container';
import FindFriendsContainer from './find_friends/find_friends_container';
import Splash from './splash';

import {requestRoutes} from '../actions/route_actions';
import {requestOtherUsers} from '../actions/user_actions';

const Root = ({ store }) => {

  const _ensureLoggedIn = (nextState, replace) => {
    const currentUser = store.getState().session.currentUser;
    if (!currentUser) {
      replace('/login');
    }
  };

  const _redirectIfLoggedIn = (nextState, replace) => {
    const currentUser = store.getState().session.currentUser;
    if (currentUser) {
      replace('/dashboard');
    }
  };

  const _getAllRoutes = (nextState, replace) => {
    _ensureLoggedIn(nextState,replace);
    store.dispatch(requestRoutes());
  };

  const _getUsers = (nextState,replace) => {
    _ensureLoggedIn(nextState,replace);
    store.dispatch(requestOtherUsers());
  };
  // <IndexRoute component={DashboardContainer} onEnter={_ensureLoggedIn} />

  return (
    <Provider store={store}>
      <Router history={hashHistory}>
        <Route path="/" component={App} >
          <IndexRoute component={SessionFormContainer} onEnter={_redirectIfLoggedIn}/>
          <Route path="/dashboard" component={DashboardContainer} onEnter={_ensureLoggedIn}/>
          <Route path="/login" component={SessionFormContainer} onEnter={_redirectIfLoggedIn} />
          <Route path="/signup" component={SessionFormContainer} onEnter={_redirectIfLoggedIn} />
          <Route path="/routes" component={SearchContainer} onEnter={_ensureLoggedIn}/>
          <Route path="/routes/new" component={CreateFormContainer} onEnter={_ensureLoggedIn} />
          <Route path="/routes/:routeId" component={RouteDetailContainer} onEnter={_getAllRoutes}>
            <Route path="comment" component={CommentFormContainer} onEnter={_ensureLoggedIn}></Route>
          </Route>
          <Route path="/find_friends" component={FindFriendsContainer} onEnter={_ensureLoggedIn} />
          <Route path="/friends" component={FriendsContainer} onEnter={_ensureLoggedIn} />
          <Route path="/profile" component={ProfileContainer} onEnter={_ensureLoggedIn} />
      </Route>
      </Router>
    </Provider>
  );
};

export default Root;
