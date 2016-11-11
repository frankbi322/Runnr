import {connect} from 'react-redux';
import Dashboard from './dashboard';
import {requestRoutes,requestSingleRoute, updateBounds} from '../../actions/route_actions';
import {updateUser } from '../../actions/user_actions';
import {followsArray} from '../../reducers/selectors';

const mapStateToProps = state => ({
  routes: state.routes,
  currentUser: state.session.currentUser,
  follows: followsArray(state)
});

const mapDispatchToProps = dispatch => ({
  requestRoutes: () => dispatch(requestRoutes()),
  requestSingleRoute: (id) => dispatch(requestSingleRoute(id)),
  updateBounds: (bounds) => dispatch(updateBounds(bounds)),
  updateUser: (user) => dispatch(updateUser(user))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Dashboard);
