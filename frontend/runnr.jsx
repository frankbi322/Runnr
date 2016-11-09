
//React
import React from 'react';
import ReactDOM from 'react-dom';
//Components
import Root from './components/root';
import configureStore from './store/store';
import {login,signup,logout} from './actions/session_actions';
import {createRoute} from './util/route_api_util';
import {fetchOtherUsers} from './util/user_api_util';

document.addEventListener('DOMContentLoaded', () => {
  let store;
  if (window.currentUser) {
    const preloadedState = {session: {currentUser: window.currentUser}};
    store = configureStore(preloadedState);
  } else {
    store = configureStore();
  }
  window.store = store;
  window.createRoute = createRoute;
  window.fetchOtherUsers = fetchOtherUsers;
  const root = document.getElementById('root');
  ReactDOM.render(<Root store={store}/>, root);
});
