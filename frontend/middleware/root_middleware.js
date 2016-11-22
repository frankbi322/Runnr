import { applyMiddleware } from 'redux';
import SessionMiddleware from './session_middleware';
import RouteMiddleware from './route_middleware';
import FollowsMiddleware from './follows_middleware';
import CommentsMiddleware from './comments_middleware';
import UsersMiddleware from './users_middleware';
import FriendsMiddleware from './friends_middleware';
import CompletionsMiddleware from './completions_middleware';

const RootMiddleware = applyMiddleware(
  SessionMiddleware,
  RouteMiddleware,
  // FriendsMiddleware,
  FollowsMiddleware,
  CommentsMiddleware,
  UsersMiddleware,
  CompletionsMiddleware
);

export default RootMiddleware;
