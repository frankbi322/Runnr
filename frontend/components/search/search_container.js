
import { connect } from 'react-redux';
import {asArray} from '../../reducers/selectors';
import Search from './search';
import { requestRoutes, requestSingleRoute } from '../../actions/route_actions';

const mapStateToProps = state => ({
  routes: asArray(state)
});

const mapDispatchToProps = dispatch => ({
  requestRoutes: () => dispatch(requestRoutes()),
  requestSingleRoute: (id)=> dispatch(requestSingleRoute(id)),
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Search);