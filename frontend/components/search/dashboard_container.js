import {connect} from 'react-redux';
import Dashboard from './dashboard';
import {requestRoutes,requestSingleRoute} from '../../actions/route_actions';

const mapStateToProps = state => ({
  routes: state.routes,
  currentUser: state.session.currentUser
});

const mapDispatchToProps = dispatch => ({
  requestRoutes: () => dispatch(requestRoutes()),
  requestSingleRoute: (id) => dispatch(requestSingleRoute(id))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Dashboard);
