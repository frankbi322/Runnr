
import { connect } from 'react-redux';
import {asArray} from '../../reducers/selectors';
import Search from './search';
import { requestRoutes, requestSingleRoute, updateBounds } from '../../actions/route_actions';

const mapStateToProps = state => {
  // debugger;
  return ({

  routes: asArray(state)

  // routes: state.routes
});
}

const mapDispatchToProps = dispatch => ({
  requestRoutes: () => dispatch(requestRoutes()),
  requestSingleRoute: (id)=> dispatch(requestSingleRoute(id)),
  updateBounds: (bounds) => dispatch(updateBounds(bounds))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Search);
