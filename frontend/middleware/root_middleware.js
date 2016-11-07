import { applyMiddleware } from 'redux';
import SessionMiddleware from './session_middleware';
import RouteMiddleware from './route_middleware';
import FollowsMiddleware from './follows_middleware';
import CommentsMiddleware from './comments_middleware';

const RootMiddleware = applyMiddleware(
  SessionMiddleware,
  RouteMiddleware,
  FollowsMiddleware,
  CommentsMiddleware
);

export default RootMiddleware;
