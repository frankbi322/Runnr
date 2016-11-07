import {connect} from 'react-redux';
import RouteDetail from './route_detail';
import {requestSingleRoute} from '../../actions/route_actions';

const mapStateToProps = (state, {params}) => ({
  currentUser: state.session.currentUser,
  routes: state.routes
});

const mapDispatchToProps = dispatch => ({
  requestSingleRoute: (id) => dispatch(requestSingleRoute(id))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(RouteDetail);
