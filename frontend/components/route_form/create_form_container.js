import { connect } from 'react-redux';
import CreateRouteForm from './create_route_form';
import { createRoute } from '../../actions/route_actions';

const mapStateToProps = state => ({
  currentUser: state.session.currentUser
});

const mapDispatchToProps = dispatch => ({
  createRoute: (route) => dispatch(createRoute(route))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(CreateRouteForm);
