import {combineReducers} from 'redux';
import SessionReducer from './session_reducer';
import RouteReducers from './route_reducer';
import FriendsReducer from './friends_reducer';
import UsersReducer from './user_reducer';
import CommentsReducer from './comments_reducer';

const RootReducer = combineReducers({
  session: SessionReducer,
  routes: RouteReducers,
  friends: FriendsReducer,
  users: UsersReducer,
  comments: CommentsReducer
});

export default RootReducer;
