import {connect} from 'react-redux';
import {deleteFollow,createFollow} from '../../actions/follow_actions';
import Friends from './friends';

const mapStateToProps = state => ({
  friends: state.friends,
  users: state.users,
  currentUser: state.session.currentUser
});

const mapDispatchToProps = dispatch => ({
  createFollow: (follow) => dispatch(createFollow(follow)),
  deleteFollow: (follow) => dispatch(deleteFollow(follow))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Friends);
