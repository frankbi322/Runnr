import { connect } from 'react-redux';

import { requestSingleRoute } from '../../actions/route_actions';
import { selectRoute } from '../../reducers/selectors';

import RouteShow from './route_show';

const mapStateToProps = (state, { params }) => {
  const routeId = parseInt(params.routeId);
  const route = selectRoute(state, routeId);
  return {
    routeId,
    route
  };
};

const mapDispatchToProps = dispatch => ({
  requestSingleRoute: id => dispatch(requestSingleRoute(id))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(RouteShow);
