
import { connect } from 'react-redux';
import {asArray} from '../../reducers/selectors';
import RoutesIndex from './routes_index';
import { requestRoutes, requestSingleRoute } from '../../actions/route_actions';

const mapStateToProps = state => ({
  routes: asArray(state),
  currentUser: state.session.currentUser,
});

const mapDispatchToProps = dispatch => ({
  requestRoutes: () => dispatch(requestRoutes()),
  requestSingleRoute: (id)=> dispatch(requestSingleRoute(id)),
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(RoutesIndex);
