
import { connect } from 'react-redux';
import {asArray} from '../../reducers/selectors';
import Search from './search';
import { requestRoutes, requestSingleRoute, updateBounds } from '../../actions/route_actions';
import {updateUser } from '../../actions/user_actions';

const mapStateToProps = state => {
  return ({
  currentUser: state.session.currentUser,
  routes: asArray(state)

  // routes: state.routes
});
};

const mapDispatchToProps = dispatch => ({
  requestRoutes: () => dispatch(requestRoutes()),
  requestSingleRoute: (id)=> dispatch(requestSingleRoute(id)),
  updateUser: (currentUser) => dispatch(updateUser(currentUser)),
  updateBounds: (bounds) => dispatch(updateBounds(bounds))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Search);
