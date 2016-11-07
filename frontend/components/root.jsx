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
import {requestRoutes} from '../actions/route_actions';

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
      replace('/');
    }
  };

  const _getAllRoutes = (nextState, replace) => {
    _ensureLoggedIn(nextState,replace);
    store.dispatch(requestRoutes());
  };


  return (
    <Provider store={store}>
      <Router history={hashHistory}>
        <Route path="/" component={App}>
          <IndexRoute component={DashboardContainer} />
          <Route path="/dashboard" component={DashboardContainer} onEnter={_ensureLoggedIn}/>
          <Route path="/login" component={SessionFormContainer} onEnter={_redirectIfLoggedIn} />
          <Route path="/signup" component={SessionFormContainer} onEnter={_redirectIfLoggedIn} />
          <Route path="/routes/new" component={CreateFormContainer} onEnter={_ensureLoggedIn} />
          <Route path="/routes/:routeId" component={RouteDetailContainer} onEnter={_getAllRoutes}>
            <Route path="comment" component={CommentFormContainer} onEnter={_ensureLoggedIn}></Route>
          </Route>
        </Route>
      </Router>
    </Provider>
  );
};

export default Root;
