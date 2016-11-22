import {combineReducers} from 'redux';
import SessionReducer from './session_reducer';
import RouteReducer from './route_reducer';
import FriendsReducer from './friends_reducer';
import UsersReducer from './user_reducer';
import CommentsReducer from './comments_reducer';
import CompletionsReducer from './completions_reducer';
import FollowsReducer from './follows_reducer';

const RootReducer = combineReducers({
  session: SessionReducer,
  routes: RouteReducer,
  // friends: FriendsReducer,
  users: UsersReducer,
  comments: CommentsReducer,
  completions: CompletionsReducer,
  follows: FollowsReducer
});

export default RootReducer;
