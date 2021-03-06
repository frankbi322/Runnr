import {connect} from 'react-redux';
import Friends from './friends';
import {deleteFollow,createFollow} from '../../actions/follow_actions';
import {requestOtherUsers} from '../../actions/user_actions';
import {requestFriends} from '../../actions/friend_actions';

const mapStateToProps = state => ({
  friends: state.friends,
  currentUser: state.session.currentUser
});

const mapDispatchToProps = dispatch => ({
  createFollow: (follow) => dispatch(createFollow(follow)),
  deleteFollow: (follow) => dispatch(deleteFollow(follow)),
  requestFriends: (id) => dispatch(requestFriends(id))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Friends);
