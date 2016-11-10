import {connect} from 'react-redux';
import RouteDetail from './route_detail';
import {requestSingleRoute} from '../../actions/route_actions';
import {updateUser} from '../../actions/user_actions';
import {createCompletion} from '../../actions/completion_actions';

const mapStateToProps = (state, {params}) => ({
  currentUser: state.session.currentUser,
  routes: state.routes
});

const mapDispatchToProps = dispatch => ({
  requestSingleRoute: (id) => dispatch(requestSingleRoute(id)),
  createCompletion: (completion) => dispatch(createCompletion(completion)),

});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(RouteDetail);
