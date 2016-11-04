import {connect} from 'react-redux';
import {createRoute} from '../../actions/route_actions';
import RouteForm from './new_route_form';

const mapStateToProps = (state,{location}) => ({
  currentUser: state.session.currentUser
});

const mapDispatchToProps = dispatch => ({
  createRoute: route => dispatch(createRoute(route))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
);
