import { connect } from 'react-redux';
import FindFriends from './find_friends';
import { deleteFollow, createFollow } from '../../actions/follow_actions';
import {requestOtherUsers} from '../../actions/user_actions';

const mapStateToProps = state => ({
  friends: state.friends,
  users: state.users,
  currentUser: state.session.currentUser
});

const mapDispatchToProps = dispatch => ({
  deleteFollow: (follow) => dispatch(deleteFollow(follow)),
  createFollow: (follow) => dispatch(createFollow(follow)),
  requestOtherUsers: (id) => dispatch(requestOtherUsers(id))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(FindFriends);
