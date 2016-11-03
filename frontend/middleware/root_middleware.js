import { applyMiddleware } from 'redux';
import SessionMiddleware from './session_middleware';
import RouteMiddleware from './route_middleware';

const RootMiddleware = applyMiddleware(
  SessionMiddleware,
  RouteMiddleware
);

export default RootMiddleware;
