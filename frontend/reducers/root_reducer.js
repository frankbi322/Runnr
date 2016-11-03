import {combineReducers} from 'redux';
import SessionReducer from './session_reducer';
import RouteReducer from './route_reducer';

const RootReducer = combineReducers({
  session: SessionReducer,
  route: RouteReducer
});

export default RootReducer;
