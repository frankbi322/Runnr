import { connect } from 'react-redux';
import FindFriends from './find_friends';
import { deleteFollow, createFollow, fetchFollow, fetchFollows } from '../../actions/follow_actions';
import {requestOtherUsers} from '../../actions/user_actions';
import {followsArray} from '../../reducers/selectors';

const mapStateToProps = state => ({
  users: state.users,
  currentUser: state.session.currentUser,
  // friends: state.session.currentUser.friends,
  follows: followsArray(state)
});

const mapDispatchToProps = dispatch => ({
  deleteFollow: (id) => dispatch(deleteFollow(id)),
  createFollow: (follow) => dispatch(createFollow(follow)),
  requestOtherUsers: () => dispatch(requestOtherUsers()),
  fetchFollows: () => dispatch(fetchFollows())
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(FindFriends);
